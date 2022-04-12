import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
  state: () => ({
    basketItems: []
  }),
  getters: {
    count (state) {
      return state.basketItems.reduce((quantity, item) => {
        quantity += item.quantity
        return quantity
      }, 0)
    },
    isEmpty () {
      return this.count === 0
    } 
  },
  actions: {
    addItem (item) {
      this.basketItems.push(item)
    },
    removeItem (item) {
      const index = this.basketItems.findIndex(i => i.id === item.id)
      this.basketItems.splice(index, 1)
    },
    updateQuantity (item) {
      const index = this.basketItems.findIndex(i => i.id === item.id)
      const updatedItem = this.basketItems.find(i => i.id === item.id)
      if (item.quantity === 0) {
        this.basketItems.splice(index, 1)
      } else {
        this.basketItems.splice(index, 1, {
          ...updatedItem,
          quantity: item.quantity
        })
      }
    }
  }
})