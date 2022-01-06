<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-white border-bottom navbar-light">
        <router-link class="navbar-brand mr-auto" :to="{name: 'home'}">LaravelBnb</router-link>

          <ul class="navbar-nav">
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
            </li>

            <li class="nav-item" v-if="!isLoggedIn">
              <router-link :to="{name: 'login'}" class="nav-link">Sign-in</router-link>
            </li>

            <li class="nav-item" v-if="isLoggedIn">
              <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
            </li>
          </ul>
        </nav>

        <div class="container mt-4 mb-4 pr-4 pl-4">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useStore, mapState } from 'vuex';
import { isLoggedIn } from './shared/utils/auth';

export default ({
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoggedIn = null;

    const logout = async () => {
      try {
        axios.post("/logout");
        router.push({name:'login'});
        store.dispatch("logout");
      } catch (error) {
        store.dispatch("logout");
      }
    }

    // const isLoggedIn = computed(()=>{
      
    // });


    return {
      logout
    }
    
  },
  computed: {
    ...mapState({
      isLoggedIn: "isLoggedIn"
    }),
  }
})
</script>
