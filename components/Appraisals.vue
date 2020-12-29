<template>
  <b-container fluid>
    <b-row><h2>Supervisors Appraisal</h2></b-row>
    <b-row class="form-fill">
      <b-row>
        <b-col cols="12" md="8" style="margin-top: 15px; width: 100%;">
          <b-card>
            <b-row>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  Skill
                </p>
                <p class="text">
                  Leadership
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  Score
                </p>
                <p class="text">
                  <ProgressBar />
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  Critical Thinking
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  <ProgressBar />
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  Productivity
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  <ProgressBar />
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  Punctuality
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  <ProgressBar />
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  Management
                </p>
              </b-col>
              <b-col class="my-2" cols="12" md="6">
                <p class="title">
                  <ProgressBar />
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" style="margin-top: 15px; ">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-card-body title="Average Score" class="text-center">
                <b-card-text>
                  <span class="copy7">7.0</span>
                </b-card-text>
              </b-card-body>
              <b-card-body title="Overall Rating" class="text-center">
                <b-card-text>
                  <b-icon icon="star-fill" font-scale="2" variant="success" />
                  <b-icon icon="star-fill" font-scale="2" variant="success" />
                  <b-icon icon="star-fill" font-scale="2" variant="success" />
                  <b-icon icon="star-fill" font-scale="2" variant="success" />
                  <b-icon icon="star" font-scale="2" variant="success" />
                </b-card-text>
                <b-card-text>
                  <span class="good">Good</span>
                </b-card-text>
              </b-card-body>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
      <b-row id="second--row">
        <b-col cols="12" md="8" style="margin-bottom: 15px; width: 100%;">
          <b-card>
            <b-card-body title="Remark">
              <b-card-text>
                Great work still room for improvement though
              </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" />
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
export default {
  layout: 'postlogin',
  components: { ProgressBar },
  data () {
    return {
      userDetails: {
        surname: 'Majid',
        first_name: 'Muchael',
        other_name: 'Jameson',
        email: 'jamesilyea@ex.com',
        date: '07/10/2020',
        phone_number: '09876554333',
        state_of_origin: 'Osun',
        lga: 'Irewale',
        state_of_residence: 'FCT',
        residential_address: 'Mabushi, Escalators and Elevators',
        local_government_of_residence: 'AMAC',
        highest_level_of_education: 'Masters (Msc.)',
        institution: 'Obafemi Awlowo University',
        year_of_graduation: 2017

      },
      firstValue: '',
      secondValue: '',
      formatted: '',
      ses: '',
      selected: null,
      fields: ['skill', 'score', 'empty'],
      items: [
        { skill: 'Leadership', score: 'MacDonald' },
        { skill: 'Critical Thinking', score: 'Macdonald' },
        { skill: 'Productivity', score: 'Shaw' },
        { skill: 'Punctuality', score: 'Wilson' },
        { skill: 'Management', score: 'Macdonald' }
      ],
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
      this.$router.push({ path: '/vendor' })
    },
    onContext (ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.ses = ctx.selectedYMD
    }
  }
}
</script>

<style>
.form-fill{
    background-color: #F7F7F7;
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

#second--row{
    margin-top: 40px;
}

.copy7 {
  height: 73px;
  width: 82px;
  color: #5EB865;
  font-family: "Apercu Pro";
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 75px;
}

.good {
  height: 29px;
  width: 60px;
  color: #5EB865;
  font-family: "Apercu Pro";
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 30px;
}

</style>
