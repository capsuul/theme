import { useContext } from 'react';

import { Theme } from '../types';
import { ThemeContext } from '../context';

const useTheme = (): Theme => useContext(ThemeContext);

export default useTheme;
