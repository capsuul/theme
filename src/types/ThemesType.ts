import Theme from './Theme';

type ThemesType<Variants extends string = string> = { [V in Variants]?: Theme };

export default ThemesType;
