import {getServerSession} from "next-auth/next";
import {GoogleLoginButton} from "@/components/signin/auth_buttons";
import {authOptions} from "@/options";
import Image from "next/image";
import {redirect} from "next/navigation";

export default async function SignInPage() {
    const session = await getServerSession(authOptions);

    if (session !== null) {
        redirect(`/`);
    }

    return (
        <main className={'flex flex-row justify-center items-center h-full gap-10'}>
            <div className={'p-10'}>
                <Image src={'./logo.svg'} alt={'labomato-logo'} width={81.5 * 3} height={22 * 3}/>
            </div>
            <div className={''}>
                <GoogleLoginButton/>
            </div>
        </main>
    );
}
