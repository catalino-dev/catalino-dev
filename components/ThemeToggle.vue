<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <button
    aria-label="Toggle Dark Mode"
    class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
    @click="isDark = !isDark"
  >
    <ClientOnly>
      <Icon v-if="isDark" name="carbon:moon" class="h-5 w-5" />
      <Icon v-else name="carbon:sun" class="h-5 w-5" />
      <template #fallback>
        <div class="h-5 w-5" />
      </template>
    </ClientOnly>
  </button>
</template>
