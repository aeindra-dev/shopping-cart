import Header from "@/components/features/Header/Header";
import { Outlet } from "react-router-dom";

export default function HomePage(){
    return <>
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
        <header className="sticky top-0 z-50 backdrop-blur">
            <Header />
        </header>
        <main className="mx-auto w-full max-w-6xl">
            <Outlet />
        </main>
        <footer>
            <div className="mx-auto w-full max-w-6xl">
                <p className="text-center">
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    </div>
    </>;
}