<template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <!--  {{gastos}} -->
          <div v-for="(gastos,id_gasto) in gastos" :key="id_gasto" class="col-sm-3">
            <div class="card">
              <div
                class="card-header bg-info"
                style="color:white; text-align:center;"
              >{{gastos.lugar}}</div>
              <div class="card-body" style="text-align:center;">{{gastos.valor}}</div>
            </div>
          </div>
          <div class="col-sm-4"></div>
          <div class="col-sm-4"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "Home",
  data: function() {
    return {
      gastos: {}
    };
  },
  methods: {
    get() {
      const url = `${baseApiUrl}/home`;

      axios(url).then(res => (this.gastos = res.data));
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style>
</style>