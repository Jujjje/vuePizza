<script setup lang="ts">
import { HeaderWidget } from "src/widgets/header";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="min-h-[100vh] bg-[#ffdf8c] p-11 font-sans">
    <div class="bg-[#ffff] flex-col rounded-[10px] py-12 px-16 relative">
      <HeaderWidget />
      <RouterView class="min-h-[calc(100vh_-196px)]" />
    </div>
  </div>
</template>
