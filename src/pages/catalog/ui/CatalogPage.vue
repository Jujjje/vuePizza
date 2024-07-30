<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePizzaStore } from "src/entities/pizza";
import { CatalogWidget } from "src/widgets/catalog";
import { FilterSelectorWidget } from "src/widgets/filterSelector";
import CategoriesWidget from "src/widgets/typeSelector/ui/CategoriesWidget.vue";
</script>
<template>
  <div class="">
    <div class="mt-10">
      <div class="flex justify-between items-center">
        <CategoriesWidget /> <FilterSelectorWidget />
      </div>
      <div class="mt-[40px]">
        <CatalogWidget />
      </div>
    </div>
  </div>
</template>
