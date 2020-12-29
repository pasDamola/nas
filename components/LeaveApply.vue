<template>
  <b-container fluid>
    <b-row class="form-fill">
      <b-col md="9">
        <b-row>
          <b-col class="my-2" cols="12" md="6">
            Leave Type
            <b-form-select v-model="selected" :options="options" class="space" />
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            Number of Days
            <b-form-input type="number" placeholder="Enter No. Of Days" class="space" />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="my-2" cols="12" md="6">
            From
            <b-input-group class="mb-3">
              <b-form-input
                id="example-input"
                v-model="firstValue"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              />
              <b-input-group-append>
                <b-form-datepicker
                  v-model="firstValue"
                  button-only
                  right
                  locale="en-US"
                  aria-controls="example-input"
                  @context="onContext"
                />
              </b-input-group-append>
            </b-input-group>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            To
            <b-input-group class="mb-3">
              <b-form-input
                id="example-input"
                v-model="secondValue"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              />
              <b-input-group-append>
                <b-form-datepicker
                  v-model="secondValue"
                  button-only
                  right
                  locale="en-US"
                  aria-controls="example-input"
                  @context="onContext"
                />
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="my-2" cols="12">
            Reason To Leave
            <b-form-textarea
              id="textarea"
              placeholder="What's the reason for the leave"
              rows="3"
              max-rows="6"
              class="space"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col class="my-2" cols="12" md="6">
            <b-button block variant="outline-secondary" class="button-specific">
              Cancel
            </b-button>
          </b-col>
          <b-col class="my-2" cols="12" md="6">
            <b-button block variant="success" class="button-specific" :disabled="loading">
              Submit
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  layout: 'postlogin',
  data () {
    return {
      firstValue: '',
      secondValue: '',
      formatted: '',
      ses: '',
      selected: null,
      options: [
        { value: null, text: 'Select Leave' },
        { value: 'a', text: 'Casual' },
        { value: 'b', text: 'Maternal' },
        { value: 'c', text: 'Annual' },
        { value: 'c', text: 'Sick' }
      ],
      loading: false
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
</style>
