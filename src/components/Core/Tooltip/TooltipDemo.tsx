import React from 'react'
import ToolTips from '.'
import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';
export const TooltipDemo = () => {

  return (
    <Tooltip.Provider>
            <Tooltip.Root >
                <Tooltip.Trigger>
                        Hover to show tooltip
                </Tooltip.Trigger>
                    <Tooltip.Content sideOffset={5} align='start'>
                        <ToolTips.Content>
                            <ToolTips.Image />
                            <ToolTips.Info>
                                <ToolTips.Title>
                                    AutoPark™️
                                </ToolTips.Title>
                                <p>Your domain is linked to an ENS wallet address. </p>
                                <p>You can receive funds in crypto with this domain.</p>
                                <ToolTips.Link 
                                    href='https://www.w3schools.com/react/react_usecontext.asp'
                                    target='blank'>
                                    Learn More
                                </ToolTips.Link>
                            </ToolTips.Info>
                        </ToolTips.Content>
                    </Tooltip.Content>
            </Tooltip.Root>
    </Tooltip.Provider>
  )
}
