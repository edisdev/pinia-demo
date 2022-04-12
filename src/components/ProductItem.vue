<template>
<div class="ProductItem">
  <span class="title">{{ product.title }}</span>
  <img class="image" :src="product.image">
  <div class="footer">
    <template v-if="count === 0">
      <button @click="addProduct">Ürün Ekle</button>
    </template>
    <div v-else class="counters">
      <button @click="minus"> - </button>
      <span>{{ quantity }}</span>
      <button @click="plus"> + </button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const emit = defineEmits(['add', 'updateQuantity'])
const props = defineProps({
  product: { type: Object, default: () => ({})},
  count: { type: Number, default: 0 }
})

const quantity = ref(0)

const productId = computed(() => {
  return props.product.id
})

function addProduct () {
  quantity.value = 1
  emit('addProduct', {
    id: productId.value,
    quantity: quantity.value
  })
}

function plus () {
  quantity.value ++
}

function minus () {
  if (quantity.value > 0) quantity.value --
}

watch(() => quantity.value, () => {
  emit('updateQuantity', {
    id: productId.value,
    quantity: quantity.value
  })
})

</script>

<style scoped>
.ProductItem{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #dcdd;
  border-radius: 5px;
  padding: 20px;
}


.ProductItem .title{
  flex: 1;
  margin-bottom: 10px;
}
.ProductItem .image{
  max-width: 130px;
  max-height: 130px;
  object-fit: contain;
  align-self: center;
}

.ProductItem .footer{
  margin-top: 20px;
}

.ProductItem .footer .counters{
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.ProductItem .footer .counters button{
  border-radius: 50% !important;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 20px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>