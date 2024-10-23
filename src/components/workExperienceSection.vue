<template>
    <!-- ================================================================
          ------------ Work Experience Section -----------------------
        ================================================================ -->
    <section id="experience" class="py-20 bg-gray-100 dark:bg-gray-800 fade-in p-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-semibold text-center mb-10">Work Experience</h2>
            <!-- Grid container with responsive columns -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div class="experience-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="../assets/companylogo.svg" alt="Company Logo" class="w-16 h-16" />
                        <div>
                            <h3 class="text-xl font-semibold">Full Stack Developer</h3>
                            <span class="text-gray-500 dark:text-gray-300">Jan 2022 - Present</span>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Webfort Technologies</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Developed responsive web applications using React and Tailwind CSS.</li>
                        <li>Collaborated with designers to implement user-friendly interfaces.</li>
                        <li>Optimized application performance and improved loading times.</li>
                        <li>Managed front-end and back-end development, server maintenance, and CI/CD pipelines.</li>
                    </ul>
                </div>
                
                <div class="experience-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="../assets/companylogo.svg" alt="Company Logo" class="w-16 h-16" />
                        <div>
                            <h3 class="text-xl font-semibold">Junior Developer</h3>
                            <span class="text-gray-500 dark:text-gray-300">Jan 2021 - Dec 2021</span>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Webfort Technologies</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Implemented RESTful APIs using PHP and Slim framework.</li>
                        <li>Developed WordPress plugins and custom blocks.</li>
                        <li>Assisted in the development of internal tools and applications.</li>
                    </ul>
                </div>

                <div class="experience-card bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                    <div class="flex items-center space-x-4 mb-4">
                        <img src="../assets/companylogo.svg" alt="Company Logo" class="w-16 h-16" />
                        <div>
                            <h3 class="text-xl font-semibold">Intern PHP Developer</h3>
                            <span class="text-gray-500 dark:text-gray-300">Jun 2020 - Dec 2020</span>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Webfort Technologies</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Assisted in developing and maintaining web applications using PHP.</li>
                        <li>Participated in code reviews and learned software development best practices.</li>
                        <li>Supported the development team in various tasks and projects.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style>
/* Custom styles for experience cards */
.experience-card {
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .experience-card {
        padding: 1.5rem; /* Adjust padding for smaller screens */
    }
}
</style>
