<template>
  <div>
    <!-- <Head> 
      <Title>{{ title }}</Title>
    </Head> -->
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const title = ref('Jukeboxe application')

// useSeoMeta({
//   title,
//   description: () => `description: ${title.value}`
// })
</script>