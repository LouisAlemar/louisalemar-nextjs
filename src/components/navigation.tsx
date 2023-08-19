import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
