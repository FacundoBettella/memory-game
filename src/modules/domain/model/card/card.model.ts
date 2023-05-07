export interface ICard {
  id?: string;
  title: string;
  state: boolean;
  image: string;
  selected: boolean;
}

export interface ICards {
  cards: ICard[];
  hasError: boolean;
  isLoading: boolean;
  gameResult: boolean;
}
