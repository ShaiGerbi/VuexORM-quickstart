<template>
  <div>
    <p v-for="user in users" :key="user.id">{{ user.name }}</p>
  </div>
</template>

<script>
import User from '@/models/User'
export default {
  created() {
    User.insert({data: {id: 1, name: 'Shai'}})
    User.insert({data: {id: 2, name: 'Maya'}})
  },

  computed:{
    users(){
      return User.all()
    }
  }
}
</script>
