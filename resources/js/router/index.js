import { createRouter, createWebHistory } from "vue-router";

import ExampleComponent from './../compnonents/ExampleComponent';
import Login from './../compnonents/auth/Login';
import Register from './../compnonents/auth/Register';


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
        component: Register
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
