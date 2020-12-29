<template>
  <div>
    <div class="apps">
      <b-table
        hover
        :items="items"
        :fields="fields"
        responsive
        class="table"
      >
      <template v-slot:cell(selected)="row">
      <b-form-group>
          <input type="checkbox" v-model="row.item.selected" />
      </b-form-group>
    </template>
        <template v-slot:cell(status)="data">
          <span :class="data.value.toLowerCase()">{{ data.value }}</span>
        </template>
        <template v-slot:cell(action)="data">
          <span
            v-if="checkState"
          >
            Application In Progress
          </span>
          <button
            class="btn btn--primary btn-sm"
            @click="showDetails(data)"
            v-else
          >
            Apply
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
    items: [],
    user: {
      email_address: localStorage.getItem('email_app')
    },
    rowtoBeSelected: false,
    fields: [
      'scheme_name',
      'scheme_code',
      'status',
      { key: 'action', label: '' }
    ],
    showModal: false,
    selectedData: null
  }),
  mounted () {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
    this.getSchemes()
  },
  methods: {
    getSchemes () {
      const headers = {
        Authorization: 'Token 2452bb0222ae158:2d507e69405d27d'
      }
      console.log(localStorage.getItem('email_app'))
      this.$axios.post('https://nasim.bluetag.tech/api/method/erpnext.npower.doctype.applicants.applicants.allSchemes', { email_address: localStorage.getItem('email_app') }, { headers }).then((response) => {
        this.items = response.data
        console.log(response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    showDetails (details) {
      details.rowSelected = true
      this.rowtoBeSelected = details.rowSelected
      console.log(details)
      console.log('resdetails', this.rowtoBeSelected)
      console.log('detailsed', Object.entries(this.$store.state.residentialDetails).length > 0 || Object.entries(this.$store.state.educationDetails).length > 0 || Object.entries(this.$store.state.employmentDetails).length > 0 || Object.entries(this.$store.state.healthDetails).length > 0 || Object.entries(this.$store.state.programmeDetails).length > 0 || Object.entries(this.$store.state.bvnDetails).length > 0)
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
