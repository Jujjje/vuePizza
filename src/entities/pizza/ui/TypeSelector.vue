<script setup lang="ts">
import { ref } from "vue";

const typesVal = ["тонкое", "традиционное"];
const sizesVal = [26, 30, 40];
const activeType = ref(0);
const activeSize = ref(0);
const cartType = ref(typesVal[0]);
const cartSize = ref(sizesVal[0]);
const model = defineModel();

const activeTypeClass =
  "w-[131px] h-[32px] rounded-[5px] bg-white font-bold flex justify-center items-center text-[14px]";
const inActiveTypeClass =
  "w-[131px] h-[32px] rounded-[5px] font-bold flex justify-center items-center text-[14px]";
const activeSizeClass =
  "w-[86px] h-[32px] bg-white rounded-[5px] font-bold flex justify-center items-center text-[14px]";
const inActiveSizeClass =
  "w-[86px] h-[32px] rounded-[5px] font-bold flex justify-center items-center text-[14px]";

function setActiveParam(param: "type" | "size", id: number) {
  param === "type" ? (activeType.value = id) : (activeSize.value = id);
  cartType.value = typesVal[activeType.value];
  cartSize.value = sizesVal[activeSize.value];
  model.value = [cartSize.value, cartType.value];
}
</script>
<template>
  <div
    class="flex flex-col w-[280px] h-[85px] rounded-[10px] bg-[#f3f3f3] mb-4 p-[7px] gap-y-[5px]"
  >
    <div class="flex gap-x-[6px]">
      <div
        @click="setActiveParam('type', key)"
        :class="key === activeType ? activeTypeClass : inActiveTypeClass"
        v-for="(item, key) in typesVal"
        :key="key"
      >
        {{ item }}
      </div>
    </div>
    <div class="flex gap-x-[5px]">
      <div
        :class="key === activeSize ? activeSizeClass : inActiveSizeClass"
        v-for="(item, key) in sizesVal"
        @click="setActiveParam('size', key)"
      >
        {{ item }} см.
      </div>
    </div>
  </div>
</template>
