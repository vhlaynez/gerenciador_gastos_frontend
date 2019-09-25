<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="local">Local</label>
                <input class="form-control" id="local" type="text">
            </div>
            <div class="form-group">
                <label for="valor">Valor</label>
                <input class="form-control" id="valor" type="number">
            </div>
            <div class="form-group">
                <label for="valor">Data</label>
                <input class="form-control" id="valor" type="date">
            </div>
        </form>
         <router-link  :to="{name:'relatorio'}"  > <button class="btn btn-light">Voltar</button>  </router-link> 
    <button class="btn btn-success">Adicionar</button>
    </div>

</template>

<script>
    export default {
        name:'Adicionar'
    }
</script>
<style>

</style>