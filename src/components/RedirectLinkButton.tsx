import React from 'react'
import { Button } from './Buttons/Button'

export type RedirectLinkButtonProps = {
    linkName?: string;
    linkUrl?: string;
    redirectType?: string;
}

export const RedirectLinkButton = ({linkName, linkUrl, redirectType}: RedirectLinkButtonProps) => {

  return (
    <a href={`https://${linkUrl}`} target='_blank'>
        <Button backgroundColor='#1C1C1C' borderColor='#79797980'>{linkName}</Button>
    </a>
  )
}

