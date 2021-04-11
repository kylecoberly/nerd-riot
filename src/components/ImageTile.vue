<template>
  <div
    class="image-tile"
    :style="{
      backgroundImage: `url('${imageUrl}')`,
    }"
    :alt="title"
  >
    &nbsp;
  </div>
</template>

<script>
export default {
  name: "ImageTile",
  props: {
    title: String,
    imageUrl: String,
  },
};
</script>

<style lang="scss">
.image-tile {
  width: 100%;
  background-size: cover;
}
</style>
