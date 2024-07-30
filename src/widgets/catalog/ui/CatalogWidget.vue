<script setup lang="ts">
import { onMounted } from "vue";
import { PizzaItem, usePizzaStore } from "src/entities/pizza";
import { storeToRefs } from "pinia";
import { PizzaSkeleton } from "src/shared/assets";
const store = usePizzaStore();
const { data, isLoading } = storeToRefs(store);
const { fetchData } = store;
onMounted(() => {
  fetchData();
});
</script>

<template>
  <p class="font-bold text-[32px] mb-7">Все пиццы</p>
  <div class="flex flex-wrap justify-between gap-y-[65px]">
    <PizzaSkeleton v-if="isLoading" v-for="item in [1, 2, 3, 4]" :key="item" />
    <PizzaItem
      v-else=""
      class="flex flex-col items-center"
      v-for="item in data"
      :key="item.id"
      :pizza="item"
    />
  </div>
</template>
