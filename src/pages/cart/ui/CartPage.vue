<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "src/entities/cartItem";
import { CartWidget } from "src/widgets/cart";
import { EmptyCardWidget } from "src/widgets/emptyCart";
const store = useCartStore();
const { cart } = storeToRefs(store);
</script>
<template>
  <div class="my-10">
    <div class="flex items-center justify-center h-full">
      <EmptyCardWidget v-if="!cart.length" />
      <CartWidget v-else />
    </div>
  </div>
</template>
