import Style from './Style';

type ComponentStyle<Subs extends string = string> =
  | Style
  | { [S in Subs]?: ComponentStyle<Subs> };

export default ComponentStyle;
