import Vuex from 'vuex'

const whoAmIStore = () => {
  return new Vuex.Store({
    state: () => ({
      identity: {
        firstName: '',
        lastName: '',
        birthDate: ''
      },

      contact: {
        address: {
          street: '',
          zipCode: '',
          city: '',
          country: ''
        },

        email: {
          personal: '',
          pro: ''
        },

        phones: {
          home: '',
          cellular: '',
          pro: ''
        }
      },

      description: '',

      schooling: [],

      professionalXp: [],

      hobbies: []
    })
  })
}

export default whoAmIStore
