import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import Quiz from "../pages/Quiz/Quiz";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "quiz/:category",
        element: <Quiz />
    },
    {
        path: "leaderboard",
        element: <LeaderBoard />
    },
    {
        path: "score"
    }
]);