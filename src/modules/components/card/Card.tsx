import "./card.scss";
import { useDispatch } from "react-redux";
import { ICheckCardsTitle, flipCard } from "../../redux/slices/cards.slice";
import { useCustomLazyLoading } from "../../hooks/useLazingLoading";

interface IProps {
  id?: string;
  title: string;
  state: boolean;
  image: string;
  selected: boolean;
  handleCard: (card: ICheckCardsTitle) => void;
}

const Card = ({
  id = "",
  title,
  image,
  state,
  selected,
  handleCard,
}: IProps) => {
  const dispatch = useDispatch();
  const { show, element } = useCustomLazyLoading();

  const handleClick = (id: string, title: string) => {
    if (state || selected) {
      return;
    }
    dispatch(flipCard(id));
    handleCard({ id, title });
  };

  return (
    <article ref={element}>
      {show && (
        <div
          key={id}
          className={!state || !selected ? "not-select-card" : "select-card"}
          onClick={() => handleClick(id, title)}
        >
          {state || selected ? (
            <div className="select-img">
              <img src={image && image} className="img" alt={title} />
            </div>
          ) : (
            <strong style={{ color: "white" }}>X</strong>
          )}
        </div>
      )}
    </article>
  );
};

export default Card;
