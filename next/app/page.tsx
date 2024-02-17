import {SessionProvider, signIn, signOut, useSession} from "next-auth/react";

export const runtime = 'edge'; // Cloudflare Pages使う場合はruntimeをedgeにする

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
    )
}
