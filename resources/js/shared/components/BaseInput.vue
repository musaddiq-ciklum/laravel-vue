<template>
    <div class="form-group">
        <label :for="name">{{ label }}</label>
        <input
            v-bind="$attrs"
            :value="modelValue"
            :placeholder="label"
            @input="$emit('update:modelValue', $event.target.value)"
            class="form-control"    
            :class="[{'is-invalid': errors}]"            
        /> 
        <v-errors  :errors="errors"></v-errors>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    name:{
        type: String,
        default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    errors:{
     type:[String],
     default:null}
    }
}
</script>