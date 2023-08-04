<template>
  <div class="home">
    <div>{{ counterData.title }}</div>
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
    <input type="text" v-model="counterData.title" />
  </div>
</template>
<script setup>
  import { reactive } from 'vue';
  const counterData = reactive({
    counter: 0,
    title: 'Home Default Title',
  });
  const increaseCounter = () => counterData.counter++;
  const decreaseCounter = () => counterData.counter--;

</script>

<style>
.home{
  text-align: center;
  padding:20px;
  .btn, .counter {
     font-size: 40px;
    margin: 10px;
  }
}
</style>
