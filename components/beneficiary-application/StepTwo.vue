<template>
  <div>
    <b-form class="form">
      <h3>Educational Information</h3>
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
            label="Institution type"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              v-model="form.institution_type"
              required
              placeholder="Select Highest Level Of Education"
              name="address"
              :options="institution_status"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Highest Level Of Education"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              v-model="form.highest_level_of_education"
              required
              placeholder="Select Highest Level Of Education"
              name="address"
              :options="education_status"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Course Of Study"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.course_of_study"
              required
              placeholder="Enter course of study"
              name="address"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Year Of Graduation"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="display_value"
              required
              placeholder="Enter year of graduation"
              name="address"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Institution"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.institution"
              required
              placeholder="Enter Institution attended"
              name="address"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-6"
            class="titless"
            label="Other Institution Name(Optional):"
            label-for="input-6"
          >
            <b-form-input id="input-6" v-model="form.other_institution_name" />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-6"
            class="titless"
            label="Degree Upload:"
            label-for="input-6"
          >
            <b-form-file
              v-model="form.degree_upload"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              @change="degreeUpload"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-6"
            class="titless"
            label="Additional Degree Upload(Optional):"
            label-for="input-6"
          >
            <b-form-file
              v-model="form.additional_degree_upload"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              @change="additionalDegreeUpload"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="National Youth Service Certificate"
            class="titless"
            label-for="input-3"
          >
            <b-form-file
              v-model="form.national_youth_service_certificate"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              @change="nyscFileUpload"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="NYSC Status"
            class="titless"
            label-for="input-3"
          >
            <b-form-select
              id="input-2"
              v-model="form.nysc_status"
              required
              :options="nysc_status"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            v-if="form.nysc_status === 'Pending'"
            id="input-group-2"
            label="NYSC Estimated Year of Completion"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.nysc_estimated_year_of_completion"
              required
              placeholder="Enter Year of Completion"
              name="address"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <div class="stepper__actions mt-3 mb-4 row justify-content-end mx-0">
      <b-button
        class="mx-2 btn btn-outline-success"
        @click="prev"
      >
        <b-icon icon="arrow-left" />
        <span>Previous</span>
      </b-button>
      <button
        class="ml-2 btn btn-success"
        :disabled="!form.degree_upload || !form.institution || loading"
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
      education_status: [
        { text: 'O\'Level', value: 'O\'Level' },
        { text: 'Degree', value: 'North-East' },
        { text: 'MSc', value: 'MSc' },
        { text: 'PhD', value: 'PhD' }
      ],
      institution_status: [
        { text: 'University', value: 'University' },
        { text: 'Polytechnic', value: 'Polytechnic' },
        { text: 'College Of Education', value: 'College Of Education' }
      ],
      nysc_status: [
        { text: 'Completed', value: 'Completed' },
        { text: 'Pending', value: 'Pending' }
      ],
      localGovtsOfResidence: [],
      form: {
        email_address: localStorage.getItem('email_app'),
        national_youth_service_certificate: [],
        institution: '',
        year_of_graduation: '',
        institution_type: '',
        other_institution_name: '',
        course_of_study: '',
        degree_upload: [],
        additional_degree_upload: [],
        nysc_status: '',
        nysc_estimated_year_of_completion: '',
        highest_level_of_education: ''
      },
      display_value: null,
      error: {
        message: '',
        error: []
      },
      err: null
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
  watch: {
    display_value (newValue) {
      this.year_of_graduation = parseInt(newValue)
    }
  },
  methods: {
    nyscFileUpload (e) {
      const file = e.target.files[0]
      console.log(file)
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.form.national_youth_service_certificate = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    degreeUpload (e) {
      const file = e.target.files[0]
      console.log(file)
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.form.degree_upload = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    additionalDegreeUpload (e) {
      const file = e.target.files[0]
      console.log(file)
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.form.additional_degree_upload = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
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
      console.log(localStorage.getItem('email_app'))
      this.form.year_of_graduation = this.display_value
      this.loading = true
      this.$axios.post('applicants/education', this.form).then((response) => {
        console.log(response)
        this.loading = false
        this.$store.commit('SET_EDUCATIONAL_DETAILS', this.form)
        this.$emit('get-data', this.form)
      }).catch((err) => {
        console.log(err)
        this.error = err.response.data
        this.loading = false
        this.errorToast('b-toaster-top-right', 'danger')
      })
    },
    prev () {
      this.$emit('previous', this.form)
    },
    errorToast (toaster, variant = null) {
      this.$bvToast.toast(`${this.error.message}  \n ${JSON.stringify(this.error.error)}`, {
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
