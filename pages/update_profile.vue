<template>
  <div>
    <b-container class="pb-4">
      <b-row align-h="center">
        <b-row class="text-center my-4">
          <div class="batchC">
            Kindly Update Your Details Below
          </div>
        </b-row>
        <b-col cols="12" md="0">
          <b-icon icon="arrow-left-circle-fill" scale="2.0" title="Back To Dashboard" @click="backToDashboard" />
        </b-col>
        <b-col cols="12" md="8">
          <b-form v-if="show">
            <h3 class="text-center">
              Personal Information
            </h3>
            <div class="row justify-content-center">
              <img v-if="userDetails.passport_photo != null" :src="userDetails && userDetails.passport_photo" alt="" class="user-photo">
            </div>
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
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Birth Certificate"
              class="titless"
              label-for="input-3"
            >
              <b-form-file
                v-model="form.birth_certificate"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                @change="birthFileUpload"
              />
            </b-form-group> -->
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Surname:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.surname"
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
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.first_name"
                    required
                    placeholder="Enter firstname"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Other Names:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.other_name"
                    required
                    placeholder="Enter other names"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Date Of Birth:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-datepicker
                    v-model="form.date_of_birth"
                    placeholder="DD/MM/YY"
                    class="mb-2"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Email Address:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email_address"
                    required
                    placeholder="Enter email address"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Phone Number:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.phone_number"
                    required
                    placeholder="Enter phone"
                  />
                </b-form-group>
              </b-col>
              <!-- <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  class="titless"
                  label="ID Type:"
                  label-for="input-3"
                >
                  <b-form-select id="input-3" v-model="form.id_type" :options="ids" />
                </b-form-group>
              </b-col> -->
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  class="titless"
                  label="ID Upload:"
                  label-for="input-3"
                >
                  <b-form-file
                    v-model="form.id_upload"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    @change="idFileUpload"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  class="titless"
                  label="Gender:"
                  label-for="input-3"
                >
                  <b-form-select id="input-3" v-model="form.gender" :options="genders" />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col />
              <b-col cols="12">
                <b-button
                  class="bt"
                  block
                  variant="success"
                  :disabled="!form.passport_photo || !form.email_address || !form.surname || busy"
                  @click="submitApp"
                >
                  <b-spinner v-if="busy" variant="light" label="Spinning" />
                  <span v-else>Update</span>
                </b-button>
              </b-col>
              <b-col />
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'
import stateOptions from '~/static/json/nigeria-states-and-local-govts.json'

export default {
  async fetch () {
    this.states = await stateOptions
  },
  layout: 'postlogin',
  data () {
    return {
      isPassword: true,
      btnText: 'Confirm and Submit Application',
      selected: null,
      busy: false,
      localGovts: [],
      localGovtsOfResidence: [],
      alert: {
        status: false,
        message: ''
      },
      banks: [
        { text: 'Select A Bank', value: null, disabled: true },
        { text: 'Zenith Bank', value: 'N-Power Agro' },
        { text: 'Access Bank', value: 'N-Power Tax' },
        { text: 'Diamond Bank', value: 'N-Power Build' },
        { text: 'Guaranty Trust Bank', value: 'N-Power Creative' },
        { text: 'Heritage Bank', value: 'N-Power Health' },
        { text: 'Polaris Bank', value: 'N-Power Teach' }
      ],
      form: {
        passport_photo: [],
        other_name: '',
        phone_number: '',
        date_of_birth: '',
        id_upload: [],
        id_type: '',
        gender: '',
        email_address: '',
        surname: '',
        first_name: '',
        birth_certificate: []
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
      genders: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' }
      ],
      ids: [
        { text: 'National ID Card', value: 'National ID Card' },
        { text: 'Driver\'s License', value: 'Driver\'s License' },
        { text: 'International Passport', value: 'International Passport' }
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
    userDetails () {
      const stringifiedgUser = localStorage.getItem('nasims-user') || sessionStorage.getItem('nasims-user')
      if (stringifiedgUser) {
        console.log('user', stringifiedgUser)
        return JSON.parse(stringifiedgUser)
      }
      return null
    }
  },
  mounted () {
    // this.getProgrammes()
    this.form.surname = this.userDetails.surname
    this.form.first_name = this.userDetails.first_name
    this.form.date_of_birth = this.userDetails.date_of_birth
    this.form.email_address = this.userDetails.email_address
    this.form.phone_number = this.userDetails.phone_number
    this.form.gender = this.userDetails.gender
    this.form.birth_certificate = this.userDetails.birth_certificate
    // this.form.passport_photo = this.userDetails.passport_photo
    this.form.other_name = this.userDetails.other_name
    this.form.id_type = 'National ID Card'
    this.form.id_upload = this.userDetails.national_youth_service_certificate
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
    backToDashboard () {
      const id = localStorage.getItem('user-id')
      this.$router.push(`/applicant/${id}`)
    },
    submitApp () {
      this.busy = true
      this.btnText = 'Loading...'
      console.log('form', this.form)
      this.$axios
        .post(
          'applicants/profile/update',
          this.form
        )
        .then((response) => {
          const userId = localStorage.getItem('user-id')
          this.busy = false
          localStorage.setItem('nasims-user', JSON.stringify(response.data.data))
          this.successToast('b-toaster-top-right', 'success')
          this.$router.push({ path: `/applicant/${userId}` })
        })
        .catch((err) => {
          this.busy = false
          this.btnText = 'Confirm and Submit Application'
          this.errorToast('b-toaster-top-right', 'danger')
          console.log(err)
        })
    },
    onHidden () {
      // Return focus to the button once hidden
      this.$refs.button.focus()
    },
    passportFileUpload (e) {
      const file = e.target.files[0]
      this.passport_name = file.name
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.form.passport_photo = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    nyscFileUpload (e) {
      const file = e.target.files[0]
      console.log(file)
      this.nysc_name = file.name
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.form.nysc_certificate = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    birthFileUpload (e) {
      const file = e.target.files[0]
      this.birth_name = file.name
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.form.birth_certificate = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    idFileUpload (e) {
      const file = e.target.files[0]
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.form.id_upload = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    lgaFileUpload (e) {
      const file = e.target.files[0]
      console.log(file)
      this.lga_name = file.name
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.lga_identification_letter = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    errorToast (toaster, variant = null) {
      this.$bvToast.toast('Something went wrong, please try again', {
        title: 'Error',
        toaster,
        solid: true,
        variant
      })
    },
    successToast (toaster, variant = null) {
      this.$bvToast.toast('Profile successfully updated', {
        title: 'Success',
        toaster,
        solid: true,
        variant
      })
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

.info-subs{
  color: #767676;
  font-size: 16px;
  font-weight: 500;
}

.user-photo {
  width: 200px;
  height: 200px;
  margin: 20px auto;
  border-radius: 50%;
}
</style>
