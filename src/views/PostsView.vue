<template>
    <div>
        Posts view page
        <ul>
            <li v-for="post in arrayOfPosts"  key="post.id">
                <router-link :to="`/postDetail/${post.id}`"> Post {{ post.id }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
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

</style>