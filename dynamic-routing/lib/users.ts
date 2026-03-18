export type UserInfo = {
    id: string;
    name: string;
}

const users:UserInfo[] = [
    {id: "1", name: "Fritz"},
    {id: "2", name: "Christine"},
    {id: "3", name: "Harly"}
]

export async function getUser(id: string){
    return users.find((user) => user.id === id) || null;
}