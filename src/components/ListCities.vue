<template>
  <div style="margin-top: 20px; font-size: 40px">🦠</div>
  <div style="margin-top: 10px"></div>

  <div v-if="list.length">
    <div class="list-cities-wrapper">
      <div>
        <span class="no-title">No.</span>
        <span class="city-title">City</span>
      </div>
      <div class="inci-title">Incidence</div>
    </div>
    <div
      v-for="(item, i) in list"
      :key="i"
      class="list-cities-wrapper list-cities-item"
      @dblclick="removeCity(item.ags)"
    >
      <div class="city">
        <div class="no">{{ i + 1 }}</div>
        {{ item.name }}
      </div>
      <div class="inci">{{ item.weekIncidence.toFixed(1) }}</div>
    </div>
  </div>

  <!-- <div class="no-data-state" v-else>
    ↑ Let's add some cities to your list 😁
  </div> -->
</template>

<script>
export default {
  name: "ListCities",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    handleRemoveItem: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    removeCity(ags) {
      this.handleRemoveItem(ags)
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

.no-title,
.city > .no {
  width: 20px;
  margin-right: 5px;
  font-weight: 400;
}

.city > .no {
  font-size: 18px;
  margin-right: 10px;
}

.no-data-state {
  color: gray;
}
</style>