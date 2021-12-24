require('./bootstrap');

import { createApp } from "vue";
import Vuex from 'vuex';

import store from './store'
import router from './router'

import ValidationErrors from "./shared/components/ValidationErrors";
import Index from "./index.vue";

const app = createApp({
    components:{
        "index":Index
    },
});

app.component('v-errors', ValidationErrors);

app.use(router);
app.use(Vuex);
app.use(store);
app.mount('#app')
