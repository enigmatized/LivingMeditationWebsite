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
    We run day long online retreat like practice sessions on the weekend. 
    <br>
    On weekdays we host evening practice sessions.
    <br/>
    See schedule for practice times.
    <br>

    
    
  </div>
      <!-- <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> + -->
      <!-- <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. -->
    </h3>


    <br>
    <a href="https://us06web.zoom.us/j/5620489534" target="_blank" rel="noopener noreferrer">
    Zoom meeting Link: https://us06web.zoom.us/j/5620489534
  </a>
<br>
  <div>The ripple effect of conscious living begins with each individual. When we move through life with greater awareness, our personal challenges naturally diminish. As individuals experience more clarity and less turmoil, this positive impact flows outward to our families, communities, and ultimately, society as a whole.
Imagine the collective potential when more people step out of automatic patterns and into intentional living. This shift can transform not just our individual lives, but our shared future.
As Mahatma Gandhi reminded us, "Be the change you wish to see in the world." Our community exists to support this transformation, helping each person cultivate deeper awareness and translate that awareness into action.
We embrace both the small and significant moments of change—whether that's bringing mindfulness to daily household tasks or facing major life challenges with greater presence. Every conscious choice, no matter its scale, contributes to a larger tapestry of positive change.
By supporting each other in living more consciously, we're not just improving individual lives—we're nurturing the seeds of a more aware and harmonious world.</div>


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
