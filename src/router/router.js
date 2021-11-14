import {createRouter, createWebHistory} from "vue-router";
import MainPage from "../components/MainPage";
import AuthorizationUser from "../components/authorization/AuthorizationUser";
import AuthorizationDeveloper from "../components/authorization/AuthorizationDeveloper";
import RegistrationUser from "../components/registration/RegistrationUser";
import RegistrationDeveloper from "../components/registration/RegistrationDeveloper";
import AuthorizationModer from "../components/authorization/AuthorizationModer";
import ModeratorPanel from "../components/ModeratorPanel";
import GamePage from "../components/templates/GamePage";
import ModeratorGamePage from "../components/templates/ModeratorGamePage";

const routes =[
    {
        path:'/',
        component: MainPage
    },

    {
        path:'/user_auth',
        component: AuthorizationUser
    },

    {
        path:'/developer_auth',
        component: AuthorizationDeveloper
    },

    {
        path:'/user_registration',
        component: RegistrationUser
    },

    {
        path:'/developer_registration',
        component: RegistrationDeveloper
    },

    {
        path:'/moderator_auth',
        component: AuthorizationModer
    },

    {
        path:'/moderator_panel',
        component: ModeratorPanel
    },

    {
        path:'/game',
        component: GamePage
    },

    {
        path:'/moderator_game',
        component: ModeratorGamePage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router