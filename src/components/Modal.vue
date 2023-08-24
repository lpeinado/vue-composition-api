<template>
    <div>
        <teleport to='body' >
            <div class="modal">
                <h1>
                    <slot name="title"/>
                </h1>
                <slot />
                <button @click="showModal = false">Hide modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
import { useSlots } from 'vue';
const slots = useSlots();

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