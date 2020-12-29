<template>
  <div class="hero">
    <div class="hero__main col-12 col-lg-6" :style="mainStyle">
      <div class="hero__main__text">
        <em>{{ data.em }}</em>
        <h1 class="mb-3">
          {{ data.h1 }}
        </h1>
        <p class="mt-4">
          {{ data.p }}
        </p>
        <a href="#read-more">Read More</a>
      </div>
    </div>
    <div class="hero__img col-lg-6" :style="imageStyle" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    mainStyle: {}
  }),
  computed: {
    imageStyle () {
      return {
        backgroundImage: `url(${this.data.img})`
      }
    }
  },
  mounted () {
    this.mainStyle = document.body.clientWidth > 991 ? this.data.bg : `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${this.data.img})`
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize (e) {
      const width = e.target.innerWidth
      this.mainStyle = width > 991 ? this.data.bg : `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${this.data.img})`
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  max-width: 100%;
  height: calc(100vh - 81px);
  &__main {
    background: linear-gradient(rgba($color: #000000, $alpha: 0.75), rgba($color: #000000, $alpha: 0.75)), url('https://images.unsplash.com/photo-1509100194014-d49809396daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    text-align: center;

    &__text {
      max-width: 600px;

      em {
        font-style: normal;
        text-decoration: underline;
        font-size: 1.5rem;
      }

      h1 {
        font-size: 3rem;
        line-height: 3.5rem;
        font-weight: 400;
        word-wrap: break-word;
        word-break: keep-all;
      }

      p {
        font-size: 1rem;
        line-height: 2rem;
      }

      a {
        color: #288855;
        font-weight: 600;
      }

      @media screen and (max-width: 600px) {
        h1 {
          font-size: 2rem;
          line-height: 2.5rem;
        }

        em {
          font-size: 1.3rem;
        }

        p {
          line-height: 1.5rem;
        }
      }
    }
  }
  &__img {
    display: none;
    max-width: 100%;
    // background-image: url('https://images.unsplash.com/photo-1509100194014-d49809396daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__ctrls {
    display: none;
    position: absolute;
    bottom: 80px;
    right: 30px;

    button {
      display: none;
      background-color: #fff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 992px) {
    &__main {
      background: #F2FCF9;
      color: #262627;
      text-align: left;

      &__text {
        max-width: 450px;
      }
    }

    &__img {
      display: block;
    }

    &__ctrls {
      display: flex;
    }
  }
}
</style>
