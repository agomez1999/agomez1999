import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-[calc(100vh-5.75rem)] flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <Image alt="Not found" src="/images/404.webp" width={300} height={400} />
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <Link href="/" className="px-2 py-1 border rounded-full bg-[#E6E6E6] hover:scale-110 transition-all duration-400">Volver al Home</Link>
      </div>
    </div>
  );
}