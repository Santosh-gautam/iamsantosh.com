<template>
  <!-- ===============================================================
        ----------- Include a main header ---------------------------
        =============================================================== -->
  <header class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 fixed top-0 left-0 w-full z-50 shadow-lg">
    <div class="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
      <div class="flex items-center space-x-4 cursor-pointer" @click=" this.$router.push('/')">
        <img src="../assets/SantoshImage.png" alt="Santosh Gautam" class="rounded-full shadow-lg w-12 h-12">
        <div class="text-sm font-semibold pt-5">Santosh Gautam</div>
      </div>
      <nav class="hidden md:block">
        <ul class="flex space-x-6">
          <li>
            <router-link to="#about" class="hover:text-blue-500 dark:hover:text-blue-400">About</router-link>
          </li>
          <li>
            <router-link to="#projects" class="hover:text-blue-500 dark:hover:text-blue-400">Projects</router-link>
          </li>
          <li>
            <router-link to="#experience" class="hover:text-blue-500 dark:hover:text-blue-400">Experience</router-link>
          </li>
          <li>
            <router-link to="#technical" class="hover:text-blue-500 dark:hover:text-blue-400">Technical
              Skills</router-link>
          </li>
          <li>
            <router-link to="#education" class="hover:text-blue-500 dark:hover:text-blue-400">Education</router-link>
          </li>
          <li>
            <router-link to="#contact" class="hover:text-blue-500 dark:hover:text-blue-400">Contact</router-link>
          </li>
        </ul>
      </nav>
      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button id="menu-toggle" class="focus:outline-none" @click="openmobileMenu()" v-if="showmenu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg w-6" viewBox="0 0 16 16">
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <button id="menu-toggle" class="focus:outline-none" @click="openmobileMenu()" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
    </div>
  </header>

  <!-- ==============================================
      ---------- Mobile view Header -------------
      ============================================== -->
  <div v-if="showmenu" id="mobile-menu"
    class="sticky bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200  lg:hidden top-16 left-0 w-full shadow-lg z-50">
    <nav>
      <ul class="flex flex-col space-y-2 py-2">
        <li>
          <router-link to="#about" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">About</router-link>
        </li>
        <li>
          <router-link to="#projects"
            class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</router-link>
        </li>
        <li>
          <router-link to="#experience"
            class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Experience</router-link>
        </li>
        <li>
          <router-link to="#technical" class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Technical
            Skills</router-link>
        </li>
        <li>
          <router-link to="#education"
            class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Education</router-link>
        </li>
        <li>
          <router-link to="#contact"
            class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  // Component logic...
  data() {
    return {
      showmenu: false
    }
  },
  methods: {
    openmobileMenu() {
      this.showmenu = !this.showmenu;
      console.log(this.showmenu)
    }
  }
}
</script>

<style scoped>
/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
  /* This will make the scrolling smooth */
}
</style>
