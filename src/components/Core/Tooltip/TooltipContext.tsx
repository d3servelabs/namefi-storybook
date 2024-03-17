import { ReactNode, createContext, useContext, useState } from "react";

type ToolTipContextProps = {
    onHover: () => void
}
const ToolTipContext = createContext<ToolTipContextProps | null>(null)

export const useToolTipContext = () => {
    return useContext(ToolTipContext)
}

export const ToolTipProvider = ({children}: {children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false)

    const onHover = () => setIsOpen(!isOpen)

    return <ToolTipContext.Provider value={{onHover}}>
        {children}
    </ToolTipContext.Provider>
}

export default ToolTipContext