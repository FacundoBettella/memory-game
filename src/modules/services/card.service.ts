import Axios, { AxiosResponse } from "axios";
import { ICard } from "../domain/model/card/card.model";
import {
  CardsResponse,
  CardResponse,
} from "../domain/model/card/cardResponse.model";
import { v4 as uuidv4 } from "uuid";
// import { data } from "../../api/api.test";

export class CardService {
  public async fetchCards(): Promise<ICard[] | undefined> {
    try {
      const response: AxiosResponse<CardsResponse> =
        await Axios.get<CardsResponse>(`/entries?per_page=10`);
      const cards: ICard[] = response?.data?.entries.map(
        (card: CardResponse) => ({
          title: card.meta?.name,
          image: card.fields?.image?.url,
          state: false,
          selected: false,
        })
      );

      // TODO: No api support
      // const cards = data?.entries?.map((card:any) => ({
      //   id: uuidv4(),
      //   title: card.meta?.name,
      //   image: card.fields?.image?.url,
      //   state: false,
      // }));

      const duplicatedCards = [...cards, ...cards];
      const doubleCards = duplicatedCards.map((card) => ({
        ...card,
        id: uuidv4(),
      }));

      return doubleCards;
    } catch (err) {
      console.error(err);
    }
  }
}
