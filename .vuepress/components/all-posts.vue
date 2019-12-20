// .vuepress/components/all-posts.vue
<template>
  <ul>
    <li v-for="post in $site.pages.filter(p => p.path.includes('/posts'))">
      <router-link :to="post.path">{{ post.title }}</router-link>
    </li>
  </ul>
</template>