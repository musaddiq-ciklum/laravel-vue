<template>
    <div class="w-50 m-auto">
    <div class="card card-body">
      <form>
        <BaseInput 
          v-model="email"
          name="email"
          label="E-mail"
          type="email"
          :errors="errorFor('email')"
        />
        
        <BaseInput 
          v-model="password"
          name="password"
          label="Password"
          type="password"
          :errors="errorFor('password')"
        />

        <div class="mt-3">
          <button
            type="submit"
            class="btn btn-primary btn-lg btn-block"
            :disabled="loading"
            @click.prevent="login"
          >Log-in</button>
        </div>

        <div>
          No account yet?
          <router-link :to="{name: 'register'}" class="font-weight-bold">Register</router-link>
        </div>

        <div>
          Forgotten password?
          <router-link :to="{name: 'home'}" class="font-weight-bold">Reset password</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import {logIn , isLoggedIn} from './../../shared/utils/auth.js'
import BaseInput from "./../../shared/components/BaseInput"

export default({
  components:{ BaseInput },
  setup() {

    const router = useRouter();
    const store = useStore();

    const email = ref('');
    const password = ref('');
    const loading = ref(null);

    let errors = ref(null);
    
    const errorFor = (field) => {
      return null !== errors.value && errors.value[field]
          ? errors.value[field]
          : null;
    }

    async function login() {
      loading.value = true;
      errors.value = null;
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/login", {
          email: email.value,
          password: password.value
        });
        
        logIn();
        store.dispatch('loadUser');
        router.push({ name: 'dashboard' });
      } catch (err) {
        errors.value = err.response && err.response.data.errors;
        console.log(errors.value)
      }
      loading.value = false;
    }

    return{
      loading,
      email,
      password,
      errorFor,
      login
    }
  },
})
</script>

