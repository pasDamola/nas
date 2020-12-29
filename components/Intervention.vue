<template>
  <b-container>
    <b-row id="title" cols="12" md="6">
      SCHEME INTERVENTION REPORT
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row style="margin-top:20px;">
      <b-col cols="12" md="6">
        <b-form-input type="search" placeholder="Search by name, scheme name">
          <b-icon icon="search" />
        </b-form-input>
      </b-col>
      <b-col cols="12" md="3" />
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row>
      <b-table borderless :fields="fields" :items="items" style="border-radius: 10px;background-color: #FFFFFF;box-shadow: 0 0 4px 0 rgba(168,168,168,0.42);">
        <template v-slot:cell(actions)>
          <b-dropdown id="dropdown-right" left text="Actions" variant="light" class="">
            <b-dropdown-item href="#">
              View Details
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Benefits
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Knowledge Graph
            </b-dropdown-item>
          </b-dropdown>
        </template>
        <template v-slot:cell(status)>
          <b-badge variant="success" style="width:60px;">
            Active
          </b-badge>
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
        'name', 'scheme_name', 'date_created', 'no_of_applicants', 'no_of_approved', 'status', 'actions'
      ],
      items: [
        { name: 'N-Power Batch D', scheme_name: 'N-Power', date_created: '12, October 2020', no_of_applicants: '2,123,244', no_of_approved: '2020' },
        { name: 'Alaba Market Traders Loan', scheme_name: 'Trader Moni', date_created: '12, Novemeber 2020', no_of_applicants: '12,344', no_of_approved: '1000' }
      ]
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
