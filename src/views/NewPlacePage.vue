<template>
  <div class="new-place-page">
    <NewPlaceForm @submitted="submit" />
  </div>
</template>

<script>
import NewPlaceForm from "@/components/NewPlaceForm";

export default {
  name: "NewPlacePage",
  components: {
    NewPlaceForm,
  },
  methods: {
    submit(newPlace) {
      this.$store.dispatch("addPlace", newPlace).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="scss">
.new-place-page {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
