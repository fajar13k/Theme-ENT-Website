import { ThemeTokens } from '../tokens';
import { accordion } from './accordion';
import { badges } from './badges';
import { buttons } from './buttons';
import { cards } from './cards';
import { colorscard } from './colorscard';
import { colors } from './colors';
import { forms } from './forms';
import { layout } from './layout';
import { select } from './select';
import { spacers } from './spacers';
import { spinner } from './spinner';
import { styles } from './styles';
import { text } from './text';
import { tooltip } from './tooltip';
import { table } from './table';
import { tableRow } from './tableRow';
import { headCell } from './headCell';
import { tableCell } from './tableCell';

export const makeThemeStyles = (tokens: ThemeTokens) => {
  return {
    accordion: accordion(tokens),
    badges: badges(tokens),
    buttons: buttons(tokens),
    cards: cards(tokens),
    colorscard: colorscard(tokens),
    colors: colors(tokens),
    forms: forms(tokens),
    layout: layout(),
    select: select(tokens),
    spacers: spacers(),
    spinner: spinner(tokens),
    styles: styles(tokens),
    table: table(),
    tableRow: tableRow(tokens),
    headCell: headCell(tokens),
    tableCell: tableCell(tokens),
    text: text(tokens),
    tooltip: tooltip(tokens),
  };
};
