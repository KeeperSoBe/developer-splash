<script lang="ts" setup>
import TitleBlock from './components/TitleBlock.vue';
import ItemBlock, { type Item } from './components/ItemBlock.vue';
import { sleep } from './utils';
import { onMounted, ref, type Ref } from 'vue';

/**
 * The ItemBlocks to be rendered.
 *
 * @type { Ref<Item[]> }
 */
const data: Ref<Item[]> = ref<Item[]>([
  {
    title: 'Reach out',
    subtitle: 'Lets get in contact',
    link: 'https://www.linkedin.com/in/james-gardiner-802125b5/',
    show: false,
  },
  {
    // title: 'Like to read?',
    // subtitle: 'To the blog!',
    title: 'To the blog',
    subtitle: 'Coming soon',
    link: '#',
    show: false,
  },
  {
    // title: 'Unconvinced?',
    // subtitle: 'View more projects',
    title: 'View more projects',
    subtitle: 'Coming soon',
    link: '#',
    show: false,
  },
]);

// Loops through each item and sets show to true.
function showItems(): void {
  for (let index = 0; index < data.value.length; index++) {
    setTimeout((): void => {
      data.value[index].show = true;
    }, 250 * index);
  }
}

onMounted(async (): Promise<void> => {
  await sleep(500);
  showItems();
});
</script>

<template>
  <main>
    <TitleBlock />

    <ul>
      <ItemBlock
        v-for="(item, index) in data"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :link="item.link"
        :show="item.show"
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
/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
</style>
