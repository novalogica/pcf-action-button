export interface ActionButton {
  key: string;
  label: string;
  translations: Label;
  iconName: string;
  bgColor: string;
  color: string;
  isDisabled?: boolean;
}

export interface Label {
  [id: string]: string;
}
