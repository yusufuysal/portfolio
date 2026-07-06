import Link from "next/link";
import ProjectGallery from "../components/ProjectGallery";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] font-sans text-zinc-900">
      <div className="p-8 md:p-24">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-start">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Yusuf Uysal
          </h1>
          <p className="text-lg text-zinc-500 mb-4">Full-Stack Web Developer</p>
          <Link
            href="/cv"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 underline underline-offset-4 transition-colors"
          >
            View CV
          </Link>
        </div>
      </div>

      <ProjectGallery />
    </main>
  );
}
