import Link from "next/link";
export default function page() {
  return (
    <div>
      <h1>Welcome to my next website</h1>
      <div className="">
        <h1>Content:</h1>
        <ul>
          <li><Link href="/blog">My Blog</Link></li>
        </ul>
      </div>
    </div>
  )
}