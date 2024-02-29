import React, {useMemo} from 'react'
import moment from "moment";
import ShortAddress from "./Core/ShortAddress";
import NamefiBrandText from './Core/NamefiBrandText';


export type DomainCardProps =
    {
        domainName?: string,
        loading?: boolean,
        showExpiration?: boolean,
        expirationDate?: Date,
        href?:string,
    } & (
    {
        ownerAddress?: string,
        showOwner?: boolean,
        showSettings?:boolean,
        sameOwner?: boolean,
        onSettingsClicked?: ()=> any;
        status: 'TAKEN', // shouldn't be derived from ownerAddress in case the user doesn't want to pass the owner address
    } | {
    status: 'AVAILABLE'
})

export const DomainCard = (props: DomainCardProps) => {

    const {showOwner, sameOwner,showSettings, ownerAddress, onSettingsClicked} = useMemo(() => {
        if (props.status === 'TAKEN') {
            return {
                showOwner: props.showOwner,
                sameOwner: props.sameOwner,
                ownerAddress: props.ownerAddress,
                onSettingsClicked: props.onSettingsClicked,
                showSettings:props.showSettings
            }
        }
        return {}

    }, [props]);
    const {
        domainName,
        loading,href,
        showExpiration,
        expirationDate,
        status,
    } = props



    return (
        <a href={href} className='relative rounded-5 p-6 bg-black-1000 flex flex-col justify-between items-center w-100 h-100  drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
            <div className='flex w-full h-7.5 items-center justify-between'>
                {/* <p>
                    {status==='TAKEN'? 
                        (sameOwner ?
                        <NamefiBrandText fontSize={'1.5rem'} color={'#FEF556'} text={'You Own This'} /> :
                                 <NamefiBrandText fontSize={'1.5rem'} color={'#3488FC'} text={'Taken'} /> ) :
                                 <NamefiBrandText fontSize={'1.5rem'} color={'#48E59B'} text={'Available'} />
                    }
                </p> */}
                <button className='relative block' onClick={onSettingsClicked}>
                    { sameOwner && (showSettings ?? true) &&  <img className='w-7.5' src="/assets/Gear.svg" alt="Gear image" role='img'/>}
                </button>
            </div>
            <h3 className='text-white font-semibold text-7 tracking-widest'>{domainName}</h3>
            <div className='w-full h-9 flex justify-between '>
                <div className='w-full h-full flex justify-between '>
                    <div className='min-w-[6.625] h-full'>
                        {showOwner && !!ownerAddress &&
                            <>
                                <p className='text-[#acacac] text-xs tracking-widest '>Owned by</p>
                                <p className='text-[#ededed] text-sm tracking-widest '><ShortAddress address={ownerAddress}/></p>
                            </>
                        }
                    </div>
                    <div className='w-[150px] h-full flex items-center justify-between '>
                        {showExpiration && !!expirationDate &&
                            <>
                                <img className='w-9.25' src="/assets/lock.svg" alt="lock image" role='img'/>
                                <div className='w-25 font-secondary'>
                                    <p className='text-[#acacac] text-[11px] font-extrabold tracking-widest '>Expires on</p>
                                    <p className='text-[#ededed] text-sm font-extrabold tracking-widest '>{moment(expirationDate).format('MMM DD YYYY')}</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div> 
        </a>
    )
}
