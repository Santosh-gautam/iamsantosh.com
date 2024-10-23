<template>
    <!-- Education Section -->
    <section id="education" class="py-20 bg-white dark:bg-gray-900 fade-in">
        <div class="container mx-auto">
            <h2 class="text-4xl font-semibold text-center mb-10">Education</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                <div class="education-card p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-semibold mb-2">BCA from IGNOU</h3>
                    <div class="line border-b-2 border-gray-300 dark:border-gray-600 mb-2"></div>
                    <p class="text-gray-600 dark:text-gray-300">Completed in 2021</p>
                </div>
                <div class="education-card p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-semibold mb-2">BA in Political Science Honors</h3>
                    <div class="line border-b-2 border-gray-300 dark:border-gray-600 mb-2"></div>
                    <p class="text-gray-600 dark:text-gray-300">Completed in 2019</p>
                </div>
                <div class="education-card p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-semibold mb-2">ITI in Computer Operator and Programming Assistant</h3>
                    <div class="line border-b-2 border-gray-300 dark:border-gray-600 mb-2"></div>
                    <p class="text-gray-600 dark:text-gray-300">Completed in 2018</p>
                </div>
                <div class="education-card p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-semibold mb-2">12th pass from CBSE</h3>
                    <div class="line border-b-2 border-gray-300 dark:border-gray-600 mb-2"></div>
                    <p class="text-gray-600 dark:text-gray-300">Completed in 2016</p>
                </div>
                <div class="education-card p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <h3 class="text-xl font-semibold mb-2">10th pass from CBSE</h3>
                    <p class="text-gray-600 dark:text-gray-300">Completed in 2014</p>
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
/* Custom styles for cards */
.education-card {
    position: relative;
    transition: transform 0.3s ease;
}

.line {
    height: 2px;
    width: 100%;
    background-color: gray;
    position: relative;
    margin-top: 1rem;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .education-card {
        padding: 1.5rem; /* Adjust padding for smaller screens */
    }
}
</style>
