import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import StylesContext from './StylesContext';
const ThemeProvider = ({ themes, styles, variant, children, }) => {
    const [themeVariant, setThemeVariant] = useState({});
    const [themedStyles, setThemedStyles] = useState({});
    useEffect(() => {
        const tmpThemeVariant = themes[variant];
        const tmpThemedStyles = typeof styles === 'function' ? styles(tmpThemeVariant) : styles;
        setThemeVariant(tmpThemeVariant);
        setThemedStyles(tmpThemedStyles);
    }, [themes, styles, variant]);
    return (<ThemeContext.Provider value={themeVariant}>
      <StylesContext.Provider value={themedStyles}>
        {children}
      </StylesContext.Provider>
    </ThemeContext.Provider>);
};
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map