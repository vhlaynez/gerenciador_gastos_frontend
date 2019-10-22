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
            gastos: [],
            series: []
        }
    },

    methods: {
        get() {
            const url = `${baseApiUrl}/grafico`
            axios(url).then(res => {
                this.gastos = res.data
                var options = {
                    theme: {
                        palette: 'palette9'
                    },

                    series: [44, 55, 13, 43, 22],
                    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                    chart: {
                        type: 'pie'
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
        }
    },
    mounted() {
        this.get()
    }
}
</script>

<style>
</style>