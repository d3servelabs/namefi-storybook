import { ReactNode, createContext, useContext, useState } from "react";

type ToolTipContextProps = {
    onHover: () => void;
    isOpen: boolean
}
const ToolTipContext = createContext<ToolTipContextProps >({} as ToolTipContextProps)

export const useToolTipContext = () => {
    return useContext(ToolTipContext)
}

export const ToolTipProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(true)

    const onHover = () => setIsOpen(!isOpen)
    console.log(isOpen)
    return <ToolTipContext.Provider value={{onHover, isOpen}}>
        {children}
    </ToolTipContext.Provider>
}

export default ToolTipContext