
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">
        MyApp
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/" className="hover:text-blue-400">
          Accueil
        </Link>

        <Link href="/about" className="hover:text-blue-400">
          À propos
        </Link>

        <Link href="/contact" className="hover:text-blue-400">
          Contact
        </Link>

        <Link href='/login' className="hover:text-blue-400" >
          Login
        </Link>

      </div>
    </nav>
  );
}
