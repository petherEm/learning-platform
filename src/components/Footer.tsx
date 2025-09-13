import Link from "next/link";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl text-green-600 dark:text-green-400">
                RapidBrain
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Accelerate your learning journey with AI-powered courses designed
              for the modern learner. Master skills faster, achieve more.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  support@rapidbrain.ai
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  +48 123 456 789
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Warsaw, PL
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-2">
                Stay Updated
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-l-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:border-green-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-r-lg hover:from-green-600 hover:to-emerald-600 transition-all text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-green-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 RapidBrain. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 pt-4 border-t border-gray-200 dark:border-green-500/10">
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              Developed with ❤️ by{" "}
              <Link
                href="https://vabank.dev"
                className="text-rose-400 hover:underline"
              >
                vabank.dev
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
