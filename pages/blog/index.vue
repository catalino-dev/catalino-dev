<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})
</script>

<template>
  <div class="py-10">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    <div class="grid gap-8">
      <article v-for="post in posts" :key="post.path" class="flex flex-col gap-2">
        <NuxtLink :to="post.path" class="group">
          <h2 class="text-2xl font-semibold group-hover:text-green-500 transition">
            {{ post.title }}
          </h2>
        </NuxtLink>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          {{ new Date(post.date).toLocaleDateString() }}
        </div>
        <p class="text-gray-600 dark:text-gray-300">
          {{ post.description }}
        </p>
      </article>
    </div>
  </div>
</template>
