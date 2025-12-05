<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-900/10 dark:border-gray-50/[0.06] bg-white/75 dark:bg-gray-900/75 supports-backdrop-blur:bg-white/95 dark:supports-backdrop-blur:bg-gray-900/95">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white">
            <Icon name="carbon:code" class="h-6 w-6" />
            <span>Portfolio</span>
          </NuxtLink>
        </div>
        <nav class="flex items-center gap-6">
          <NuxtLink to="/blog" class="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Blog
          </NuxtLink>
          <NuxtLink to="/projects" class="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Projects
          </NuxtLink>
          <div class="flex items-center gap-4 border-l border-gray-200 pl-6 dark:border-gray-800">
            <a href="https://github.com/catalino-dev" target="_blank" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <Icon name="carbon:logo-github" class="h-5 w-5" />
            </a>
            <a href="https://twitter.com/catalino_dev" target="_blank" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <Icon name="carbon:logo-twitter" class="h-5 w-5" />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
