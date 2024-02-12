import React, {useMemo} from 'react'
import moment from "moment";
import {ShortAddress} from "@components/ShortAddress";

export type DomainCardProps =
    {
        domainName?: string,
        loading?: boolean,
        showExpiration?: boolean,
        expirationDate?: Date,
    } & (
    {
        ownerAddress?: string,
        showOwner?: boolean,
        sameOwner?: boolean,
        onSettingsClicked?: ()=> any;
        status: 'TAKEN', // shouldn't be derived from ownerAddress in case the user doesn't want to pass the owner address
    } | {
    status: 'AVAILABLE'
})

export const DomainCard = (props: DomainCardProps) => {

    const {showOwner, sameOwner, ownerAddress, onSettingsClicked} = useMemo(() => {
        if (props.status === 'TAKEN') {
            return {
                showOwner: props.showOwner,
                sameOwner: props.sameOwner,
                ownerAddress: props.ownerAddress,
                onSettingsClicked: props.onSettingsClicked,
            }
        }
        return {}

    }, [props]);
    const {
        domainName,
        loading,
        showExpiration,
        expirationDate,
        status,
    } = props



    return (
        <div
            className='relative rounded-[20px] p-6 bg-black flex flex-col justify-between items-center w-[400px] h-[400px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
            <div className='flex w-full h-[30px] items-center justify-between'>
                <img className='max-w-[163px]'
                     src={status==='TAKEN'? (sameOwner ?"/assets/namefiapp.svg" :"/assets/Taken.svg") : "/assets/Available.svg"}
                     alt="namefiapp img" role='img'/>
                <button className='relative block' onClick={onSettingsClicked}>
                    { sameOwner &&  <img className='w-[30px]' src="/assets/Gear.svg" alt="Gear image" role='img'/>}
                </button>
            </div>
            <h3 className='text-white font-semibold text-[28px] tracking-[0.1em]'>{domainName}</h3>
            <div className='w-full h-[36px] flex justify-between '>
                <div className='w-full h-full flex justify-between '>
                    <div className='min-w-[106px] h-full'>
                        {showOwner && !!ownerAddress &&
                            <>
                                <p className='text-[#acacac] text-xs tracking-[0.1em] '>Owned by</p>
                                <p className='text-[#ededed] text-sm tracking-[0.1em] '><ShortAddress address={ownerAddress}/></p>
                            </>
                        }
                    </div>
                    <div className='w-[150px] h-full flex items-center justify-between '>
                        {showExpiration && !!expirationDate &&
                            <>
                                <img className='w-[36.75px]' src="/assets/lock.svg" alt="lock image" role='img'/>
                                <div className='w-[99px]'>
                                    <p className='text-[#acacac] text-[11px] font-bold tracking-[0.1em] '>Expires on</p>
                                    <p className='text-[#ededed] text-sm font-bold tracking-[0.1em] '>{moment(expirationDate).format('MMM DD YYYY')}</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
