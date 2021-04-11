<template>
  <header>
    <h1><RouterLink to="/">N.E.R.D. Riot!</RouterLink></h1>
    <p>The places we used to haunt</p>
  </header>
  <main>
    <RouterView />
  </main>
</template>

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
    a {
      color: inherit;
      text-decoration: none;
    }
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
</style>
