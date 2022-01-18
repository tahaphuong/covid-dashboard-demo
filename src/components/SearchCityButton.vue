<template>
  <div>
    <div id="add-city-wrapper">
      <div style="font-size: 20px">🔍</div>
      <input
        class="add-city-el"
        id="add-city-input"
        type="city"
        v-model="inputCity"
      />
    </div>

    <div v-if="resultList.length" style="display: flex; justify-content: center">
      <div id="dropdown">
        <div @click="chooseCityInput(item.ags, item.name)" class="option" v-for="(item, i) in resultList" :key="i">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCityButton",
  props: {
    handleInputCity: {
      type: Function,
      default: () => {},
    },
    resultList: {
      type: Array,
      default: () => []
    },
    chooseCity: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      inputCity: "",
    };
  },
  methods: {
    chooseCityInput(ags, name) {
      this.inputCity = name
      this.chooseCity(ags)
      this.handleInputCity(name, false)
    }
  },
  watch: {
    inputCity(newValue) {
      this.handleInputCity(newValue, this.inputCity.length != 0)
    },
  },
};
</script>

<style>
#add-city-wrapper {
  display: flex;
  justify-content: center;

  width: fit-content;
  border-radius: 200px;
  border: 1.5px rgb(184, 184, 184) solid;
  padding: 4px 8px;

  margin: auto;
  margin-top: 40px;
}
.add-city-el {
  height: 25px;
}

#add-city-input {
  font-family: inherit;
  font-size: 16px;

  outline: none;
  border: none;
  /* transition: box-shadow 0.3s, border-color 0.3s; */
}

#dropdown {
  width: 230px;
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;

  position: absolute;
  background-color: white;
  border-radius: 4px;
  border: 0.7px #eeeeee solid;
  margin-top: 4px;
}

#dropdown .option {
  padding: 12px 0px
}

.option:hover {
  cursor: pointer;
  background-color: rgb(202, 202, 202);
}
/* #add-city-btn {
  width: 100px;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(159, 137, 199);
  border-radius: 4px;

  font-size: 16px;
  color: white;
  font-weight: 600;

  padding: 5px 7px;
  margin: 0px 3px;
}

#add-city-btn:hover {
  opacity: 0.8;
}
#add-city-btn:active {
  opacity: 0.6;
} */
</style>