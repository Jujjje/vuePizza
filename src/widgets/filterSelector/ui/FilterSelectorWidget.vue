<script setup lang="ts">
import { arrow } from "src/shared/assets";
import { ref } from "vue";
import { vOnClickOutside } from "@vueuse/components";
import { usePizzaStore } from "src/entities/pizza";
import { storeToRefs } from "pinia";
interface IFilter {
  value: "умолчанию" | "цене" | "алфавиту";
  filterId: "id" | "title" | "price";
}

const store = usePizzaStore();
const { fetchData } = store;
const { sort } = storeToRefs(store);

const filtersArr = ref<IFilter[]>([
  { value: "умолчанию", filterId: "id" },
  { value: "алфавиту", filterId: "title" },
  { value: "цене", filterId: "price" },
]);

const activeFilter = ref<"умолчанию" | "цене" | "алфавиту">(
  filtersArr.value[0].value
);

const isOpen = ref(false);

const activeFitlerClass =
  "bg-[#fe5f1e0d] h-[38px] py-[6px] pl-3 text-[#fe5f1e]";
const inActiveFilterClass = "h-[38px] py-[6px] pl-3";

const setActiveFilter = (id: number) => {
  activeFilter.value = filtersArr.value[id].value;
  sort.value = filtersArr.value[id].filterId;
  fetchData();
};

function closeModal() {
  isOpen.value = false;
}
</script>
<template>
  <div class="relative">
    <div class="flex gap-x-2" @click="isOpen = true">
      <img :src="arrow" />
      <p class="font-bold">Сортировка по:</p>
      <p class="text-[#fe5f1e] underline decoration-dotted">
        {{ activeFilter }}
      </p>
    </div>
    <div
      v-if="isOpen"
      v-on-click-outside="closeModal"
      class="w-[132px] h-[136px] shadow-lg absolute right-0 mt-1 rounded-[10px] py-3 bg-white"
    >
      <p
        v-for="(filter, id) in filtersArr"
        :key="filter.filterId"
        @click="setActiveFilter(id)"
        :class="
          filter.value === activeFilter
            ? activeFitlerClass
            : inActiveFilterClass
        "
      >
        {{ filter.value }}
      </p>
    </div>
  </div>
</template>
