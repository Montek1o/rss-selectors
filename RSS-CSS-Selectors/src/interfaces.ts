interface ISelectorsStructure {
  selector: string,
  selectorId: string,
  selectorClass: string,
  active: boolean,
  child?: {
    selector: string,
    selectorId: string,
    selectorClass: string,
    active: boolean,
  },
}

export interface ILevelStructure {
  name: string,
  selectors: ISelectorsStructure[],
}