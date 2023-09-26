import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "quiz"
    },
    {
        path: "leaderboard",
        element: <LeaderBoard />
    },
    {
        path: "score"
    }
]);