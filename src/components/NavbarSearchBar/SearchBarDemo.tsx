import React, { useState } from 'react'
import SearchDropdown from '.'
import {Popover} from '@radix-ui/themes';
import { HeaderSearchBar } from '../Core';

export interface SearchBarDemoProps {
  isTdSelected: boolean;
  status: 'TAKEN' | 'AVAILABLE' | 'YOUOWNIT' | 'NOTSUPPORTED';
  price: number
}
export const SearchBarDemo = ({price, isTdSelected, status}: SearchBarDemoProps) => {
  const [inputValue, setInputValue] = useState('')

  return (
        <Popover.Root open={inputValue.includes('.')} >
          <Popover.Trigger >
                <HeaderSearchBar searchValue={inputValue} onSearchValueChanged={setInputValue} />
          </Popover.Trigger>
            <Popover.Content align='center' sideOffset={10} >
              <SearchDropdown.Root>
                  
                 {isTdSelected ? <SearchDropdown.Body> 
                    <SearchDropdown.DropdownMessage status={status} price={price} />
                    <SearchDropdown.TryAnother>
                      <SearchDropdown.TLD>
                        {
                          ['eth','com','base','org','net','co.uk','btc','cosmos']
                        }
                      </SearchDropdown.TLD>
                    </SearchDropdown.TryAnother>
                  </SearchDropdown.Body> :
                  <SearchDropdown.TLD>
                    {
                      ['eth','com','base','org','net','co.uk','btc','cosmos']
                    }
                  </SearchDropdown.TLD>
                  }
              </SearchDropdown.Root>
            </Popover.Content>
      </Popover.Root>
  )
}

