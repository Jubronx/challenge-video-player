<template>
  <div class="container">
    <SideBar/>
  </div>
</template>

<script lang="ts">

</script>

<style>
  .container{
    width: 100%;
    color: white;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    gap: 100px;
    font-family: 'Roboto', sans-serif;
  }
  @media screen and (max-width: 768px){
    .container{
      flex-direction: column;
      gap: 40px;
    }
  }
</style>