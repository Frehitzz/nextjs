import { getUser } from "@/lib/users"

export default async function UserDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const user = await getUser(id);

    if (!user) {
        return <div className="">User Not Found</div>
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>ID: {user.id}</p>
        </div>
    );
}