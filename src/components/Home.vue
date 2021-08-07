<template>
  <LanguageButtons v-if="false"/>
  <AddCityButton v-if="false" />
  <ListCities :list="list" />
</template>

<script>


import LanguageButtons from "./LanguageButtons.vue"
import AddCityButton from "./AddCityButton.vue"
import ListCities from "./ListCities.vue"

export default {
  name: "Home",
  components: {
    LanguageButtons,
    AddCityButton,
    ListCities
  },
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    let endpoint = "https://api.corona-zahlen.org/districts"
    const cityCodes = ['05913', '05911', '05334', '05112', '05970', '05314']
    // Dortmund, Bochum, Aachen, Duisburg, Siegen, Bonn

    fetch(endpoint)
    .then(data => data.json())
    .then(raw => {
      for (let ags of cityCodes) {
        this.list.push(raw.data[ags])
      }
      this.list.sort((a,b) => b.weekIncidence - a.weekIncidence)
    })
    .catch(err => {
      console.log(err, "error by fetching")
    })
  }
}
</script>

<style>

</style>