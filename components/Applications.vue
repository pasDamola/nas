<template>
  <div>
    <div class="apps">
      <b-table
        hover
        :items="userDetails"
        :fields="fields"
        responsive
        class="table"
      >
        <template v-slot:cell(status)="data">
          <span :class="data.value.toLowerCase()">{{ data.value }}</span>
        </template>
        <template v-slot:cell(action)="data">
          <button
            class="btn btn--primary btn-sm"
            @click="showDetails(data)"
          >
            View details
          </button>
        </template>
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
    fields: [
      'scheme_name',
      'batch',
      { key: 'action', label: '' }
    ],
    showModal: false
  }),
  computed: {
    tableData () {
      const status = 'Pending'
      const tempDate = new Date()
      tempDate.setDate(tempDate.getDate() + 3)
      const deadline = tempDate.toLocaleDateString()
      return [
        {
          deadline,
          status,
          ...this.user
        }
      ]
    },
    userDetails () {
      return this.$store.state.listOfApplications
    }
  },
  mounted () {
    console.log(this.$store.state.completeDetails)
  },
  methods: {
    showDetails () {
      this.$router.push({ path: '/applicant_details' })
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
