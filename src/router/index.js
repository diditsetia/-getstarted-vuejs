import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Biodata from '@/components/Biodata'
import TabelBiodata from '@/components/TabelBiodata'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/heloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/biodata',
      name: 'biodata',
      component: Biodata
    },
    {
      path: '/tabelbiodata',
      name: 'tabelbiodata',
      component: TabelBiodata
    }
  ]
})
