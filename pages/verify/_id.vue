<template>
  <div>
    <div v-if="loading" class="loading">
      <img class="loading-icon" src="/loading.gif">
    </div>
    <main v-else class="main3">
      <div v-if="loadPage" class="app_submit">
        <img src="/welcome.svg" alt="logo">
        <h3 class="hooray-application">
          Hooray! Your account has been verified
        </h3>
        <a class="small" href="/login" target="blank">
          Login to view your Dashboard
        </a>
      </div>
      <div v-else class="app_submit">
        <img src="/sad-face.svg" alt="logo" style="width:300px;">
        <h3 class="hooray-fail-application">
          Ouch! Something went wrong, please verify your link again
        </h3>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'verify',
  data () {
    return {
      loadPage: false,
      loading: true,
      code: {
        activation_code: ''
      }
    }
  },

  mounted () {
    this.verifyToken()
  },

  methods: {
    login () {
      this.$router.push({ path: '/login' })
    },
    verifyToken () {
      this.code.activation_code = this.$route.params.id
      this.$axios
        .post(
          'applicants/verify',
          this.code
        )
        .then((response) => {
          this.loading = false
          this.loadPage = true
          this.successToast('b-toaster-top-right', 'success')
        })
        .catch((err) => {
          this.loading = false
          this.loadPage = false
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
      this.$bvToast.toast('Your account has been successfully verified', {
        title: 'Success',
        toaster,
        solid: true,
        variant
      })
    }
  }
}
</script>
<style lang="scss">
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
</style>
