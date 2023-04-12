<template>
  <q-card-section class="row text-center">
    <q-card-section class="col text-h4 text-primary">
      {{  header || "welCome" }}
    </q-card-section>
  </q-card-section>
 </template>

 <script>
 export default {
   name:"My Play MusicList",
   title:"내 플레이리스트",
   data() {
    return{
      header:"Play List App"
    }
   }
 }
 </script>

 <style>

 </style>
