<template>
    <div class="container">
        <!--  {{gastos}} -->
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Local</th>
                    <th>Valor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(gastos, id_gasto) in gastos.data" :key="id_gasto">
                    <td>{{gastos.data_gasto}}</td>
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
        <button
            v-if="loadMore"
            type="button"
            @click="getGasto"
            class="btn btn-secondary"
        >Carregar mais</button>
    </div>
</template>


<script>
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

            axios(url).then(res => (this.gastos = res.data))
        },
        getGasto() {
            this.page++
            const url = `${baseApiUrl}/gastos?page=${this.page}`
            axios(url).then(res => {
                this.gastos.data = this.gastos.data.concat(res.data.data)
                if (res.data.data.length === 0 || res.data.data.length < 10)
                    this.loadMore = false
            })
        }
    },
    mounted() {
        this.get()
    }
}
</script>
<style>
</style>