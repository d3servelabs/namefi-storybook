import React from 'react'
import {DomainTile, DomainTileProps} from './DomainTile'

export type OwnedDomainsGridProps = {
    loading?:boolean,
    tlds?: string[],
    onTldClicked?: (tld:string)=>any;
    domains?: Partial<DomainTileProps>[];
    domainTileProps: DomainTileProps
}
export const OwnedDomainsGrid = ({domains,tlds, domainTileProps, onTldClicked}: OwnedDomainsGridProps) => {
    return (
        <div className='w-[1200px] m-auto flex flex-col gap-12'>
            <div
                className='relative w-full flex justify-between items-center  before:absolute before:bottom-[-6px] before:w-full before:h-[1.5px] before:bg-[#444]'>
                <p className='font-bold text-[#d9d9d9]  text-[21px] tracking-[0.05em] '>Your Domains</p>
                <div
                    className='flex font-["Roboto_Mono"] justify-between w-[144px] h-[22px] text-[#c6eedb] text-[1em] font-medium tracking-[0.05em] '>
                    <p>DNS</p>
                    {
                        tlds?.map((tld)=>(
                            <p key={tld} className='opacity-20' onClick={()=>onTldClicked?.(tld)}>{tld}</p>
                        ))
                    }
                </div>
            </div>
            <div className='m-auto relative w-[1089px] grid grid-cols-3 gap-[36px]'>
                {
                    domains?.map((data, x) =>
                        {
                            if(data.domainName){
                                return <DomainTile key={data.domainName} domainName={data.domainName} {...domainTileProps} />
                            }
                        }
                    )
                }

            </div>
        </div>
    )
}
