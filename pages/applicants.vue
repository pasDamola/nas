<template>
  <b-container>
    <b-row>&nbsp;</b-row>
    <b-row />
    <b-row />
    <b-row class="text-center">
      <b-col />
      <b-col>
        <img src="/Bitmap.svg" alt>
      </b-col>
      <b-col />
    </b-row>
    <b-row class="text-center">
      <b-col />
      <b-col>
        <span class="database">N-Power APPLICANTS DATABASE</span>
      </b-col>
      <b-col />
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row>&nbsp;</b-row>
    <div>
      <b-table hover :items="items" :fields="fields" />
    </div>
  </b-container>
</template>

<script>
export default {
  layout: 'postlogin',
  data () {
    return {
      items: [],
      fields: ['first_name', 'surname', 'date', 'phone_number', 'residential_address']
    }
  }
}
</script>
