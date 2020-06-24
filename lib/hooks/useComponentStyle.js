import { useContext } from 'react';
import { StylesContext } from '../context';
import { resolveComponentStyle, getComponentStyle } from '../resolve';
const useComponentStyle = (componentName, classes) => {
    const globalStyles = useContext(StylesContext);
    const componentStyle = getComponentStyle(globalStyles, componentName);
    const get = (subComponentName = null, mergeWith = {}) => resolveComponentStyle(componentStyle, subComponentName, classes, mergeWith);
    return get;
};
export default useComponentStyle;
//# sourceMappingURL=useComponentStyle.js.map