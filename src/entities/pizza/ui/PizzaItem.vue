<script setup lang="ts">
import { ref } from "vue";
import { IPizza } from "../model/store";
import TypeSelector from "./TypeSelector.vue";
import { AddToCartBtn } from "src/features/addToCart";
interface IProps {
  pizza: IPizza;
}

const options = ref<[number, string]>([26, "тонкое"]);

const props = defineProps<IProps>();
</script>
<template>
  <div class="flex flex-col items-center">
    <img :src="pizza.imageUrl" class="size-[260px] mb-2" />
    <p class="font-bold text-[20px] mb-4">{{ pizza.title }}</p>
    <TypeSelector v-model="options" />
    <div class="flex justify-between w-full">
      <p class="text-[22px] font-bold">от {{ pizza.price }}₽</p>
      <AddToCartBtn
        :pizza="props.pizza"
        :type="options[1]"
        :size="options[0]"
      />
    </div>
  </div>
</template>
