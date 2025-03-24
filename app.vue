<template>
  <div class="main">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
<style>
  .main{
    height: 100%;
    display: flex;
  }
  body{
    height: 100%; 
    margin: 0;
    background-color: #1a1a1a;
  }
  html{
    height: 100%; 
  }
  #__nuxt{
    height: 100%;
  }
  
  @media screen and (max-width: 768px){
    body{
      height: auto;
    }
    .main{
      flex-direction: column;
    }
  }
</style>
