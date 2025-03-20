import getCourseById from "@/sanity/lib/courses/getCourseById";
import { redirect } from "next/navigation";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

const CoursePage = async ({ params }: CoursePageProps) => {
  const { courseId } = await params;
  const course = await getCourseById(courseId);

  if (!course) {
    redirect("/");
  }

  // Redirect to the first lesson of the first module if available
  if (course.modules?.[0]?.lessons?.[0]?._id) {
    return redirect(
      `/dashboard/courses/${courseId}/lessons/${course.modules[0].lessons[0]._id}`
    );
  }

  return <div>CoursePage</div>;
};

export default CoursePage;
