import React, { ComponentProps } from "react";
import { cn } from "../../../utils/cn";

const Title: React.FC<ComponentProps<'h2'>> = ({className, children, ...props}) => {
    return(
        <h2 className={cn(' pt-1 font-semibold text-5.25lg text-primary-500 tracking-wider', className)}
            {...props}
        >
            {children}
        </h2>
    )
} 

const SubTitle: React.FC<ComponentProps<'p'>> = ({className, children, ...props}) => {
    return(
        <p className={cn('text-primary-500 font-bold text-sm tracking-wide', className)}
            {...props}
        >
            {children}
        </p>
    )
}

const BodyText: React.FC<ComponentProps<'div'>> = ({className, children, ...props}) => {
    return(
        <div className={cn('text-white font-normal text-sm tracking-wide leading-5 flex flex-col gap-3', className)}
            {...props}
        >
            {children}
        </div>
    )
}

const Link: React.FC<ComponentProps<'a'>> = ({className, children, ...props}) => {
    return(
        <a target="blank" className={cn('underline text-primary-500 font-normal text-sm tracking-wide', className)} 
            {...props}>{children}
        </a>
    )
}

const Span: React.FC<ComponentProps<'span'>> = ({className, children, ...props}) => {
    return(
        <span className={cn(' text-brand-blue font-bold text-sm tracking-wide', className)} {...props}>
            {children}
        </span>
    )
}

const Typography = {
    Title,
    SubTitle,
    BodyText,
    Link,
    Span
}

export default Typography