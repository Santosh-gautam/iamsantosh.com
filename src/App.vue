<template>
  <div>
    <!-- ================================================================
          ------------  Header Section -----------------------
        ================================================================ -->
    <MainHeader ref="header"></MainHeader>
    <!-- ================================================================
          ------------  Main included Component -----------------------
        ================================================================ -->
    <router-view></router-view>
    <!-- ================================================================
          ------------  Footer Section -----------------------
        ================================================================ -->
    <Footer></Footer>
  </div>

</template>
<script>
import MainHeader from './components/mainHeader.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    MainHeader,
    Footer
  },
  methods:
  {
  
  }
}
</script>
