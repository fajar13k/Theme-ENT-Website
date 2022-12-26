import { ThemeTokens } from '../tokens';
import { accordion } from './accordion';
import { badges } from './badges';
import { buttons } from './buttons';
import { cards } from './cards';
import { colorscard } from './colorscard';
import { colors } from './colors';
import { dataTable } from './dataTable';
import { forms } from './forms';
import { headCell } from './headCell';
import { layout } from './layout';
import { links } from './links';
import { megamenu } from './megamenu';
import { navbar } from './navbar';
import { select } from './select';
import { sidebar } from './sidebar';
import { sidebarWrapper } from './sidebarWrapper';
import { spacers } from './spacers';
import { spinner } from './spinner';
import { styles } from './styles';
import { table } from './table';
import { tableCell } from './tableCell';
import { tableRow } from './tableRow';
import { text } from './text';
import { tooltip } from './tooltip';

export const makeThemeStyles = (tokens: ThemeTokens) => {
  return {
    accordion: accordion(tokens),
    badges: badges(tokens),
    buttons: buttons(tokens),
    cards: cards(tokens),
    colorscard: colorscard(tokens),
    colors: colors(tokens),
    dataTable: dataTable(tokens),
    forms: forms(tokens),
    layout: layout(),
    links: links(tokens),
    megamenu: megamenu(tokens),
    navbar: navbar(tokens),
    select: select(tokens),
    sidebar: sidebar(tokens),
    sidebarWrapper: sidebarWrapper(tokens),
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
