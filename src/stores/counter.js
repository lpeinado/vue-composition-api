import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state:()=>({
    count: 0,
    title:'My Pinia store title'
  }),
  actions: {
    increaseCounter() {
      this.count++;
    },
    decreaseCounter() {
      this.count--;
    }
  }
});
