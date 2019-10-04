<template>
    <div class="container">
        {{gasto}}
        <form>
            <div class="form-group">
                <label for="local">Local</label>
                <input class="form-control" id="local" type="text" v-model="gasto.lugar" />
            </div>
            <div class="form-group">
                <label for="valor">Valor</label>
                <input class="form-control" id="valor" type="number" v-model="gasto.valor" />
            </div>
            <div class="form-group">
                <label for="valor">Data</label>
                <input class="form-control" id="valor" type="date" v-model="gasto.data_gasto" />
            </div>
            <div class="form-group">
                <label for="valor">Cadastrado em:</label>
                <input
                    class="form-control"
                    id="valor"
                    type="text"
                    readonly
                    v-model="gasto.data_criacao"
                />
            </div>
        </form>
        <router-link :to="{name:'relatorio'}">
            <button class="btn btn-light">Voltar</button>
        </router-link>
        <button class="btn btn-danger">Excluir</button>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Gasto',
    data: function() {
        return {
            gasto: {},
            date: ''
        }
    },
    methods: {
        get() {
            const url = `${baseApiUrl}/gastos/${this.gasto.id}`
            axios(url).then(res => (this.gasto = res.data))
        }
    },
    mounted() {
        this.gasto.id = this.$route.params.id
        this.get()
    }
}
</script>

<style>
</style>