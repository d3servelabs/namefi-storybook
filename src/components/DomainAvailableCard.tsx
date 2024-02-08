import React from "react";

export type DomainAvailableCardProps = { domainName?:string, loading?:boolean}
export const DomainAvailableCard = (props:DomainAvailableCardProps) => {
  return (
    <div className="relative rounded-[20px] p-7 bg-black flex flex-col justify-start items-center gap-[130px] w-[400px] h-[400px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]">
      <div className="flex w-full h-[30px] items-center justify-between">
        <img className="w-[118px]" src="/assets/Available.svg" alt="svg img" />
        <button className="relative block">
          <img
            className="w-[30px]"
            src="/assets/Cart.svg" 
            alt="cart image"
            role="img"
          />
          <img
            className="w-[25px] absolute -top-3 -right-3"
            src="/assets/Plus.svg"
            alt="Plus image"
            role="img"
          />
        </button>
      </div>
      <h3 className="text-white font-semibold text-[28px] tracking-[0.1em]">
          {props.domainName}
      </h3>
    </div>
  );
};