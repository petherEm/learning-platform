"use server";

import { getLessonCompletionStatus } from "@/sanity/lib/lessons/getLessonCompletionStatus";
import { createStudentIfNotExists } from "@/sanity/lib/student/createStudentIfNotExists";
import { currentUser } from "@clerk/nextjs/server";

export async function getLessonCompletionStatusAction(lessonId: string, clerkId: string) {
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

        return await getLessonCompletionStatus(lessonId, clerkId);
    } catch (error) {
        console.error("Error checking lesson completion status:", error);
        return false;
    }
}