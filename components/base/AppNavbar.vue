<template>
  <b-navbar toggleable="sm" variant="faded" type="light" class="py-3 fixed">
    <b-container>
      <b-navbar-brand href="/">
        <img src="/logo.svg" alt="Logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse" />
      <b-collapse id="nav-text-collapse" is-nav class="bg-white nav-open">
        <b-navbar-nav class="ml-auto align-items-center">
          <b-nav-item href="/">
            Home
          </b-nav-item>
          <b-nav-item href="#about">
            About
          </b-nav-item>
          <b-nav-item href="#news">
            News
          </b-nav-item>
          <b-nav-item href="#contact">
            Contact
          </b-nav-item>
          <template v-if="applicant">
            <b-nav-item v-if="applicantAuthenticated" class="btn btn--primary" @click="applicantDashboard">
              Dashboard
              <b-icon icon="arrow-right" />
            </b-nav-item>
            <b-nav-item v-else class="btn btn--primary" href="/login">
              Login
            </b-nav-item>
          </template>
           <template v-else>
            <b-nav-item v-if="vendorAuthenticated" class="btn btn--primary" @click="vendorDashboard">
              Dashboard
              <b-icon icon="arrow-right" />
            </b-nav-item>
            <b-nav-item v-else class="btn btn--primary" href="/login">
              Login
            </b-nav-item>
          </template>
          <!-- <b-nav-item class="btn btn--primary" href="/apply">
            Apply
          </b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      applicantAuthenticated: false,
      vendorAuthenticated: false,
      applicant: false,
      vendor: false
    }
  },
  created () {
    const user = JSON.stringify(localStorage.getItem('nasims-user'))
    const vendor = JSON.stringify(localStorage.getItem('nasims-vendor'))
    if (user === 'null') {
      this.applicantAuthenticated = false
      this.applicant = false
    } else {
      this.applicantAuthenticated = true
      this.applicant = true
    }
    if (vendor === 'null') {
      this.vendorAuthenticated = false
    } else {
      this.vendorAuthenticated = true
    }
  },
  methods: {
    // getLocalStorage () {

    // },
    applicantDashboard () {
      const id = localStorage.getItem('user-id')
      this.$router.push(`/applicant/${id}`)
    },
    vendorDashboard () {
      const id = localStorage.getItem('vendor-id')
      this.$router.push(`/vendor/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-open {
  @media screen and (max-width: 575px) {
    box-shadow: 0 2px 2px rgba($color: #000, $alpha: .2)
  }
}

.fixed {
  position: fixed;
  top: 0;
  height: 81px;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
}

.btn {
  width: 150px;
  margin: 10px;
  padding: 5px 0;
  &--primary {
    padding: 7px 0;
    color: #fff;
    a.nav-link {
      color: #fff;
      &:hover,
      &:focus {
        color: rgba($color: #fff, $alpha: 0.8);
      }
    }
  }

  &--outlined {
    a.nav-link {
      color: #288855;
      &:hover,
      &:focus {
        color: rgba($color: #288855, $alpha: 0.8);
      }
    }
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
