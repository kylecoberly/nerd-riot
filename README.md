# Nerd Riot

Reference app for the frontend face-off. Check out the `reference.css` and `reference.html` files for what to target for your output, and the `src/views` and `src/component` files for ideas on how to break it up.

While we're waiting for the API, you can see what it looks like with data by running the E2E tests.

Watch out for:

**Binding styles to the background-image**. This is necessary to use the `background-size: cover;` hack to size all the tiles correctly. In Vue, it looks like this:

```vue
<div
  class="image-tile"
  :style="{
    backgroundImage: `url('${imageUrl}')`,
  }"
  :alt="title"
>
  &nbsp;
</div>
```

**Accepting multiple inputs for the images in the adding new places form**. Doing this with reactive rendering can be kind of weird. In Vue, it looks like this:

```vue
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
```

```vue
methods: {
  addImage() {
    this.images.push({ url: "" });
  },
  updateImageUrl(index, text) {
    this.images[index].url = text;
  },
}
```

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
npm run test:unit -- --watchAll
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
