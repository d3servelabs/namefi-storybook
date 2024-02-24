import React from 'react';

import {ButtonText} from "@components/Buttons/ButtonText";

export const ButtonLoadingContent = ({
                                         className,
                                         children,
                                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <>
            <ButtonText className={className}>{children}</ButtonText>{' '}
            <RefreshIcon className={'animate-spin'}/>
        </>
    );
};