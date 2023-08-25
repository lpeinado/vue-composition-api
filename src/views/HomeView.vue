<template>
  <h2>{{ appTitle }}</h2>
  <div class="home">
    <div>{{ counterData.title }}</div>
    <div>
      <button class="btn" @click="decreaseCounter(2, $event)">-</button>
      <span class="counter" ref="counterRef">{{ counterData.counter }}</span>
      <button class="btn" @click="increaseCounter(3, $event)">+</button>
    </div>
    <input type="text" v-model="counterData.title" v-autofocus />
    <!-- <pre>{{ eventObj }}</pre> -->
    <p>The counter now is: {{ oddOrEven }}</p>
    <p>Now I put a checkbox managed with a v-model to see how easy it is:</p>
    <hr>
    <input type="checkbox" v-model="dummyCheckboxValue">
    <pre>Value of the above checkbox: {{ dummyCheckboxValue }}</pre>
    <div>Now we display a dynamic component with the :is  directive</div>
    <component :is="dummyCheckboxValue ? ComponentB : ComponentA"></component>
  </div>
</template>
<script setup>
  import { ref, reactive, computed, watch, onBeforeUpdate, onUpdated, nextTick } from 'vue';
  import{ vAutofocus} from '@/directives/vAutofocus.ts';
  import ComponentA from '@/components/ComponentA.vue';
  import ComponentB from '@/components/ComponentB.vue';

  const dummyCheckboxValue = ref(false);
  const counterRef = ref(null);
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

  onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
  });
  onUpdated(() => {
    console.log('onUpdated');
  });

  const increaseCounter =  async(amount, e) => {
    counterData.counter += amount;
    console.log("before next tick", counterRef.value.innerHTML);
    await nextTick();
    console.log("after next tick", counterRef.value.innerHTML);
    //console.log(e);
    //eventObj.value = JSON.parse(JSON.stringify(e));
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
