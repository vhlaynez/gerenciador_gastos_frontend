<template>
    <div class="container">
        {{gastos.data}}
        <table class=" table table-striped">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Local</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(gastos, id_gasto) in gastos.data" :key="id_gasto">
                    <td>gasto</td>
                    <td>{{gastos.lugar}}</td>
                    <td>{{gastos.valor}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import axios from "axios";
import { baseApiUrl } from "@/global";


export default {
    name:'Relatorio',
    data: function(){
        return{
            gastos:{}
        }
    },   
     methods: {
    get() {
      const url = `${baseApiUrl}/gastos`;

      axios(url).then(res => (this.gastos = res.data));
    }
  },
  mounted() {
    this.get();
  } 
}
</script>
<style>

</style>