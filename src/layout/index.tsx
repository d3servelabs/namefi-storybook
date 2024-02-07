import {Header} from "./Header";
import HomePage from "../stories/Pages/Home/HomePage";

export function PageLayout({children}){

    return <>
        <Header/>
        <main>
            {children}
        </main>
    </>
}


