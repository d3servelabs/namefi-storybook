import React from 'react';

export type ReactSingleNode = Exclude<React.ReactNode, Iterable<React.ReactNode>> | string;
