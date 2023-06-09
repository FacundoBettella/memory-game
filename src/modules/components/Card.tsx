import { useDispatch } from "react-redux";
import { ICheckCardsTitle, flipCard } from "../redux/slices/cards.slice";
import { useCustomLazyLoading } from "../hooks/useLazingLoading";

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

  console.log(show, element);

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
          className="col"
          onClick={() => handleClick(id, title)}
          style={
            !state || !selected
              ? {
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#0d6efd",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid #4b94ff",
                  cursor: "pointer",
                  flexWrap: "wrap",
                  margin: "0 auto",
                  borderRadius: "8px",
                }
              : {
                  width: "100px",
                  height: "100px",
                  border: "3px solid #4b94ff",
                  cursor: "none",
                  borderRadius: "8px",
                }
          }
        >
          {state || selected ? (
            <div
              className="card h-70"
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #4b94ff",
                borderRadius: "8px",
              }}
            >
              <img
                src={image && image}
                className="card-img-top"
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ) : (
            <strong style={{ color: "white" }}>?</strong>
          )}
        </div>
      )}
    </article>
  );
};

export default Card;
