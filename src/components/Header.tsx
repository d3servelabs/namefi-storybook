import { HeaderSearchBar, HeaderSearchBarProps } from "./HeaderSearchBar"
import { UserAuthStateDemo, UserAuthStateProps } from "./UserAuthState/UserAuthStateDemo"

export type HeaderProps = {
        includeSearchBar?:boolean,
        authStateProps?: UserAuthStateProps,
        headerSearchProps?: HeaderSearchBarProps
    }
export const Header = ({includeSearchBar, authStateProps, headerSearchProps }: HeaderProps) => {
    

    return (
        <header className="namefi-cont namefi-header relative h-[80px] pl-6 pr-[10px] lg:rounded-[50px] ">
            <nav className="relative w-full h-full m-0 flex justify-between items-center">
                <div className="relative flex items-center gap-[6rem]">
                    <img src="/assets/namefi.svg" width={90} alt="logo" role="svg"/>
                </div>
                {includeSearchBar && <HeaderSearchBar {...headerSearchProps} />}
                <UserAuthStateDemo {...authStateProps} />
            </nav>
        </header>
    )
}
