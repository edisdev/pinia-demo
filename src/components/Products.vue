<template>
<h1 class="ProductTitle">Ürünler</h1>
<template v-if="isFetchingProducts">
  <div class="ProductLoader">
    <Loader/>
  </div>
</template>
<div v-else class="categories">
  <Category
    v-for="(category, categoryName) in categories"
    :key="categoryName"
    :category-name="categoryName"
    :product-list="category"
    :basket-items="basketItems"
    @update-quantity="updateQuantity"
    @add-product="addProduct"/>
</div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/product'
import { useBasketStore } from '@/stores/basket'
import Category from './Category.vue'
import Loader from './Loader.vue'

const productStore = useProductStore()
const basketStore = useBasketStore()

const { categories, isFetchingProducts } = storeToRefs(productStore)

const { basketItems } = storeToRefs(basketStore)

function addProduct (item) {
  basketStore.addItem(item)
}

function updateQuantity(item) {
  basketStore.updateQuantity(item)
}

onMounted(async () => {
  await productStore.fetchProducts()
})
</script>

<style scoped>
.ProductLoader{
  display: flex;
  justify-content: center;
}
.ProductTitle{
  margin-bottom: 40px;
  border: 1px solid #efff;
}
</style>