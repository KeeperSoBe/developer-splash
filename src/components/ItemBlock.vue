<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <li>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>
    </div>
  </li>
</template>

<style scoped>
li {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  background-color: oklch(0.205 0 0);
  border-radius: 9px;
  padding: 1.5rem;
  background-image: linear-gradient(oklch(0.269 0 0), oklch(0.205 0 0));
}

li h3 {
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 0.5rem 0;
}

li p {
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
}

li:after {
  content: '\2192';
  font-size: 1.25rem;
  position: relative;
  transition: left 0.8s ease-in-out;
}

li:hover::after {
  animation: linear infinite;
  animation-name: wiggle;
  animation-duration: 1s;
}

li p {
  display: inline-block;
}

li p:after {
  background-color: #fff;
  content: '';
  display: block;
  height: 1px;
  max-width: 0%;
  transition: max-width 0.3s ease-in-out;
  width: 100%;
}

li:hover p:after {
  max-width: 100%;
}

@keyframes wiggle {
  0% {
    left: 0px;
  }
  50% {
    left: -5px;
  }
  100% {
    left: 0px;
  }
}
</style>
