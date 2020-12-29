<template>
  <b-navbar toggleable="sm" variant="faded" type="light" class="py-3 fixed">
    <b-container>
      <b-navbar-brand href="/">
        <img src="/logo.svg" alt="Logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse" />
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto align-items-center">
          <b-nav-item href="/">
            Home
          </b-nav-item>
          <b-nav-item href="/application/choose-role">
            Apply
          </b-nav-item>
          <b-nav-item href="#news">
            About
          </b-nav-item>
          <b-nav-item href="#contact">
            Contact
          </b-nav-item>
          <b-nav-item class="btn btn--primary" href="/login">
            Login
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
