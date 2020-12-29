<template>
  <b-container fluid class="contain">
    <b-row>
      <span id="pageTitle">
        <b-icon icon="arrow-left-circle-fill" @click="backToPlaceBid" />
        N-POWER Programme Bid Application
      </span>
    </b-row>
    <b-row class="form-fill">
      <b-col md="8">
        <b-row>
          <b-col class="my-2" cols="12" md="6">
            Number of Days
            <b-form-input v-model="details.days" type="number" placeholder="Enter No. Of Days" class="space" />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="my-2" cols="12">
            Service Quotation
            <b-form-file id="file-default" class="space" />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="my-2" cols="12">
            Cover Letter
            <b-form-textarea
              id="textarea"
              v-model="details.reason"
              placeholder="Tell us why we should select you"
              rows="3"
              max-rows="6"
              class="space"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="my-2" cols="12" md="6">
            <b-button block variant="outline-secondary" class="button-specific" @click="backToPlaceBid">
              Cancel
            </b-button>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <b-button
              block
              variant="success"
              class="button-specific"
              :disabled="!details.days || !details.reason || loading"
              @click="placeBid"
            >
              <b-spinner v-if="loading" variant="light" label="Spinning" />
              <span v-else>Proceed</span>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'postvendorlogin',
  middleware: 'auth',
  data () {
    return {
      form: {
        bid: this.$store.state.bidTitle,
        vendor: this.$store.state.vendorDetails.name
      },
      details: {
        days: '',
        reason: ''
      },
      selected: null,
      loading: false,
      options: [
        { value: null, text: 'Select Bid' },
        { value: 'a', text: 'Laptop Supply' },
        { value: 'b', text: 'Service Delivery' },
        { value: 'c', text: 'Electrical Supplies' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  computed: {
    ...mapState(['bidTitle', 'vendorDetails'])
  },
  created () {
    console.log(this.$store.state.vendorDetails)
    console.log(this.$store.state.bidTitle)
    if (!this.$store.state.vendorDetails || !this.$store.state.bidTitle) {
      this.$router.push('/')
    } else {
      this.form.bid = this.$store.state.bidTitle
      this.form.vendor = this.$store.state.vendorDetails.name
    }
  },
  methods: {
    backToPlaceBid () {
      this.$router.push({ path: '/vendor' })
    },
    placeBid () {
      this.loading = true
      this.$axios.post('bid/application', this.form).then((res) => {
        console.log(this.form)
        const id = window.btoa(this.vendorDetails.email)
        this.$router.push({ path: `/bids/${id}` })
      }).catch((err) => {
        this.loading = false
        console.log(err)
      })
    }
  }
}
</script>

<style>
.form-fill{
    background-color: #F7F7F7;
    padding: 20px;
}
#pageTitle{
    font-size: 24px;
  font-weight: 500;
}
.space{
    margin-top: 10px;
}
.button-specific{
    height: 50px;
}
.contain{
    padding-top: 10px;
    padding-left: 90px;
    padding-right: 90px;
}
.row{
    margin-right: 0px;
    margin-left: 0px;
}
</style>
