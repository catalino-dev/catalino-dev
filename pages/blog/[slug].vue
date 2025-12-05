<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <div class="py-10 max-w-3xl mx-auto">
    <article v-if="post" class="prose dark:prose-invert max-w-none">
      <h1 class="mb-4">{{ post.title }}</h1>
      <div class="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
        <time>{{ new Date(post.date).toLocaleDateString() }}</time>
        <div class="flex gap-2">
          <span v-for="tag in post.tags" :key="tag" class="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
            #{{ tag }}
          </span>
        </div>
      </div>
      <ContentRenderer :value="post" />
    </article>
    <div v-else class="py-20 text-center">
      <h1 class="text-2xl font-bold mb-4">Post not found</h1>
      <NuxtLink to="/blog" class="text-green-500 hover:underline">Back to blog</NuxtLink>
    </div>
  </div>
</template>
