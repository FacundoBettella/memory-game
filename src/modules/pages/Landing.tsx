import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCards } from "../redux/slices/cards.slice";
import { RootState } from "../../store/store";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading: boolean = useSelector((state: RootState) => state.isLoading);
  const { item, saveNewItem } = useLocalStorage("username-memorygame");

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username !== "") {
      saveNewItem("username-memorygame", username)
    }

  }

  useEffect(() => {
    dispatch(fetchCards())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {
        isLoading ? (<h2>Loading game..</h2>) : (
          <div className="container py-5">
            <h1 className="text-center mb-4">Memory Card Game</h1>
            <div className="card p-3 mx-auto" style={{ maxWidth: '400px' }}>
              {
                item !== "" ? (
                  <>
                    <h4 className="text-center mb-4">¡Welcome again {item}!</h4>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={() => navigate("/memory-game")}
                      >
                        Play
                      </button>
                    </div>
                  </>
                ) : (

                  <>
                    <h2 className="text-center mb-3">Ingresa tu nombre</h2>
                    <form>
                      <div className="mb-3">
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
                      <div className="d-grid">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Comenzar
                        </button>
                      </div>
                    </form>
                  </>
                )
              }

            </div>
          </div>
        )
      }
    </>
  )
}
export default Landing;