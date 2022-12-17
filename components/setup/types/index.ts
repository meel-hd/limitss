export type advancedConfigValues = {
  focus: boolean;
  alwaysOnTop: boolean;
  maximized: boolean;
  center: boolean;
  resizable: boolean;
  visible: boolean;
  hiddenTitle: boolean;
  theme: null |  "Dark" | "Light";
  titleBarStyle: undefined | 'Visible' | 'Transparent';
  minWidth: null | number;
  minHeight: null | number;
  maxWidth: null | number;
  maxHeight: null | number;
  y: null | number;
  x: null | number;
}