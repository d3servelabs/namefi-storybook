import React, {ComponentProps} from 'react';
import {cn} from '../../../../utils/cn';
import CartIcon from '../../../Core/icons/CartIcon';

export default function CartHeader({className, children, ...props}: ComponentProps<'div'>) {
    return (
        <div {...props} className={cn('w-full relative flex flex-row items-center  gap-5', className)}>
            <CartIcon className="w-12"/>
            <p className="font-semibold text-xl tracking-wider text-white ">
                {children || 'Your Cart'}
            </p>
        </div>
    );
}