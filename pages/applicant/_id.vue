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
              <span class="personal">Personal Details</span>
              <b-card v-b-hover="handleHover">
                <b-row>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="subHeadings">
                      Surname
                    </p>
                    <p class="text">
                      {{ userDetails.surname }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="3">
                    <p class="subHeadings">
                      First Name
                    </p>
                    <p class="text">
                      {{ userDetails.first_name }}
                    </p>
                  </b-col>
                  <b-col class="my-2 turn-blue" cols="12" md="3">
                    Edit Profile
                    <b-icon
                      icon="pencil"
                      scale="1.0"
                      title="Update details"
                      style="color:gray;"
                      @click="apply"
                    >
                      <!-- <div v-else /> -->
                    </b-icon>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="subHeadings">
                      Other Names
                    </p>
                    <p class="text">
                      {{ userDetails.other_name }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="subHeadings">
                      Date Of Birth
                    </p>
                    <p class="text">
                      {{ userDetails.date_of_birth }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="subHeadings">
                      Email Address
                    </p>
                    <p class="text">
                      {{ userDetails.email_address }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="subHeadings">
                      Phone Number
                    </p>
                    <p class="text">
                      {{ userDetails.phone_number }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="12" md="4">
              <span class="hidden">Personal Details</span>
              <b-card class="text-center">
                <div class="justify-content-center">
                  <b-avatar :src="userDetails && userDetails.passport_photo" size="7rem" />
                </div>
                <div class="text-center name">
                  {{ userDetails.surname }} {{ userDetails.first_name }}
                </div>
                <div class="text-center mail">
                  {{ userDetails.email }}
                </div>
                <div>&nbsp;</div>
                <div class="text-center ben rectangle-1">
                  Beneficiary
                </div>
                <div>&nbsp;</div>
                <div class="text-center">
                  N-Power Batch D
                </div>
              </b-card>
            </b-col>

            <b-col cols="12" md="8" class="my-3">
              <span class="personal">Applications</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12" v-if="applications.no_of_applicantions">
                    <p class="subHeadings">
                      Total No. Of Schemes Applied for
                    </p>
                    <p class="text">
                      {{ applications.no_of_applicantions.length }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12" v-if="applications.no_of_applicantions">
                    <p class="subHeadings">
                      List Of Schemes Applied For
                    </p>
                    <p class="text" v-for="(value) in applications.no_of_applicantions" :key="value.scheme_name">
                      {{ value.scheme_name }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <b-col cols="12" md="8" class="my-3">
              <span class="personal">Leaves</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12">
                    <p class="subHeadings">
                      Total No. Of Leaves Applied for
                    </p>
                    <p class="text">
                      2
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12" />
                </b-row>
              </b-card>
            </b-col>

            <b-row>&nbsp;</b-row>
          </b-row>
        </b-tab>
      </b-container>
      <b-tab title="Schemes">
        <SchemesList />
      </b-tab>
      <b-tab title="Applications">
        <Applications :user="userDetails" />
      </b-tab>
      <b-tab title="Leave">
        <Leave />
      </b-tab>
      <b-tab title="Appraisals">
        <Appraisals />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Applications from '@/components/Applications'
import SchemesList from '@/components/SchemesList'
import Leave from '@/components/Leave'
import Appraisals from '@/components/Appraisals'
export default {
  components: { Applications, Leave, Appraisals, SchemesList },
  layout: 'postlogin',
  middleware: 'applicantAuth',
  data () {
    return {
      user: {
        email_address: localStorage.getItem('email_app')
      },
      items: [],
      isHovered: false,
      fields: [
        'first_name',
        'surname',
        'date',
        'phone_number',
        'residential_address'
      ]
    }
  },
  computed: {
    userDetails () {
      const stringifiedgUser = localStorage.getItem('nasims-user') || sessionStorage.getItem('nasims-user')
      if (stringifiedgUser) {
        return JSON.parse(stringifiedgUser)
      }
      return null
    },
    applications () {
      return this.$store.state.listOfApplications
    }
  },
  mounted () {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$store.state.token}`
    this.getListOfApplications()
  },
  created () {
    if (this.userDetails === null) {
      this.$router.push('/login')
    }
  },
  methods: {
    handleHover (hovered) {
      this.isHovered = hovered
    },
    apply () {
      this.$router.push({ path: '/update_profile' })
    },
    getListOfApplications () {
      this.$axios.post('applicants/schemes/applications', this.user).then((res) => {
        this.$store.commit('SET_APPLICATION_LIST', res.data.data.message)
        console.log(res.data.data.message)
      }).catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  min-height: calc(100vh - 73px);
}
.subHeadings{
  color: gray;
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

  .turn-blue{
    :hover{
      color: blue;
    }
  }
}
</style>
