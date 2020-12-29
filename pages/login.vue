<template>
  <div class="login">
    <div class="container">
      <h1>Login to your NASIMS Account</h1>
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-6 login__hero">
          <!-- <span class="my-2 d-block">
            If you don't have an acount, you can <br>
            <a href="/apply">Apply here!</a>
          </span> -->
          <div class="login__wrapper">
            <div class="login__img" />
          </div>
        </div>
        <div class="col-12 col-md-6 login__form">
          <span class="my-2 d-block">
            If you don't have an acount, you can <br>
            <a v-b-modal.modal-1>Register here!</a>
          </span>
          <form @submit.prevent="logIn">
            <b-alert v-model="alert.status" :variant="alert.type" dismissible>
              {{ alert.message }}
            </b-alert>
            <div class="form-group my-4">
              <b-form-select
                id="user"
                v-model="user_type"
                type="email"
                class="form-control form-control-lg"
                placeholder="What type of user"
                :options="user_options"
              />
            </div>
            <div class="form-group my-4">
              <input
                id="email"
                v-model="user.email_address"
                type="email"
                class="form-control form-control-lg"
                placeholder="Enter Email Address"
              >
            </div>
            <div class="form-group my-4">
              <input
                id="password"
                v-model="user.password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Enter Password"
              >
            </div>
            <div class="row justify-content-between mx-0">
              <div class="form-group">
                <div class="form-check">
                  <input id="remember" v-model="saveDetails" class="form-check-input" type="checkbox">
                  <label class="form-check-label" for="remember">
                    Keep me logged in
                  </label>
                </div>
              </div>
              <a v-b-modal.modal-2>Forgot Password</a>
            </div>
            <button
              v-if="user_type == 'Applicant'"
              type="submit"
              class="btn btn--primary w-100"
              :disabled="!user.email_address || !user.password || loading"
              @click="logInApplicant"
            >
              <b-spinner v-if="loading" variant="light" label="Spinning" />
              <span v-else>Proceed</span>
            </button>
            <button
              v-else
              type="submit"
              class="btn btn--primary w-100"
              :disabled="!user.email_address || !user.password || loading"
              @click="logInVendor"
            >
              <b-spinner v-if="loading" variant="light" label="Spinning" />
              <span v-else>Proceed</span>
            </button>
          </form>
        </div>
      </div>
    </div>
    <b-modal id="modal-1" title="Registration" hide-footer>
      <p class="my-4">
        Do you want to register as an Applicant or Vendor?
      </p>
      <b-row>
        <b-col>
          <b-button class="mt-3 btn--outlined" variant="light" block href="/applicant_register">
            Applicant
          </b-button>
        </b-col>
        <b-col>
          <b-button class="mt-3" block variant="success" href="/vendor_register">
            Vendor
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
       <b-modal id="modal-2" title="Change Password" hide-footer>
      <b-row>
         <b-col cols="12">
          <b-form-group
            id="input-group-2"
            label="Email Address"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              v-model="changePassword.email_address"
              required
              placeholder="Enter your Email"
              type="email"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-button
          class="mt-3 btn--outlined"
          variant="light"
          block
          :disabled="!changePassword.email_address || loading"
          @click="sendVerificationLink">
              <b-spinner v-if="changeloading" variant="light" label="Spinning" />
              <span v-else>Send Link</span>
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  layout: 'applicant_login',
  data: () => ({
    user: {
      email_address: '',
      password: ''
    },
    changePassword: {
      email_address: ''
    },
    vendor: {
      email: '',
      password: ''
    },
    user_type: '',
    user_options: [
      { value: null, text: 'Select your user type' },
      { text: 'Applicant/Beneficiary', value: 'Applicant' },
      { text: 'Vendor', value: 'Vendor' }
    ],
    alert: {
      status: false,
      type: 'danger',
      message: ''
    },
    error: {
      message: ''
    },
    vendorerror: {
      message: ''
    },
    loading: false,
    changeloading: false,
    saveDetails: false,
    errorChange: {
      message: ''
    }
  }),
  mounted () {
    const user = JSON.stringify(localStorage.getItem('nasims-user'))
    if (user !== 'null') {
      this.$router.push('/')
    }
  },
  methods: {
    logInApplicant () {
      this.loading = true
      this.alert.status = false
      this.$axios.post('applicants/login', this.user).then((res) => {
        this.loading = false
        if (this.saveDetails) {
          localStorage.setItem('nasims-user', JSON.stringify(res.data.user))
          sessionStorage.setItem('nasims-user', JSON.stringify(res.data.user))
          this.$store.commit('SET_USER_DETAILS', res.data.user)
        } else {
          localStorage.setItem('nasims-user', JSON.stringify(res.data.user))
          sessionStorage.setItem('nasims-user', JSON.stringify(res.data.user))
          this.$store.commit('SET_USER_DETAILS', res.data.user)
        }
        this.alert.status = true
        this.alert.type = 'success'
        this.alert.message = 'Login successful, you are being redirected to your dashboard...'
        const id = window.btoa(res.data.user.email)
        localStorage.setItem('user-id', id)
        localStorage.setItem('email_app', this.user.email_address)
        const token = res.data.token
        this.$store.commit('SET_TOKEN_DETAILS', res.data.token)
        this.$store.dispatch('saveAuth', [JSON.stringify(res.data.user), token])
        // this.$cookies.set('user-cookie', JSON.stringify(res.data.user), {
        //   path: '/',
        //   maxAge: 30 * 7 * 24 * 60 * 60
        // })
        // this.$cookies.set('token-cookie', token, {
        //   path: '/',
        //   maxAge: 30 * 7 * 24 * 60 * 60
        // })
        this.getBvnToken()
        setTimeout(() => this.$router.push(`/applicant/${id}`), 2000)
      }).catch((err) => {
        if (err.response) {
          this.error.message = err.response.data.message
          this.loading = false
          this.alert.status = true
          this.alert.message = `${this.error.message}`
        }
      })
    },
    logInVendor () {
      this.loading = true
      this.alert.status = false
      this.vendor.email = this.user.email_address
      this.vendor.password = this.user.password
      console.log(this.vendor)
      this.$axios.post('vendor/login', this.vendor).then((res) => {
        this.loading = false
        if (this.saveDetails) {
          localStorage.setItem('nasims-vendor', JSON.stringify(res.data.user))
          this.$store.commit('SET_VENDOR_DETAILS', res.data.user)
        } else {
          localStorage.setItem('nasims-vendor', JSON.stringify(res.data.user))
          this.$store.commit('SET_VENDOR_DETAILS', res.data.user)
        }
        this.alert.status = true
        this.alert.type = 'success'
        this.alert.message = 'Login successful, you are being redirected to your dashboard'
        const id = window.btoa(res.data.user.email)
        localStorage.setItem('vendor-id', id)
        const token = res.data.token
        this.$store.commit('SET_VENDOR_TOKEN_DETAILS', res.data.token)
        this.$store.dispatch('saveVendorAuth', [JSON.stringify(res.data.user), token])
        setTimeout(() => this.$router.push(`/vendor/${id}`), 2000)
      }).catch((err) => {
        this.vendorerror.message = err.response.message
        this.loading = false
        this.alert.status = true
        this.alert.message = `${this.error.message}`
      })
    },
    getBvnToken () {
      this.$axios.get('applicants/bvn/token').then((res) => {
        localStorage.setItem('bvn-token', res.data.token)
      }).catch((err) => {
        if (err.response) {
          this.error.message = err.response.data.message
          this.loading = false
          this.alert.status = true
          this.alert.message = `${this.error.message}`
        }
      })
    },
    sendVerificationLink () {
      this.changeloading = true
      this.$axios.post('applicants/send_verification_link', this.changePassword).then((res) => {
        this.changeloading = false
        this.successToast('b-toaster-top-right', 'success')
      }).catch((err) => {
        if (err.response) {
          this.errorChange.message = err.response.data.message
          this.changeloading = false
          this.errorToast('b-toaster-top-right', 'danger')
        }
      })
    },
    errorToast (toaster, variant = null) {
      this.$bvToast.toast(`${this.errorChange.message}`, {
        title: 'Error',
        toaster,
        solid: true,
        variant
      })
    },
    successToast (toaster, variant = null) {
      this.$bvToast.toast('A link has been sent to your email, please check', {
        title: 'Success',
        toaster,
        solid: true,
        variant
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  // top: 81px;
  min-height: calc(100vh);
  padding-bottom: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  .container {
    h1 {
      text-align: center;
    }

    > div {
      flex-direction: column;
      text-align: center;

      .d-block {
        margin: 0 auto;
      }
    }
    @media screen and (min-width: 992px) {
      h1 {
        text-align: left;
      }

      > div {
        flex-direction: row;
        text-align: left;
        .d-block {
          margin: unset;
        }
      }
    }
  }

  span {
    max-width: 350px;
  }

  &__hero {
    max-width: 500px;
    a {
      color: #288855;
      font-weight: 600;
      &:hover {
        text-decoration: none;
        opacity: 0.9;
      }
    }
  }

  &__wrapper {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    max-width: 100%;
    background-color: #C2E8D3;
    position: relative;
    @media screen and (max-width: 992px) {
      display: none;
    }

    &::after {
      z-index: 0;
      content: '';
      position: absolute;
      width: 330px;
      height: 330px;
      background-color: #fff;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    max-width: 100%;
    position: relative;
    background-image: url('/login-hero.jpg');
    left: 50px;
    top: 30px;
    z-index: 1;

    &::before {
      content: '';
      width: 100px;
      height: 100px;
      border-radius: 50%;
      max-width: 100%;
      position: absolute;
      bottom: -20px;
      right: 20px;
      background: linear-gradient(180deg, #8FE7B9 0%, #FFFFFF 100%);
    }
  }

  &__form {
    max-width: 400px;
    a {
      color: #288855;
      font-weight: 600;
      &:hover {
        text-decoration: none;
        opacity: 0.9;
      }
    }
  }
}

.form-control {
  font-size: 1rem;
  min-height: 50px;
  &::placeholder {
    font-size: 1rem;
  }
}

.btn--outlined {
  color: #288855;
  border: 1px solid #288855;
  &:hover,
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 136, 85, 0.5);
  }
}
</style>
