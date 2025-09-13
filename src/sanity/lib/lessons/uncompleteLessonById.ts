import { client } from "../adminClient";
import { sanityFetch } from "../live";
import groq from "groq";

interface UncompleteLessonParams {
  lessonId: string;
  clerkId: string;
}

export async function uncompleteLessonById({
  lessonId,
  clerkId,
}: UncompleteLessonParams) {
  console.log("uncompleteLessonById called with:", { lessonId, clerkId });
  
  // Get Sanity student ID from Clerk ID
  const student = await sanityFetch({
    query: groq`*[_type == "student" && clerkId == $clerkId][0]._id`,
    params: { clerkId },
  });

  console.log("Student query result:", student);

  if (!student.data) {
    console.error("Student not found for clerkId:", clerkId);
    throw new Error("Student not found");
  }

  // Find the lesson completion record
  const completion = await sanityFetch({
    query: groq`*[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId && isActive == true][0]{_id, _rev}`,
    params: { studentId: student.data, lessonId },
  });

  console.log("Completion query result:", completion);

  // Delete the lesson completion record if it exists
  if (completion.data) {
    console.log("Deleting completion record:", completion.data);
    try {
      const result = await client.delete(completion.data._id);
      console.log("Completion record deleted successfully:", result);
    } catch (deleteError) {
      console.error("Delete operation failed:", deleteError);
      // Fallback to marking as inactive if delete fails
      try {
        console.log("Fallback: Marking completion record as inactive");
        const result = await client
          .patch(completion.data._id)
          .set({ 
            isActive: false,
            uncompletedAt: new Date().toISOString()
          })
          .commit();
        console.log("Completion record marked as inactive successfully:", result);
      } catch (patchError) {
        console.error("Both delete and patch operations failed:", patchError);
        throw new Error(`Failed to uncomplete lesson: ${patchError instanceof Error ? patchError.message : 'Unknown error'}`);
      }
    }
  } else {
    console.log("No active completion record found to delete");
  }
}