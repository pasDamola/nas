<template>
  <div>
    <b-form class="form">
      <h3>Residential Information</h3>
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
            label="State of Origin"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              id="input-2"
              v-model="form.state_of_origin"
              required
              placeholder="Select State Of Origin"
              @change="getSelectedItem"
            >
              <option
                v-for="(selectOption, indexOpt) in states"
                :key="indexOpt"
                :value="selectOption.state"
              >
                {{ selectOption.state }}
              </option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            class="titless"
            label="Local Government Area Of Origin:"
            label-for="input-3"
          >
            <b-form-select id="input-3" v-model="form.lga">
              <option
                v-for="(selectedState, i) in localGovts"
                :key="i"
                :value="selectedState"
              >
                {{ selectedState }}
              </option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <!-- <b-form-group
            id="input-group-2"
            class="titless"
            label="State Of Residence:"
            label-for="input-6"
          >
            <b-form-select
              id="input-6"
              v-model="form.state_of_residence"
              @change="getSelectedItemOfResidence"
              required
            >
              <option
                v-for="(selectedState, i) in states"
                :key="i"
                :value="selectedState"
              >
                {{ selectedState.state }}
              </option>
            </b-form-select>
          </b-form-group> -->
          <b-form-group
            id="input-group-2"
            label="State of Residence"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              id="input-2"
              v-model="form.state_of_residence"
              required
              placeholder="Select State Of Origin"
              @change="getSelectedItemOfResidence"
            >
              <option
                v-for="(selectOption, indexOpt) in states"
                :key="indexOpt"
                :value="selectOption.state"
              >
                {{ selectOption.state }}
              </option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-6"
            class="titless"
            label="Local Government Of Residence:"
            label-for="input-6"
          >
            <b-form-select id="input-6" v-model="form.local_government_of_residence">
              <option
                v-for="(selectedLocalGovt, i) in localGovtsOfResidence"
                :key="i"
                :value="selectedLocalGovt"
              >
                {{ selectedLocalGovt }}
              </option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-6"
            class="titless"
            label="Geopolitical Zone:"
            label-for="input-6"
          >
            <b-form-select id="input-6" v-model="form.geozone" :options="zones" />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Postal Code"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.postal_code"
              required
              placeholder="Enter Postal Code"
              name="Code"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            id="input-group-2"
            label="Address"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.residential_address"
              required
              placeholder="Enter Address"
              name="address"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <div class="stepper__actions mt-3 mb-4 row justify-content-end mx-0">
      <!-- <b-button
        disabled
        class="mx-2 btn btn-outline-success"
      >
        <b-icon icon="arrow-left" />
        <span>Previous</span>
      </b-button> -->
      <button
        class="ml-2 btn btn-success"
        :disabled="!form.postal_code || !form.residential_address || !form.local_government_of_residence || loading"
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
      zones: [
        { text: 'North-West', value: 'North-West' },
        { text: 'North-East', value: 'North-East' },
        { text: 'North-Central', value: 'North-Central' },
        { text: 'South-West', value: 'South-West' },
        { text: 'South-East', value: 'South-East' },
        { text: 'South-South', value: 'South-South' }
      ],
      localGovtsOfResidence: [],
      form: {
        email_address: localStorage.getItem('email_app'),
        state_of_origin: '',
        state_of_residence: '',
        lga: '',
        residential_address: '',
        geozone: '',
        postal_code: '',
        local_government_of_residence: ''

      },
      error: {
        message: '',
        error: []
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
    verifyResidence () {
      this.loading = true
      this.$axios.post('applicants/address', this.form).then((response) => {
        this.loading = false
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    },
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
      this.$axios.post('applicants/address', this.form).then((response) => {
        this.loading = false
        this.$store.commit('SET_RESIDENTIAL_DETAILS', this.form)
        this.$store.commit('SET_RESIDENTIAL_DETAILS_STATE', true)
        this.$emit('get-data', this.form)
      }).catch((err) => {
        console.log(err)
        this.loading = false
        this.error = err.response.data
        this.errorToast('b-toaster-top-right', 'danger')
      })
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
