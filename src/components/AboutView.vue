<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      We are a community dedicated to deepening awareness, consciousness, and presence in daily life. Rather than focusing solely on traditional sitting meditation, we use life itself as our meditation object.
      <br />
      We offer structured practice opportunities through day-long online weekend retreats and evening sessions during the week. Our members engage with these practices in ways that serve their unique paths:
      <br />
      Some harness these techniques to enhance their productivity and focus. Others find it transforms their relationship with stress and anxiety. Many discover they can accomplish more while doing less, breaking free from habitual patterns of thinking and being. For some, this practice becomes a path toward deeper liberation and understanding.
      <br />
      As an online sangha (spiritual community), we support each member's individual journey while fostering collective growth. Our aim is to help each person cultivate greater awareness and make wiser choices in their daily lives. Through this shared practice, we hope to create positive ripples that extend far beyond our immediate community.
      <br />
      <!-- <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> + -->
      <!-- <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. -->
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
