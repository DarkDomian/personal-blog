import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center flex-col justify-center gap-8">
      <div className="flex items-center divide-x divide-dark-200 dark:divide-light-900">
        <span className="pr-3 h-14 flex items-center leading-tight text-4xl font-bold">
          404
        </span>
        <span className="pl-3 h-14 flex items-center leading-tight self-center">
          Could not find requested resource
        </span>
      </div>
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Link
            href="/"
            className="relative px-7 py-4 bg-light-50 dark:bg-dark-600 rounded-lg leading-none flex items-center"
          >
            <div className="font-bold text-dark-400 group-hover:text-primary-700 dark:text-light-500 dark:group-hover:text-primary-200  flex justify-center transition-all duration-600">
              <IoIosArrowBack />
              <span>Return Home</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
