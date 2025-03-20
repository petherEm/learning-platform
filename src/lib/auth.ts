import { isEnrolledInCourse } from "@/sanity/lib/student/isEnrolledInCourse";
import { getStudentByClerkId } from "@/sanity/lib/student/getStudentByClerkId";
import getCourseById from "@/sanity/lib/courses/getCourseById";

interface AuthResult {
  isAuthorized: boolean;
  redirect?: string;
  studentId?: string;
}

export async function checkCourseAccess(
  clerkId: string | null,
  courseId: string
): Promise<AuthResult> {
  console.log("Checking access for clerkId:", clerkId, "courseId:", courseId);
  
  if (!clerkId) {
    return {
      isAuthorized: false,
      redirect: "/",
    };
  }

  if (!courseId) {
    console.error("checkCourseAccess called with undefined courseId");
    return {
      isAuthorized: false,
      redirect: "/",
    };
  }

  const student = await getStudentByClerkId(clerkId);
  if (!student?._id) {
    return {
      isAuthorized: false,
      redirect: "/",
    };
  }

  const isEnrolled = await isEnrolledInCourse(clerkId, courseId);
  
  try {
    const course = await getCourseById(courseId);
    
    if (!isEnrolled) {
      return {
        isAuthorized: false,
        redirect: course?.slug?.current ? `/courses/${course.slug.current}` : "/courses",
      };
    }
  } catch (error) {
    console.error("Error fetching course:", error);
    return {
      isAuthorized: false,
      redirect: "/courses",
    };
  }

  return {
    isAuthorized: true,
    studentId: student._id,
  };
}