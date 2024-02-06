import {Header} from "../components/homepage1/Header";
import HomePage1 from "../HomePage1";

export function PageLayout({children}){

    return <>
        <Header/>
        <main>
            {children}
        </main>
    </>
}


