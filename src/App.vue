<template>
  <div id="app">
		<Header />
		<Content />
		<Footer />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from "@/components/template/Header"
import Content from "@/components/template/Content"
import Footer from "@/components/template/Footer"

export default {
  name: 'app',
  components:{ Header, Content, Footer },
  computed: mapState(['isMenuVisible', 'user'])
}
</script>

<style>
#app{
	
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 1fr;
	grid-template-areas:
		"header header"
		"content content"
		"footer footer";
}
</style>
