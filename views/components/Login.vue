<template>
  <primary-button text="A button"></primary-button>
</template>

<script>
  import PrimaryButton from './PrimaryButton.vue'
  
  export default {
    name: 'login',
    // List the components used on this page. This is using ES2015 syntax,
    // where PrimaryButton is the same as 'PrimaryButton': PrimaryButton
    components: {
      PrimaryButton
    }
  }
</script>