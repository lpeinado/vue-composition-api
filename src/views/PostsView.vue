<template>
    <div>
        Posts view page
        <ul>
            <li v-for="post in arrayOfPosts"  key="post.id">
                <router-link :to="`/postDetail/${post.id}`"> Post {{ post.id }}</router-link>
            </li>
        </ul>
        <div>
            <button :class="counter.oddOrEven.toLowerCase()" class="counter-button" @click="counter.increaseCounter(1)">{{ counter.count }} </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();

const arrayOfPosts = ref([
    {id:1,
    title: 'Post 1',
    },
    {id:2,
    title: 'Post 2',
    },
    {id:3,
    title: 'Post 3',
    },
    {id:4,
    title: 'Post 4',
    }
]);
</script>

<style scoped>
 .counter-button {
     font-size: 40px;
     margin: 10px;
     min-width: 100px;
     min-height: 50px;
 }
 .odd {
     background-color: red;
 }
    .even {
        background-color: green;
    }
</style>