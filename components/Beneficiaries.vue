<template>
  <b-container>
    <b-tabs
      active-nav-item-class="tab--active"
      content-class="mt-3 tabs"
    >
      <b-tab title="NPOWER" active>
        <b-container>
          <b-row id="title">
            N-POWER BENEFICIARY LIST
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row style="margin-top:20px;">
            <b-col cols="12" md="6">
              <b-form-input type="search" placeholder="Search by Name, PPA">
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
                  <b-dropdown-item v-b-modal.modal-1>
                    Appraisal
                  </b-dropdown-item>
                  <b-dropdown-item href="#">
                    Leave Status
                  </b-dropdown-item>
                </b-dropdown>
              </template>
            </b-table>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab title="Trader Moni" />
    </b-tabs>
    <b-modal id="modal-1" title="Appraisal" hide-footer>
      <b-row>
        <b-col class="my-2" cols="12" md="6">
          Skill
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          Score
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          Leadership
        </b-col>
        <b-col class="my-2" cols="12" md="4">
          <b-input placeholder="0.0" />
        </b-col>
        <b-col class="my-2" cols="12" md="2">
          /10.0
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          Critical Thinking
        </b-col>
        <b-col class="my-2" cols="12" md="4">
          <b-input placeholder="0.0" />
        </b-col>
        <b-col class="my-2" cols="12" md="2">
          /10.0
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          Productivity
        </b-col>
        <b-col class="my-2" cols="12" md="4">
          <b-input placeholder="0.0" />
        </b-col>
        <b-col class="my-2" cols="12" md="2">
          /10.0
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          Punctuality
        </b-col>
        <b-col class="my-2" cols="12" md="4">
          <b-input placeholder="0.0" />
        </b-col>
        <b-col class="my-2" cols="12" md="2">
          /10.0
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          Management
        </b-col>
        <b-col class="my-2" cols="12" md="4">
          <b-input placeholder="0.0" />
        </b-col>
        <b-col class="my-2" cols="12" md="2">
          /10.0
        </b-col>
        <b-col class="my-2" cols="12" md="4">
          Overall Rating:
        </b-col>
        <b-col class="my-2" cols="12" md="8">
          <b-form-group>
            <b-form-radio-group
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              name="flavour-1"
            />
          </b-form-group>
        </b-col>
        <b-col class="my-2" cols="12" md="12">
          Remark
          <b-form-textarea
            id="textarea"
            v-model="remark"
            placeholder="What's your remark..."
            rows="3"
            max-rows="6"
          />
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          <b-button block variant="light">
            Cancel
          </b-button>
        </b-col>
        <b-col class="my-2" cols="12" md="6">
          <b-button block variant="success">
            Save Progress
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      remark: '',
      fields: [
        'name', 'email_address', 'phone_number', 'batch', 'ppa', 'leave_request', 'actions'
      ],
      items: [
        { name: 'John Chukwuwemaka', email_address: 'tums_shef2gmail.com', phone_number: '09087654321', batch: 'D', ppa: 'Chrisland Primary..', leave_request: 'Pending', appraisal: '7.8 Avg' },
        { name: 'John Chukwuwemaka', email_address: 'tums_shef2gmail.com', phone_number: '09087654321', batch: 'D', ppa: 'Chrisland Primary..', leave_request: 'Pending', appraisal: '7.8 Avg' },
        { name: 'John Chukwuwemaka', email_address: 'tums_shef2gmail.com', phone_number: '09087654321', batch: 'D', ppa: 'Chrisland Primary..', leave_request: 'Pending', appraisal: '7.8 Avg' },
        { name: 'John Chukwuwemaka', email_address: 'tums_shef2gmail.com', phone_number: '09087654321', batch: 'D', ppa: 'Chrisland Primary..', leave_request: 'Pending', appraisal: '7.8 Avg' },
        { name: 'John Chukwuwemaka', email_address: 'tums_shef2gmail.com', phone_number: '09087654321', batch: 'D', ppa: 'Chrisland Primary..', leave_request: 'Pending', appraisal: '7.8 Avg' },
        { name: 'John Chukwuwemaka', email_address: 'tums_shef2gmail.com', phone_number: '09087654321', batch: 'D', ppa: 'Chrisland Primary..', leave_request: 'Pending', appraisal: '7.8 Avg' }
      ],
      selected: [], // Must be an array reference!
      options: [
        { text: 'Excellent', value: 'excellent' },
        { text: 'Good', value: 'good' },
        { text: 'Average', value: 'average' },
        { text: 'Poor', value: 'poor' }
      ]
    }
  }
}
</script>

<style scoped>
#title{
  color: #444444;
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
