import "./landing.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/slices/cards.slice";
import { RootState } from "../../../store/store";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

const Landing = () => {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading: boolean = useSelector((state: RootState) => state.isLoading);
  const { item, saveNewItem } = useLocalStorage("username-memorygame");

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username !== "") {
      saveNewItem("username-memorygame", username);
    }
  };

  useEffect(() => {
    dispatch(fetchCards());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-landing">
      {isLoading ? (
        <h2 className="title">Wait..</h2>
      ) : (
        <>
          <h2 className="title">Memory Card Game</h2>
          <div className="card-landing">
            {item !== "" ? (
              <>
                <h4 className="username-title">Welcome {item}</h4>
                <div className="">
                  <Button
                    color="primary"
                    text="¡Let's play!"
                    type="submit"
                    onClick={() => navigate("/memory-game")}
                  />
                </div>
              </>
            ) : (
              <>
                <h2 className="username-title">Introduce your name</h2>
                <form>
                  <div className="username-input">
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={username}
                      onChange={handleUsername}
                    />
                  </div>
                  <div className="">
                    <button
                      className="submit-button"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Start
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Landing;
