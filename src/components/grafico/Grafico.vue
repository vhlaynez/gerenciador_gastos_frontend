<template>
    <div>
        <div class="container">
            <div id="chart"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import ApexCharts from 'apexcharts'

export default {
    name: 'Home',
    data: function() {
        return {
            gastos: []
        }
    },

    methods: {
        get() {
            const url = `${baseApiUrl}/grafico`
            axios(url)
                .then(res => {
                    this.gastos = res.data
                    var options = {
                        theme: {
                            palette: 'palette9'
                        },

                        series: [],
                        labels: [],
                        chart: {
                            type: 'pie',
                            height: '500'
                        }
                    }

                    for (let i = 0; i < this.gastos.length; i++) {
                        options.labels[i] = this.gastos[i].categoria
                        options.series[i] = this.gastos[i].valor
                    }
                    var chart = new ApexCharts(
                        document.querySelector('#chart'),
                        options
                    )
                    chart.render()
                })
                .catch(err => {
                    this.$toasted.global.defaultError({
                        msg: 'Não foi possível carregar o grafico'
                    })
                    console.log(err)
                })
        }
    },
    mounted() {
        this.get()
    }
}
</script>

<style>
#chart {
    height: 200px;
}
</style>