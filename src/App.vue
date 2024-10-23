<template>
  <!-- ================================================================
          ------------  Header Section -----------------------
        ================================================================ -->
  <MainHeader></MainHeader>
  <!-- ================================================================
          ------------  Main included Component -----------------------
        ================================================================ -->
  <router-view></router-view>
  <!-- ================================================================
          ------------  Footer Section -----------------------
        ================================================================ -->
        <Footer></Footer>
</template>
<script>
import MainHeader from './components/mainHeader.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    MainHeader,
    Footer
  }
}
</script>

