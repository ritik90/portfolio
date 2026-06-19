import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/42 md:flex-row">
        <p>© {new Date().getFullYear()} Ritik Saxena. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        <div className="flex gap-4">
          <Link href={profile.github} target="_blank" className="hover:text-white">
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" className="hover:text-white">
            LinkedIn
          </Link>
          <Link href={profile.resume} target="_blank" className="hover:text-white">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}