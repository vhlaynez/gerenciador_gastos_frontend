<template>
  <div id="app">
		<Header />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/template/Header"
import Content from "@/components/template/Content"
import Footer from "@/components/template/Footer"

export default {
  name: 'app',
  components:{ Header, Content, Footer }
}
</script>

<style>
#app{
	margin-top: 60px;
}
</style>
