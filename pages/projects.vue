<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})
</script>

<template>
  <div class="py-10">
    <h1 class="text-4xl font-bold mb-8">Projects</h1>
    <div class="grid gap-6 md:grid-cols-2">
      <div 
        v-for="project in projects" 
        :key="project.path"
        class="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
      >
        <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
        <ContentRenderer :value="project" class="text-gray-600 dark:text-gray-300 mb-4" />
        <div class="flex gap-4">
          <a v-if="project.link" :href="project.link" target="_blank" class="text-green-500 hover:underline">
            Visit Website
          </a>
          <a v-if="project.repo" :href="`https://github.com/${project.repo}`" target="_blank" class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
