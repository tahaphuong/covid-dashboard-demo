<template>
  <LanguageButtons v-if="false" />
  <SearchCitySection
    :inputInfo="inputInfo"
    :handleInputCity="handleInputCity"
    :resultList="resultList"
    :chooseCity="chooseCity"
  />
  <ListCities :list="listToDisplay" :handleRemoveItem="handleRemoveItem" />
  <Footer />
</template>

<script>
import LanguageButtons from "./components/LanguageButtons.vue";
import SearchCitySection from "./components/SearchCitySection.vue";
import ListCities from "./components/ListCities.vue";
import Footer from "./components/Footer.vue";

const STORAGE_NAME = "cityCodes";

export default {
  name: "Home",
  components: {
    LanguageButtons,
    SearchCitySection,
    ListCities,
    Footer,
  },
  data() {
    return {
      metaData: null,
      allData: [],
      listToDisplay: [],
      resultList: [],
      chosenCityAgs: null,

      inputInfo: {
        type: null, // info, success, error
        message: "",
      },
    };
  },
  mounted() {
    let endpoint = "https://api.corona-zahlen.org/districts";

    // fetch main data
    fetch(endpoint)
      .then((data) => data.json())
      .then((raw) => {
        this.allData = raw.data;

        // get cities and display
        this.displayList();
      })
      .catch((err) => {
        console.log(err, "error by fetching");
      });
  },

  methods: {
    displayList() {
      this.listToDisplay = [];
      for (let ags of this.getJSONList()) {
        this.listToDisplay.push(this.allData[ags]);
      }
      this.listToDisplay.sort((a, b) => b.weekIncidence - a.weekIncidence);
    },
    handleInputCity(input, searching) {
      this.resultList = [];
      if (!searching) return;
      for (let ags in this.allData) {
        if (this.allData[ags].name.toLowerCase().match(input.toLowerCase())) {
          this.resultList.push(this.allData[ags]);
        }
      }
    },
    chooseCity(ags) {
      this.resultList = [];
      if (!this.getJSONList().includes(ags)) {
        this.addToJSONList(ags);
        this.displayList();
        // this.inputInfo = {
        //   type: "success",
        //   message: "City added to list!"
        // }
      }
      // else {
      //   this.inputInfo = {
      //     type: "error",
      //     message: "City is already in your list!"
      //   }
      // }
    },

    handleRemoveItem(ags) {
      this.removeOutOfJSONList(ags);
      this.displayList();
    },

    getJSONList() {
      let list = localStorage.getItem(STORAGE_NAME);
      if (list) return JSON.parse(list);
      else return [];
    },

    addToJSONList(ags) {
      let list = localStorage.getItem(STORAGE_NAME);
      if (list) {
        list = JSON.parse(list);
      } else {
        list = [];
      }

      list.push(ags);
      localStorage.setItem(STORAGE_NAME, JSON.stringify(list));
    },

    removeOutOfJSONList(ags) {
      let list = localStorage.getItem(STORAGE_NAME);
      if (list) {
        list = JSON.parse(list);
        list = list.filter((item) => item != ags);
        localStorage.setItem(STORAGE_NAME, JSON.stringify(list));
      }
    },
  },
};
</script>

<style>
</style>