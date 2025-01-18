<script>
import myPhoto from '@/assets/treeGrowingInWater.jpeg'
// defineProps({
//   msg: {
//     type: String,
//     required: true,
//   },
// })

export default {
  name: 'MyComponent',
  data() {
    return {
      myPhoto,
    }
  },
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">Welcome</h1>
    <h3>
        <div>
    <!-- <img :src="myPhoto" alt="My Photo" /> -->
    <!--We are a group dedicated to squeezing the most out of life through the use of living meditaiton-->
    <!-- We are a community dedicated maximizing your awareness, conciousness and presence in life. -->
    Instead of focusing on sitting meditation, we focus on using life as our meditation object.
    We run day long online retreat like practice sessions on the weekend. On weekdays we host evening practice sessions.
    <br />
  </div>
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
