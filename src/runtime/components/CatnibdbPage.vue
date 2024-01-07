<script setup lang="ts">
import { usePage } from "#imports";
import camelCase from "camelcase";

const props = defineProps<{
  slug: string;
}>();

const { data: page } = await usePage({ slug: props.slug });
</script>

<template>
  <component
    :is="camelCase(component.api_id, { pascalCase: true })"
    v-for="component in page?.components"
    :key="(`${component?.id}-${component.api_id}` as string)"
    v-bind="component"
  />
</template>
