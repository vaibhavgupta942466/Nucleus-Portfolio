<!-- src/views/Contact.vue -->
<template>
  <div class="container mx-auto rounded-xl shadow-md p-2 flex flex-col">
    <div class="container flex flex-col">
      <h2 class="text-3xl font-bold my-6">Contact</h2>
      <form @submit.prevent="handleSubmit">
        <div v-if="loading" class="text-center">Loading...</div>
        <div v-else class="border-gray/10 pb-10">
          <h2 class="text-xl">I'm Always Open To Discussing Project</h2>
          <h3 class="text-xl font-semibold">
            development work, or Partnership.
          </h3>

          <div class="my-6">
            <div class="mb-6">
              <label for="contact-name" class="block mb-2 text-sm font-medium"
                >Contact Name</label
              >
              <input
                type="text"
                id="contact-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                v-model="formData.name"
                required
              />
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 text-sm font-medium"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                v-model="formData.email"
                :class="[
                  formData.email && !isValidEmail(formData.email)
                    ? 'border-red'
                    : '',
                ]"
                required
              />
            </div>
            <div>
              <label for="message" class="block mb-2 text-sm font-medium"
                >Your message</label
              >
              <textarea
                id="message"
                rows="4"
                v-model="formData.message"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <p style="text-align: justify">
              By submitting this form you agree to our terms and conditions and
              our privacy policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </p>
          </div>
        </div>

        <div
          class="flex items-center gap-x-5"
          :class="alertMessage ? 'justify-between' : 'justify-end'"
        >
          <div
            v-if="alertMessage"
            class="bg-gray-50 text-gray-900 rounded-xl my-6 border border-gray-300 px-4 py-2"
            role="alert"
          >
            {{ alertMessage }}
          </div>
          <button
            type="submit"
            class="rounded bg-blue px-6 py-2 text-sm font-semibold shadow-sm transition-transform hover:scale-110"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const loading = ref(false)
const alertMessage = ref('')
const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const handleSubmit = async () => {
  alertMessage.value = ''
  loading.value = true

  // Validate required fields
  if (!formData.name || !formData.email || !formData.message) {
    alertMessage.value = 'Please fill in all required fields.'
    loading.value = false
    return
  }

  // Validate email format
  if (!isValidEmail(formData.email)) {
    alertMessage.value = 'Please enter a valid email address.'
    loading.value = false
    return
  }

  const body = {
    recipientEmail: 'vaibhavgupta942466@gmail.com',
    recipientName: 'Vaibahv Gupta',
    subject: 'New Query From Portfolio',
    templateId: '6541509',
    variables: {
      source_name: 'Portfolio Website',
      user_name: formData.name,
      user_email: formData.email,
      user_mesage: formData.message,
      message_date: new Date(),
    },
  }

  try {
    const response = await fetch(
      'https://us-central1-nucelus.cloudfunctions.net/nucleus-creator-portfolio-query-mail',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        mode: 'cors', // This tells the browser to make a CORS request.
      },
    )

    if (response.ok) {
      // Clear form on success
      formData.name = ''
      formData.email = ''
      formData.message = ''
      alertMessage.value = 'Your message has been received'
    } else {
      alertMessage.value = 'Failed to send email. Please try again later.'
    }
  } catch (error) {
    console.log(error)
    alertMessage.value = 'Failed to send email. Please try again later.'
  } finally {
    loading.value = false
  }
}
</script>
