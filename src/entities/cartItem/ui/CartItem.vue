<script setup lang="ts">
import { IPizza } from "src/entities/pizza/model/store";
import { DeleteItem, MinusItem, PlusItem } from "src/shared/assets";
import { useCartStore } from "../model/store";

interface IProps {
  pizza: IPizza;
  i: number;
}
const store = useCartStore();
const { increaseAmmount, decreaseAmmount, deleteItem } = store;
const props = defineProps<IProps>();
console.log(props.pizza.id);
</script>
<template>
  <div class="mb-[30px] flex flex-row items-center justify-between">
    <div class="flex items-center gap-x-4">
      <img :src="pizza.imageUrl" class="size-20" />
      <div class="mr-16 w-[280px]">
        <p class="font-bold text-[22px]">{{ pizza.title }}</p>
        <p class="text-[#8d8d8d]">
          {{ pizza.type }} тесто, {{ pizza.size }} см
        </p>
      </div>
    </div>
    <div class="flex gap-x-3">
      <MinusItem @click="decreaseAmmount(i)" />
      <p class="font-bold text-[22px]">{{ pizza.ammount }}</p>
      <PlusItem @click="increaseAmmount(i)" />
    </div>
    <p class="font-bold text-[22px]">{{ pizza.price }} ₽</p>
    <DeleteItem @click="deleteItem(i)" />
  </div>
  <div class="bg-[#F6F6F6] h-[1px] mb-[30px]"></div>
</template>
