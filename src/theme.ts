/*
 * Copyright 2014-2016 Simon Edwards <simon@simonzone.com>
 *
 * This source code is licensed under the MIT license which is detailed in the LICENSE.txt file.
 */

export interface ThemeInfo {
  name: string;
  id: string;
  path: string;
  debug: boolean;
}

export interface ThemeContents {
  cssFiles: { [index: string]: string; };
}

export enum CssFile {
  GUI_CONTROLS,
  TOP_WINDOW,
  MAIN_UI,
  TERMINAL,
  TERMINAL_VIEWER,
  TEXT_VIEWER,
  EMBEDDED_FRAME,
  ABOUT_TAB,
  SETTINGS_TAB
}

export const cssFileEnumItems: CssFile[] = [
  CssFile.GUI_CONTROLS,
  CssFile.TOP_WINDOW,
  CssFile.MAIN_UI,
  CssFile.TERMINAL,
  CssFile.TERMINAL_VIEWER,
  CssFile.TEXT_VIEWER,
  CssFile.EMBEDDED_FRAME,
  CssFile.ABOUT_TAB,
  CssFile.SETTINGS_TAB
];

const _CssFileNameMapping = {
  [CssFile.GUI_CONTROLS]: "gui-controls",
  [CssFile.TOP_WINDOW]: "top-window",
  [CssFile.MAIN_UI]: "main-ui",
  [CssFile.TERMINAL]: "terminal",
  [CssFile.TERMINAL_VIEWER]: "terminal-viewer",
  [CssFile.TEXT_VIEWER]: "text-viewer",
  [CssFile.EMBEDDED_FRAME]: "embedded-frame",
  [CssFile.ABOUT_TAB]: "about-tab",
  [CssFile.SETTINGS_TAB]: "settings-tab"
};

export function cssFileNameBase(cssFile: CssFile): string {
  return _CssFileNameMapping[cssFile] || null;
}

export interface Themeable {
  getThemeCssFiles(): CssFile[];
  setThemeCssMap(cssMap: Map<CssFile, string>): void;
}
