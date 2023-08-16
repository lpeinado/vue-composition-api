<template>
  <h2>{{ appTitle }}</h2>
  <div class="home">
    <div>{{ counterData.title }}</div>
    <div>
      <button class="btn" @click="decreaseCounter(2, $event)">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button class="btn" @click="increaseCounter(3, $event)">+</button>
    </div>
    <input type="text" v-model="counterData.title" />
    <!-- <pre>{{ eventObj }}</pre> -->
    <p>The counter now is: {{ oddOrEven }}</p>
  </div>
</template>
<script setup>
  import { ref, reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue';
  const appTitle = 'My amazing couter app';
  const counterData = reactive({
    counter: 0,
    title: 'Home Default Title',
  });
  watch(() => counterData.counter, (newValue) => {
    if(newValue > 10) {
      counterData.title = 'Counter is greater than 10';
    } else {
      counterData.title = 'Counter is less than 10';
    }
  });
  const eventObj = ref({});

  onBeforeMount(() => {
    console.log('onBeforeMount');
  });
  onMounted(() => {
    console.log('onMounted');
  });
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
  });
  onUnmounted(() => {
    console.log('onUnmounted');
  });
  onActivated(() => {
    console.log('onActivated');
  });
  onDeactivated(() => {
    console.log('onDeactivated');
  });

  const increaseCounter = (amount, e) => {
    counterData.counter += amount;
    console.log(e);
    eventObj.value = JSON.parse(JSON.stringify(e));
  }
  const decreaseCounter = amount => counterData.counter -= amount;

  const oddOrEven = computed(() => {
    return counterData.counter % 2 === 0 ? 'even' : 'odd';
  });

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
