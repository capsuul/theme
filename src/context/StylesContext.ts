import { createContext } from 'react';

import { Styles } from '../types';

const StylesContext = createContext<Styles>({});

export default StylesContext;
