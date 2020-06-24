import React, { useState, useEffect } from 'react';

import { Themes, Styles, ThemedStyles, Theme } from '../types';

import ThemeContext from './ThemeContext';
import StylesContext from './StylesContext';

type Props = {
  themes: Themes;
  styles: Styles | ThemedStyles;
  variant: keyof Themes;
  children?: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({
  themes,
  styles,
  variant,
  children,
}) => {
  const [themeVariant, setThemeVariant] = useState<Theme>({});
  const [themedStyles, setThemedStyles] = useState<Styles>({});

  useEffect(() => {
    const tmpThemeVariant = themes[variant];
    const tmpThemedStyles =
      typeof styles === 'function' ? styles(tmpThemeVariant) : styles;
    setThemeVariant(tmpThemeVariant);
    setThemedStyles(tmpThemedStyles);
  }, [themes, styles, variant]);

  return (
    <ThemeContext.Provider value={themeVariant}>
      <StylesContext.Provider value={themedStyles}>
        {children}
      </StylesContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
