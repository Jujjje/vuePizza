<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePizzaStore } from "src/entities/pizza";
import { ref } from "vue";

interface ICategories {
  value: string;
  id: number;
}
const categoriesArr = ref<ICategories[]>([
  { value: "Всe", id: 0 },
  { value: "Мясные", id: 1 },
  { value: "Вегетранские", id: 2 },
  { value: "Гриль", id: 3 },
  { value: "Острые", id: 4 },
]);

const store = usePizzaStore();
const { category } = storeToRefs(store);
const { fetchData } = store;
const activeType = ref(0);
const setActiveType = (id: number) => {
  activeType.value = id;
  category.value = activeType.value;
  fetchData();
};
const inActiveTypeClass =
  "px-[26px] h-[46px] bg-[#f9f9f9] rounded-[30px] flex items-center";
const activeTypeClass =
  "px-[26px] h-[46px] rounded-[30px] bg-[#282828] text-white flex items-center";
</script>
<template>
  <div class="flex gap-x-2">
    <div
      v-for="type in categoriesArr"
      :key="type.id"
      @click="setActiveType(type.id)"
      :class="type.id === activeType ? activeTypeClass : inActiveTypeClass"
    >
      {{ type.value }}
    </div>
  </div>
</template>
