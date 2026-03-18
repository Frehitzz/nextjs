import Link from "next/link"
export default function page() {
  return (
    <div>
      <h1>Welcome to dynamic-routing</h1>

      <ul>
        <li><Link href="/users">go to userlist</Link></li>
        <li><Link href="">go to bloglist</Link></li>
      </ul>
    </div>
  )
}