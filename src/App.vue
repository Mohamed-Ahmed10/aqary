<template>
  <navbar />
  <Header />
  <Products />
  <Vedio />
  <how-to-use />
  <Sell />
  <Features />
  <Questions />
  <contacts />
  <Footer />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.rtl {
  *:not(i) {
    font-family: "Cairo", sans-serif;
  }
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header.vue";
import Products from "./components/products";
import Vedio from "./components/vedio";
import HowToUse from "@/components/HowToUse";
import Sell from "./components/sell.vue";
import Features from "./components/Features.vue";
import Questions from "./components/questions.vue";
import Contacts from "./components/contacts.vue";
import Footer from "./components/footer.vue";

export default {
  components: {
    Navbar,
    Header,
    Products,
    Vedio,
    HowToUse,
    Sell,
    Features,
    Questions,
    Contacts,
    Footer,
  },
};
</script>
