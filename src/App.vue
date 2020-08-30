<template>
  <div>
  <h1>My project</h1>
    <Header/>
     <router-view/>
     
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>


h1{
  text-align: center;
}
</style>