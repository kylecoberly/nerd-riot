<template>
  <div class="place-details">
    <div class="overview">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <p class="last-visited">Last Visited: {{ lastVisitedFormatted }}</p>
    </div>
    <ul class="images">
      <li v-for="image in images" :key="image.url">
        <ImageTile :imageUrl="image.url" :title="title" />
      </li>
    </ul>
  </div>
</template>

<script>
import { format } from "date-fns";
import ImageTile from "@/components/ImageTile";

export default {
  name: "PlaceDetails",
  components: {
    ImageTile,
  },
  props: {
    images: Array,
    title: String,
    description: String,
    lastVisited: String,
  },
  computed: {
    lastVisitedFormatted() {
      return format(new Date(this.lastVisited), "MMMM, yyyy");
    },
  },
};
</script>

<style lang="scss">
.place-details {
  max-width: 1000px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .overview {
    width: 400px;
    margin-bottom: 64px;
    @media (max-width: 375px) {
      width: 100%;
    }
    > h2,
    > p {
      width: 100%;
    }
    .title {
      font-weight: 800;
      font-size: 24px;
      color: #333;
      margin-bottom: 16px;
    }
    .description {
      margin-bottom: 16px;
      line-height: 1.5;
    }
    .last-visited {
      color: #666;
    }
  }
  .images {
    display: flex;
    flex-flow: row wrap;
    > li {
      border: 1px solid #ccc;
      border-radius: 2px;
      height: 300px;
      width: 300px;
      margin-right: 32px;
      margin-bottom: 32px;
      .image-tile {
        height: 300px;
      }
    }
  }
}
</style>
