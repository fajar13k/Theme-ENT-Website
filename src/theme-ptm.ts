import { makeTheme } from '@theme-ui/css/utils';
import { tokens } from './tokens/squad-pertamina';
import { makeThemeStyles } from './styles';

export const ptm = makeTheme(makeThemeStyles(tokens));
