import { useContext } from 'react';

import { StylesContext } from '../context';

const useStyles = () => useContext(StylesContext);

export default useStyles;
