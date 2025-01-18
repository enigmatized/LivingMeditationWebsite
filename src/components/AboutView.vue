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
      We are a community dedicated maximizing your awareness, conciousness and presence in life.
      Instead of focusing on sitting meditation, we focus on using life as our meditation object.
      We run day long online retreat like practice sessions on the weekend. On weekdays we host evening practice sessions.
      <br />
      Everyone uses this a little differently.
      Some people use this as a time to help them get more work done.
      Others might use it as a way to manage their stress.
      Some people use it as a way to get more done in less time.
      Other might use as vehicale to be a happier person and break repertive patterns of thinking/feeling/being.
      Some may use it as a pathway to liberation.
      <br />
      We are an online support group(shanga) that helps to support your practice and attain what you want.
      <br />
      Hopefully in the process we help people gain more awareness and make wiser decision in their life.
      Maybe we will have a positive effect on the world. 
      <br />
      <!-- <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> + -->
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
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
