<template>
  <div id="add-city-btn-wrapper">
    <div id="add-city-btn" @click="addCity">+ Add City</div>
  </div>
</template>

<script>
export default {
  name: "AddCityButton",
  props: {
    addCity: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style>
#add-city-btn-wrapper {
  display: flex;
  justify-content: center;

  margin-top: 50px
}
#add-city-btn {
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(159, 137, 199);
  width: 120px;
  height: 30px;
  border-radius: 4px;

  font-size: 16px;
  color: white;
  font-weight: 600;

  padding: 5px 7px;
  margin: 0px 5px;
}

#add-city-btn:hover {
  opacity: 0.8;
}
#add-city-btn:active {
  opacity: 0.6;
}
</style>