export interface GT_Settings {
  readonly Name: string;
  Text: Object;
  Images: Object;

  SetText(name: string, value: string): void;
}
