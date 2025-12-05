<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} Catalino. All rights reserved.
        </p>
        <div class="flex gap-4">
           <a href="https://github.com/catalino-dev" target="_blank" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
              <Icon name="carbon:logo-github" class="h-5 w-5" />
            </a>
        </div>
      </div>
    </div>
  </footer>
</template>
