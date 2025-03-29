<script lang="ts" setup>
import { ref, type Ref } from 'vue';

import { onMounted } from 'vue';
import { sleep } from '../utils';

const data: Ref<{
  // If the subtitle is currently being animated.
  animate: boolean;
  // The index of the current subtitle.
  index: number;
  // The current subtitle being rendered.
  subtitle: string;
  // The available subtitles to cycle through.
  subtitles: string[];
}> = ref({
  animate: false,
  index: 0,
  subtitle: '',
  subtitles: [
    'Senior fullstack engineer',
    'API engineer',
    'Web app developer',
    'Leader of clever folk',
    'Frontend engineer',
    'Hybrid app developer',
    'Prolific gamer',
    'PR reader and highlighter',
    'Software enthusiast',
  ],
});

// Changes the current subtitle and triggers the animation.
async function tickAnimation(): Promise<void> {
  data.value.subtitle = data.value.subtitles[data.value.index];
  data.value.animate = true;

  if (data.value.index < data.value.subtitles.length - 1) {
    data.value.index++;
  } else {
    data.value.index = 0;
  }

  await sleep(5000);
  data.value.animate = false;

  await sleep();
  await tickAnimation();
}

onMounted(async (): Promise<void> => await tickAnimation());
</script>

<template>
  <div>
    <h1>James Gardiner</h1>

    <div class="typewriter">
      <h2 :class="{ animate: data.animate }">{{ data.subtitle }}</h2>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
}

h2 {
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0;
  overflow: hidden;
  border-right: 0.1em solid #fff;
  white-space: nowrap;
  letter-spacing: 0.1em;

  &.animate {
    animation:
      typing 2.5s steps(40, end),
      blink-caret 0.75s step-end infinite;
  }
}

.typewriter {
  display: inline-block;
  text-align: left;
  overflow-x: visible;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}
</style>
