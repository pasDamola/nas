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
              <span>{{ vendorDetails && vendorDetails.contact_name }}</span>
            </template>
            <b-dropdown-item @click="dashboard">
              Dashboard
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
    vendorDetails () {
      const stringifiedgUser = localStorage.getItem('nasims-vendor') || sessionStorage.getItem('nasims-vendor')
      if (stringifiedgUser) {
        return JSON.parse(stringifiedgUser)
      }
      return null
    }
  },
  mounted () {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$store.state.vendorToken}`
  },
  methods: {
    logout () {
      localStorage.removeItem('nasims-vendor')
      localStorage.removeItem('vendor-id')
      localStorage.removeItem('vendor-token')
      localStorage.removeItem('vendor')
      this.$router.push({ path: '/login' })
    },
    dashboard () {
      const id = localStorage.getItem('vendor-id')
      this.$router.push(`/vendor/${id}`)
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
