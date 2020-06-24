import { useContext } from 'react';

import { StylesContext } from '../context';
import { resolveComponentStyle, getComponentStyle } from '../resolve';
import { Style } from '../types';

const useComponentStyle = (componentName: string, classes?: string[]) => {
  const globalStyles = useContext(StylesContext);
  const componentStyle = getComponentStyle(globalStyles, componentName);

  const get = (subComponentName: string | null = null, mergeWith: Style = {}) =>
    resolveComponentStyle(componentStyle, subComponentName, classes, mergeWith);

  return get;
};

export default useComponentStyle;
