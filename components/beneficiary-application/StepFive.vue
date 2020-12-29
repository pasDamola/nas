<template>
  <div>
    <b-form class="form">
      <h3>Programme Information</h3>
      <b-row>
        <!-- <b-col cols="12">
          <b-form-group
            id="input-group-2"
            label="Email Address"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.email_address"
              required
              placeholder="Enter Email Address"
              name="address"
            />
          </b-form-group>
        </b-col> -->
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Category?"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              id="input-2"
              v-model="form.category"
              required
              placeholder="What Category are you applying as?"
              name="address"
              :options="categories"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="What Programme are you applying for?"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              id="input-2"
              v-model="form.scheme_name"
              required
              placeholder="What scheme are you applying for?"
              name="address"
              :options="schemes"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="What Scheme are you applying for?"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              id="input-2"
              v-model="form.programme"
              required
              placeholder="What scheme are you applying for?"
              name="address"
              :options="programmes"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <div class="stepper__actions mt-3 mb-4 row justify-content-end mx-0">
      <b-button
        disabled
        class="mx-2 btn btn-outline-success"
        @click="prev"
      >
        <b-icon icon="arrow-left" />
        <span>Previous</span>
      </b-button>
      <button
        class="ml-2 btn btn-success"
        :disabled="!form.programme || !form.scheme_name || loading"
        @click="next"
      >
        <b-spinner v-if="loading" variant="light" label="Spinning" />
        <span v-else>Proceed</span>
        <b-icon icon="arrow-right" />
      </button>
    </div>
  </div>
</template>

<script>
import stateOptions from '~/static/json/nigeria-states-and-local-govts.json'

export default {
  async fetch () {
    this.states = await stateOptions
  },
  data () {
    return {
      isPassword: true,
      btnText: 'Submit Application',
      selected: null,
      busy: false,
      loading: false,
      localGovts: [],
      states: [],
      schemes: [
        { text: 'NPOWER', value: 'NPOWER' },
        { text: 'TraderMoni', value: 'TraderMoni' },
        { text: 'Conditional Cash Transfer', value: 'Conditional Cash Transfer' }
      ],
      programmes: [
        { text: 'NHealth-NPR', value: 'NHealth-NPR' },
        { text: 'NTax', value: 'NTax' },
        { text: 'NAgro', value: 'NAgro' },
        { text: 'NTech', value: 'NTech' }
      ],
      categories: [
        { text: 'Graduate', value: 'Graduate' },
        { text: 'Non Graduate', value: 'Non Graduate' }
      ],
      localGovtsOfResidence: [],
      error: {
        error: [],
        message: ''
      },
      form: {
        email_address: localStorage.getItem('email_app'),
        programme: 'N-Health - NPR',
        batch: 'Batch D',
        category: '',
        scheme_name: '',
        year_of_application: new Date().getFullYear(),
        application_stage: '',
        application_status: '',
        registration_status: '',
        program_status: '',
        alreadyexistonnpower: false
      }
    }
  },
  computed: {
    isFormFilled () {
      const keys = Object.keys(this.form)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (!this.form[key]) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    getSelectedItem (state) {
      // Just a regular js function that takes 1 arg
      this.form.state_of_origin = state
      this.getLocalGovt(state)
    },
    getLocalGovt (state) {
      const arr1 = this.states.filter(d => d.state === state)
      if (arr1.length > 0) {
        this.localGovts = arr1[0].lgas
      }
    },
    getSelectedItemOfResidence (state) {
      // Just a regular js function that takes 1 arg
      this.form.state_of_residence = state
      this.getLocalGovtOfResidence(state)
    },
    getLocalGovtOfResidence (state) {
      const arr1 = this.states.filter(d => d.state === state)
      if (arr1.length > 0) {
        this.localGovtsOfResidence = arr1[0].lgas
      }
    },
    next () {
      this.loading = true
      this.$axios.post('applicants/programme', this.form).then((response) => {
        console.log(response)
        this.loading = false
        this.$store.commit('SET_PROGRAMME_DETAILS', this.form)
        this.$emit('get-data', this.form)
        // this.$store.commit('SET_COMPLETE_DETAILS')
        // this.$router.push({ path: '/confirm' })
      }).catch((err) => {
        this.loading = false
        this.error = err.response.data
        this.errorToast('b-toaster-top-right', 'danger')
      })
    },
    prev () {
      this.$emit('previous', this.form)
    },
    errorToast (toaster, variant = null) {
      this.$bvToast.toast(`${this.error.message}` || `${this.error.error[0]}`, {
        title: 'Error',
        toaster,
        solid: true,
        variant
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form::v-deep {
  h3 {
    color: #444;
    font-weight: 600;
    font-size: 1.3rem;
    margin: 10px 0 30px;
  }

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  input {
    min-height: 50px;

    &::placeholder {
      font-size: .87rem;
      opacity: .9;
    }
  }

  .form-group label {
    color: #666;
    font-size: .95rem;
    font-weight: 600;
  }

  .b-form-datepicker {
    min-height: 50px;
    label {
      display: flex;
      align-items: center;
    }
  }

  .form__divider {
    width: 100%;
    height: 1px;
    background-color: #aaa;
    opacity: .5;
    margin: 10px 0;
  }
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
</style>
