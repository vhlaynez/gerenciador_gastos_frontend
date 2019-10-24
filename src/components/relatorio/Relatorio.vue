<template>
    <div class="container">
        <!--  {{gastos}} -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>
                        <i class="fa fa-calendar" aria-hidden="true"></i> Data
                    </th>
                    <th>
                        <i class="fa fa-tag" aria-hidden="true"></i> Categoria
                    </th>
                    <th>
                        <i class="fa fa-map-marker" aria-hidden="true"></i> Local
                    </th>
                    <th>
                        <i class="fa fa-usd" aria-hidden="true"></i> Valor
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(gastos, id_gasto) in gastos.data" :key="id_gasto">
                    <td>{{gastos.data_gasto|formatDate}}</td>
                    <td>{{gastos.categoria}}</td>
                    <td>{{gastos.lugar}}</td>
                    <td>{{gastos.valor}}</td>
                    <td>
                        <router-link :to="{name:'gasto',params:{id:`${gastos.id_gasto}`}}">
                            <button class="btn btn-outline-secondary">Detalhes</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <button v-if="loadMore" type="button" @click="getGasto" class="btn btn-secondary">
            <i class="fa fa-refresh" aria-hidden="true"></i> Carregar mais
        </button>
    </div>
</template>


<script>
import moment from 'moment'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Relatorio',
    data: function() {
        return {
            gastos: {},
            page: 1,
            loadMore: true
        }
    },
    methods: {
        get() {
            const url = `${baseApiUrl}/gastos`

            axios(url)
                .then(res => (this.gastos = res.data))
                .catch(err => {
                    this.$toasted.global.defaultError({
                        msg: 'Não foi possível carregar os gastos'
                    })
                })
        },
        getGasto() {
            this.page++
            const url = `${baseApiUrl}/gastos?page=${this.page}`
            axios(url)
                .then(res => {
                    this.gastos.data = this.gastos.data.concat(res.data.data)
                    if (res.data.data.length === 0 || res.data.data.length < 10)
                        this.loadMore = false
                })
                .catch(err => {
                    this.$toasted.global.defaultError({
                        msg: 'Não foi possível carregar os gastos'
                    })
                })
        }
    },
    mounted() {
        this.get()
    },
    filters: {
        formatDate: function(e) {
            if (e) {
                return moment(e).format('DD/MM/YYYY')
            }
        }
    }
}
</script>
<style>
</style>