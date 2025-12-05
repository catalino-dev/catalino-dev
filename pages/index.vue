<script setup lang="ts">
const { data: posts } = await useAsyncData('latest-posts', () => {
  return queryCollection('blog').limit(3).order('date', 'DESC').all()
})
</script>

<template>
  <div>
    <section class="py-20">
      <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
        Hi, I'm Catalino
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
        Open source developer, contributing to the Vue, Nuxt, and Vite ecosystems.
        Building tools to make the web faster and more enjoyable.
      </p>
      <div class="mt-8 flex gap-4">
        <NuxtLink to="/projects" class="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition">
          View Projects
        </NuxtLink>
        <NuxtLink to="/blog" class="px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
          Read Blog
        </NuxtLink>
      </div>
    </section>

    <section v-if="posts?.length" class="py-10">
      <h2 class="text-3xl font-bold mb-8">Latest Posts</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink 
          v-for="post in posts" 
          :key="post.path" 
          :to="post.path"
          class="group block p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-green-500/50 dark:hover:border-green-500/50 transition bg-white dark:bg-gray-900/50"
        >
          <h3 class="text-xl font-semibold mb-2 group-hover:text-green-500 transition">
            {{ post.title }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
            {{ new Date(post.date).toLocaleDateString() }}
          </p>
          <p class="text-gray-600 dark:text-gray-300 line-clamp-3">
            {{ post.description }}
          </p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
