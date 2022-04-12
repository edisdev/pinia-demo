<template>
  <div class="CategoryContent">
    <h1 class="CategoryName">{{ categoryName }}</h1>
    <div class="ProductList">
      <ProductItem
        v-for="product in productList"
        class="ProductListItem"
        :key="product.id"
        :product="product"
        :count="getQuantity(product.id)"
        @add-product="addProduct"
        @update-quantity="updateQuantity"/>
    </div>
  </div>
</template>

<script setup>
import ProductItem from '@/components/ProductItem.vue'

const emit = defineEmits(['addProduct', 'updateQuantity'])

const props = defineProps({
  categoryName: { type: String, required: true },
  productList: { type: Array, default: () => ([])},
  basketItems: { type: Array, default: () => ([])}
})


function getQuantity (productId) {
  return props.basketItems.filter(i => i.id === productId).reduce((quantity, item) => {
    quantity += item.quantity
    return quantity
  }, 0)
}


function addProduct (product) {
  emit('addProduct', product)
}

function updateQuantity (product) {
  emit('updateQuantity', product)
}

</script>

<style scoped>
.CategoryContent{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.CategoryName{
  text-align: center;
  margin-bottom: 40px;
}
.ProductList{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.ProductList .ProductListItem{
  height: 300px;
  width: 250px;
}
</style>