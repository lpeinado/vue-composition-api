<template>
    <h3 ref="appTitleRef">
        A single post detail page
    </h3>
    <p>This is the detail page for post with id <span style="color:red; font-weight:bold;">{{ route.params.id }}</span></p>
    <button @click="showPostId">GET ID</button>
    <div>
        <router-link to="/posts">&lt; Back to posts</router-link>
    </div>
    <div>
        <button @click="goHomeIn3">Go home in 3 seconds</button>
    </div>
    <div>
        <button @click="goFirstPost">Go to first post</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const appTitleRef = ref(null);

const showPostId = () => {
    console.log("ROUTE OBJECT", route.fullPath);
    console.log("ID", route.params.id);
};

const goHomeIn3 = () => {
    setTimeout(() => {
        router.push({ name : 'home' });
    }, 1000);
};

const goFirstPost = () => {
    router.push({ name : 'postDetail', params : { id : 1 } });
};

onMounted(() => {
    console.log(`The app title width is ${appTitleRef.value.offsetWidth} pixels`);
});

</script>

<style lang="scss" scoped>

</style>