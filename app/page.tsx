import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Yusuf Uysal
        </h1>
        <p className="text-lg text-gray-600">Full-Stack Web Developer</p>

        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full my-4"></div>

        <p className="text-md text-gray-500 italic">
          I'm currently working on my new portfolio website. <br />
          In the meantime, you can check out my resume.
        </p>

        <div className="pt-4">
          <Link
            href="/cv"
            className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View My CV
          </Link>
        </div>
      </div>
    </main>
  );
}
