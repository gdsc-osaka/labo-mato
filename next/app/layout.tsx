import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {KumaRegistry} from "@kuma-ui/next-plugin/registry";
import Header from "@/components/header";

const inter = Inter({subsets: ['latin']})

// Cloudflare Pages使う場合はruntimeをedge
export const runtime = 'nodejs' // process.env.ENV === "release" ? 'edge' : 'nodejs';

export const metadata: Metadata = {
    title: {
        default: 'labomato',
        template: '%s | labomato'
    },
    description: 'Generated by create next app',
    icons: [{ rel: 'icon', url: 'image/favicon.ico' }],
}

export default async function RootLayout({children}: {
    children: React.ReactNode
}) {
    // const session = await getServerSession(authOptions);
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <KumaRegistry>
            {children}
        </KumaRegistry>
        </body>
        </html>
    )
}
