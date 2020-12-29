<template>
  <div v-if="isAppForm">
    <b-container class="pb-4">
      <b-row class="text-center my-4">
        <b-col>
          <img src="/Bitmap.svg" alt>
        </b-col>
      </b-row>
      <b-row class="text-center mx-auto justify-content-center mb-4">
        <b-col cols="12" md="8">
          <div class="batchC">
            N-Power Batch D Registration
          </div>
          <div class="kindly">
            Kindly fill in the right details below
          </div>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" md="8">
          <b-form v-if="show">
            <!-- <b-form-group
              id="input-group-1"
              label="What N-Power Programme Are You Applying For?"
              class="titless"
              label-for="input-1"
            >
              <b-form-select id="input-3" v-model="form.programme" :options="programmes" required />
            </b-form-group> -->
            <div>&nbsp;</div>
            <h3>Personal Information</h3>
            <!-- <b-form-group
              id="input-group-2"
              class="titless"
              label="Passport Photo:"
              label-for="input-2"
            >
              <b-form-file
                v-model="form.passport_photo"
                class="file"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                @change="passportFileUpload"
              />
            </b-form-group> -->
            <b-row class="justify-content-center">
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-1"
                  label="Surname:"
                  class="titless"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.surname"
                    name="Last Name"
                    required
                    placeholder="Enter surname"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Firstname:"
                  class="titless"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.first_name"
                    name="First Name"
                    required
                    placeholder="Enter firstname"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-3"
                  label="Other Names:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.other_name"
                    name="Other names"
                    required
                    placeholder="Enter other names"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-4"
                  label="Date Of Birth:"
                  class="titless"
                  label-for="example-datepicker"
                >
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="form.dob"
                    placeholder="DD/MM/YY"
                    class="mb-2"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-5"
                  label="Email Address:"
                  class="titless"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    v-model="form.email"
                    required
                    type="email"
                    name="Email"
                    placeholder="Enter email address"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-6"
                  label="Phone Number:"
                  class="titless"
                  label-for="input-6"
                >
                  <b-form-input
                    id="input-6"
                    v-model="form.phone_number"
                    required
                    name="phone"
                    placeholder="Enter phone"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-7"
                  label="State of Origin:"
                  class="titless"
                  label-for="input-7"
                >
                  <b-form-select v-model="form.state_of_origin" @change="getSelectedItem">
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
                  id="input-group-8"
                  class="titless"
                  label="Local Government Area Of Origin:"
                  label-for="input-8"
                >
                  <b-form-select id="input-8" v-model="form.local_govt_area">
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
                <b-form-group
                  id="input-group-9"
                  label="Password:"
                  class="titless"
                  label-for="input-9"
                >
                  <!-- <b-input-group-prepend is-text>
                  <b-icon icon="search" />
                  </b-input-group-prepend>-->
                  <b-form-input
                    id="input-9"
                    v-model="form.password"
                    :type="isPassword ? 'password' : 'text'"
                    required
                    placeholder="Enter Password"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-10"
                  label="Confirm Password:"
                  class="titless"
                  label-for="input-10"
                >
                  <b-form-input
                    id="input-10"
                    v-model="form.c_password"
                    type="password"
                    required
                    placeholder="Enter Password"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <hr>
            <h3>Residential Details</h3>
            <b-form-group
              id="input-group-11"
              label="Residential Address:"
              class="titless"
              label-for="input-11"
            >
              <b-form-input
                id="input-11"
                v-model="form.residential_address"
                required
                placeholder="Enter Residential Address"
              />
            </b-form-group>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-12"
                  label="State Of Residence:"
                  class="titless"
                  label-for="input-12"
                >
                  <b-form-select
                    id="input-12"
                    v-model="form.state_of_residence"
                    placeholder="Select State of Residence"
                    @change="getSelectedItemOfResidence"
                  >
                    <option
                      v-for="(selectOptions, indexOpt) in states"
                      :key="indexOpt"
                      :value="selectOptions.state"
                    >
                      {{ selectOptions.state }}
                    </option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-13"
                  label="Local Government Area Of Residence:"
                  class="titless"
                  label-for="input-13"
                >
                  <b-form-select id="input-13" v-model="form.lg_of_residence">
                    <option
                      v-for="(selectedState, i) in localGovtsOfResidence"
                      :key="i"
                      :value="selectedState"
                    >
                      {{ selectedState }}
                    </option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>&nbsp;
            <b-row>
              <b-col />
              <b-col cols="12">
                <b-button
                  class="bt"
                  block
                  variant="success"
                  :disabled="formFilled === false || busy === true"
                  @click="changeView(false)"
                >
                  Complete Application
                </b-button>
              </b-col>
              <b-col />
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <div v-else>
    <b-container>
      <b-row align-h="center">
        <b-col cols="6">
          <b-row>
            <div class="mx-auto">
              <img class src="/Bitmap.svg" alt>
            </div>
          </b-row>
          <div class="mx-auto batchC text-center mb-4">
            N-Power Batch D Registration
            <div />
          </div>
          <div class="ml-n3">
            <div class="text-left confirm">
              Kindly Confirm Your Application Entry:
            </div>
            <div class="npower-prog">
              N-Power Programme: {{ form.programme }}
            </div>
            <div class="subtitles">
              Personal Information
            </div>
            <hr>
            <div class="persona-info-subs">
              <span>Surname:</span>
              <span>{{ form.surname }}</span>
            </div>
            <div class="persona-info-subs">
              <span>First Name:</span>
              <span>{{ form.first_name }}</span>
            </div>
            <div class="persona-info-subs">
              <span>Other Names:</span>
              <span>{{ form.other_name }}</span>
            </div>
            <div class="persona-info-subs">
              <span>Date Of Birth:</span>
              <span>{{ form.dob }}</span>
            </div>
            <div class="persona-info-subs">
              <span>Email Address:</span>
              <span>{{ form.email }}</span>
            </div>
            <div class="persona-info-subs">
              <span>Phone Number:</span>
              <span>{{ form.phone_number }}</span>
            </div>
            <div class="persona-info-subs">
              <span>State Of Origin:</span>
              <span>{{ form.state_of_origin }}</span>
            </div>
            <div class="persona-info-subs">
              <span>LGA Of Origin:</span>
              <span>{{ form.local_govt_area }}</span>
            </div>
            <div class="subtitles">
              Residential Details
            </div>
            <hr>
            <div class="persona-info-subs">
              <span>Residential Address:</span>
              <span>{{ form.residential_address }}</span>
            </div>
            <div class="persona-info-subs">
              <span>State Of Residence:</span>
              <span>{{ form.state_of_residence }}</span>
            </div>
            <div class="persona-info-subs">
              <span>LGA Of Residence:</span>
              <span>{{ form.lg_of_residence }}</span>
            </div>
          </div>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <!-- <b-overlay
              :show="busy"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="success"
              @hidden="onHidden"
            >-->
            <b-button
              ref="button"
              class="bt"
              block
              variant="success"
              :disabled="busy"
              @click="submitApp"
            >
              <template v-if="busy">
                <b-spinner variant="light" />
              </template>
              <template v-else>
                Confirm and Submit Application
              </template>
            </b-button>
            <!-- </b-overlay> -->
          </b-row>
          <b-row>
            <div class="mx-auto edit">
              <span class="shift-down" @click="changeView(true)">Go Back And Edit the Details</span>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'
import stateOptions from '~/static/json/nigeria-states-and-local-govts.json'

export default {
  async fetch () {
    this.states = await stateOptions
  },
  layout: 'supervisors',
  data () {
    return {
      isPassword: true,
      btnText: 'Confirm and Submit Application',
      selected: null,
      busy: false,
      localGovts: [],
      localGovtsOfResidence: [],
      form: {
        surname: '',
        first_name: '',
        other_name: '',
        dob: '',
        email: '',
        phone_number: '',
        state_of_origin: '',
        local_govt_area: '',
        password: '',
        c_password: '',
        residential_address: '',
        state_of_residence: '',
        lg_of_residence: ''
      },
      lga_name: '',
      birth_name: '',
      nysc_name: '',
      passport_name: '',
      states: [],
      programmes: [
        { text: 'Select A Programme', value: null, disabled: true },
        { text: 'N-Power Agro', value: 'N-Power Agro' },
        { text: 'N-Power Tax', value: 'N-Power Tax' },
        { text: 'N-Power Build', value: 'N-Power Build' },
        { text: 'N-Power Creative', value: 'N-Power Creative' },
        { text: 'N-Power Health', value: 'N-Power Health' },
        { text: 'N-Power Teach', value: 'N-Power Teach' },
        { text: 'N-Power Tech Hardware', value: 'N-Power Tech Hardware' },
        { text: 'N-Power Tech Software', value: 'N-Power Tech Software' }
      ],
      education: [
        { text: 'Select highest level of Education', value: null },
        {
          text: 'Junior School Certificate Examination (JSCE)',
          value: 'Junior School Certificate Exam(JSCE)'
        },
        {
          text: 'Senior School Certificate Examination (SSCE)',
          value: 'Senior School Certificate Exam (SSCE)'
        },
        {
          text: 'Ordinary National Diploma (OND)',
          value: 'Ordinary National Diploma (OND)'
        },
        {
          text: 'Higher National Diploma (HND)',
          value: 'Higher National Diploma (HND)'
        },
        { text: 'Bachelors Degree', value: "Bachelor's Degree" },
        { text: 'Masters Degree', value: "Master's Degree" },
        {
          text: 'Doctor Of Philosophy (PhD)',
          value: 'Doctor Of Philosophy (PhD)'
        }
      ],
      show: true
    }
  },
  computed: {
    ...mapState(['isAppForm']),
    formFilled () {
      const keys = Object.keys(this.form)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (key !== 'other_name') {
          if (!this.form[key]) {
            return false
          }
        }
      }
      return true
    }
  },
  mounted () {
    this.getProgrammes()
  },
  methods: {
    getProgrammes () {
      this.$axios
        .get('programme/graduates')
        .then(({ data }) => {
          const programmes = data.data.map((el) => {
            return {
              text: el.name,
              value: el.name
            }
          })
          this.programmes = programmes
          this.programmes.unshift({
            text: 'Select A Programme',
            value: null,
            disabled: true
          })
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
    setActiveState (val) {
      this.$store.commit('setActiveState', val)
    },
    changeView (view) {
      this.$store.commit('SET_VIEW_STATE', view)
    },
    submitApp () {
      this.busy = true
      this.btnText = 'Loading...'
      this.form.full_name = `${this.form.first_name} ${this.form.last_name}`
      this.$axios
        .post(
          'supervisor/signup',
          this.form
        )
        .then((response) => {
          this.$store.commit('SHOW_SUPERVISOR_CONFIRM_PAGE')
          this.$router.push({ path: '/confirm' })
        })
        .catch(() => {
          this.busy = false
          this.$bvToast.toast('Something went wrong, please try again', {
            title: 'Error',
            solid: true,
            variant: 'danger',
            toaster: 'b-toaster-top-right'
          })
        })
    },
    onHidden () {
      // Return focus to the button once hidden
      this.$refs.button.focus()
    }
  }
}
</script>

<style>
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
