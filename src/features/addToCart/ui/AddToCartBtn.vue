<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "src/entities/cartItem";
import { ICartItem } from "src/entities/cartItem/model/store";
import { IPizza } from "src/entities/pizza/model/store";
import { ref } from "vue";

interface IProps {
  pizza: IPizza;
  type: string;
  size: number;
}
const props = defineProps<IProps>();
const store = useCartStore();
const { addToCart } = store;
const { cart } = storeToRefs(store);
const ammount = ref(
  cart.value[props.pizza.id] === undefined
    ? 0
    : cart.value[props.pizza.id].ammount
);

const defaultBtnClass =
  "bg-orange text-white w-[132px] rounded-[30px] h-10 font-bold flex justify-center items-center text-[16px]";
const mutatedAmmoBtnClass =
  "bg-white border border-orange text-orange w-[132px] rounded-[30px] h-10 font-bold flex justify-center items-center text-[16px]";

function onClickFunc(newItem: IPizza) {
  ammount.value!++;
  newItem.ammount = ammount.value;
  newItem.size = props.size;
  newItem.type = props.type;
  newItem.size = props.size;
  addToCart(newItem);
}
</script>
<template>
  <div
    :class="ammount! > 0 ? mutatedAmmoBtnClass : defaultBtnClass"
    @click="onClickFunc(pizza)"
  >
    + Добавить
    <p
      v-if="ammount! > 0"
      class="rounded-[100%] size-[22px] bg-orange text-white flex justify-center items-center ml-1"
    >
      {{ ammount }}
    </p>
  </div>
</template>
