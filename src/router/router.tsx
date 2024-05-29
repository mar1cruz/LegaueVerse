import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Main} from "../components/Main/Main";
import {Discipline} from "../pages/discipline/Discipline";
import {Teams} from "../ui/teams/Teams";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                path: '/',
                element: <Main/>
            },
            {
                path: '/:discipline',
                element: <Discipline/>,
                children: [
                    {
                        path: 'score',
                        element: <div>score</div>
                    },
                    {
                        path: 'standings',
                        element: <div>standings</div>
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

