<!-- src/views/AboutView.vue -->
<template>
  <div class="container mx-auto rounded shadow-md p-4 flex flex-col">
    <h2 class="text-3xl font-bold my-6">About Me</h2>
    <p
      class="leading-relaxed mb-2 text-sm"
      style="text-align: justify; text-indent: 20px"
    >
      I’m a technology professional with expertise in software development,
      automation, business operations, and management. I create enterprise-level
      solutions using modern technologies like GCP, AWS, AI integration, and web
      and app development to automate business processes and manage data
      efficiently.
    </p>

    <p
      class="leading-relaxed mb-2 text-sm"
      style="text-align: justify; text-indent: 20px"
    >
      With a strong focus on process optimization and workflow enhancement, I
      help businesses transform their digital operations and improve overall
      efficiency, driving growth through technology-driven solutions.
    </p>

    <h2 class="text-3xl font-bold my-6">What I Do!</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="group rounded"
      >
        <div class="flex items-center space-x-3">
          <img
            :src="service.icon"
            :alt="service.title + ' Icon'"
            class="w-6 h-6"
          />
          <h3 class="text-slate text-xl font-semibold">
            {{ service.title }}
          </h3>
        </div>
        <p class="text-sm pl-9" style="text-align: justify">
          {{ service.description }}
        </p>
      </div>
    </div>

    <h2 class="text-3xl font-bold my-6 text-center">Clients</h2>
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li v-for="(image, index) in clientImages" :key="index">
          <img
            :src="image.src"
            :alt="image.alt"
            class="object-contain w-12 h-12"
          />
        </li>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li v-for="(image, index) in clientImages" :key="index">
          <img
            :src="image.src"
            :alt="image.alt"
            class="object-contain w-12 h-12"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Web Development',
    description:
      'Building modern, responsive applications with React.js and Vue.js, integrating robust backend systems for scalable and dynamic web solutions.',
    icon: '/image/web-development.svg',
  },
  {
    title: 'App Development',
    description:
      'Developing cross-platform mobile and web App using Flutter, delivering custom solutions that streamline business operations & enhance user engagement.',
    icon: '/image/app-development.svg',
  },
  {
    title: 'Process Automation & Integration',
    description:
      'Automating workflows through n8n, Make.com, and custom integrations to eliminate manual tasks and boost operational efficiency.',
    icon: '/image/automation.svg',
  },
  {
    title: 'Cloud Solutions & Architecture',
    description:
      'Implementing serverless architecture and containerized services on GCP and AWS, ensuring scalable and resilient cloud infrastructure.',
    icon: '/image/cloud-solution.svg',
  },
  {
    title: 'AI & Machine Learning Integration',
    description:
      'Implementing custom AI solutions using OpenAI, Document AI, and RASA frameworks to automate interactions and enhance business intelligence.',
    icon: '/image/ai-ml.svg',
  },
  {
    title: 'Data Management & Integration',
    description:
      'Creating unified data ecosystems with secure pipelines and ETL processes to ensure seamless data flow and accessibility across organizations.',
    icon: '/image/management.svg',
  },
  {
    title: 'Digital Workspace Solutions (SMART)',
    description:
      'Designing efficient knowledge management systems with Notion and Evernote, implementing second brain methodologies for enhanced team collaboration.',
    icon: '/image/workspace.svg',
  },
  {
    title: 'Business Operations & Analytics',
    description:
      'Transforming business data into actionable insights through Google Looker Studio dashboards, optimizing processes and driving data-informed decisions.',
    icon: '/image/business-operation.svg',
  },
]

const clientImages = [
  { src: '/image/web-development.svg', alt: 'Client 1' },
  { src: '/image/app-development.svg', alt: 'Client 2' },
  { src: '/image/web-development.svg', alt: 'Client 1' },
  { src: '/image/app-development.svg', alt: 'Client 2' },
  { src: '/image/web-development.svg', alt: 'Client 1' },
  { src: '/image/app-development.svg', alt: 'Client 2' },
]
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
