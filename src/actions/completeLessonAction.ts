"use server";

import { completeLessonById } from "@/sanity/lib/lessons/completeLessonById";
import { createStudentIfNotExists } from "@/sanity/lib/student/createStudentIfNotExists";
import { currentUser } from "@clerk/nextjs/server";

export async function completeLessonAction(lessonId: string, clerkId: string) {
  try {
    // Get current user from Clerk to ensure we have all user info
    const user = await currentUser();
    
    if (!user) {
      throw new Error("User not authenticated");
    }

    // Ensure student exists in Sanity
    await createStudentIfNotExists({
      clerkId: user.id,
      email: user.emailAddresses[0]?.emailAddress || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      imageUrl: user.imageUrl || "",
    });

    await completeLessonById({
      lessonId,
      clerkId,
    });

    return { success: true };
  } catch (error) {
    console.error("Error completing lesson:", error);
    return { success: false, error: "Failed to complete lesson" };
  }
}