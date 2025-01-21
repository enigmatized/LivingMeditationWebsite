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
    <h1 class="blue">{{ msg }}</h1>

    <h2 class="blue">Everything we do here is for free.</h2>
    <br>
    <h3>That being said, we have a larger of helping more people.
    If you would like to help us with that goal, please consider donating.</h3>
    <a 
      href="https://venmo.com/code?user_id=2411422080303104602&created=1737400581" 
      target="_blank" 
      rel="noopener noreferrer"
      class="blue"
    >
      Fund via Venmo
    </a>

    
  </div>
  <div class="greetings">
    <a 
      href="https://www.paypal.com/ncp/payment/UZKTZMH6NNMCG" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Fund via PayPal
    </a>

    
  </div>

  <div>
    <h3>Where will this money go?</h3> 
  </div>

  <div>
    This money will go to the founders account. They will use this money for the expenses associated with running this group (zoom, website, etc).
    Any left over funds will go to the "larger vision."
  </div>
  <br>
  <h2>What is the larger vision?</h2>
  <br>
  <div>We have a vision of building a community/retreat center that helps:
    <ul>
      <li>People in recovery</li>
      <li>People transitioning to the end of their life</li>
      <li>People looking to find their purpose, true calling</li>
      <li>People looking to deepen their practice</li>
      <li>People looking to start entrepenuial adventures that inheritly make the world a better place</li>
    </ul>
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
