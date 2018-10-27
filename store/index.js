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

        phone: {
          home: '',
          cellular: '',
          pro: ''
        }
      },

      description: '',

      schooling: [
        { school: '', from: '', to: '', diploma: '' },
        { school: '', from: '', to: '', diploma: '' }
      ],

      skills: {
        languages: [
          { lang: '', level: '' },
          { lang: '', level: '' }
        ],

        softwares: [
          { name: '', level: '' },
          { name: '', level: '' }
        ]
      },

      professionalXp: [
        {
          company: '',
          from: '',
          to: '',
          projects: [
            { description: '', job: '', team: '' }
          ]
        }
      ],

      hobbies: [
        'hobby 1', 'hobby2'
      ]
    }),

    getters: {
      getIdentity: state => state.identity,

      getContact: state => state.contact,

      getEmail: state => state.email,

      getPhone: state => state.phone,

      getDescription: state => state.description,

      getSchooling: state => state.schooling,

      getSkills: state => state.skills,

      getProfessionalXp: state => state.professionalXp,

      getHobbies: state => state.hobbies
    }
  })
}

export default whoAmIStore
