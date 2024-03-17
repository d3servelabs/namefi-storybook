import React from 'react'
import ToolTip from '.'

export const TooltipDemo = () => {

  return (
    <ToolTip.Provider>
        <ToolTip.Root >
            <ToolTip.Trigger>
                Hover to show tooltip
            </ToolTip.Trigger>
            <ToolTip.Content>
                <ToolTip.Image />
                <ToolTip.Info>
                    <ToolTip.Title>
                        AutoPark™️
                    </ToolTip.Title>
                    <p>Your domain is linked to an ENS wallet address. </p>
                    <p>You can receive funds in crypto with this domain.</p>
                    <ToolTip.Link 
                        href='https://www.w3schools.com/react/react_usecontext.asp'
                        target='blank'>
                        Learn More
                    </ToolTip.Link>
                </ToolTip.Info>
            </ToolTip.Content>
        </ToolTip.Root>
    </ToolTip.Provider>
  )
}
