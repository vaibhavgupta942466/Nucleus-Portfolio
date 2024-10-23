<!-- src/views/Contact.vue -->
<template>
  <div class="container mx-auto bg-white rounded shadow-md p-6">
    <div
      v-if="alertMessage"
      class="bg-gray-light border-green text-gray px-4 py-3 rounded mb-4"
      role="alert"
    >
      {{ alertMessage }}
    </div>
    <div class="container flex flex-col">
      <div class="container flex flex-col">
        <h2 class="text-3xl font-bold mb-5">Contact</h2>
      </div>
      <div class="container flex flex-col bg-gray-light shadow rounded p-10">
        <form @submit.prevent="handleSubmit">
          <div v-if="loading" class="text-center">Loading...</div>
          <div v-else class="border-gray/10 pb-10">
            <h2 class="text-base text-xl leading-7 text-gray">
              I'm Always Open To Discussing Project
            </h2>
            <p class="mt-1 text-m leading-6 font-bold">
              Development, or Partnership.
            </p>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-full">
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray"
                >
                  Full Name
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="formData.name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-blue placeholder:text-violet focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-full">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray"
                >
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    v-model="formData.email"
                    :class="[
                      'block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-blue placeholder:text-violet focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6',
                      formData.email && !isValidEmail(formData.email)
                        ? 'border-pink'
                        : '',
                    ]"
                  />
                </div>
              </div>

              <div class="col-span-full">
                <label
                  for="message"
                  class="block text-sm font-medium leading-6 text-gray"
                >
                  Message
                </label>
                <div class="mt-2">
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    v-model="formData.message"
                    class="block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-blue placeholder:text-violet focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-5">
            <button
              type="submit"
              class="rounded-md bg-blue px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
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

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const responseData = await response.json()

    if (response.status === 200) {
      // Clear form on success
      formData.name = ''
      formData.email = ''
      formData.message = ''
      alertMessage.value = responseData.message
    } else {
      alertMessage.value =
        responseData.error || 'Failed to send email. Please try again later.'
    }
  } catch (error) {
    console.log(error)
    alertMessage.value = 'Failed to send email. Please try again later.'
  } finally {
    loading.value = false
  }
}
</script>
