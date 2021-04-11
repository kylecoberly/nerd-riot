<template>
  <div class="place-page">
    <PlaceDetails
      :title="title"
      :description="description"
      :lastVisited="lastVisited"
      :images="images"
    />
  </div>
</template>

<script>
import PlaceDetails from "@/components/PlaceDetails";

export default {
  components: {
    PlaceDetails,
  },
  created() {
    this.$store.dispatch("getPlace", this.$route.params.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    title() {
      return this.$store.getters.getPlace(this.id).title;
    },
    description() {
      return this.$store.getters.getPlace(this.id).description;
    },
    lastVisited() {
      return this.$store.getters.getPlace(this.id).lastVisited;
    },
    images() {
      return this.$store.getters.getPlace(this.id).images;
    },
  },
};
</script>

<style lang="scss"></style>
