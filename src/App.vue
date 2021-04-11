<template>
  <header>
    <h1>N.E.R.D. Riot!</h1>
    <p>The places we used to haunt</p>
  </header>
  <main>
    <ul class="places">
      <li v-for="place in places" :key="place.id">
        <div class="place">
          <div
            class="image"
            :style="{
              backgroundImage: `url('${place.imageUrl}')`,
            }"
            :alt="place.title"
          >
            &nbsp;
          </div>
          <div class="overview">
            <h2>{{ place.title }}</h2>
            <a>More</a>
          </div>
        </div>
      </li>
      <li>
        <button class="add">+</button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
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
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
@import url("https://fonts.googleapis.com/css2?family=Bangers&family=Source+Sans+Pro:wght@400;900&display=swap");

* {
  box-sizing: border-box;
}
body {
  padding: 32px;
  font-family: "Source Sans Pro", sans-serif;
}
header {
  margin-bottom: 64px;
  h1 {
    font-family: Bangers, cursive;
    font-size: 64px;
    color: hsl(31, 93%, 55%);
    text-align: center;
  }
  p {
    text-align: center;
    color: #666;
  }
}
main {
  display: flex;
  justify-content: center;
  width: 100%;
}
.places {
  display: flex;
  flex-flow: row wrap;
  max-width: 1000px;
}
.place {
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 300px;
  height: 300px;
  overflow-y: auto;
  margin-right: 32px;
  margin-bottom: 32px;
  .image {
    width: 100%;
    height: 225px;
    background-size: cover;
  }
  .overview {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    h2 {
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
