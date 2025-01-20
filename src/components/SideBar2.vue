<template>
    <div class="sidebar">
      <button @click="$emit('changeView', 'HomeView')">Home</button>
      <button @click="$emit('changeView', 'AboutView')">About</button>
      <button @click="$emit('changeView', 'Schedule')">Practice Schedule</button>
      <button @click="$emit('changeView', 'AboutView')">Help Fund This Project</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  <!-- <script>
  export default {
    name: "TheSidebar",
    props: {
      isSidebarActive: {
        type: Boolean,
        default: null,
      },
      sidebarToggle: {
        type: Function,
        default: null,
      },
    },
    data() {
      return {
        isDisabled: true,
      };
    },
    methods: {
      updateValue(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
  </script> -->