import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import {Main} from "../components/Main/Main";
import {Discipline} from "../pages/Discipline/Discipline";
import {Login} from "../features/auth/login/Login";
import {Score} from "../pages/Score/Score";
import {Standings} from "../pages/Standings/Standings";
import {Teams} from "../pages/Teams/Teams";
import {BoxScore} from "../pages/BoxScore/BoxScore";
import Stats from "../pages/Stats/Stats";
import {Register} from "../features/auth/register/Register";
import Schedule from "../pages/Shedule/Schedule";
import {Page404} from "../pages/Page404/Error404";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
            {
                path: "/:discipline",
                element: <Discipline/>,
                children: [
                    {
                        path: "scores",
                        element: <Score/>,
                    },
                    {
                        path: "scores/:slug",
                        element: <BoxScore/>,
                    },
                    {
                        path: "standings",
                        element: <Standings/>,
                    },
                    {
                        path: "schedule",
                        element: <Schedule/>
                    },
                    {
                        path: "teams",
                        element: <Teams/>,
                    },
                    {
                        path: "stats",
                        element: <Stats/>,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "*",
        element: <Navigate to='/404'/>,
    },
    {
        path: "/404",
        element: <Page404/>,
    },
]);