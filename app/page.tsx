import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">Kloobet</h1>
          <p className="text-stone-400 mt-5">
            Clone of Blooket made in NextJS, and React.
          </p>
        </div>
        <div className="flex space-x-3">
          <Link
            href="/protected"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Login
          </Link>
          <p className="text-white">·</p>
          <a
            href="https://github.com/rexhent/kloobet/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Source Code
          </a>
          <p className="text-white">·</p>
          <a
            href="https://github.com/rexhent/kloobet/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            To-Do
          </a>
        </div>
      </div>
    </div>
  );
}
