import {getServerSession} from "next-auth/next";
import {LoginButton, LogoutButton} from "@/components/buttons";
import {authOptions} from "@/options";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const user = session?.user // ログインしていなければnullになる。

    return (
        <main>
            <div>
                <div>{`${JSON.stringify(user)}`}</div>
                {user ? <div>Logged in</div> : <div>Not logged in</div>}
                {user ? <LogoutButton/> : <LoginButton/>}
            </div>
        </main>
    );
}