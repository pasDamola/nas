<template>
  <div>
    <b-form class="form">
      <h3>BVN Validation</h3>
      <h6>Please input the details that are consistent with your Bank Verification Number (BVN)</h6>
      <b-row>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="First Name"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.first_name"
              required
              type="text"
              placeholder="Enter First Name"
              name="phone"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Last Name"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.last_name"
              required
              placeholder="Enter Last Name"
              name="lastname"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Middle Name"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.middle_name"
              required
              type="text"
              placeholder="Enter Middle Name"
              name="phone"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Email"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.email"
              required
              placeholder="Enter Email"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            id="input-group-2"
            label="Phone Number"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.phone_number"
              required
              placeholder="Enter Phone Number"
              name="address"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div class="form__divider" />
      <h3 class="mt-4">
        Address Details
      </h3>
      <b-row>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-6"
            label="State Of Origin"
            class="titless"
            label-for="input-6"
          >
            <b-form-input
              id="input-2"
              v-model="form.state_of_origin"
              required
              placeholder="Enter STate of Origin"
            />
          </b-form-group>
        </b-col>
         <b-col cols="12" md="6">
          <b-form-group
            id="input-group-6"
            label="State Of Residence"
            class="titless"
            label-for="input-6"
          >
            <b-form-input
              id="input-2"
              v-model="form.state_of_residence"
              required
              placeholder="Enter State of Residence"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div class="form__divider" />
      <h3 class="mt-4">
        Bank Details
      </h3>
      <b-row>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Bank Name"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.bank_name"
              required
              placeholder="Enter bank name"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Bank Account Number"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.bank_account_number"
              required
              placeholder="Enter account number"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Bank Code"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.enrollment_bank"
              required
              placeholder="Enter code"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="6">
          <b-form-group
            id="input-group-2"
            label="Bank Verification Number"
            class="titless"
            label-for="input-3"
          >
            <b-form-input
              id="input-2"
              v-model="form.bvn"
              required
              placeholder="Enter BVN"
              name="BVN"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <div class="stepper__actions mt-3 mb-4 row justify-content-end mx-0">
      <b-button
        disabled
        class="mx-2 btn btn-outline-success"
      >
        <b-icon icon="arrow-left" />
        <span>Previous</span>
      </b-button>
      <b-button
        class="ml-2 btn btn-success"
        :disabled="isFormFilled === false"
        @click="next"
      >
        <span>Next</span>
        <b-icon icon="arrow-right" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isPassword: true,
      btnText: 'Submit Application',
      selected: null,
      loading: false,
      busy: false,
      localGovts: [],
      localGovtsOfResidence: [],
      form: {
        first_name: '',
        last_name: '',
        middle_name: '',
        email: '',
        phone_number: '',
        date_of_birth: '',
        bvn: '',
        state_of_origin: '',
        state_of_residence: '',
        enrollment_bank: '',
        bank_name: '',
        bank_account_number: '',
        token: localStorage.getItem('bvn-token')
      },
      error: {
        error: [],
        message: ''
      }
    }
  },
  computed: {
    isFormFilled () {
      const keys = Object.keys(this.form)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (!this.form[key]) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    next () {
      this.loading = true
      this.$axios.post('applicants/programme', this.form).then((response) => {
        console.log(response)
        this.loading = false
        this.$store.commit('SET_BVN_DETAILS', this.form)
        this.$emit('get-data', this.form)
        this.$store.commit('SET_COMPLETE_DETAILS')
        this.$router.push({ path: '/confirm' })
      }).catch((err) => {
        this.loading = false
        this.error = err.response.data
        this.errorToast('b-toaster-top-right', 'danger')
      })
    },
    prev () {
      this.$emit('previous', this.form)
    },
    errorToast (toaster, variant = null) {
      this.$bvToast.toast(`${this.error.message}` || `${this.error.error[0]}`, {
        title: 'Error',
        toaster,
        solid: true,
        variant
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form::v-deep {
  h3 {
    color: #444;
    font-weight: 600;
    font-size: 1.3rem;
    margin: 10px 0 30px;
  }

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  input {
    min-height: 50px;

    &::placeholder {
      font-size: .87rem;
      opacity: .9;
    }
  }

  .form-group label {
    color: #666;
    font-size: .95rem;
    font-weight: 600;
  }

  .b-form-datepicker {
    min-height: 50px;
    label {
      display: flex;
      align-items: center;
    }
  }

  .form__divider {
    width: 100%;
    height: 1px;
    background-color: #aaa;
    opacity: .5;
    margin: 10px 0;
  }
}

.btn {
  min-height: 50px;
  width: 180px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &-block {
    width: calc(100% - 20px);
    text-align: center;
    margin: 10px;
  }

  &-success {
    background-color: #288855;
  }

  &-outline-success {
    color: #288855;
    background-color: white;
    border-color: #288855;
  }
}
</style>
