import React, { useState } from 'react'
import SearchDropdown from '.'
import * as Popover from '@radix-ui/react-popover';
import { HeaderSearchBar } from '../Core';

export const SearchBarDemo = () => {
  const [inputValue, setInputValue] = useState('')

  return (
        <Popover.Root open={inputValue.includes('.')} >
          <Popover.Trigger >
                <HeaderSearchBar searchValue={inputValue} onSearchValueChanged={setInputValue} />
          </Popover.Trigger>
          <Popover.Portal >
            <Popover.Content align='center' sideOffset={10} >
              <SearchDropdown.Root>
                  <SearchDropdown.TLD>
                    {
                      ['eth','com','base','org','net','co.uk','btc','cosmos']
                    }
                  </SearchDropdown.TLD>
                  {/* <SearchDropdown.DropdownMessage status='TAKEN'>
                      Taken, you may import it if you own it.
                  </SearchDropdown.DropdownMessage> 
                  <SearchDropdown.TryAnother>
                    <SearchDropdown.TLD>
                      {
                        ['eth','com','base','org','net','co.uk','btc','cosmos']
                      }
                    </SearchDropdown.TLD>
                  </SearchDropdown.TryAnother> */}
              </SearchDropdown.Root>
            </Popover.Content>
          </Popover.Portal>
      </Popover.Root>
  )
}

