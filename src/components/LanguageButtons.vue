<template>
  <div id="lan-btn-list">
    <div class="lan-btn">
      🇻🇳
    </div>
    <div class="lan-btn">
      🇻🇳
    </div>
    <div class="lan-btn">
      🇻🇳
    </div>
  </div>
  
</template>

<script>
export default {
  name: "LanguageButtons"
}
</script>

<style>
  #lan-btn-list {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 15px;
  }

  .lan-btn {
    cursor: pointer;
    border: 0.7px solid rgb(184, 184, 184);
    border-radius: 4px;
    padding: 5px 7px;
    margin: 0px 5px;
  }
  .lan-btn:hover {
    background-color: rgba(184, 184, 184, 0.3);
  } 
  .lan-btn:active {
    background-color: rgba(184, 184, 184, 0.5);
  } 


</style>