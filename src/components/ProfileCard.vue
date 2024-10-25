<!-- src/components/ProfileCard.vue -->
<template>
  <div
    class="container flex flex-col items-center mx-auto shadow-md rounded w-full"
  >
    <!-- Profile Image -->
    <div
      class="w-25 h-25 rounded-md overflow-hidden p-4 border-white shadow-lg"
    >
      <img
        src="/image/profile-3.png"
        alt="Profile Image"
        class="w-full h-full object-cover rounded-md"
      />
    </div>

    <!-- Name and Job Title -->
    <div class="text-center mb-4">
      <h2 class="text-xl font-semibold py-1">Vaibhav Gupta</h2>
      <div class="px-2 py-2 rounded">Software Developer</div>
    </div>

    <!-- Social Media Links -->
    <div class="flex items-center space-x-2 mb-6">
      <a
        v-for="social in socialLinks"
        :key="social.url"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
        class="transition-transform hover:scale-110"
      >
        <div
          class="w-12 h-12 rounded flex justify-center items-center hover:bg-blue"
        >
          <img :src="social.icon" alt="Social Icon" class="w-6 h-6" />
        </div>
      </a>
    </div>

    <!-- Contact Info -->
    <div class="w-full max-w-md">
      <ul role="list" class="divide-y divide-gray-100">
        <li
          v-for="item in contactInfo"
          :key="item.title"
          class="flex py-3 items-center"
        >
          <div class="w-10 h-10 flex justify-center items-center">
            <img :src="item.icon" :alt="`${item.title} Icon`" class="w-6 h-6" />
          </div>
          <div class="ml-3 flex-1 min-w-0">
            <p class="text-sm font-medium">{{ item.title }}</p>
            <p class="text-sm truncate">
              <a
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-blue"
              >
                {{ item.value }}
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex items-center justify-center gap-x-5 py-3">
      <button
        type="submit"
        class="rounded bg-blue px-6 py-2 text-sm font-semibold shadow-sm transition-transform hover:scale-110"
      >
        Download Resume
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const calendarLink = ref('')

const socialLinks = [
  {
    url: 'https://www.linkedin.com/in/vaibhav-gupta-337120193/',
    icon: '/image/linkedin.svg',
  },
  {
    url: 'https://www.instagram.com/vg._nucleus/',
    icon: '/image/instagram.svg',
  },
  {
    url: 'https://github.com/vaibhavgupta942466',
    icon: '/image/github.svg',
  },
  {
    url: 'https://twitter.com/Vaibhav94246689',
    icon: '/image/x-twitterx.svg',
  },
]

const generateCalendarLink = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const eventStartDate = new Date(`${currentYear}-04-23T08:00:00+05:30`)
    .toISOString()
    .replace(/-|:|\.\d+/g, '')
  const eventEndDate = new Date(`${currentYear}-04-23T08:15:00+05:30`)
    .toISOString()
    .replace(/-|:|\.\d+/g, '')

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=Vaibhav%20(Nucleus%20Creator)%20Birthday&dates=${eventStartDate}/${eventEndDate}&details=Don't%20Forget%20to%20Wish%20him%20happy%20birthday&location=&sf=true&output=xml`
}

const contactInfo = ref([
  {
    title: 'Phone',
    value: '+91 7770957317',
    icon: '/image/mobile.svg',
    link: 'tel:+917770957317',
  },
  {
    title: 'Email',
    value: 'vaibhavgupta942466@gmail.com',
    icon: '/image/email.svg',
    link: 'mailto:vaibhavgupta942466@gmail.com',
  },
  {
    title: 'Location',
    value: 'Sirmour Rewa, India',
    icon: '/image/location.svg',
    link: 'https://maps.app.goo.gl/7vmL484Tuzs6U4ex8',
  },
  {
    title: 'Date of Birth',
    value: '23-04-2000',
    icon: '/image/calender.svg',
    link: calendarLink,
  },
])

onMounted(() => {
  calendarLink.value = generateCalendarLink()
  // Update the DOB link in contactInfo after calendar link is generated
  contactInfo.value[3].link = calendarLink.value
})
</script>
