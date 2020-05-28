import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.uid(),
      name: this.string('')
    }
  }

  static apiConfig = {
    actions: {

      fetch () {
        return this.get('https://jsonplaceholder.typicode.com/users')
      },

      fetchById (id) {
        return this.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      },

    }
  }

}
