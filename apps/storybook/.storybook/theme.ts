import { create } from '@storybook/theming/create';
import {themes} from "@storybook/theming";

export default create({
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    base: 'dark',
    brandTitle: 'Namefi',
    brandUrl: 'https://namefi.io',
    brandImage: '/assets/namefi.svg',
    // brandImage: 'https://app.namefi.io/android-chrome-192x192.png',
    brandTarget: '_self',

    //
    colorPrimary: '#48E59B',
    // colorSecondary: '#015AD5',
    colorSecondary: '#21a668',

    // UI
    appBg: '#111111',
    appContentBg: '#1A1A1A',
    appPreviewBg: '#1A1A1A',
    appBorderColor: '#0A4429',
    appBorderRadius: 24,

    // Text colors
    textColor: '#ddede6',
    textInverseColor: '#111111',




});