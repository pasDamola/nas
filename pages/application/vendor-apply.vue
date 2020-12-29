<template>
  <div class="vendor">
    <b-container class="pb-4">
      <div class="text-center">
        <h1 class="batchC">
          Vendor Details
        </h1>
        <p class="kindly">
          Kindly fill the form with accurate information
        </p>
      </div>
      <b-row class="mx-0">
        <b-form class="vendor__form">
          <h3>Business Details</h3>
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-2"
                label="Company Name:"
                class="titless"
                label-for="input-3"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.company_name"
                  required
                  placeholder="Enter Company Name"
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
                  id="input-3"
                  v-model="form.email"
                  required
                  placeholder="Enter Email Address"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-2"
                label="Contact Name:"
                class="titless"
                label-for="input-3"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.contact_name"
                  required
                  placeholder="Enter Contact Name"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-2"
                label="Contact Phone Number:"
                class="titless"
                label-for="input-3"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.phone_number"
                  required
                  placeholder="Enter Phone Number"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group
                id="input-group-2"
                label="Address:"
                class="titless"
                label-for="input-3"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.address"
                  required
                  placeholder="Enter Address"
                />
              </b-form-group>
            </b-col>
          </b-row>
          <div class="form__divider" />
          <h3 class="mt-4">
            Other Details
          </h3>
          <b-row>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-6"
                label="Tax Identification Number:"
                class="titless"
                label-for="input-6"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.tax_id_number"
                  required
                  placeholder="Enter Tax ID"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-2"
                label="RC Number:"
                class="titless"
                label-for="input-3"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.rc_number"
                  required
                  placeholder="Enter RC Number"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-6"
                label="Date Of Incorporation:"
                class="titless"
                label-for="input-6"
              >
                <b-form-datepicker id="example-datepicker" v-model="form.date_of_inc" placeholder="DD/MM/YY" class="mb-2" />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="6">
              <b-form-group
                id="input-group-6"
                label="Password:"
                class="titless"
                label-for="input-6"
              >
                <b-form-input v-model="form.password" type="password" placeholder="******" class="mb-2" />
              </b-form-group>
            </b-col>
          </b-row>
          <b-button
            class="bt my-3"
            block
            variant="success"
            :disabled="!form.company_name || !form.email || !form.rc_number || busy"
            @click="submitApp"
          >
            <b-spinner v-if="busy" variant="light" label="Spinning" />
            <span v-else>Submit Application</span>
          </b-button>
        </b-form>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'

export default {
  layout: 'vendor',
  data () {
    return {
      isPassword: true,
      btnText: 'Submit Application',
      selected: null,
      busy: false,
      localGovts: [],
      localGovtsOfResidence: [],
      form: {
        bid: this.$store.state.bid,
        company_name: '',
        email: '',
        contact_name: '',
        phone_number: '',
        address: '',
        tax_id_number: '',
        rc_number: '',
        date_of_inc: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(['bid'])
  },
  methods: {
    submitApp () {
      this.busy = true
      this.btnText = 'Loading...'
      this.$axios
        .post(
          '/vendor',
          this.form
        )
        .then((response) => {
          console.log(response)
          localStorage.setItem('vendor', JSON.stringify(response.data.user))
          this.$router.push({ path: '/confirm_vendor' })
        })
        .catch((err) => {
          this.busy = false
          this.btnText = 'Confirm and Submit Application'
          console.log(err)
        })
    },
    onHidden () {
      // Return focus to the button once hidden
      this.$refs.button.focus()
    },
    passportFileUpload (e) {
      const file = e.target.files[0]
      console.log(file)
      this.passport_name = file.name
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.passport_photo = event.target.result
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
          this.nysc_certificate = event.target.result
        }
        reader.readAsDataURL(file)
      } else {
        console.log('Sorry, FileReader API not supported')
      }
    },
    birthFileUpload (e) {
      const file = e.target.files[0]
      console.log(file)
      this.birth_name = file.name
      if (typeof FileReader === 'function') {
        const reader = new FileReader()

        reader.onload = (event) => {
          this.birth_certificate = event.target.result
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
    }
  }
}
</script>

<style lang="scss" scoped>
.vendor {
  margin-top: 100px;

  h1,
  h3 {
    font-weight: 600;
    color: #444;
  }

  h3 {
    font-size: 1.3rem;
    margin: 10px 0 30px;
  }

  &__form::v-deep {
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
}

.links {
  padding-top: 15px;
}
</style>
