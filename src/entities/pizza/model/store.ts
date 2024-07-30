import { defineStore } from "pinia";
import axios, { AxiosError } from "axios";
import { ref } from "vue";
export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  category: number;
  ammount?: number;
  size?: number;
  type?: string;
}

export const usePizzaStore = defineStore("usePizzaStore", () => {
  let isLoading = ref<boolean>(true);
  let data = ref<IPizza[] | null>(null);
  let error = ref<AxiosError | null>(null);
  let category = ref<number>(0);
  let sort = ref<"id" | "title" | "price" | "">("");
  async function fetchData(): Promise<void> {
    const url = `https://800dcec09d55a4b9.mokky.dev/pizzas?${
      category.value ? "category=" + category.value : ""
    }&${sort.value ? "sortBy=" + sort.value : ""}`;
    await axios
      .get(url)
      .then((response) => {
        data.value = data.value = response.data;
      })
      .catch((e: AxiosError) => {
        error.value = e;
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  return { fetchData, isLoading, data, error, category, sort };
});
