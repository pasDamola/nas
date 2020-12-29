<template>
  <main class="main3">
    <div class="app_submit">
      <img src="/Group3.svg" alt="logo">
      <h3 class="hooray-application">
        Hooray! Application Submitted
      </h3>
      <p class="nbatch-paragraph">
        Your Application for N-Power Batch D has been Submitted succesfully
      </p>
      <button
        class="ml-2 btn btn-success"
        @click="dashboard"
      >
        Back to Dashboard
        <b-icon icon="arrow-right" />
      </button>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'postlogin',
  methods: {
    dashboard () {
      this.$router.push({ path: `/applicant/${localStorage.getItem('user-id')}` })
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
</style>
