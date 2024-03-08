import React, {ComponentProps} from 'react';
import {SolidButton} from '../../../Core';
import ArrowRight2 from '*.svg';

export function UserBalanceCardAction(props: ComponentProps<typeof SolidButton>) {
    return (
        <div>
            <SolidButton {...props}>
                Claim <img className="w-5.25" src={ArrowRight2} alt="arrow right" role="img"/>
            </SolidButton>
        </div>
    );
}