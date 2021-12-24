<template>
    <div 
        class="invalid-feedback" 
        v-for="(error, index) in errors" :key="key(index)"
    >{{ error }}
    </div>
</template>

<script>
export default {
  props: ["errors"],
  setup(){

      const key = (index) => {
        return `validation_error_${index}_${Math.random()}`;
    }

    return{
        key
    }
  }
};
</script>

<style scoped>
.form-control.is-invalid  > .invalid-feedback {
  display: block;
}
</style>