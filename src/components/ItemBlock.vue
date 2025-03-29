<script setup lang="ts">
export interface Item {
  title: string;
  subtitle: string;
  link: string;
  show: boolean;
}

defineProps<Item>();
</script>

<template>
  <li :class="{ hide: !show }">
    <a :href="link">
      <div>
        <h3>{{ title }}</h3>
        <p>{{ subtitle }}</p>
      </div>
    </a>
  </li>
</template>

<style scoped>
li {
  --border-radius: 9px;
  --transition-delay: 0.8s;

  background-image: linear-gradient(oklch(0.269 0 0), oklch(0.205 0 0));
  border-radius: var(--border-radius);
  cursor: pointer;
  display: flex;
  opacity: 1;
  transform: translateX(0px);
  transition:
    transform var(--transition-delay),
    opacity var(--transition-delay);
  width: 18rem;

  &.hide {
    transform: translateX(200px);
    opacity: 0;
  }

  a {
    align-items: center;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    color: inherit;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 1.5rem;
    text-decoration: none;
    width: 100%;
    transition: border-color var(--transition-delay);

    &:after {
      content: '\2192';
      font-size: 1.25rem;
      position: relative;
      transition: left var(--transition-delay) ease-in-out;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 400;
      margin: 0 0 0.5rem 0;
    }

    p {
      display: inline-block;
      font-size: 1rem;
      font-weight: 200;
      margin: 0;

      &:after {
        background-color: #fff;
        content: '';
        display: block;
        height: 1px;
        max-width: 0%;
        transition: max-width 0.3s ease-in-out;
        width: 100%;
      }
    }
  }

  &:hover {
    p:after {
      max-width: 100%;
    }

    a {
      border-color: #fff;

      &::after {
        animation: linear infinite;
        animation-name: wiggle;
        animation-duration: 1s;
      }
    }
  }
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
