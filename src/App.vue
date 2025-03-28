<script setup lang="ts">
import TitleBlock from './components/TitleBlock.vue'
import ItemBlock from './components/ItemBlock.vue'

const items: {
  title: string
  subtitle: string
  link: string
}[] = [
  {
    title: 'Reach out',
    subtitle: 'Lets get in contact',
    link: '',
  },
  {
    title: 'Like to read?',
    subtitle: 'To the blog!',
    link: '',
  },
  {
    title: 'Unconvinced?',
    subtitle: 'View more projects',
    link: '',
  },
];
</script>

<template>
  <main>
    <TitleBlock />

    <ul>
      <ItemBlock
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
      />
    </ul>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 40rem;
  font-family: 'Mona Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100%;
}

ul {
  margin-top: 5rem;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

@media screen and (min-width: 672px) {
  main {
    flex-direction: row;
  }
}
</style>
