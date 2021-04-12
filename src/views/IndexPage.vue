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
      <RouterLink class="add" :to="{ name: 'new-place' }"
        ><span>+</span></RouterLink
      >
    </li>
  </ul>
</template>

<script>
import PlaceListing from "@/components/PlaceListing";

export default {
  name: "IndexPage",
  components: {
    PlaceListing,
  },
  created() {
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
  .add {
    appearance: button;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    text-decoration: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    font-size: 128px;
    color: #999;
    background-color: #eee;
    cursor: pointer;
    transition: transform 0.3s;
    span {
    }
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
