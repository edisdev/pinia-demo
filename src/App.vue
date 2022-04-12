<template>
  <AppHeader/>
  <Products />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import Products from '@/components/Products.vue'
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app button{
  background: none;
  outline: none;
  border: 1px solid rgba(44, 62, 80, 0.4);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

#app button:hover{
  background-color: darken(transparent, 50%);
}
</style>