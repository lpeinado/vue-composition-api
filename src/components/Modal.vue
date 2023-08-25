<template>
    <div>
        <teleport to='body' >
            <div v-if="modelValue" class="modal">
                <div>{{ userData.name }} @{{ userData.surname }}</div>
                <h1>{{ title }}
                </h1>
                <slot />
                <button @click="$emit('update:modelValue',false)">Hide modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "Default title",
    },
    userData: {
        type: Object,
        default: () => ({}),
    },
});

const emits = defineEmits(['update:modelValue']);


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