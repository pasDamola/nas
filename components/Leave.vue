<template>
  <div>
    <b-tabs
      active-nav-item-class="tab--active"
      content-class="mt-3 tabs"
    >
      <b-tab title="Apply" active>
        <LeaveApply />
      </b-tab>
      <b-tab title="Leave History">
        <LeaveHistory />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import LeaveApply from '@/components/LeaveApply'
import LeaveHistory from '@/components/LeaveHistory'

export default {
  components: { LeaveApply, LeaveHistory },
  data: () => ({
  })

}
</script>

<style lang="scss" scoped>
.apps {
  background-color: #F7F7F7;
}

.btn-sm {
  width: auto;
  padding: 8px 15px;
}

.tabs::v-deep {
  max-width: 1200px;
  padding: 10px 0;

  a {
    padding-bottom: 15px;
    color: #444;
  }

  .tab--active {
    color: #288855;
    position: relative;
    // border: none;
    display: block;

    &:after {
      content: '';
      display: none;
    }
  }
}

.table {
  background-color: #fff;
}

.pending {
  background-color: #D1ECF1;
  border-radius: 50px;
  padding: 5px 20px;
  font-size: 0.9rem;
}

.title,
.text {
  margin: 0;
}

.title {
  opacity: 0.8;
  margin: 5px 0 2px;
}

.text {
  font-weight: 600;
  opacity: 0.8;
}
</style>
