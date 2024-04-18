<template>
  <div class="card">
    <img :src="animal.image" :alt="animal.name">
    <div class="details">
      <h2><strong>Name: </strong>{{ animal.name }}</h2>
      <p><strong>Description:</strong> {{ animal.description }}</p>
      <p><strong>Habitat:</strong> {{ animal.habitat }}</p>
      <p><strong>Family:</strong> {{ animal.family }}</p>
    </div>
    <div class="rating">
    </div>
  </div>

</template>

<script>
export default {
  props: {
    animal: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  margin: 20px;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card .details {
  padding: 20px;
}

.card .details h2 {
  margin: 0;
  font-size: 24px;
  color: #000000;
}

.card .details p {
  margin: 10px 0;
  color: #000000;
}

.card .rating {
  padding: 20px;
}
</style>
