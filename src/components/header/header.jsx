import Link from "next/link";
import { Button } from "@/components/ui/button";

function MountainIcon(props) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
  );
}

export default function Header() {
  return (
      <>
        <header className="bg-gray-900 px-4 py-3 shadow dark:bg-gray-950">
          <div className="container mx-auto flex items-center justify-between">
            <Link className="flex items-center space-x-2 text-white" href="#">
              <MountainIcon className="h-6 w-6" />
              <span>IfIf</span>
            </Link>
            <nav className="hidden space-x-4 md:flex">
              <Link className="text-gray-300 hover:text-white" href="#">
                Home
              </Link>
              <Link className="text-gray-300 hover:text-white" href="#">
                About
              </Link>
              <Link className="text-gray-300 hover:text-white" href="#">
                Services
              </Link>
              <Link className="text-gray-300 hover:text-white" href="#">
                Contact
              </Link>
            </nav>
            <Button className="hidden md:inline-flex" variant="primary">
              Sign Up
            </Button>
          </div>
        </header>
      </>
  );
}
