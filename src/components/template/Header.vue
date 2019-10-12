<template>
    <div>
        <nav class="navbar navbar-expand-md fixed-top navbar-light bg-light">
            <router-link :to="{name:'home'}" class="navbar-brand">Controle de Gastos</router-link>

            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name:'adicionar'}" class="nav-link">Adicionar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'relatorio'}" class="nav-link">Relatório</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'grafico'}" class="nav-link">Gráfico</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
</style>