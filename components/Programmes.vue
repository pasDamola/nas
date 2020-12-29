<template>
  <div>
    <b-modal v-if="showModal" v-model="showModal" hide-footer>
      <b-card>
        <b-row>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              Surname
            </p>
            <p class="text">
              {{ selectedData.surname }}
            </p>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              First Name
            </p>
            <p class="text">
              {{ selectedData.first_name }}
            </p>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              Other Names
            </p>
            <p class="text">
              {{ selectedData.other_name }}
            </p>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              Date Of Birth
            </p>
            <p class="text">
              {{ selectedData.date }}
            </p>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              Email Address
            </p>
            <p class="text">
              {{ selectedData.email }}
            </p>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              Phone Number
            </p>
            <p class="text">
              {{ selectedData.phone_number }}
            </p>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              {{ selectedData.state_of_origin }}
            </p>
            <p class="text">
              Abia State
            </p>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <p class="title">
              Local Government Area Of Origin
            </p>
            <p class="text">
              {{ selectedData.lga }}
            </p>
          </b-col>
        </b-row>
      </b-card>
      <b-button class="mt-3" block @click="showModal = false">
        Close
      </b-button>
    </b-modal>
    <b-tabs
      active-nav-item-class="tab--active"
      content-class="mt-3 tabs"
    >
      <b-tab title="Accepted" active>
        <div class="apps">
          <b-table hover :items="tableData" :fields="fields" responsive class="table">
            <template v-slot:cell(status)="data">
              <span :class="data.value.toLowerCase()">{{ data.value }}</span>
            </template>
            <template v-slot:cell(action)="data">
              <button
                class="btn btn--primary btn-sm"
                @click="placeBid(data)"
              >
                Place Bid
              </button>
            </template>
          </b-table>
        </div>
      </b-tab>
      <b-tab title="Applied" />
      <b-tab title="Ongoing" />
      <b-tab title="Closed" />
    </b-tabs>
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
    fields: [
      'programme',
      'batch',
      'deadline',
      'status',
      { key: 'action', label: '' }
    ],
    showModal: false,
    selectedData: null
  }),
  computed: {
    tableData () {
      const { programme, batch } = this.user
      const status = 'Active'
      const tempDate = new Date()
      tempDate.setDate(tempDate.getDate() + 3)
      const deadline = tempDate.toLocaleDateString()
      return [
        {
          programme,
          batch,
          deadline,
          status,
          ...this.user
        }
      ]
    }
  },
  methods: {
    placeBid (item) {
    //   this.showModal = true
    //   this.selectedData = item
      this.$router.push({ path: 'vendor/bid' })
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

nav .nav-tabs{
  border-bottom: none;
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
  border-top: none;
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
