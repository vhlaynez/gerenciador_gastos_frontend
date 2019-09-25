import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home.vue';
import Adicionar from '@/components/adicionar/Adicionar.vue';
import Relatorio from '@/components/relatorio/Relatorio.vue';
import Gasto from '@/components/gasto/Gasto.vue';


Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/adicionar', name: 'adicionar', component: Adicionar },
    { path: '/relatorio', name: 'relatorio', component: Relatorio },
    { path: '/gasto/:id', name: 'gasto', component: Gasto },


]

export default new VueRouter({ 
	routes,
	mode: 'history'
})