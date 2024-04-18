<template>
  <div id="app">
    <div class="toolbar">
      <h1>Fake Zoo API Showcase</h1>
    </div>
    <div class="animals">
      <animal-card v-for="animal in animals" :key="animal.id" :animal="animal"></animal-card>
    </div>
    <div class="footer">
      <p>Copyright © 2024 Fake Store, inc. All rights reserved.</p>
      <p>Developed by U20201B312 Jhan Antonio Salazar.</p>
    </div>
  </div>
</template>

<script>
import apiService from '../services/Api.service.js';
import AnimalCard from './animal-card.component.vue';

export default {
  name: 'App',
  components: {
    AnimalCard,
  },
  data() {
    return {
      animals: [],
    };
  },
  async created() {
    this.animals = await apiService.getAnimals();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

#app {
  max-width: 100%;
  margin: 0 auto;
}

.toolbar {
  width: 100%;
  background-color: #000000;
  color: white;
  padding: 20px;
  text-align: center;
}

.toolbar h1 {
  margin: 0;
  font-size: 24px;
}

.animals {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -20px;
}

.footer {
  width: 100%;
  margin-top: 40px;
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
  font-size: 14px;
  color: #000000;
}

@media (max-width: 600px) {
  .animals {
    flex-direction: column;
    align-items: center;
  }
}
</style>
