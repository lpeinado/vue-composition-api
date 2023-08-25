<template>
    <div>
        <teleport to='body' >
            <div v-if="modelValue" class="modal">
                <h1>{{ title }}
                </h1>
                <slot />
                <button @click="$emit('update:modelValue',false)">Hide modal</button>
                <div>My user data injected is here: {{ userData.name }}</div>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "Default title",
    }
});

const emits = defineEmits(['update:modelValue']);
const userData = inject('userData');


</script>

<style scoped>
.modal{
    padding: 100px;
    background: beige;
    margin: auto;
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    position: absolute;
}
</style>