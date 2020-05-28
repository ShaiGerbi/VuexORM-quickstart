import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import User from '@/models/User'

VuexORM.use(VuexORMAxios)

const database = new VuexORM.Database()

database.register(User)

export const plugins = [
  VuexORM.install(database)
]
