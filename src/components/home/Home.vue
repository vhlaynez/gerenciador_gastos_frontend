<template>
    <div>
        <div class="container">
            <div class="display-4">Últimos gastos</div>
            <div class="card-columns">
                <div v-for="(gastos,id_gasto) in gastos" :key="id_gasto">
                    <div
                        class="shadow card"
                        style="background-color:#F8f9fa; margin-top:5px; text-decoration:none;"
                    >
                        <div class="card-body text-center">
                            <p class="card-text">
                                <i
                                    class="fa fa-map-marker"
                                    aria-hidden="true"
                                    style="text-decoration:none;"
                                ></i>
                                {{gastos.lugar}}
                            </p>

                            <p class="card-text">
                                <i class="fa fa-tag" aria-hidden="true"></i>
                                {{gastos.categoria}}
                            </p>
                            <p class="card-text">
                                <i class="fa fa-usd" aria-hidden="true"></i>
                                {{gastos.valor}}
                            </p>
                            <router-link :to="{name:'gasto',params:{id:`${gastos.id_gasto}`}}">
                                <button class="btn btn-outline-secondary">Detalhes</button>
                            </router-link>
                        </div>
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

            axios(url)
                .then(res => (this.gastos = res.data))
                .catch(err => {
                    this.$toasted.global.defaultError({
                        msg: 'Não foi possível carregar os gastos'
                    })
                })
        }
    },
    mounted() {
        this.get()
    }
}
</script>

<style>
a.card-block {
    color: black;
}
</style>