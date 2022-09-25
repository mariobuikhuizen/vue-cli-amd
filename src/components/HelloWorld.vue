<template>
  <div>
    <h1>vue version: {{ version }}</h1>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'HelloWorld',
  data() {
    return {
      version: "-"
    };
  },
  created() {
    try {
      this.version = Vue.version;
    } catch (e) {
      this.version = "error: Vue is not defined";
      throw e
    }

  }
}
</script>
