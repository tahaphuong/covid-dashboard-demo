const languages = {}
languages.vi = {
  icon: "🇻🇳",
  name: "vi",
  fullName: "Tiếng Việt",

  title: "Đua top Inzidenz COVID tại Đứk"
}

languages.de = {
  icon: "🇩🇪",
  name: "de",
  fullName: "Deutsch",
  
  title: "COVID Inzidenz Ranking in Deutschland"
}

languages.en = {
  icon: "🇬🇧",
  name: "en",
  fullName: "English",
  
  title: "COVID incidence ranking in Germany"
}

const store = {
  debug: true,

  state: reactive({
    lan: "vi"
  }),

  getListLanguage() {
    if (this.debug) {
      console.log('Get list of availbale languages.')
    }
    let list = []
    for (let name in languages) {
      list.push(name)
    }
    return list
  },

  setLanguage(nameLan) {
    if (languages.hasOwnProperty(nameLan)) {
      if (this.debug) {
        console.log('Set language to ', nameLan)
      }

      this.state.lan = nameLan
    } else {
      if (this.debug) {
        console.log('This language is not yet available.')
      }
    }
  },

}

export {
  store,
  languages
}