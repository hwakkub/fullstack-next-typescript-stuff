import Link from "next/link"

export default function Home() {
  return (
    <main className="py-4 px-48">
      <Link href={"/dashboard"}>Go ro the dashboard</Link>
    </main>
  )
}
