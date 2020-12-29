<template>
  <div class="login">
    <div class="container">
      <h1>Login to your NASIMS Account</h1>
      <div class="row justify-content-between align-items-center">
        <div class="col-12 col-md-6 login__hero">
          <span class="my-2 d-block">
            If you don't have an acount, you can <br>
            <a href="/application/vendor-apply">Apply here!</a>
          </span>
          <div class="login__wrapper">
            <div class="login__img" />
          </div>
        </div>
        <div class="col-12 col-md-6 login__form">
          <form @submit.prevent="logIn">
            <b-alert v-model="alert.status" :variant="alert.type" dismissible>
              {{ alert.message }}
            </b-alert>
            <div class="form-group my-4">
              <input
                id="email"
                v-model="user.email"
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
              <a href="#recover">Recover Password</a>
            </div>
            <button
              type="submit"
              class="btn btn--primary w-100"
              @click.prevent="logIn"
            >
              <b-spinner v-if="loading" variant="light" label="Spinning" />
              <span v-else>Proceed</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'vendorIndex',
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    alert: {
      status: false,
      type: 'danger',
      message: ''
    },
    loading: false,
    saveDetails: false
  }),
  computed: {
    ...mapState(['vendorDetails'])
  },
  methods: {
    logIn () {
      this.loading = true
      this.alert.status = false
      console.log(this.user)
      this.$axios.post('vendor/login', this.user).then((res) => {
        this.loading = false
        if (this.saveDetails) {
          localStorage.setItem('vendor', JSON.stringify(res.data.user))
          this.$store.commit('SET_VENDOR_DETAILS', res.data.user)
        } else {
          sessionStorage.setItem('vendor', JSON.stringify(res.data.user))
          this.$store.commit('SET_VENDOR_DETAILS', res.data.user)
        }
        const id = window.btoa(res.data.user.email)
        this.$router.push(`/vendor/${id}`)
      }).catch((err) => {
        this.loading = false
        this.alert.status = true
        this.alert.message = 'Something went wrong, please try again'
        if (err.response.status === 422) {
          this.alert.message = 'Incorrect credentials'
        }
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
</style>
