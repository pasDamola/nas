// import stateOptions from '~/static/json/nigeria-states-and-local-govts.json'

export const state = () => ({
  states: [],
  isAppForm: true,
  isBeneficiary: true,
  bid: '',
  bidTitle: '',
  vendorDetails: {},
  userDetails: {},
  residentialDetails: {},
  residentialDetailsState: false,
  educationDetails: {},
  employmentDetails: {},
  healthDetails: {},
  programmeDetails: {},
  completeDetails: {},
  bvnDetails: {},
  supervisorConfirm: false,
  token: localStorage.getItem('token') || '',
  vendorToken: localStorage.getItem('vendor-token') || '',
  listOfApplications: {}
})

export const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  isLoggedIn: () => {
    return function (that) {
      return that.$cookies.get('token')
    }
  }
}

export const actions = {
  saveAuth ({ commit }, [user, token]) {
    localStorage.setItem('user', user)
    localStorage.setItem('token', token)
    this.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  saveVendorAuth ({ commit }, [user, token]) {
    localStorage.setItem('vendor', user)
    localStorage.setItem('vendor-token', token)
    this.$axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
}

export const mutations = {
  SET_VIEW_STATE (state, view) {
    state.isAppForm = view
  },
  SET_APPLY_VIEW (state, view) {
    state.isBeneficiary = view
  },
  SET_BID (state, bid) {
    state.bid = bid
  },
  SET_BID_TYPE (state, bid) {
    state.bidTitle = bid
  },
  SET_VENDOR_DETAILS (state, vendor) {
    state.vendorDetails = vendor
  },
  SET_USER_DETAILS (state, user) {
    state.userDetails = user
  },
  SET_RESIDENTIAL_DETAILS (state, details) {
    state.residentialDetails = details
  },
  SET_RESIDENTIAL_DETAILS_STATE (state, status) {
    state.residentialDetailsState = status
  },
  SET_EDUCATION_DETAILS (state, details) {
    state.educationDetails = details
  },
  SET_EMPLOYMENT_DETAILS (state, details) {
    state.employmentDetails = details
  },
  SET_HEALTH_DETAILS (state, details) {
    state.healthDetails = details
  },
  SET_PROGRAMME_DETAILS (state, details) {
    state.programmeDetails = details
  },
  SET_BVN_DETAILS (state, details) {
    state.bvnDetails = details
  },
  SET_COMPLETE_DETAILS (state) {
    state.completeDetails = { ...state.residentialDetails, ...state.educationDetails, ...state.employmentDetails, ...state.healthDetails, ...state.programmeDetails, ...state.bvnDetails }
  },
  SHOW_SUPERVISOR_CONFIRM_PAGE (state) {
    state.supervisorConfirm = true
  },
  SET_TOKEN_DETAILS (state, token) {
    state.token = token
  },
  SET_VENDOR_TOKEN_DETAILS (state, token) {
    state.vendorToken = token
  },
  SET_APPLICATION_LIST (state, details) {
    state.listOfApplications = details
  }
}
