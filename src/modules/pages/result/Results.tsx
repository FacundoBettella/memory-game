import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCardState } from "../../redux/slices/cards.slice";
import { Button } from "../../components";

const Results = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(resetCardState());
    navigate("/memory-game");
  };

  return (
    <>
      <h1>You win!</h1>
      <Button color="primary" text="Play again" onClick={handleClick} />
    </>
  );
};
export default Results;
