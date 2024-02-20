import React from 'react'
import clsx from "clsx";
import {Button, ButtonProps} from "@components/Buttons/Button";
import {RefreshIcon} from "@components/icons/RefreshIcon"


export const LoadingButton = ({disabled,loading, loadingContent,children,...props}: ButtonProps & {loading?:boolean, loadingContent?:React.ReactNode}) => {
  return (
      <Button disabled={disabled || loading} className={clsx(loading && "cursor-loading", props.className)} {...props} >
        {
          loading? (loadingContent ?? <ButtonLoadingContent>Loading...</ButtonLoadingContent>) : children
        }
      </Button>
  )
}

export const ButtonLoadingContent = ({className, children}:{className?:string, children: React.ReactNode})=>{
    return <><Button.Text>{children}</Button.Text> <RefreshIcon className={'animate-spin'}/></>
}
LoadingButton.LoadingContent = ButtonLoadingContent