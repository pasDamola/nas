<template>
  <b-container>
    <b-row class="form-fill">
      <b-col class="my-2" cols="12" md="8">
        <h1>Congrats! You’re in the Screening Stage</h1>
        <p>
          We have verified your details and your application has been deemed successful. Please check below for your posting details:
        </p>
        <b-row>&nbsp;</b-row>
        <h2>Examination Details</h2>
        <h4 class="subtitles">
          Venue
        </h4>
        <p>Christland Highschool, Ikorodu, Lagos</p>
        <h4 class="subtitles">
          Date
        </h4>
        <p>21st November, 2020</p>
        <h4 class="subtitles">
          Time
        </h4>
        <p>9:00AM</p>
        <b-button variant="success" class="button-specific">
          Download and Print Exam Details
        </b-button>
      </b-col>
      <b-col class="my-2" cols="12" md="4">
        <b-card>
          <b-img center src="/Bitmap.svg" alt="Center image" />
          <b-card-body>
            <b-card-title>Programme Description</b-card-title>
            <b-card-text>
              The N-Power Programme is a job creation and skills empowerment programme of the Federal Government of Nigeria. N-Power is designed to help young Nigerians acquire and develop life-long skills to become practical solution providers in their communities, enabling them to become innovative players in the domestic and global markets. The N-Power programme is for young Nigerians between the ages of 18 and 35.
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data () {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    }
  }
}
</script>

<style>
.form-fill{
    background-color: #F7F7F7;
    padding: 20px;
}
</style>
