<template>
  <LanguageButtons v-if="false"/>
  <SearchCityButton :handleInputCity="handleInputCity" :resultList="resultList" :chooseCity="chooseCity" />
  <ListCities :list="displayList" />
</template>

<script>


import LanguageButtons from "./components/LanguageButtons.vue"
import SearchCityButton from "./components/SearchCityButton.vue"
import ListCities from "./components/ListCities.vue"

export default {
  name: "Home",
  components: {
    LanguageButtons,
    SearchCityButton,
    ListCities
  },
  data() {
    return {
      metaData: null,
      allData: [],
      displayList: [],
      resultList: [],
      chosenCityAgs: null
    }
  },
  mounted() {
    let endpoint = "https://api.corona-zahlen.org/districts"
    const cityCodes = ['05913', '05911', '05334', '05112', '05970', '05314']

    // Dortmund, Bochum, Aachen, Duisburg, Siegen, Bonn

    fetch(endpoint)
    .then(data => data.json())
    .then(raw => {
      this.allData = raw.data
      for (let ags of cityCodes) {
        this.displayList.push(raw.data[ags])
      }
      this.displayList.sort((a,b) => b.weekIncidence - a.weekIncidence)
    })
    .catch(err => {
      console.log(err, "error by fetching")
    })
  },

  methods: {
    handleInputCity(input, searching) {
      this.resultList = []
      if (!searching) return
      for (let ags in this.allData) {
        if (this.allData[ags].name.toLowerCase().match(input.toLowerCase())) {
          this.resultList.push(this.allData[ags])
        }
      }
    },
    chooseCity(ags) {
      this.chosenCityAgs = ags
      this.resultList = []
    },
  }
}
</script>

<style>

</style>