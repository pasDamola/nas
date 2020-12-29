<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <b-img center src="/Group Copy.svg" class="my-3" />
        <b-card>
          <h3 class="text-center my-3">
            Login
          </h3>
          <b-form @submit.prevent="logIn">
            <b-form-group label="Email">
              <b-input v-model="user.username" type="text" placeholder="someone@ex.com" required />
            </b-form-group>
            <b-form-group label="Password">
              <b-input v-model="user.password" type="password" placeholder="*****" required />
            </b-form-group>
            <span style="color:#288855;" class="text-right">Forgot your password?</span>
            <b-button block variant="success" type="submit" class="mt-2">
              <template v-if="loading">
                <b-spinner variant="light" />
              </template>
              <template v-else>
                Login
              </template>
            </b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'backend',
  data: () => ({
    loading: false,
    user: {
      username: '',
      password: ''
    }
  }),
  methods: {
    logIn () {
      this.loading = true
      this.$axios.post('admin', this.user).then((res) => {
        this.loading = false
        console.log(res)
        // localStorage.setItem('nasims-admin-token');
        this.$router.push({ path: '/backend-admin' })
      }).catch((err) => {
        this.loading = false
        let text = err.response.data.message
        if (!text) {
          text = 'Something went wrong'
        }
        this.$bvToast.toast(text, {
          title: 'Error',
          solid: true,
          variant: 'danger',
          toaster: 'b-toaster-top-right'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  button,
  input {
    min-height: 50px;
  }

  button {
    background-color: #288855;
  }
}
</style>
