<template>
  <div>
    <div class="apps">
      <b-table
        hover
        :items="items"
        responsive
        class="table"
      >
        <template v-slot:cell(status)="data">
          <span :class="data.value.toLowerCase()">{{ data.value }}</span>
        </template>
        <!-- <template v-slot:cell(action)="data">
          <button
            class="btn btn--primary btn-sm"
            @click="showDetails(data)"
          >
            Apply
          </button>
        </template> -->
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    items: [
      { leave_type: 'Casual', no_of_days: '3', from: '29/10/2020', to: '2/11/2020', status: 'Approved' },
      { leave_type: 'Maternal', no_of_days: '3', from: '29/10/2020', to: '2/11/2020', status: 'Pending' },
      { leave_type: 'Annual', no_of_days: '3', from: '29/10/2020', to: '2/11/2020', status: 'Denied' },
      { leave_type: 'Sick', no_of_days: '3', from: '29/10/2020', to: '2/11/2020', status: 'Approved' }
    ],
    // fields: [
    //   'programme',
    //   'batch',
    //   'deadline',
    //   'status',
    //   { key: 'action', label: '' }
    // ],
    showModal: false,
    selectedData: null
  }),
  //   computed: {
  //     tableData () {
  //       const { programme, batch } = this.user
  //       const status = 'Open'
  //       const tempDate = new Date()
  //       tempDate.setDate(tempDate.getDate() + 3)
  //       const deadline = tempDate.toLocaleDateString()
  //       return [
  //         {
  //           programme,
  //           batch,
  //           deadline,
  //           status,
  //           ...this.user
  //         }
  //       ]
  //     }
  //   },
  methods: {
    showDetails () {
      this.$router.push({ path: '/application/beneficiary-apply' })
    }
  }
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
