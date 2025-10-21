import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem 0",
        borderBottom: "1px solid #eee",
        marginBottom: "2rem",
      }}
    >
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/hire-me">Hire Me</Link>
      </nav>
    </header>
  );
}
