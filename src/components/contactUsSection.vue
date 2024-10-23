<template>
    <!-- ================================================================
          ------------  Contact Section -----------------------
        ================================================================ -->
    <section class="dark:bg-gray-800 px-4 py-16 md:py-24 lg:px-8" id="contact">
        <div class="mx-auto max-w-screen-lg">
            <div class="flex flex-col gap-y-3">
                <div class="flex flex-col gap-6 md:flex-row md:items-center ml-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" aria-hidden="true" class="hidden h-12 w-12 text-white md:block">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                        </path>
                    </svg>
                    <h2 class="text-2xl font-bold text-white">Get in touch.</h2>
                </div>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="flex justify-center">
                        <form
                            class="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 w-full max-w-md">
                            <div class="mb-4">
                                <label for="name" class="block text-gray-700 dark:text-gray-300">Name</label>
                                <input type="text" id="name"
                                    class="dark:bg-gray-200 border border-gray-300 rounded-lg w-full p-2 dark:text-gray-800"
                                    required>
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" id="email"
                                    class="dark:bg-gray-200 dark:text-gray-800 border border-gray-300 rounded-lg w-full p-2"
                                    required>
                            </div>
                            <div class="mb-4">
                                <label for="message" class="block text-gray-700 dark:text-gray-300">Message</label>
                                <textarea id="message"
                                    class="dark:text-gray-800 border border-gray-300 rounded-lg w-full p-2 dark:bg-gray-200"
                                    rows="4" required></textarea>
                            </div>
                            <button type="submit"
                                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400 transition">Send
                                Message</button>
                        </form>
                    </div>
                    <div class="flex flex-col gap-y-4 md:order-1">
                        <p class="prose leading-6 text-neutral-300">Here is a good spot for a message to your readers to
                            let them know how best to reach out to you.</p>
                        <dl class="flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-4">
                            <div>
                                <dt class="sr-only">Email</dt>
                                <dd class="flex items-center">
                                    <a class="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white"
                                        href="mailto:gautamsantosh317@gmail.com" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            class="bi bi-envelope w-7 h-7" viewBox="0 0 16 16">
                                            <path
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                        </svg>
                                        <span class="ml-3 text-sm sm:text-base">gautamsantosh317@gmail.com</span>
                                    </a>
                                </dd>
                            </div>
                            <!-- <div>
                            <dt class="sr-only">Instagram</dt>
                            <dd class="flex items-center">
                                <a class="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white" href="https://www.instagram.com/iaashirkhan/" target="_blank">
                                    <svg class="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M92.6759 0H35.3226C15.8457 0 0 15.8465 0 35.3234V92.6766C0 112.154 15.8457 128 35.3226 128H92.6759C112.154 128 128 112.154 128 92.6766V35.3234C128.001 15.8465 112.154 0 92.6759 0ZM116.644 92.6766C116.644 105.892 105.892 116.643 92.6766 116.643H35.3226C22.1079 116.644 11.3568 105.892 11.3568 92.6766V35.3234C11.3568 22.1086 22.1079 11.3568 35.3226 11.3568H92.6759C105.891 11.3568 116.643 22.1086 116.643 35.3234V92.6766H116.644Z" fill="currentColor"></path>
                                        <path d="M64 31.0191C45.8133 31.0191 31.0176 45.8147 31.0176 64.0015C31.0176 82.1875 45.8133 96.9823 64 96.9823C82.1867 96.9823 96.9824 82.1875 96.9824 64.0015C96.9824 45.8147 82.1867 31.0191 64 31.0191ZM64 85.6248C52.0761 85.6248 42.3744 75.9246 42.3744 64.0007C42.3744 52.0761 52.0754 42.3751 64 42.3751C75.9246 42.3751 85.6256 52.0761 85.6256 64.0007C85.6256 75.9246 75.9239 85.6248 64 85.6248Z" fill="currentColor"></path>
                                        <path d="M98.3656 21.3893C96.1775 21.3893 94.0281 22.2752 92.4828 23.8273C90.9299 25.3718 90.0373 27.522 90.0373 29.7176C90.0373 31.9065 90.9307 34.0559 92.4828 35.608C94.0273 37.1526 96.1775 38.046 98.3656 38.046C100.561 38.046 102.704 37.1526 104.256 35.608C105.808 34.0559 106.694 31.9057 106.694 29.7176C106.694 27.522 105.808 25.3718 104.256 23.8273C102.711 22.2752 100.561 21.3893 98.3656 21.3893Z" fill="currentColor"></path>
                                    </svg>
                                    <span class="ml-3 text-sm sm:text-base"></span>
                                </a>
                            </dd>
                        </div> -->
                            <div>
                                <dt class="sr-only">Github</dt>
                                <dd class="flex items-center">
                                    <a class="-m-2 flex rounded-md p-2 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white"
                                        href="https://github.com/Santosh-wf" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            class="bi bi-github w-7 h-7" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                        </svg>
                                        <span class="ml-3 text-sm sm:text-base">GitHub</span>
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt class="sr-only">Linkdin</dt>
                                <dd class="flex items-center">
                                    <a class="-m-2 flex rounded-md p-2 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white"
                                        href="https://www.linkedin.com/in/santosh-gautam-20b13b204/" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            class="bi bi-linkedin w-6 h-6" viewBox="0 0 16 16">
                                            <path
                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                        </svg>
                                        <span class="ml-3 text-sm sm:text-base">Linkdin</span>
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt class="sr-only">call</dt>
                                <dd class="flex items-center">
                                    <a class="-m-2 flex rounded-md p-2 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:text-white"
                                        href="tel:+918882935655">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            class="bi bi-telephone w-6 h-6" viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>
                                        <span class="ml-3 text-sm sm:text-base">+918882935655</span>
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style></style>