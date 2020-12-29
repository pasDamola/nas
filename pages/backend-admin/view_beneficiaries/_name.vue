<template>
  <b-container>
    <b-row>
      <b-icon icon="arrow-left-circle" style="font-weight: 600;font-size: 40px;" @click="backToSchemes" />
    </b-row>
    <b-row id="title" cols="12" md="6">
      N-POWER BENEFICIARY DATABASE
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row style="margin-top:20px;">
      <b-col cols="12" md="6">
        <b-form-input type="search" placeholder="Search by name, sip number">
          <b-icon icon="search" />
        </b-form-input>
      </b-col>
      <b-col cols="12" md="3">
        <!-- <b-button block variant="success" style="color:#288855;">
                    <b-icon icon="plus-circle" style="color:white;"></b-icon>&nbsp;
                    <span style="color:white;">Import Data</span>
                </b-button>
            </b-col>
              <b-col cols="12" md="3">
                <b-button block variant="success" style="color:#288855;">
                    <b-icon icon="plus-circle" style="color:white;"></b-icon>&nbsp;
                    <span style="color:white;">Import Data</span>
                </b-button> -->
      </b-col>
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row>
      <b-table borderless :fields="fields" :items="items" class="table">
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
      </b-table>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'postAdmin',
  data () {
    return {
      fields: [
        'name', 'sip_number', 'date_of_birth', 'phone_number', 'address', 'actions'
      ],
      items: [
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' },
        { name: 'John Chukwuwemaka', sip_number: 'NP01', date_of_birth: '12, October 2020', phone_number: '09087654321', address: 'Mabushi, Area 6' }
      ]
    }
  },
  mounted () {
    const name = this.$route.params.name
    this.getBeneficiaries(`schemes/beneficiary/${name}`)
  },
  methods: {
    backToSchemes () {
      this.$router.push({ path: '/backend-admin' })
    },
    getBeneficiaries (url) {
      this.$axios.get(url).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(168,168,168,0.42);
}
#title{
  color: #444444;
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
}
</style>
