<template>
  <div class="user">
    <b-tabs
      active-nav-item-class="tab--active"
      content-class="mt-3 tabs"
    >
      <b-container>
        <b-tab title="Overview" active>
          <b-row class="beneficiary">
            <b-col cols="12" md="8">
              <span class="personal">Business Details</span>
              <b-card>
                <b-row>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Company Name
                    </p>
                    <p class="text">
                      {{ vendorDetails.company_name }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Email Address
                    </p>
                    <p class="text">
                      {{ vendorDetails.email }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Contact Name
                    </p>
                    <p class="text">
                      {{ vendorDetails.contact_name }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Contact Phone Number
                    </p>
                    <p class="text">
                      {{ vendorDetails.phone_number }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Address
                    </p>
                    <p class="text">
                      {{ vendorDetails.address }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="12" md="4">
              <span class="hidden">Personal Details</span>
              <b-card class="text-center">
                <!-- <img :src="vendorDetails && vendorDetails.passport_photo" alt="" class="user-photo"> -->
                <div class="text-center name">
                  {{ vendorDetails.company_name }}
                </div>
                <div class="text-center mail">
                  {{ vendorDetails.email }}
                </div>
                <div>&nbsp;</div>
                <div class="text-center ben rectangle-1">
                  Vendor
                </div>
                <div>&nbsp;</div>
                <div class="text-center">
                  N-Power Batch D
                </div>
              </b-card>
            </b-col>

            <b-col cols="12" md="8" class="my-3">
              <span class="personal">Other Details</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Tax Identification Number
                    </p>
                    <p class="text">
                      {{ vendorDetails.tax_id_number }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Rc Number
                    </p>
                    <p class="text">
                      {{ vendorDetails.rc_number }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Date of Incorporation
                    </p>
                    <p class="text">
                      {{ vendorDetails.date_of_inc }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <!-- <b-col cols="12" md="8" class="my-3">
              <span class="personal">Educational Background</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Highest Level Of Education
                    </p>
                    <p class="text">
                      {{ vendorDetails.highest_level_of_education }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Institution
                    </p>
                    <p class="text">
                      {{ vendorDetails.institution }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Year Of Graduation
                    </p>
                    <p class="text">
                      {{ vendorDetails.year_of_graduation }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col> -->

            <b-row>&nbsp;</b-row>
          </b-row>
        </b-tab>
      </b-container>
      <b-tab title="My Bids">
        <b-table :items="items2" :fields="fields2" style="background-color: #FFFFFF;" />
      </b-tab>
      <b-tab title="Available Bids">
        <VendorProgrammes :user="vendorDetails" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import VendorProgrammes from '@/components/VendorProgrammes'

export default {
  components: { VendorProgrammes },
  layout: 'postvendorlogin',
  middleware: 'auth',
  data () {
    return {
      items: [],
      fields: [
        'first_name',
        'surname',
        'date',
        'phone_number',
        'residential_address'
      ],
      items2: [],
      fields2: ['bid', 'bid_title', 'status']
    }
  },
  computed: {
    vendorDetails () {
      const stringifiedgUser = localStorage.getItem('nasims-vendor') || sessionStorage.getItem('nasims-vendor')
      if (stringifiedgUser) {
        return JSON.parse(stringifiedgUser)
      }
      return null
    }
  },

  mounted () {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('vendor-token')}`
    this.getAllBids()
  },
  methods: {
    getAllBids () {
      this.$axios.get(`bid/${this.$store.state.vendorDetails.email}`).then((res) => {
        console.log(res.data)
        this.items2 = res.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  min-height: calc(100vh - 73px);
}

.beneficiary{
  background-color: #F7F7F7;
  padding: 10px 0;
  @media screen and (min-width: 992px) {
    padding: 50px;
  }
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

.tabs::v-deep {
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  max-width: 1200px;
  margin: 50px auto;
  padding: 10px 0;
  a {
    padding-bottom: 15px;
    color: #444;
  }

  .tab--active {
    color: #288855;
    position: relative;
    border: none;
    display: block;

    &:after {
      content: '';
      width: 100%;
      height: 5px;
      border-radius: 10px 10px 0 0;
      background-color: #288855;
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  }
}
</style>
