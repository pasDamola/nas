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
              <b-col cols="6">
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
            </b-row>
            <b-row>
              <b-col cols="6">
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
              <b-col cols="6">
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
            </b-row>
            <b-row>
              <b-col cols="6">
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
                  :disabled="!form.email_address || !form.password || loading"
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
        message: '',
        error: []
      },
      form: {
        email_address: '',
        surname: '',
        first_name: '',
        password: '',
        other_name: ''
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
          'applicants/signup',
          this.form
        )
        .then((response) => {
          console.log(response)
          this.successToast('b-toaster-top-right', 'success')
          this.loading = false
          this.form.email_address = ''
          this.form.first_name = ''
          this.form.surname = ''
          this.form.other_name = ''
          this.form.password = ''
        })
        .catch((err) => {
          this.loading = false
          this.error = err.response.data
          console.log(this.error)
          this.errorToast('b-toaster-top-right', 'danger')
          console.log(err)
        })
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
      this.$bvToast.toast('Please check your email, an activation link has been sent', {
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
