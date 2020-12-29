<template>
  <b-container>
    <b-row>
      <b-icon icon="arrow-left-circle-fill" @click="backToPlaceBid" />
    </b-row>
    <b-row style="font-size:30px;">
      All My Bids
    </b-row>
    <b-row style="margin-top:10px;">
      <b-table :items="items" :fields="fields" style="border-radius: 10px;background-color: #FFFFFF;box-shadow: 0 0 4px 0 rgba(168,168,168,0.42);" />
    </b-row>
    <b-container />
  </b-container>
</template>

<script>
export default {
  layout: 'postvendorlogin',
  middleware: 'auth',
  data () {
    return {
      id: this.$route.params.id,
      items: [],
      fields: ['bid', 'bid_title', 'status']
    }
  },
  computed: {
    vendorDetails () {
      const stringifiedgUser = localStorage.getItem('vendor') || sessionStorage.getItem('vendor')
      if (stringifiedgUser) {
        return JSON.parse(stringifiedgUser)
      }
      return null
    }
  },
  mounted () {
    this.getAllBids()
  },
  methods: {
    getAllBids () {
      this.$axios.get(`bid/${this.$store.state.vendorDetails.email}`).then((res) => {
        console.log(res.data)
        this.items = res.data.data
      })
    },
    backToPlaceBid () {
      this.$router.push({ path: `/vendor/${this.id}` })
    }
  }
}
</script>
