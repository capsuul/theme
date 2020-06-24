import React from 'react';
import { Themes, Styles, ThemedStyles } from '../types';
declare type Props = {
    themes: Themes;
    styles: Styles | ThemedStyles;
    variant: keyof Themes;
    children?: React.ReactNode;
};
declare const ThemeProvider: React.FC<Props>;
export default ThemeProvider;
