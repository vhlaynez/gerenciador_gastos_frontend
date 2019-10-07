<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="local">Local</label>
                <input
                    class="form-control"
                    placeholder="Ex: Posto de Combustível"
                    id="local"
                    type="text"
                    v-model="gasto.lugar"
                />
            </div>
            <div class="form-group">
                <label for="valor">Valor</label>
                <money placeholder="R$0,00" class="form-control" id="valor" v-model="gasto.valor"></money>
            </div>
            <div class="form-group">
                <label for="valor">Data</label>
                <input class="form-control" id="valor" type="date" v-model="gasto.data_gasto" />
            </div>
        </form>
        <router-link :to="{name:'relatorio'}">
            <button class="btn btn-light">Voltar</button>
        </router-link>
        <button @click="save" class="btn btn-success">Adicionar</button>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Adicionar',
    data: function() {
        return {
            gasto: {}
        }
    },
    methods: {
        save() {
            const url = `${baseApiUrl}/gastos`
            axios.post(url, this.gasto).then(() => {
                this.$toasted.global.defaultSuccess()
                this.gasto = {}
            })
        }
    }
}
</script>
<style>
</style>