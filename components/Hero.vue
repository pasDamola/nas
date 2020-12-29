<template>
  <section class="position-relative">
    <carousel :per-page="1" autoplay :autoplay-timeout="5000" navigation-enabled class="caro">
      <slide v-for="(item, index) in heroData" :key="index" style="width: 100vw;">
        <hero-item :data="item" />
      </slide>
    </carousel>
    <div class="banner py-4">
      <span>
        Read more about our response to the Covid-19 pandemic
        <a class="mx-2" href="#here">here</a>
      </span>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import HeroItem from './HeroItem'

export default {
  components: { HeroItem, Carousel, Slide },
  data: () => ({
    heroData: [
      {
        bg: '#FFFBF6',
        em: 'Welcome to the',
        h1: 'National Social Investment Management Portal',
        p: 'The central management system for the Federal Ministry of Humanitarian Affairs, Disaster Management and  Social Development.',
        img: '/hero-image1.jpg'
      },
      {
        bg: '#F2FCF9',
        em: 'Please note',
        h1: 'Registration for N-Power Batch C is now Closed!',
        p: 'The central management system for the Federal Ministry of Humanitarian Affairs, Disaster Management and  Social Development.',
        img: '/hero-image2.jpg'
      },
      {
        bg: '#FCF4F2',
        em: 'Read about',
        h1: 'How NASIMS is impacting lives on a global level.',
        p: 'The N-Power Programme is a job creation and skills empowerment programme of the Federal Government of Nigeria…',
        img: '/hero-image3.jpg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.banner {
  position: absolute;
  bottom: 0;
  color: #fff;
  background-color: #161616;
  text-align: center;
  width: 100%;

  a {
    color: #288855;
    &:hover {
      text-decoration: none;
      opacity: 0.9;
    }
  }
}

.caro::v-deep {
  .VueCarousel-pagination {
    width: 100px;
    position: absolute;
    bottom: 90px;
    left: 12%;
    display: none;

    .VueCarousel-dot {
      &--active {
        border-radius: 100px;
        width: 20px !important;
      }
    }

    @media screen and (max-width: 600px){
      display: none;
    }

    @media screen and (max-width: 991px) {
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .VueCarousel-navigation {
    width: fit-content;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 90px;
    right: 30px;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
      display: none;
    }
    .VueCarousel-navigation-button {
      position: relative;
      width: 40px;
      height: 40px;
      background-color: #fff;
      top: 20px;
      border-radius: 50%;

      &.VueCarousel-navigation-next {
        top: 50%;
        position: relative;
        transform: none;
      }
    }
  }
}
</style>
