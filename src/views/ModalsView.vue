<template>
    <div>
        <h1>Modals here</h1>
        <button @click="showModal = true">Show modal</button>
        <teleport to='body' >
            <div v-if="showModal" class="modal">
                <h1>This is a modal</h1>
                <div>Lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                <button @click="showModal = false">Hide modal</button>
            </div>
        </teleport>

    </div>
</template>

<script setup>
import{ ref } from 'vue';

const showModal = ref(false);
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