<template>
  <header class="AppHeader">
    <span>Logo</span>
    <div class="shoppingBag">
      <div class="count" v-if="!isEmpty">{{ count }}</div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title>shopping-cart</title>
        <path fill="currentColor" d="M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"></path>
      </svg>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useBasketStore } from '@/stores/basket'

const { count, isEmpty } = storeToRefs(useBasketStore())
</script>

<style>
.AppHeader{
  height: 80px;
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
}

.AppHeader .shoppingBag{
  position: relative;
}

.AppHeader .count{
  background-color: #9600ff;
  width: max-content;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  min-width: 23px;
}
.AppHeader .shoppingBag svg{
  width: 30px;
  height: 40px;
  margin-top: 15px;
  margin-right: 15px;
}
</style>