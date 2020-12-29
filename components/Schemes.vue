<template>
  <b-container>
    <b-row id="title" cols="12" md="6">
      SCHEME REPORT
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row style="margin-top:20px;">
      <b-col cols="12" md="6">
        <b-form-input type="search" placeholder="Search by scheme name, scheme code">
          <b-icon icon="search" />
        </b-form-input>
      </b-col>
      <b-col cols="12" md="3" />
      <b-col cols="12" md="3">
        <b-button block variant="success" style="color:#288855;">
          <b-icon icon="plus-circle" style="color:white;" />&nbsp;
          <span style="color:white;">Add Scheme</span>
        </b-button>
      </b-col>
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row>
      <b-table borderless :fields="fields" :items="schemes" style="border-radius: 10px;background-color: #FFFFFF;box-shadow: 0 0 4px 0 rgba(168,168,168,0.42);">
        <template v-slot:cell(beneficiaries)="data">
          <a style="color:#288855;" :href="`/backend-admin/view_beneficiaries/${data.item.scheme_name}`">Click to view beneficiaries</a>
        </template>
        <template v-slot:cell(status)>
          <b-badge variant="success" style="width:60px;">
            Active
          </b-badge>
        </template>
        <template v-slot:cell(actions)>
          <b-dropdown id="dropdown-right" left text="Actions" variant="light" class="m-2">
            <b-dropdown-item href="#">
              Active
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Pending
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        'scheme_name', 'scheme_code', 'date_created', 'sponsor', 'beneficiaries', 'status', 'actions'
      ],
      items: [
        { scheme_name: 'N-Power', code: 'NP01', date_created: '12, October 2020', sponsor: 'Central Bank Of Nigeria' },
        { scheme_name: 'Trader Moni', code: 'T2345678', date_created: '12, Novemeber 2020', sponsor: 'Bank Of Industry' }
      ],
      schemes: []
    }
  },
  mounted () {
    this.getSchemes()
  },
  methods: {
    getSchemes () {
      this.$axios.get('schemes/all').then(({ data }) => {
        // this.stats.schemes = data
        this.schemes = data
        console.log(data)
      }).catch(() => {
        this.fetchError()
      })
    }
  }
}
</script>

<style>
 #title{
    color: #444444;
    margin-top: 40px;
    font-weight: 600;
    font-size: 24px;
 }
</style>
