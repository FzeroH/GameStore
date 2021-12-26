import {createRouter, createWebHistory} from "vue-router";
import MainPage from "../components/MainPage";
import Authorization from "../components/ui/Authorization";
import Registration from "../components/ui/Registration";
import RegistrationDeveloper from "../components/registration/RegistrationDeveloper";
import AuthorizationModer from "../components/authorization/AuthorizationModer";
import ModeratorPanel from "../components/ModeratorPanel";
import GamePage from "../components/templates/GamePage";
import ModeratorGamePage from "../components/templates/ModeratorGamePage";
import UserProfile from "../components/profiles/user_profile/UserProfile";
import Library from "../components/profiles/user_profile/Library";
import PersonalData from "../components/profiles/user_profile/PersonalData";
import Profile from "../components/profiles/user_profile/Profile";
import DeveloperProfile from "../components/profiles/developer_profile/DeveloperProfile";
import DProfile from "../components/profiles/developer_profile/DProfile";
import DPersonalData from "../components/profiles/developer_profile/DPersonalData";
import DLibrary from "../components/profiles/developer_profile/DLibrary";
import DAddGame from "../components/profiles/developer_profile/DAddGame";

const routes = [
    {
        path:'/',
        component: MainPage
    },

    {
        path: '/auth',
        name: 'Auth',
        component: Authorization,
    },

    {
        path:'/registration',
        name: 'Register',
        component: Registration
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
        component: ModeratorPanel,
    },

    {
        path:'/game',
        component: GamePage
    },

    {
        path:'/moderator_game',
        component: ModeratorGamePage
    },

    {
        path:'/user/:id',
        component: UserProfile,
        children: [
            {
                path:'',
                component: Profile
            },
            {
                path:'personal_data',
                component: PersonalData
            },
            {
                path:'library',
                component: Library
            },
        ]
    },
    {
        path:'/dev/:id',
        component: DeveloperProfile,
        children: [
            {
                path:'',
                component: DProfile
            },
            {
                path:'personal_data',
                component: DPersonalData
            },
            {
                path:'library',
                component: DLibrary
            },
            {
                path:'add_game',
                component: DAddGame
            },
        ]
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router