<template>
  <div>
    <input type="text" v-model="nevPl">
    <button @click="save" v-if="plans.length <= 10">Save</button>
    <ul>
      <li v-for="(item, i) in plans" :key="i">
        <p>{{item}}</p>
        <button @click="del(i)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyProjects',
  data() {
    return {
      nevPl: '',
      plans: []
    }
  },
  methods: {
    save() {
      this.plans.push(this.nevPl);
      this.nevPl = '';
    },
    del(i) {
      this.plans.splice(i, 1)
    }
  }
}
</script>

<style scoped>
li{
   font-size: 25px;
}
</style>
