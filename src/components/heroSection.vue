<template>
    <!-- ===============================================================
               -----------  Hero Section ---------------------------
        =============================================================== -->
    <section class="bg-gradient-to-r from-gray-100 via-blue-500 to-gray-300 dark:bg-gradient-to-r dark:from-gray-800 dark:via-blue-600 dark:to-gray-900 text-gray-900 dark:text-gray-100 h-screen flex items-center justify-center pt-16">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div class="text-center md:text-left grow lg:pl-10 ">
                <!-- Typewriter Effect Starts Here -->
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold typewriter-container">
                    <span ref="typewriterText" class="typewriter border-white border-r-2 text-blue-600 dark:text-blue-400"></span>
                </h1>
                <p class="mt-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl">
                    I am a Full Stack Developer currently working at WebFort Technologies.
                </p>
                <div class="flex justify-center md:justify-start mt-6">
                    <a href="https://www.linkedin.com/in/santosh-gautam-20b13b204/" target="_blank" class="mr-5 transform hover:scale-125 transition text-blue-600 dark:text-blue-400">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                            class="w-10" />
                    </a>
                    <a href="https://github.com/santoshgautam2000" target="_blank" class="mr-5 transform hover:scale-125 transition text-blue-600 dark:text-blue-400">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                            class="w-10" />
                    </a>
                </div>
                <div class="mt-6">
                    <a href="your-resume.pdf"
                        class="transition-transform duration-500 transform hover:scale-110 hover:shadow-2xl inline-block px-6 py-3 bg-blue-600 dark:bg-blue-400 text-white font-semibold rounded shadow hover:bg-blue-700 dark:hover:bg-blue-500"
                        download>Download Resume</a>
                </div>
            </div>
            <div class="mt-5 md:mt-0 grow">
                <img src="../assets/SantoshImage.png" alt="Santosh Image"
                    class="rounded-full w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 shadow-lg transition-transform duration-500 transform scale-105  hover:shadow-2xl" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            fullText: "Hi, I am Santosh Gautam. Full Stack Developer.", // Full text to type
            displayedText: "", // Displayed text updates letter by letter
            currentIndex: 0, // Keeps track of current character index
        };
    },
    mounted() {
        this.typeWriter();
    },
    methods: {
        typeWriter() {
            if (this.currentIndex < this.fullText.length) {
                this.displayedText += this.fullText.charAt(this.currentIndex);
                this.currentIndex++;
                this.$refs.typewriterText.innerHTML = this.displayedText; // Update span text
                setTimeout(this.typeWriter, 120); // Typing speed (in milliseconds)
            }

            if (this.fullText.length === this.currentIndex) {
                let RemoveClass = this.$refs.typewriterText;
                RemoveClass.classList.remove('border-white', 'border-r-2'); 
            }
        },
    },
};
</script>

<style scoped>
/* Typewriter Effect Styles */
.typewriter-container {
    display: inline-block;
    min-width: 200px;
    max-width: 600px;
    word-wrap: break-word;
}

.typewriter {
    font-family: 'Math';
    overflow: hidden;
    color: white;
}

h1 span {
    color: #ffdd57;
}

@media (min-width: 640px) {
    .typewriter-container {
        min-width: 400px;
    }
}

@media (min-width: 768px) {
    .typewriter-container {
        min-width: 500px;
    }
}

@media (min-width: 1024px) {
    .typewriter-container {
        min-width: 600px;
    }
}

@keyframes blink-caret {
    from, to {
        border-color: transparent;
    }
    50% {
        border-color: white;
    }
}

span {
    animation: blink-caret 0.80s step-end infinite;
}
</style>
