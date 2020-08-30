<template>
  <ul class="nav nav-pills">
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        exact
        to="/"
        tag="li"
    >
      Home
    </router-link>
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        to="/MyProjects"
        exact
        tag="li"
    >
      MyProjects
    </router-link>
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        to="/Contacts"
        exact
        tag="li"
    >
      Contacts
    </router-link>

    
  </ul>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
ul{
  display: flex;
  text-decoration: none;
  margin-left: 0; 
  padding-left: 0;
 }
li{
 text-decoration: none;
 color: #fff;
 padding: 10px;
 font-size: 25px;
background: DarkViolet;
 width: 550px;
 text-align: justify;
 justify-content: center;
 list-style-type: none;
}

</style>