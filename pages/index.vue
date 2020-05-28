<template>
  <div>
    <p v-for="user in users" :key="user.id">{{ user.name }}</p>
  </div>
</template>

<script>
import User from '@/models/User'
export default {


  created() {
    User.api().fetch()
  },

  computed: {
    users() {
      return User.all()
    }
  }
}
</script>
