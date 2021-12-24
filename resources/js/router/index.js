import { createRouter, createWebHistory } from "vue-router";

import ExampleComponent from './../compnonents/ExampleComponent';
import Login from './../compnonents/auth/Login';


const routes = [
    {
        path: '/home',
        name: 'home',
        component: ExampleComponent
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: ExampleComponent
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
