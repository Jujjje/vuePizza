<script setup lang="ts">
import { DarkCart, TrashSVG } from "src/shared/assets";
import { CartItem, useCartStore } from "src/entities/cartItem";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { clearCart } = store;
const { cart, totalAmmount, totalSum } = storeToRefs(store);
</script>
<template>
  <div class="w-[820px]">
    <div class="flex flex-row justify-between mb-7">
      <div class="flex">
        <div class="flex gap-x-4 items-center">
          <DarkCart />
          <p class="text-[32px] font-bold text-[#3d3d3d]">Корзина</p>
        </div>
      </div>
      <div class="flex items-center gap-x-[7px]" @click="clearCart()">
        <TrashSVG />
        <p class="text-[#b6b6b6]">Очистить корзину</p>
      </div>
    </div>
    <div class="bg-[#F6F6F6] h-[1px] mb-[30px]"></div>
    <div class="">
      <CartItem :i="i" :pizza="item" v-for="(item, i) in cart" />
    </div>
    <div class="flex flex-row justify-between">
      <div class="flex items-center">
        <p class="text-[22px]">Всего пицц:&nbsp;</p>
        <p class="text-[22px] font-bold">{{ totalAmmount }} шт.</p>
      </div>
      <div class="flex items-center">
        <p class="text-[22px]">Сумма заказа:&nbsp;</p>
        <p class="text-[22px] font-bold text-orange">{{ totalSum }} ₽</p>
      </div>
    </div>
    <div class="flex flex-row justify-between mt-10">
      <RouterLink to="/">
        <button
          class="border border-[#d3d3d3] rounded-[30px] w-[211px] h-[55px] flex justify-center items-center text-[#d3d3d3]"
        >
          Вернуться назад
        </button></RouterLink
      >
      <button
        class="w-[211px] h-[55px] bg-orange text-[white] flex justify-center items-center rounded-[30px]"
      >
        Оплатить сейчас
      </button>
    </div>
  </div>
</template>
