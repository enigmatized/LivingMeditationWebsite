<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import SideBar from './components/SideBar2.vue'
import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import Schedule from './components/Schedule.vue'
import Payments from './components/Payments.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    HomeView,
    AboutView,
    Schedule,
    Payments
  },
  data() {
    return {
      currentView: 'home' // default to 'home'
    }
  },
  methods: {
    setView(viewName) {
      this.currentView = viewName
    }
  }
}

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->


  
    <img alt="Vue logo" class="logo" src="./assets/treeGrowingInWater.jpeg" width="450" height="300" />
  </header>
<!-- 
    
    <div>
      <SideBar />
    </div> -->
    <div>
      <SideBar @changeView="setView" />
      <component :is="currentView" />
    </div>


  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
