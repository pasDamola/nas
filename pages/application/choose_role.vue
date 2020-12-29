<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="role">
      <b-col cols="12" md="6">
        <h2 class="text-center role__title">
          What Scheme Are You Applying For?
        </h2>
        <h6 class="text-center role__subtitle">
          Kindly select a scheme and programme below
        </h6>
        <b-row class="role__options" align-h="center">
          <b-col cols="12" md="6" class="my-2">
            <div class="mx-auto option option--one" :class="isActive ? 'active' : null" @click="changeView(true)">
              <div class="option__image" />
              <div class="option__text">
                Beneficiary
              </div>
              <div class="checkbox">
                <i class="fa fa-check" />
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6" class="my-2">
            <div class="mx-auto option option--two" :class="isActive ? null : 'active'" @click="changeView(false)">
              <div class="option__image" />
              <div class="option__text">
                Vendor
              </div>
              <div class="checkbox">
                <i class="fa fa-check" />
              </div>
            </div>
          </b-col>
        </b-row>
        <div v-if="isActive">
          <b-form class="role__form" @submit.prevent="beneficiaryApply">
            <b-form-select />
            <b-form-select />
            <b-button block class="btn btn-success" @click.prevent="beneficiaryApply">
              Proceed
            </b-button>
          </b-form>
        </div>
        <div v-else>
          <b-form class="role__form" @submit.prevent="vendorApply">
            <b-form-select v-model="scheme" :options="schemes" />
            <b-button block class="btn btn-success" @click.prevent="vendorApply">
              Proceed
            </b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'beneficiary',
  data () {
    return {
      isActive: true,
      schemes: [],
      scheme: null
    }
  },
  mounted () {
    this.getSchemes()
  },
  computed: {
    ...mapState(['isBeneficiary', 'bid'])
  },
  methods: {
    changeView (view) {
      this.$store.commit('SET_APPLY_VIEW', view)
      this.isActive = !this.isActive
    },
    vendorApply () {
      this.$router.push({ path: '/application/vendor-apply' })
    },
    beneficiaryApply () {
      this.$router.push({ path: '/application/beneficiary-apply' })
    },
    getSchemes () {
      this.$axios
        .get('bid')
        .then(({ data }) => {
          const schemes = data.data.map((el) => {
            this.$store.commit('SET_BID', el.title)
            return {
              text: el.title,
              value: el.title
            }
          })
          this.schemes = schemes
          this.schemes.unshift({
            text: 'Select from Available Bids',
            value: null,
            disabled: true
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$man-white: '../../assets/man-white.png';
$man-green: '../../assets/man-green.png';
$trolley-white: '../../assets/trolley-white.png';
$trolley-green: '../../assets/trolley-green.png';
.btn-success {
  background-color: #288855;
}

.role {
  min-height: 100vh;

  &__title {
    font-weight: 600;
  }

  &__subtitle {
    color: #A5A5A5;
  }

  &__options {
    margin: 30px 0;
    .option {
      cursor: pointer;
      border: 2px solid #A5A5A5;
      transition: border-color .1s ease-in;
      border-radius: 5px;
      max-width: 200px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;

      &__image {
        transition: all .1s ease-in;
        width: 80px;
        height: 80px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      &__text {
        transition: all .1s ease-in;
        color: #A5A5A5;
        margin: 5px 0;
        font-weight: 500;
      }

      .checkbox {
        display: none;
        width: 28px;
        height: 28px;
        background-color: #288855;
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        right: 10px;
        align-items: center;
        justify-content: center;
      }

      &.active {
        .checkbox {
          display: flex;
        }
      }

      &--one {
        .option__image {
          background-image: url($man-white);
        }

        &:hover,
        &.active {
          border-color: #288855;
          .option__image {
            background-image: url($man-green);
          }
          .option__text {
            color: #288855;
          }
        }
      }

      &--two {
        .option__image {
          background-image: url($trolley-white);
        }

        &:hover,
        &.active {
          border-color: #288855;
          .option__image {
            background-image: url($trolley-green);
          }
          .option__text {
            color: #288855;
          }
        }
      }
    }
  }

  &__form {
    max-width: 400px;
    margin: 10px auto;

    select, button {
      margin: 10px 0;
      min-height: 50px;
    }
  }
}

.group1{
    border: 1px solid #A5A5A5;
    border-radius: 10px;
     height: 128px;
     width: 154px;
     margin-left: 100px;
     text-align: center;
}

.group2{
    border: 1px solid #A5A5A5;
    border-radius: 10px;
     height: 128px;
     width: 154px;
     margin-right: 40px;
     text-align: center;
}

</style>
