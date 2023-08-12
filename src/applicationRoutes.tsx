import { FunctionComponent } from "react";
import { Landing, MemoryGame, Results } from "./modules/pages";

import { Navigate } from "react-router-dom";

enum PATHS {
  LANDING = "/",
  MEMORY_GAME = "/memory-game",
  RESULTS = "/results",
}

export interface RouteInterface {
  path: PATHS | "**";
  Component: FunctionComponent;
  exact?: boolean;
}

const ApplicationRoutes: { Routes: RouteInterface[] } = {
  Routes: [
    {
      path: PATHS.LANDING,
      Component: Landing,
    },
    {
      path: PATHS.MEMORY_GAME,
      Component: MemoryGame,
    },
    {
      path: PATHS.RESULTS,
      Component: Results,
    },
    {
      path: "**",
      Component: () => <Navigate to={PATHS.LANDING} />,
    },
  ],
};

export default ApplicationRoutes;
