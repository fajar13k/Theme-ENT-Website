import { makeTheme } from '@theme-ui/css/utils';
import { tokens } from './tokens/squad-oss';
import { makeThemeStyles } from './styles';

export const oss = makeTheme(makeThemeStyles(tokens));
