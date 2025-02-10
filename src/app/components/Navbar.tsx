import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 px-20 bg-gray-800 text-white">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
