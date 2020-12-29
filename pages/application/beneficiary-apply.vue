<template>
  <div class="beneficiary">
    <b-container>
      <div class="text-center beneficiary__heading">
        <b-icon icon="arrow-left-circle-fill" scale="2" @click="dashboard" />
        <div>&nbsp;</div>
        <h1>
          Beneficiary Details
        </h1>
        <p>
          Kindly fill the form with accurate information
        </p>
      </div>
      <div class="stepper">
        <div class="stepper__steps">
          <div
            v-for="count in steps"
            :key="count"
            class="step"
            :class="[step === count ? 'active' : null, step > count ? 'filled' : null]"
          >
            <div class="step__circle">
              <b-icon v-if="step > count" icon="check" />
            </div>
            <span class="step__text">Step {{ count }}</span>
          </div>
        </div>
        <div class="stepper__items">
          <div v-show="step === 1" class="stepper__item">
            <step-one @get-data="getData" />
          </div>
          <div v-show="step === 2" class="stepper__item">
            <step-two
              @previous="prev"
              @get-data="getData"
            />
          </div>
          <div v-show="step === 3" class="stepper__item">
            <step-three
              @previous="prev"
              @get-data="getData"
            />
          </div>
          <div v-show="step === 4" class="stepper__item">
            <step-four
              @previous="prev"
              @get-data="getData"
            />
          </div>
          <div v-show="step === 5" class="stepper__item">
            <step-five
              @previous="prev"
              @get-data="getData"
            />
          </div>
          <div v-show="step === 6" class="stepper__item">
            <step-six
              @previous="prev"
              @get-data="getData"
            />
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import StepOne from '@/components/beneficiary-application/StepOne.vue'
import StepTwo from '@/components/beneficiary-application/StepTwo.vue'
import StepThree from '@/components/beneficiary-application/StepThree.vue'
import StepFour from '@/components/beneficiary-application/StepFour.vue'
import StepFive from '@/components/beneficiary-application/StepFive.vue'
import StepSix from '@/components/beneficiary-application/StepSix.vue'

export default {
  layout: 'postlogin',
  middleware: 'applicantAuth',
  components: { StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix },
  data: () => ({
    step: 1,
    steps: 6,
    formData: {}
  }),
  mounted () {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$store.state.token}`
  },
  methods: {
    dashboard () {
      const id = localStorage.getItem('user-id')
      this.$router.push(`/applicant/${id}`)
    },
    prev () {
      this.step -= 1
      const stepper = document.querySelector('.stepper__items')
      let { transform } = stepper.style
      if (!transform) {
        stepper.style.transform = 'translate(0%)'
      }

      transform = stepper.style.transform
      let num = parseInt(transform.replace(/[a-zA-Z()%]/gi, ''))
      num += 100

      stepper.style.transform = `translate(${num}%)`

      setTimeout(() => {
        stepper.style.transform = 'translate(0%)'
      }, 80)
    },
    next () {
      this.step += 1
      const stepper = document.querySelector('.stepper__items')
      let { transform } = stepper.style
      if (!transform) {
        stepper.style.transform = 'translate(0%)'
      }

      transform = stepper.style.transform
      let num = parseInt(transform.replace(/[a-zA-Z()%]/gi, ''))
      num -= 100

      stepper.style.transform = `translate(${num}%)`

      setTimeout(() => {
        stepper.style.transform = 'translate(0%)'
      }, 80)

      if (this.step > 6) {
        this.$router.push({ path: '/confirm' })
      }
    },
    getData (data) {
      this.formData = { ...this.formData, ...data }
      if (this.step < 6) {
        this.next()
      } else {
        this.submitForm()
      }
    },
    submitForm () {
      console.log(this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>
.beneficiary {
  margin-top: 100px;
  min-height: 100vh;

  &__heading {
    h1 {
      font-weight: 600;
      font-size: 28px;
      color: #444;
    }

    p {
      color: #A5A5A5;
    }
  }

  .stepper {
    width: 700px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;

    &__items {
      display: flex;
      transform-origin: center;
      transform: translateX(0);
      transition: transform .1s ease-out;
    }
    &__item {
      width: 100%;
      padding: 0 10px;
      flex-grow: 1;
      flex-shrink: 0;
    }

    .btn {
      min-height: 50px;
      width: 180px;
      justify-content: space-between;
      display: flex;
      align-items: center;
      border-radius: 5px;

      &-block {
        width: calc(100% - 20px);
        text-align: center;
        margin: 10px;
      }

      &-success {
        background-color: #288855;
      }

      &-outline-success {
        color: #288855;
        background-color: white;
        border-color: #288855;
      }
    }
  }

  .stepper__steps {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    overflow: hidden;
    margin: 20px auto;

    .step {
      position: relative;
      text-align: center;
      color: #A5A5A5;

      &__circle {
        width: 20px;
        height: 20px;
        margin: 5px auto;
        border-radius: 50%;
        border: 2px solid #A5A5A5;
        position: relative;
        z-index: 1;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &::after {
        content: '';
        width: 550%;
        height: 2px;
        position: absolute;
        left: 33px;
        top: 15px;
        transform: translateY(-50%);
        z-index: 0;
      }

      &:nth-child(1) {
        &::after {
          background-color: #A5A5A5;
        }
      }

      &:nth-child(2) {
        &::after {
          background-color: #A5A5A5;
        }
      }

      &:nth-child(3) {
        &::after {
          background-color: #A5A5A5;
        }
      }

      &:nth-child(4) {
        &::after {
          background-color: #A5A5A5;
        }
      }

      &:nth-child(5) {
        &::after {
          background-color: #A5A5A5;
        }
      }

      &:nth-child(6) {
        &::after {
          background-color: #A5A5A5;
        }
      }

      &.active {
        color: #288855;

        .step__circle {
          border-color: #288855;
        }
      }

      &.filled {
        color: #288855;

        .step__circle {
          border-color: #288855;
          background-color: #288855;
          color: #fff;
        }

        &::after {
          background-color: #288855;
        }
      }
    }
  }
}
</style>
