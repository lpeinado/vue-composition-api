<template>
  <h2>{{ appTitle }}</h2>
  <div>Is the user <i>Online</i>? : <span style="color:red;">{{ online ? 'Connected' : 'Disconnected' }}</span>  </div>
  <div class="home">
    <div>{{ counter.title }}</div>
    <div>
      <button class="btn" @click="counter.decreaseCounter(2)">--</button>
      <button class="btn" @click="counter.decreaseCounter(1)">-</button>
      <span class="counter" ref="counterRef">{{ counter.count }}</span>
      <button class="btn" @click="counter.increaseCounter(1)">+</button>
      <button class="btn" @click="counter.increaseCounter(2)">+</button>
    </div>
    <input type="text" v-autofocus />
    <!-- <pre>{{ eventObj }}</pre> -->
    <p>The counter now is: {{ counter.oddOrEven }}</p>
    <p>Now I put a checkbox managed with a v-model to see how easy it is:</p>
    <hr>
    <input type="checkbox" v-model="dummyCheckboxValue">
    <pre>Value of the above checkbox: {{ dummyCheckboxValue }}</pre>
    <div>Now we display a dynamic component with the :is  directive</div>
    <component :is="dummyCheckboxValue ? ComponentB : ComponentA"></component>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import{ vAutofocus} from '@/directives/vAutofocus.ts';
  import ComponentA from '@/components/ComponentA.vue';
  import ComponentB from '@/components/ComponentB.vue';
  import { useOnline } from '@vueuse/core'
  import { useCounterStore } from '@/stores/counter';

  const dummyCheckboxValue = ref(false);
  const counterRef = ref(null);
  const appTitle = 'My amazing couter app';
  const online = useOnline();

  const counter = useCounterStore();
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
