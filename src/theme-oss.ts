import { makeTheme } from '@theme-ui/css/utils';
import { tokens as foundation } from './tokens/foundation';
import { tokens } from './tokens/squad-oss';
import { makeThemeStyles } from './styles';

export const oss = makeTheme(makeThemeStyles({ ...foundation, ...tokens }));
