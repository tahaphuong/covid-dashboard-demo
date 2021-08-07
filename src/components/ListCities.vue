<template>

  <div style="margin-top: 50px"></div>

    <div class="list-cities-wrapper">
      <div>
        <span class="no-title">No.</span>
        <span class="city-title">City</span>
      </div>
      <div class="inci-title">Incidence</div>
    </div>

    <div>
      <div v-for="(item, i) in list" :key="i" class="list-cities-wrapper list-cities-item">
        <div class="city"><div class="no">{{ i+1 }}</div>{{ item.name }}</div>
        <div class="inci">{{ item.weekIncidence.toFixed(1) }}</div>
      </div>
    </div>

</template>

<script>
export default {
  name: "ListCities",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>

.list-cities-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;

  margin: auto;
  padding: 0 10px;
}
.list-cities-wrapper > .city {
  font-weight: 700;
  font-size: 20px;
  color: rgb(70, 70, 70);

  display: flex;
  justify-content: center;
  align-items: center;
}
.list-cities-wrapper > .inci {
  font-weight: 700;
  font-size: 25px;
  color: rgb(159, 137, 199);
}
.list-cities-item {
  margin-top: 10px;
  padding: 10px 10px;
  border: 0.5px solid rgb(184, 184, 184);
  border-radius: 6px;
}

.no-title, .city>.no {
  width: 20px;
  margin-right: 5px;
  font-weight: 400;
}

.city>.no {
  font-size: 18px;
  margin-right: 10px;
}
</style>