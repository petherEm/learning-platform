"use client";

import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { completeLessonAction } from "@/actions/completeLessonAction";
import { uncompleteLessonAction } from "@/actions/uncompleteLessonAction";
import { getLessonCompletionStatusAction } from "@/actions/getLessonCompletionStatusAction";
import { cn } from "@/lib/utils";

interface LessonCompleteButtonProps {
  lessonId: string;
  clerkId: string;
}

export function LessonCompleteButton({
  lessonId,
  clerkId,
}: LessonCompleteButtonProps) {
  const [isPending, setIsPending] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean | null>(null);
  const [isPendingTransition, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    startTransition(async () => {
      try {
        const status = await getLessonCompletionStatusAction(lessonId, clerkId);
        setIsCompleted(status);
      } catch (error) {
        console.error("Error checking lesson completion status:", error);
        setIsCompleted(false);
      }
    });
  }, [lessonId, clerkId]);

  const handleToggle = async () => {
    try {
      setIsPending(true);
      let result;
      
      console.log(`${isCompleted ? 'Uncompleting' : 'Completing'} lesson:`, { lessonId, clerkId });
      
      if (isCompleted) {
        result = await uncompleteLessonAction(lessonId, clerkId);
      } else {
        result = await completeLessonAction(lessonId, clerkId);
      }

      console.log("Action result:", result);

      // Check if the action was successful
      if (result && result.success === false) {
        console.error("Action failed:", result.error);
        throw new Error(result.error || "Action failed");
      }

      // Refresh the completion status
      startTransition(async () => {
        try {
          const newStatus = await getLessonCompletionStatusAction(
            lessonId,
            clerkId
          );
          console.log("New completion status:", newStatus);
          setIsCompleted(newStatus);
        } catch (error) {
          console.error("Error fetching new status:", error);
        }
      });

      router.refresh();
    } catch (error) {
      console.error("Error toggling lesson completion:", error);
      // Reset the state to previous value on error
      setIsCompleted(prevState => prevState);
    } finally {
      setIsPending(false);
    }
  };

  const isLoading = isCompleted === null || isPendingTransition;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium">
            {isCompleted
              ? "Lesson completed!"
              : "Ready to complete this lesson?"}
          </p>
          <p className="text-sm text-muted-foreground">
            {isCompleted
              ? "You can mark it as incomplete if you need to revisit it."
              : "Mark it as complete when you're done."}
          </p>
        </div>
        <Button
          onClick={handleToggle}
          disabled={isPending || isLoading}
          size="lg"
          variant="default"
          className={cn(
            "min-w-[200px] transition-all duration-200 ease-in-out",
            isCompleted
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Updating...
            </>
          ) : isPending ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              {isCompleted ? "Uncompleting..." : "Completing..."}
            </>
          ) : isCompleted ? (
            <>
              <XCircle className="h-4 w-4 mr-2" />
              Mark as Not Complete
            </>
          ) : (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark as Complete
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
