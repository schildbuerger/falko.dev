<template>
  <div>
    <div class="has-snap-slider snap-start is-relative">
      <section
        class="section is-fullheight hero"
        :class="item.bclass"
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :ref="'slide_' + item.id"
      >
        <div class="columns is-inline-mobile is-fullheight hero-body">
          <div class="column is-4-desktop is-offset-1-desktop is-12-mobile">
            <div class="content">
              <h3 class="title is-size-1 is-size-2-mobile has-text-white">
                {{ item.title }}
              </h3>
              <p class="subtitle is-size-6 has-text-white">
                {{ item.description }}
              </p>
              <a
                :href="item.link"
                :class="item.hideButton"
                target="_blank"
                class="button is-rounded is-white is-outlined is-medium m-t-sm"
              >
                <span>Take me there</span>
                <span
                  class="
                  icon
                  is-small"
                >
                  <i class="fas fa-caret-right"></i> </span
              ></a>
            </div>
          </div>
        </div>
        <div class="paginator">
          <a :href="item.scrollTo">
            <span class="arrow"> </span>
          </a>
        </div>
      </section>
    </div>
    <!-- <div class="dotstyle dotstyle-fillup">
      <ul>
        <li
          v-for="item in items"
          :key="item.id"
          :class="item.id === activeItem ? 'current' : ''"
        >
          <a @click="selectItem(item.id)"></a>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "cProjectCollection",
  data() {
    return {
      activeItem: null,
      items: [
        {
          id: "pdh",
          title: "Digital Hub",
          description:
            "Conception & operationalization a new business unit focused on innovating the gardening product line adopting IoT.",
          bclass: "bg-pdh",
          link: "",
          scrollTo: "#sleepunique",
          hideButton: "hide-button"
        },
        {
          id: "sleepunique",
          title: "Sleep Unique",
          description:
            "IoT Smart Bed Solution, incl. Companion Apps for iOS and Android.",
          bclass: "bg-sleep",
          link: "",
          scrollTo: "#olaph",
          hideButton: "hide-button"
        },
        {
          id: "olaph",
          title: "Olaph",
          description: "Slack-Bot for daily standups.",
          bclass: "bg-olaph",
          link: "http://olaph.io",
          scrollTo: "#urbancoffeediscovery"
        },
        {
          id: "urbancoffeediscovery",
          title: "Urban Coffee Discovery",
          description: "Pop-up Online Shop for Specialty Coffee.",
          bclass: "bg-ucd",
          link: "http://urbancoffeediscovery.com",
          scrollTo: "#jokidotem",
          hideButton: "hide-button"
        },
        {
          id: "jokidotem",
          title: "Jokidotem",
          description: "Meetup about Collaboration of Dev, Design, & Product.",
          bclass: "bg-jokidotem",
          link:
            "https://www.meetup.com/Jokidotem-Closing-the-chasm-between-dev-design-and-product/",
          scrollTo: "#thefloorislava"
        },
        {
          id: "thefloorislava",
          title: "The Floor is Lava",
          description:
            "Podcast about tech, agile leadership, & the future of work.",
          bclass: "bg-lava",
          link:
            "https://podcasts.apple.com/de/podcast/the-floor-is-lava/id1435068510",
          scrollTo: "#sparwelt"
        },
        {
          id: "sparwelt",
          title: "Sparwelt",
          description: "Affiliate Voucher & Coupon Portal.",
          bclass: "bg-sparwelt",
          link: "https://www.sparwelt.de/",
          scrollTo: "#misterspex"
        },
        {
          id: "misterspex",
          title: "Mister Spex",
          description: "Online Shop for Eyewear.",
          bclass: "bg-spexi",
          link: "https://www.misterspex.de/",
          scrollTo: "#bargainmoose"
        },
        {
          id: "bargainmoose",
          title: "Bargainmoose",
          description: "Affiliate Voucher & Coupon Portal.",
          bclass: "bg-bargain",
          link: "https://www.bargainmoose.ca/",
          scrollTo: "#wareable"
        },
        {
          id: "wareable",
          title: "Wareable",
          description: "Tech-Blog about Wearable Technology.",
          bclass: "bg-wareable",
          link: "https://www.wareable.com/",
          scrollTo: "#wunderkarten"
        },
        {
          id: "wunderkarten",
          title: "Wunderkarten",
          description: "Web2Print Online Shop.",
          bclass: "bg-wunderkarten",
          link: "https://www.wunderkarten.de/",
          scrollTo: "#pdh"
        }
      ],
      counter: 0
    };
  },
  methods: {
    selectItem(id) {
      this.activeItem = id;
      window.location.hash = id;
    },
    increment() {
      this.counter++;
    }
  }
};
</script>

<style lang="scss">
.has-snap-slider {
  scroll-snap-type: x mandatory;
  display: flex;
  overflow-x: scroll;
}
.snap-start {
  scroll-snap-align: start;
  scroll-behavior: smooth;
}
.paginator {
  position: relative;
}
.hide-button {
  display: none !important;
}
</style>

<style lang="sass" scoped>
.bg-pdh
  background: url("../assets/img/digitalhub_preview.png") bottom 20vh center no-repeat fixed orange
  background-size: 45vh
  @include tablet
    background: url("../assets/img/digitalhub_preview.png") center right 10vw no-repeat fixed orange
    background-size: 40vw
.bg-sleep
  background: url("../assets/img/sleepunique_preview-min.png") bottom -5vh right -20vw no-repeat fixed #2D2C4A
  background-size: 75vh
  @include tablet
    background: url("../assets/img/sleepunique_preview-min.png") center right no-repeat fixed #2D2C4A
    background-size: 70vw
.bg-olaph
  background: url("../assets/img/olaph_preview_2-min.png") bottom right no-repeat fixed $olaph
  background-size: 110vw
  @include tablet
    background-size: 75vw
  background-color: $olaph
.bg-jokidotem
  background: url("../assets/img/jokidotem_preview-min.png") bottom -15vh right -35vw no-repeat fixed #736f72
  background-size: 75vh
  @include tablet
    background: url("../assets/img/jokidotem_preview-min.png") center right no-repeat fixed #736f72
    background-size: 55vw
.bg-lava
  background: url("../assets/img/lava_preview_2-min.png") bottom -15vw center no-repeat fixed #f95757
  background-size: 75vw
  @include tablet
    background: url("../assets/img/lava_preview_2-min.png") bottom -10vw right 10vw no-repeat fixed #f95757
    background-size: 40vw
.bg-sparwelt
  background: url("../assets/img/sparwelt_preview-min.png") bottom 25vw center no-repeat fixed #196db7
  background-size: 90vw
  @include tablet
    background: url("../assets/img/sparwelt_preview-min.png") center right 10vw no-repeat fixed #196db7
    background-size: 60vw
.bg-spexi
  background: url("../assets/img/spexi_preview-min.png") bottom 5vw right 3vh no-repeat fixed #2f323a
  background-size: 98vw
  @include tablet
    background: url("../assets/img/spexi_preview-min.png") center right 10vw no-repeat fixed #2f323a
    background-size: 50vw
.bg-ucd
  background: url("../assets/img/ucd_preview-min.png") bottom 5vh center no-repeat fixed #f6ad49
  background-size: 100vw
  @include tablet
    background: url("../assets/img/ucd_preview-min.png") center right 5vw no-repeat fixed #f6ad49
    background-size: 55vw
.bg-wareable
  background: url("../assets/img/wareable_preview-min.png") bottom -10vh right -10vw no-repeat fixed #2f323a
  background-size: 80vw
  @include tablet
    background: url("../assets/img/wareable_preview-min.png") bottom -5vw right 10vw no-repeat fixed #2f323a
    background-size: 40vw
.bg-wunderkarten
  background: url("../assets/img/wunderkarten_preview-min.png") bottom 0vh right -55vw no-repeat fixed #9bc53d
  background-size: 150vw
  @include tablet
    background: url("../assets/img/wunderkarten_preview-min.png") bottom -20vw right -30vw no-repeat fixed #9bc53d
    background-size: 100vw
.bg-bargain
  background: url("../assets/img/bargainmoose_preview-min.png") bottom 5vw right -60vw no-repeat fixed #e71d36
  background-size: 155vw
  @include tablet
    background: url("../assets/img/bargainmoose_preview-min.png") center right -20vw no-repeat fixed #e71d36
    background-size: 80vw
</style>

<style lang="scss" scoped>
.dotstyle {
  position: absolute;
  top: 0.5em;
}

.dotstyle ul {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;
}

.dotstyle li {
  position: relative;
  display: block;
  float: left;
  margin: 0 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.dotstyle li a {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 50%;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  text-indent: -999em;
  cursor: pointer; /* make the text accessible to screen readers */
  position: absolute;
}

/* Fill up */
.dotstyle-fillup li a {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 1);
  transition: background 0.3s;
}

.dotstyle-fillup li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 1px #fff;
  transition: height 0.3s;
}

.dotstyle-fillup li a:hover,
.dotstyle-fillup li a:focus {
  background-color: rgba(0, 0, 0, 0.2);
}

.dotstyle-fillup li.current a::after {
  height: 100%;
}
</style>

<style lang="sass">
.arrow,
.arrow:before
  position: absolute
  left: 50%
.arrow
  width: 40px
  height: 40px
  top: 50%
  margin: -20px 0 0 -20px
  -webkit-transform: rotate(-45deg)
  border-left: none
  border-top: none
  border-right: 2px #fff solid
  border-bottom: 2px #fff solid
.arrow:before
  content: ''
  width: 20px
  height: 20px
  top: 50%
  margin: -10px 0 0 -10px
  border-left: none
  border-top: none
  border-right: 1px #fff solid
  border-bottom: 1px #fff solid
  animation-duration: 2s
  animation-iteration-count: infinite
  animation-name: arrow
@keyframes arrow
  0%
    opacity: 1
  100%
    opacity: 0
    transform: translate(-10px, -10px)
</style>
