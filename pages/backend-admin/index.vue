<template>
  <b-container fluid>
    <b-row>
      <!-- <span id="pageTitle">
        <b-icon icon="arrow-left-circle-fill" @click="backToPlaceBid" />
        N-POWER Programme Bid Application
      </span> -->
    </b-row>
    <b-row class="mx-0 tabs-container">
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-success"
        content-class="mt-3 tabs"
      >
        <b-tab title="DASHBOARD" title-link-class="tab-title">
          <Dashboard />
        </b-tab>
        <b-tab title="SCHEMES" title-link-class="tab-title">
          <Schemes />
        </b-tab>
        <!-- <b-tab title="INTERVENTION REPORT" title-link-class="tab-title">
          <Intervention />
        </b-tab> -->
      </b-tabs>
    </b-row>
  </b-container>
</template>

<script>
import Dashboard from '@/components/Dashboard'
import Schemes from '@/components/Schemes'
// import Intervention from '@/components/Intervention'

export default {
  layout: 'postAdmin',
  components: { Dashboard, Schemes },
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Select Leave' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  methods: {
    backToPlaceBid () {
      this.$router.push({ path: '/applicant' })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-container::v-deep {
  margin-top: 60px;
  .tabs {
    width: 100%;

    .nav-link {
      color: #444;
      &.active {
        border-left-color: transparent;
        border-right-color: transparent;
        border-top-color: transparent;
        border-bottom: 5px solid;
      }
      &:hover:not(.active) {
        border-color: transparent;
        color: #28a745;
      }
      &:focus {
        color: #28a745 !important;
      }
    }

    .nav-tabs {
      &.active {
        border-left-color: transparent;
        border-right-color: transparent;
      }
    }
  }
}

.form-fill {
  background-color: #f7f7f7;
  padding: 20px;
}

#pageTitle {
  font-size: 24px;
  font-weight: 500;
}

.space {
  margin-top: 10px;
}

.button-specific {
  height: 50px;
}

.contain {
  padding-top: 10px;
  padding-left: 90px;
  padding-right: 90px;
}

.row {
  margin-right: 0px;
  margin-left: 0px;
}

.tab-title {
  color: black;
}
</style>
