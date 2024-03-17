import { ReactNode, createContext, useContext, useState } from "react";

type ToolTipContextProps = {
    onHover: () => void;
    isOpen: boolean
}
const ToolTipContext = createContext<ToolTipContextProps >(null!)

export const useToolTipContext = () => {
    return useContext(ToolTipContext)
}

export const ToolTipProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false)

    const onHover = () => setIsOpen(!isOpen)
    console.log(isOpen)
    return <ToolTipContext.Provider value={{onHover, isOpen}}>
        {children}
    </ToolTipContext.Provider>
}

export default ToolTipContext