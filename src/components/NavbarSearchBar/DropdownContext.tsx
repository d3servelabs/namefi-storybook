import { useContext, createContext, useState, ReactNode } from "react";

interface DropDownContextProps {
    // onDropDown: () => void;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void
}
const DropDownContext = createContext<DropDownContextProps>({} as DropDownContextProps)

export const useDropDownContext = () => {
    return useContext(DropDownContext)
}

export const DropDownProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false)

    // const onDropDown = () => setIsOpen(!isOpen)
    console.log(isOpen)
    return(
        <DropDownContext.Provider
            value={{
                // onDropDown,
                isOpen,
                setIsOpen
            }}>
            {children}
        </DropDownContext.Provider>
    )
}