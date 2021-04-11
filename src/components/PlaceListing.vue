<template>
  <div class="place-listing">
    <ImageTile :imageUrl="imageUrl" :title="title" />
    <div class="overview">
      <h2 class="title">{{ title }}</h2>
      <slot :id="id"></slot>
    </div>
  </div>
</template>

<script>
import ImageTile from "@/components/ImageTile";

export default {
  name: "PlaceListing",
  components: {
    ImageTile,
  },
  props: {
    id: Number,
    imageUrl: String,
    title: String,
  },
};
</script>

<style lang="scss">
.place-listing {
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 300px;
  height: 300px;
  overflow-y: auto;
  margin-right: 32px;
  margin-bottom: 32px;
  .overview {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    .title {
      color: #444;
      font-weight: 900;
    }
    a {
      color: hsl(31 + 209, 93%, 55%);
      text-decoration: underline;
      cursor: pointer;
    }
    a:visited {
      color: hsl(31 + 240, 93%, 55%);
    }
  }
}
</style>
