import { useEffect, FunctionComponent } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ApplicationRoutes from "../../../applicationRoutes";
import { RootState } from "../../../store/store";

const { Routes: AppRoutes } = ApplicationRoutes;

interface AppRoutesProps {
  Component: FunctionComponent;
  path: string;
  exact?: boolean;
}

const BodyComponent = () => {
  const navigate = useNavigate();
  const result: boolean = useSelector((state: RootState) => state.gameResult);

  useEffect(() => {
    if (result) navigate("/results");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <Routes>
      {AppRoutes.map((route: AppRoutesProps, index) => (
        <Route {...route} key={index} />
      ))}
    </Routes>
  );
};
export default BodyComponent;
