export interface GT_Settings {
  Text: Object;
  Images: Object;

  TextValue: Map<string, string>;
  ImageValue: Map<string, string>;

  SetText(name: string, value: string): void;
}
