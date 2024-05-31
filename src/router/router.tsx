import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Main} from "../components/Main/Main";
import {Discipline} from "../pages/discipline/Discipline";
import {Teams} from "../ui/teams/Teams";
import {Score} from "../ui/score/Score";
import {Standings} from "../ui/standings/Standings";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Main/>
            },
            {
                path: '/:discipline',
                element: <Discipline/>,
                children: [
                    {
                        path: 'score',
                        element: <Score/>
                    },
                    {
                        path: 'standings',
                        element: <Standings/>
                    },
                    {
                        path: 'schedule',
                        element: <div>schedule</div>
                    },
                    {
                        path: 'teams',
                        element: <Teams/>
                    },
                    {
                        path: 'playoff',
                        element: <div>playoff</div>
                    },
                ]
            },
        ]
    },
])

