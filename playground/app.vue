<template>
  <div>
    <div class="block">
      <p>cat <span>{ id: 6 }</span></p>
      <pre>{{ cat }}</pre>
      <pre v-if="catError">{{ catError }}</pre>
    </div>

    <div class="block">
      <p>
        cats
        <span>{ per_page: 2, order_by: "id", order_direction: "asc", }</span>
      </p>
      <pre>{{ cats }}</pre>
      <pre v-if="catsError">{{ catsError }}</pre>
    </div>

    <div class="block">
      <p>page <span>{ slug: "home" }</span></p>
      <pre>{{ page }}</pre>
      <pre v-if="pageError">{{ pageError }}</pre>
    </div>

    <div class="block">
      <p>pages</p>
      <pre>{{ pages }}</pre>
      <pre v-if="pagesError">{{ pagesError }}</pre>
    </div>
  </div>
</template>

<script setup>
const { data: cat, error: catError } = await useCat({ id: 6 });
const { data: cats, error: catsError } = await useCats({
  per_page: 2,
  order_by: "id",
  order_direction: "asc",
});
const { data: page, error: pageError } = await usePage({ slug: "home" });
const { data: pages, error: pagesError } = await usePages();
</script>

<style>
.block {
  background: #f0f0f0;
  padding: 1em;
  margin-bottom: 1em;
  font-family: sans-serif;
}

.block p {
  font-size: 2em;
  font-weight: bold;
  margin: 0;
}

.block p span {
  font-size: 0.5em;
  font-weight: normal;
  font-family: monospace;
}
</style>
