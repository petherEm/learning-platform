import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98140_1px,transparent_1px),linear-gradient(to_bottom,#10b98140_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative container mx-auto px-4 py-12 lg:py-16 h-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 h-full">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
              </div>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                RapidBrain
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                <span className="text-gray-900 dark:text-white">Expand Your</span>
                <br />
                <span className="text-green-600 dark:text-green-400">Knowledge</span>
                <br />
                <span className="text-gray-900 dark:text-white">Journey</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-pretty leading-relaxed">
                Discover expertly crafted courses designed by industry
                professionals. Transform your skills and accelerate your career
                with our comprehensive learning platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="group text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#featured-courses">
                  Start Learning Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-xl border-2 border-green-600 dark:border-green-400 text-gray-900 dark:text-white hover:bg-green-500/20 hover:border-green-500 dark:hover:border-green-300 transition-all duration-300 bg-transparent"
              >
                <a href="#featured-courses">
                  Browse Courses
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-green-500/30">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  10K+
                </div>
                <div className="text-sm text-gray-700 dark:text-white/80">Active Students</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  500+
                </div>
                <div className="text-sm text-gray-700 dark:text-white/80">Expert Courses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  95%
                </div>
                <div className="text-sm text-gray-700 dark:text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative max-w-lg mx-auto">
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Skill Progress
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Track your learning journey
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">
                        Finance Fundamentals
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[85%]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">Python Introduction</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">72%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[72%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 border border-green-500/20 rounded-xl p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Live Sessions
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Join 2.3K learners
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 border border-green-500/20 rounded-xl p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      New Course
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      AI & Machine Learning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
