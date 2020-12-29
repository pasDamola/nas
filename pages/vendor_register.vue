<template>
  <div>
    <b-container class="pb-4">
      <b-row>&nbsp;</b-row>
      <b-row />
      <b-row />
      <b-row class="text-center">
        <b-col />
        <b-col>
          <img src="/Bitmap.svg" alt>
        </b-col>
        <b-col />
      </b-row>
      <b-row class="text-center">
        <b-col />
        <b-col cols="8">
          <div class="batchC">
            N-Power Batch D Registration
            <div />
          </div>
        </b-col>
        <b-col />
      </b-row>
      <b-row class="text-center">
        <b-col />
        <b-col class="kindly">
          Kindly fill in the right details below
        </b-col>
        <b-col />
      </b-row>&nbsp;
      <b-row>&nbsp;</b-row>
      <b-row>
        <b-col />
        <b-col cols="8">
          <b-form>
            <div>&nbsp;</div>
            <h3>Personal Information</h3>
            <b-row>
              <b-col cols="6">
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
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Contact Name:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.contact_name"
                    required
                    placeholder="Enter Contact Name"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
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
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Email Address:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    required
                    placeholder="Enter email address"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Phone Number:"
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
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Tax Id No:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.tax_id_number"
                    required
                    placeholder="Enter tax id"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Rc Number:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.rc_number"
                    required
                    placeholder="Enter rc no"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Date Of Incoporation:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="form.date_of_inc"
                    placeholder="DD/MM/YY"
                    class="mb-2"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group
                  id="input-group-2"
                  label="Password:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-input-group>
                    <b-input-group-append>
                      <span class="input-group-text"><b-icon :icon="icon" @click="switchVisibility" /></span>
                    </b-input-group-append>
                    <b-form-input v-model="form.password" :type="passwordFieldType" class="LoginInput" placeholder="Password" />
                  </b-input-group>
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
                  :disabled="!form.email || !form.password || loading"
                  @click="submitApp"
                >
                  <b-spinner v-if="loading" variant="light" label="Spinning" />
                  <span v-else>Register</span>
                </b-button>
              </b-col>
              <b-col />
            </b-row>
          </b-form>
        </b-col>
        <b-col />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
    return {
      icon: 'eye-slash',
      passwordFieldType: 'password',
      loading: false,
      btnText: 'Confirm and Submit Application',
      selected: null,
      busy: false,
      localGovts: [],
      localGovtsOfResidence: [],
      alert: {
        status: false,
        message: ''
      },
      error: {
        message: ''
      },
      form: {
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
  methods: {
    switchVisibility () {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      this.icon = this.icon === 'eye-slash' ? 'eye' : 'eye-slash'
    },
    submitApp () {
      this.loading = true
      console.log('form', this.form)
      this.$axios
        .post(
          'vendor',
          this.form
        )
        .then((response) => {
          this.loading = false
          console.log(response)
          this.successToast('b-toaster-top-right', 'success')
        })
        .catch((err) => {
          this.loading = false
          this.error = err.response.data
          this.btnText = 'Confirm and Submit Application'
          this.errorToast('b-toaster-top-right', 'danger')
        })

      this.form.contact_name = ''
      this.form.company_name = ''
      this.form.password = ''
      this.form.rc_number = ''
      this.form.tax_id_number = ''
      this.form.email = ''
      this.form.address = ''
      this.form.date_of_inc = ''
      this.form.phone_number = ''
    },
    onHidden () {
      // Return focus to the button once hidden
      this.$refs.button.focus()
    },
    errorToast (toaster, variant = null) {
      this.$bvToast.toast(`${this.error.message}`, {
        title: 'Error',
        toaster,
        solid: true,
        variant
      })
    },

    successToast (toaster, variant = null) {
      this.$bvToast.toast('An activation link has been sent to your email, please check', {
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
</style>
