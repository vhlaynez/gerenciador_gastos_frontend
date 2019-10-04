<template>
    <div>
        <div class="container">
            <div class="display-4">Últimos gastos</div>
            <div style="padding-top:10px;" class="row">
                <div v-for="(gastos,id_gasto) in gastos" :key="id_gasto" class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title">{{gastos.lugar}}</div>
                        </div>
                        <div class="card-text" style="text-align:center;">{{gastos.valor}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    data: function() {
        return {
            gastos: {}
        }
    },
    methods: {
        get() {
            const url = `${baseApiUrl}/home`

            axios(url).then(res => (this.gastos = res.data))
        }
    },
    mounted() {
        this.get()
    }
}
</script>

<style>
</style>