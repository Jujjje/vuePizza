import { defineStore } from "pinia";
import { IPizza } from "src/entities/pizza/model/store";
import { ref } from "vue";

export const useCartStore = defineStore("useCartStore", () => {
  const cart = ref<IPizza[]>([]);
  const totalSum = ref<Number>(0);
  const totalAmmount = ref<Number>(0);

  function refreshTotalVals() {
    totalAmmount.value = cart.value.reduce((sum, i) => (sum += i.ammount!), 0);
    totalSum.value = cart.value.reduce(
      (sum, i) => (sum += i.ammount! * i.price),
      0
    );
  }
  function addToCart(newItem: IPizza) {
    cart.value.findIndex(
      (i) =>
        i.id === newItem.id &&
        i.size === newItem.size &&
        i.type === newItem.type
    ) === -1
      ? cart.value.push(newItem)
      : false; // idk how it works

    refreshTotalVals();
  }

  function clearCart() {
    cart.value = [];
    refreshTotalVals();
  }

  function increaseAmmount(id: number) {
    cart.value[id].ammount!++;
    refreshTotalVals();
  }

  function decreaseAmmount(id: number) {
    cart.value[id].ammount! === 1
      ? (cart.value[id].ammount! = 1)
      : cart.value[id].ammount!--;
    refreshTotalVals();
  }

  function deleteItem(id: number) {
    cart.value.splice(id, 1);
    refreshTotalVals();
  }

  return {
    cart,
    addToCart,
    totalAmmount,
    totalSum,
    clearCart,
    increaseAmmount,
    decreaseAmmount,
    deleteItem,
  };
});
