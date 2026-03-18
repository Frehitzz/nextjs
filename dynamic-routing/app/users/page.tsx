import Link from "next/link"
export default function MainUser() {
    return (
        <div>
            <h1>This is the list of users</h1>

            <ul>
                <li><Link href="/users/1">See user1</Link></li>
                <li><Link href="/users/2">See user2</Link></li>
                <li><Link href="/users/3">See user3</Link></li>
            </ul>

        </div>
    )
}