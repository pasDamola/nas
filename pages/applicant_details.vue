<template>
  <b-container>
    <b-row>
      <span id="pageTitle">
        <b-icon icon="arrow-left-circle-fill" @click="backToPlaceBid" />
        N-POWER Programme Application
      </span>
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row>
      <b-tabs
        active-nav-item-class="font-weight-bold text-uppercase text-success"
        content-class="mt-3 tabs"
        fill
      >
        <template v-if="userStatus == 'Application'">
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="applicationStatus"
                name="checkbox-1"
                value="Application"
                button-variant="success"
              >
                Application
              </b-form-checkbox>
            </template>
            <ApplicationStage />
          </b-tab>
          <b-tab disabled title="Screening" title-link-class="tab-title">
            <ScreeningStage />
          </b-tab>
          <b-tab title="Verification" disabled title-link-class="tab-title">
            <VerificationStage />
          </b-tab>
          <b-tab title="Training" disabled title-link-class="tab-title">
            <TrainingStage />
          </b-tab>
          <b-tab title="Deployment" disabled title-link-class="tab-title">
            <DeploymentStage />
          </b-tab>
        </template>
        <template v-if="userStatus == 'Screening'">
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Application
              </b-form-checkbox>
            </template>
            <ApplicationStage />
          </b-tab>
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                style="color:green;"
              >
                Screening
              </b-form-checkbox>
            </template>
            <ScreeningStage />
          </b-tab>
          <b-tab title="Verification" disabled title-link-class="tab-title">
            <VerificationStage />
          </b-tab>
          <b-tab title="Deployment" disabled title-link-class="tab-title">
            <DeploymentStage />
          </b-tab>
        </template>
        <template v-if="userStatus == 'Verification'">
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Application
              </b-form-checkbox>
            </template>
            <ApplicationStage />
          </b-tab>
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Screening
              </b-form-checkbox>
            </template>
            <ScreeningStage />
          </b-tab>
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Verification
              </b-form-checkbox>
            </template>
            <VerificationStage />
          </b-tab>
          <b-tab title="Deployment" disabled title-link-class="tab-title">
            <DeploymentStage />
          </b-tab>
        </template>
        <template v-if="userStatus == 'Deployment'">
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Application
              </b-form-checkbox>
            </template>
            <ApplicationStage />
          </b-tab>
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Screening
              </b-form-checkbox>
            </template>
            <ScreeningStage />
          </b-tab>
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Verification
              </b-form-checkbox>
            </template>
            <VerificationStage />
          </b-tab>
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Training
              </b-form-checkbox>
            </template>
            <TrainingStage />
          </b-tab>
          <b-tab title-link-class="tab-title">
            <template v-slot:title>
              <b-form-checkbox
                id="checkbox-1"
                v-model="screeningStatus"
                name="checkbox-1"
                value="Screening"
                button-variant="success"
              >
                Deployment
              </b-form-checkbox>
            </template>
            <DeploymentStage />
          </b-tab>
        </template>
      </b-tabs>
    </b-row>
  </b-container>
</template>

<script>
import ApplicationStage from '@/components/ApplicationStage'
import ScreeningStage from '@/components/ScreeningStage'
import VerificationStage from '@/components/VerificationStage'
import TrainingStage from '@/components/TrainingStage'
import DeploymentStage from '@/components/DeploymentStage'

export default {
  layout: 'postlogin',
  middleware: 'applicantAuth',
  components: { ApplicationStage, ScreeningStage, VerificationStage, DeploymentStage, TrainingStage },
  data () {
    return {
      userStatus: 'Deployment',
      applicationStatus: 'Application',
      screeningStatus: 'Screening',
      verificationStatus: 'Verification',
      deploymentStatus: 'Deployment',
      selected: null,
      options: [
        { value: null, text: 'Select Leave' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  },
  methods: {
    backToPlaceBid () {
      const id = localStorage.getItem('user-id')
      this.$router.push({ path: `/applicant/${id}` })
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
.tab-title{
  color: black;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
background-color: #57D057;
}
</style>
