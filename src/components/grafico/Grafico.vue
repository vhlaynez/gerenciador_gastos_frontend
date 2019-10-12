<template>
    <div>
        <div class="container">
            <div id="chart">
      
    </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import ApexCharts from 'apexcharts'

export default {
    name: 'Home',
    components: {
        apexchart: ApexCharts,
      },
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
        var options = {
            series: [44, 55, 13, 43, 22],
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            chart: {
                type: 'pie'
            },
           series: [44, 55, 13, 43, 22],
           
        }

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
            }
    }
</script>

<style>
</style>