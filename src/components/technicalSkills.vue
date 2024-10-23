<template>
    <!-- ================================================================
          ------------ Technical Skills Section -----------------------
        ================================================================ -->
    <section id="technical" class="py-20 bg-gray-100 dark:bg-gray-800 fade-in">
        <div class="container mx-auto">
            <h2 class="text-4xl font-semibold text-center mb-8">Technical Skills</h2>
            <div class="flex flex-wrap justify-center mt-8">
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" class="w-12">
                    <h4 class="text-md ml-4">Vue.js</h4>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" class="w-12">
                    <h4 class="text-md ml-4">React.js</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" class="w-12">
                    <h4 class="text-md ml-4">PHP</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" class="w-12">
                    <h4 class="text-md ml-4">WordPress</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-12">
                    <h4 class="text-md ml-4">JavaScript</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-12">
                    <h4 class="text-md ml-4">HTML</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" class="w-12">
                    <h4 class="text-md ml-4">CSS</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" class="w-12">
                    <h4 class="text-md ml-4">Bootstrap</h4>
                </div>
                <div class="skill-card">
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" class="w-12">
                    <h4 class="text-md ml-4">Tailwind CSS</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" class="w-12">
                    <h4 class="text-md ml-4">MySQL</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" class="w-12">
                    <h4 class="text-md ml-4">GitHub</h4>
                </div>
                <div class="skill-card">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" class="w-12">
                    <h4 class="text-md ml-4">Postman</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-original.svg" class="w-12">
                    <h4 class="text-md ml-4">FileZilla</h4>
                </div>
                <div class="skill-card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg" class="w-12">
                    <h4 class="text-md ml-4">WooCommerce</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* CSS for Skill Card */
.skill-card {
    background-color: #f9fafb; /* Tailwind's gray-100 */
    padding: 16px; /* Tailwind's p-4 */
    margin: 12px; /* Tailwind's m-3 */
    border-radius: 8px; /* Rounded corners */
    display: flex; /* Flexbox for alignment */
    align-items: center; /* Center items vertically */
    transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effects */
}

.skill-card:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* Shadow on hover */
}

/* Adjustments for dark mode */
@media (prefers-color-scheme: dark) {
    .skill-card {
        background-color: #374151; /* Tailwind's gray-700 */
    }
}
</style>
