import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <h1>Hello, Dashboard Page!</h1>
      <p>testing</p>
    </>
  );
}
