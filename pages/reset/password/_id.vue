<template>
<div>
    <b-row>
        <b-col cols="12" md="4">
        </b-col>
        <b-col>
            <span class="my-2 d-block">
                <h3>Password Change</h3>
            </span>
            <span v-if="sucessful">
                <a href="/login" @click="login">Please Login</a>
            </span>
            <form @submit.prevent="verifyToken">
            <div class="form-group my-4">
              <b-form-input
                id="user"
                v-model="resetData.email_address"
                type="email"
                class="form-control form-control-lg"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group my-4">
              <input
                id="password"
                v-model="resetData.password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Enter Password"
              >
            </div>
            <button
              type="submit"
              class="btn btn--primary w-100"
              :disabled="!resetData.email_address || !resetData.password || loading"
              @click="verifyToken"
            >
              <b-spinner v-if="loading" variant="light" label="Spinning" />
              <span v-else>Proceed</span>
            </button>
          </form>
        </b-col>
        <b-col cols="12" md="4">
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
  layout: 'verify',
  data () {
    return {
      loading: false,
      sucessful: false,
      resetData: {
        email_address: '',
        password: '',
        reset_password_token: ''
      }
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/login' })
    },
    verifyToken () {
      this.loading = true
      this.resetData.reset_password_token = this.$route.params.id
      this.$axios
        .post(
          'applicants/change/password',
          this.resetData
        )
        .then((response) => {
          this.loading = false
          this.sucessful = true
          this.successToast('b-toaster-top-right', 'success')
        })
        .catch((err) => {
          this.loading = false
          this.sucessful = false
          this.errorToast('b-toaster-top-right', 'danger')
          console.log('err', err)
        })
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
      this.$bvToast.toast('Your password has been successfully changed, please click the login link', {
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
.main3 {
  /* padding: 100px; */
  height: calc(100vh - 92px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.app_submit {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.hooray-application {
  color: #25c470;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
}

.hooray-fail-application {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
}

.nbatch-paragraph {
  color: #a5a5a5;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  text-align: center;
}

.small {
  font-size: 0.9rem;
  color: #25c470;
  &:hover {
    color: #25c470;
    opacity: 0.9;
    text-decoration: none;
  }
}

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:500px;
}

.loading-icon {
    width: 100px;
}

a {
    color: #288855;
    font-weight: 600;
}

h3 {
    color: #288855;
    font-weight: 800;
}
</style>
