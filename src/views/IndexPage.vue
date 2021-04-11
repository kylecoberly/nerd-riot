<template>
  <ul class="places">
    <li v-for="place in places" :key="place.id">
      <PlaceListing
        :title="place.title"
        :imageUrl="place.images[0].url"
        :id="place.id"
        v-slot="{ id }"
      >
        <router-link class="more" :to="{ name: 'place', params: { id } }"
          >More</router-link
        >
      </PlaceListing>
    </li>
    <li>
      <button class="add">+</button>
    </li>
  </ul>
</template>

<script>
import PlaceListing from "@/components/PlaceListing";

export default {
  components: {
    PlaceListing,
  },
  mounted() {
    this.$store.dispatch("getPlaces");
  },
  computed: {
    places() {
      return this.$store.state.places;
    },
  },
};
</script>

<style lang="scss">
.places {
  display: flex;
  flex-flow: row wrap;
  max-width: 1000px;
  .image-tile {
    height: 225px;
  }
}
button {
  border: 1px solid #ccc;
  border-radius: 2px;
  font-size: 128px;
  color: #999;
  background-color: #eee;
  cursor: pointer;
}
.add {
  height: 300px;
  width: 300px;
}
</style>
