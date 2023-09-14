import { reactive, computed, watch, nextTick } from 'vue';
const counterData = reactive({
    counter: 0,
    title: 'Home Default Title',
});
export function useCounter (){


    watch(() => counterData.counter, (newValue) => {
        if(newValue > 10) {
            counterData.title = 'Counter is greater than 10';
        } else {
            counterData.title = 'Counter is less than 10';
        }
    });

      const increaseCounter =  async(amount, e) => {
        counterData.counter += amount;
      }
      const decreaseCounter = amount => counterData.counter -= amount;

      const oddOrEven = computed(() => {
        return counterData.counter % 2 === 0 ? 'even' : 'odd';
      });

      return {
        counterData,
        increaseCounter,
        decreaseCounter,
        oddOrEven
      }
}