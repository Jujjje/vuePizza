<script setup lang="ts">
import { emptyCard, sadSmile } from "src/shared/assets";
</script>
<template>
  <div class="flex flex-col items-center m-14">
    <div class="flex gap-x-[10px] items-center mb-2">
      <p class="font-bold text-[32px]">Корзина пустая</p>
      <img :src="sadSmile" class="size-[32px]" />
    </div>
    <p class="text-[#777] text-center max-w-[500px] mb-10">
      Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
      пиццу, перейди на главную страницу.
    </p>
    <img :src="emptyCard" class="w-[300px] h-[255px] mb-16" />
    <RouterLink to="/">
      <div
        class="w-[210px] h-[46px] bg-[#282828] rounded-[30px] flex justify-center items-center text-white"
      >
        Вернуться назад
      </div>
    </RouterLink>
  </div>
</template>
