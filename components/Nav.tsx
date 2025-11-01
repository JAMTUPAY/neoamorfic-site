import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="text-xl tracking-tight font-medium lowercase">
        neoamorfic<span className="align-super text-xs">™</span>
      </Link>
      <nav className="flex gap-6 text-sm">
        <Link href="/qeiv15">qeiv15</Link>
        <Link href="/portfolio">portfolio</Link>
        <Link href="/patents">patents</Link>
        <Link href="/press">press</Link>
        <Link href="/founder">founder</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
