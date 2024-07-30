<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "src/entities/cartItem";
import { cart, logo } from "src/shared/assets";
const store = useCartStore();
const { totalAmmount, totalSum } = storeToRefs(store);
</script>
<template>
  <div class="flex justify-between">
    <RouterLink to="/">
      <div class="flex gap-x-4 items-center">
        <img :src="logo" class="size-[48px]" />
        <div class="">
          <p class="font-extrabold text-[1.50rem]">Vue Pizza</p>
          <p class="text-[#7b7b7b]">Самая лучшая пицца в мире</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/cart">
      <div
        class="w-[150px] h-[50px] bg-orange rounded-[30px] flex justify-between py-3 px-5"
      >
        <p class="font-bold text-white">{{ totalSum }} ₽</p>
        <div class="h-[25px] w-[1px] bg-white opacity-25"></div>
        <p class="flex items-center font-bold text-white">
          <img :src="cart" class="size-[18px] mr-2" /> {{ totalAmmount }}
        </p>
      </div></RouterLink
    >
  </div>
</template>
