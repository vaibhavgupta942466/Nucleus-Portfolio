<!-- src/components/FooterBar.vue -->
<template>
  <footer>
    <!-- Main Footer Content -->
    <div class="container mx-auto px-2 py-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Personal Brand -->
        <div class="col-span-1 max-w-md">
          <h3 class="text-slate-900 text-xl font-bold mb-4">Let's Connect</h3>
          <p class="text-slate-600 text-sm mb-6 leading-relaxed">
            Looking for a technology professional to help transform your
            business? I specialize in creating enterprise-level solutions using
            modern technologies and best practices.
          </p>
        </div>

        <!-- Tech Stack -->
        <div class="col-span-1">
          <h4 class="text-slate-900 text-xl font-bold mb-4">Tech Stack</h4>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="tech in techStack"
              :key="tech"
              class="px-3 py-1 text-sm border border-slate-200 text-slate-600 rounded-xl hover:border-blue hover:text-blue transition-colors duration-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-slate-200">
      <div class="container mx-auto p-4">
        <div class="flex justify-center items-center">
          <p class="text-sm text-slate-600">
            © {{ new Date().getFullYear() }} Portfolio. Built with Vue.js and
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const techStack = [
  'Vue.js',
  'React',
  'Flutter',
  'GCP',
  'AWS',
  'Node.js',
  'Python',
  'AI/ML',
]
</script>
