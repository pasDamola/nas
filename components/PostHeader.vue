<template>
  <b-container fluid class="contain">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
        <img src="/Group Copy.svg" alt @click="home">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav />

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-avatar />
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <span>{{ userDetails && userDetails.first_name }}</span>
            </template>
            <b-dropdown-item @click="dashboard">
              Back To Dashboard
            </b-dropdown-item>
            <b-dropdown-item @click="logout">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  computed: {
    userDetails () {
      const stringifiedgUser = localStorage.getItem('nasims-user') || sessionStorage.getItem('nasims-user')
      if (stringifiedgUser) {
        return JSON.parse(stringifiedgUser)
      }
      return null
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('nasims-user')
      localStorage.removeItem('user-id')
      localStorage.removeItem('user')
      localStorage.removeItem('email_app')
      localStorage.removeItem('bvn-token')
      this.$router.push('/login')
    },
    dashboard () {
      const id = localStorage.getItem('user-id')
      this.$router.push(`/applicant/${id}`)
    },
    home () {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.contain{
    padding-left: 100px;
    padding-right: 100px;
}
</style>
