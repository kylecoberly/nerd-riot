<template>
  <form class="new-place-form" @submit.prevent="submit">
    <label for="title">Title</label>
    <input id="title" v-model="title" />

    <label for="description">Description</label>
    <textarea id="description" v-model="description"></textarea>

    <label for="last-visited">When did you last go there?</label>
    <input type="date" id="last-visited" v-model="lastVisited" />

    <p>Add URLs for any images you have:</p>
    <ul>
      <li v-for="(image, index) in images" :key="`${Date.now()}${index}`">
        <input
          class="image-url"
          type="text"
          @input="updateImageUrl(index, $event.target.value)"
          :value="image.url"
        />
      </li>
    </ul>
    <div class="add-image-wrapper">
      <button class="add-image" @click.prevent="addImage">+</button>
    </div>

    <input type="submit" value="Add It To The List" />
  </form>
</template>

<script>
export default {
  name: "NewPlaceForm",
  data() {
    return {
      title: "",
      description: "",
      lastVisited: "",
      images: [{ url: "" }],
    };
  },
  methods: {
    submit() {
      const { title, description, lastVisited, images } = this;
      this.$emit("submitted", {
        title,
        description,
        lastVisited,
        images: Array.from(images.map((image) => ({ ...image }))),
      });
    },
    addImage() {
      this.images.push({ url: "" });
    },
    updateImageUrl(index, text) {
      this.images[index].url = text;
    },
  },
};
</script>

<style lang="scss">
.new-place-form {
  width: 500px;
  @media (max-width: 500px) {
    width: 100%;
  }
  label,
  textarea,
  input {
    display: block;
    width: 100%;
  }
  label,
  p {
    color: #666;
    margin-bottom: 2px;
  }
  input,
  textarea {
    margin-bottom: 24px;
    padding: 12px 6px;
    border: none;
    border-bottom: 0.5px solid #999;
    &:focus {
      border-bottom: 1px solid hsl(31, 93%, 55%);
    }
  }
  .add-image-wrapper {
    display: flex;
    justify-content: flex-end;
    .add-image {
      margin-bottom: 36px;
      background-color: #eee;
      border-radius: 2px;
      border: 1px solid #ccc;
      color: #666;
      padding: 4px 8px;
      font-size: 24px;
      cursor: pointer;
    }
  }
  #description {
    height: 12em;
  }
  [type="submit"] {
    padding: 24px;
    font-size: 20px;
    border-radius: 2px;
    background-color: hsl(31, 93%, 55%);
    color: hsl(31, 93%, 95%);
    font-weight: 800;
  }
}
</style>
