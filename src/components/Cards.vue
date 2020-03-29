<template>
  <div class="cards-list">
    <div class="card">
      <div class="card_image">
        <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
      </div>
      <div class="card_title has-text-white">
        <h3 class="is-size-3">Card Title</h3>
      </div>
    </div>

    <div class="card">
      <div class="card_image">
        <img
          src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg"
        />
      </div>
      <div class="card_title title-white">
        <p>Card Title</p>
      </div>
    </div>

    <div class="card">
      <div class="card_image">
        <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
      </div>
      <div class="card_title">
        <p>Card Title</p>
      </div>
    </div>

    <div class="card">
      <div class="card_image">
        <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
      </div>
      <div class="card_title title-black">
        <p>Card Title</p>
      </div>
    </div>

    <div class="card">
      <div class="card_image">
        <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
      </div>
      <div class="card_title title-black">
        <p>Card Title</p>
      </div>
    </div>

    <div class="card">
      <div class="card_image">
        <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
      </div>
      <div class="card_title title-black">
        <p>Card Title</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cCards",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="sass">
.bg
  background: url("") center center no-repeat fixed
  background-size: cover
  @include tablet
    background-color: white
</style>

<style scoped lang="css">
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 0px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 0px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 0px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 0px 0px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25),
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

@media all and (max-width: 500px) {
  .card-list {
    flex-direction: column;
  }
}
</style>
