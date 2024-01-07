<script setup>
const props = defineProps({
  component: { type: Object, required: true },
});

const { title, fields } = props.component;
</script>
<template>
  <div>
    <pre>{{ title }}</pre>
    <pre>{{ fields }}</pre>
  </div>
</template>
