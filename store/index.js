import Vuex from 'vuex'

const whoAmIStore = () => {
  return new Vuex.Store({
    state: () => ({
      identity: {
        firstName: 'Renaud',
        lastName: 'C.',
        birthDate: {
          year: 1981,
          month: 2,
          day: 20
        }
      },

      contact: {
        address: {
          street: '71 avenue Aristide Briand',
          zipCode: '92120',
          city: 'Montrouge',
          country: 'France'
        },

        email: {
          personal: 'personal@provider.com',
          pro: 'pro@company.org'
        },

        phone: {
          home: '0123456789',
          cellular: '0606060606',
          pro: ''
        }
      },

      description: 'Who am I?',

      schooling: [
        { school: 'School I studied at', from: '2003', to: '2006', diploma: 'Ingeneer' },
        { school: 'Previous school', from: '2001', to: '2003', diploma: '' }
      ],

      skills: {
        languages: [
          { lang: 'French', level: 'native' },
          { lang: 'English', level: 'fluent' },
          { lang: 'Spanish', level: 'It\'s been a long time...' }
        ],

        softwares: [
          { name: '', level: '' },
          { name: '', level: '' }
        ]
      },

      professionalXp: [
        {
          company: 'Casden',
          from: '2015-09-27',
          to: 'now',
          projects: [
            { description: '', job: '', team: '' }
          ]
        }
      ],

      hobbies: [
        'hobby 1', 'hobby 2'
      ]
    }),

    getters: {
      getIdentity: state => state.identity,

      getContact: state => state.contact,

      getDescription: state => state.description,

      getSchooling: state => state.schooling,

      getSkills: state => state.skills,

      getProfessionalXp: state => state.professionalXp,

      getHobbies: state => state.hobbies
    }
  })
}

export default whoAmIStore
