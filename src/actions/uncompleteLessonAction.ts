"use server";

import { uncompleteLessonById } from "@/sanity/lib/lessons/uncompleteLessonById";
import { createStudentIfNotExists } from "@/sanity/lib/student/createStudentIfNotExists";
import { currentUser } from "@clerk/nextjs/server";

export async function uncompleteLessonAction(lessonId: string, clerkId: string) {
    try {
        console.log("uncompleteLessonAction called with:", { lessonId, clerkId });
        
        // Get current user from Clerk to ensure we have all user info
        const user = await currentUser();
        
        if (!user) {
            console.error("User not authenticated");
            throw new Error("User not authenticated");
        }

        console.log("User found:", { userId: user.id });

        // Ensure student exists in Sanity
        const student = await createStudentIfNotExists({
            clerkId: user.id,
            email: user.emailAddresses[0]?.emailAddress || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            imageUrl: user.imageUrl || "",
        });

        console.log("Student ensured:", student);

        await uncompleteLessonById({
            lessonId,
            clerkId,
        });

        console.log("Lesson uncompleted successfully");
        return { success: true };
    } catch (error) {
        console.error("Error uncompleting lesson:", error);
        return { 
            success: false, 
            error: error instanceof Error ? error.message : "Failed to uncomplete lesson" 
        };
    }
}