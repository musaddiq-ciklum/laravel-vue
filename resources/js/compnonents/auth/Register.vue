<template>
    <div class="w-50 m-auto">
    <div class="card card-body">
      <form>
        
        <BaseInput 
          v-model="name"
          name="name"
          label="Name"
          type="text"
          :errors="errorFor('name')"
        />

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

        <BaseInput 
          v-model="password_confirmation"
          name="password_confirmation"
          label="Re-type Password"
          type="password"
          :errors="errorFor('password_confirmation')"
        />

        <button
          type="submit"
          class="btn btn-primary btn-lg btn-block"
          :disabled="loading"
          @click.prevent="register"
        >Register</button>

        <hr />

        <div>
          Having account?
          <router-link :to="{name: 'login'}" class="font-weight-bold">Login</router-link>
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
    components: { BaseInput },
    setup() {
        const router = useRouter();
        const store = useStore();

        const name = ref('');
        const email = ref('');
        const password = ref('');
        const password_confirmation = ref('');
        const loading = ref(null);

        let errors = ref(null);
        
        const errorFor = (field) => {
        return null !== errors.value && errors.value[field]
            ? errors.value[field]
            : null;
        }

        async function register(){
            loading.value = true;
            errors.value = null;

            try{
                const user= {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    password_confirmation: password_confirmation.value
                };
                await axios.post("/register", user);
                
                logIn();
                store.dispatch('loadUser');
                router.push({ name: 'dashboard' });

            }catch(err){
                errors.value = err.response && err.response.data.errors;
                console.log(errors.value)
            }

            loading.value = false;
        }

        return {
            loading,
            name,
            email,
            password,
            password_confirmation,
            errorFor,
            register
        }
    }

})

</script>
