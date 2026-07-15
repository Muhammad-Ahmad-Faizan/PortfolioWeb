import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl font-mono font-bold text-[#E8734A] mb-4">
          404
        </div>
        <h1 className="text-2xl font-semibold text-[#F5F1EA] mb-2">
          Page Not Found
        </h1>
        <p className="text-[#A39C90] mb-8 max-w-md">
          This page doesn{"'"}t exist or has been moved. Let{"'"}s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#E8734A] hover:bg-[#E8734A]/90 text-[#12110F] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
        >
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}