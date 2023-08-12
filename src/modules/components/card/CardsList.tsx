import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ICheckCardsTitle,
  checkCardsName,
  gameResult,
  unFlipCard,
} from "../../redux/slices/cards.slice";
import { Card } from "../index";
import { ICard } from "../../domain/model/card/card.model";

interface CardProps {
  cards: ICard[];
}

const CardsList = ({ cards = [] }: CardProps) => {
  const dispatch = useDispatch();
  const [cardsSelected, setCardsSelected] = useState<ICheckCardsTitle[]>([]);

  const handleClick = (card: ICheckCardsTitle) => {
    if (cardsSelected.length === 2) {
      return;
    }
    setCardsSelected((prev) => [...prev, card]);
  };

  const handleCards = useCallback(() => {
    const [card1, card2] = cardsSelected;
    dispatch(checkCardsName({ card1, card2 }));
    setCardsSelected([]);

    return setTimeout(() => {
      dispatch(unFlipCard(card1.id));
      dispatch(unFlipCard(card2.id));
      dispatch(gameResult());
    }, 300);
  }, [cardsSelected, dispatch]);

  useEffect(() => {
    if (cardsSelected.length === 2) handleCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsSelected]);

  return (
    <div className="container-fluid">
      <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 g-2">
        {cards.map((card, index) => (
          <Card {...card} key={index} handleCard={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
