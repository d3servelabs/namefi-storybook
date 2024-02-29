import React from 'react';
import styled from '@emotion/styled';
import { cn } from '../../utils/cn'

const PhoneMockupContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	mask-image: url('/assets/iPhoneMask.svg');
	mask-size: 100%;
	mask-repeat: no-repeat;
`;

export interface PhoneMockupProps {
  children?: React.ReactNode
  className?: string
}

export const PhoneMockup = ({
	children,
  className,
}: PhoneMockupProps) => {
	return (
    <div className={cn('relative', className)}>
      <img className="block w-screen sm:w-[236px] md:w-[204px] xl:w-[373px] xl:min-w-[373px]" src="/assets/iPhone.svg" />
      <PhoneMockupContent>
        <div className="w-full h-full py-3 px-4 bg-[#2d2d2d]">{children}</div>
      </PhoneMockupContent>
    </div>
	);
};
