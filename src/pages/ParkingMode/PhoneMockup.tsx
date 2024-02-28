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
      <img className="block w-[373px] min-w-[373px]" src="/assets/iPhone.svg" />
      <PhoneMockupContent>
        <div className="w-full h-full py-3 px-4">{children}</div>
      </PhoneMockupContent>
    </div>
	);
};
