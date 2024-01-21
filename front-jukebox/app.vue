<template>
  <div>
    <Head> 
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Dijital jukebox',
  meta: [
    { name: 'Dijital jukebox', content: 'My dijital jukebox.' }
  ]
})
</script>