<template>
  <b-container fluid>
    <b-navbar toggleable="lg" fixed>
      <b-navbar-brand href="/">
        <img src="/Group Copy.svg" alt>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav />

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-row>
            <b-avatar class="mr-2 mr-lg-0" />
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <span>{{ userDetails && userDetails.first_name || 'Sample' }}</span>
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-row>
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
  }
}
</script>
<style>
</style>
