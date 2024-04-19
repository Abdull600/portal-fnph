import { AuthHeader } from "./_components/auth-header";
import { HeaderLogo } from "./_components/header-logo";


export default function AuthLayout({ children }) {
    return (
        <div className="h-full w-full bg=[#E4E7EC]">
            <div className="w-full bg-[#E4E7EC] py-2 md:py-5">
                <AuthHeader />
                <br />
                <HeaderLogo />
            </div>
            <main className="h-full w-full flex justify-center items-center py-5 md:py-0">
                {children}
            </main>
        </div>
    );
}
