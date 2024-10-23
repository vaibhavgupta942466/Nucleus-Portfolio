<!-- src/views/ResumeView.vue -->
<template>
  <div class="container mx-auto rounded shadow-md p-4 flex flex-col">
    <h2 class="text-3xl font-bold my-6">Resume</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="group rounded">
        <div class="flex items-center space-x-3">
          <img src="/image/graduation.svg" alt="" class="w-6 h-6" />
          <h3 class="text-slate text-xl font-semibold">Education</h3>
        </div>
      </div>
      <div class="group rounded">
        <div class="flex items-center space-x-3">
          <img src="/image/experience.svg" alt="" class="w-6 h-6" />
          <h3 class="text-slate text-xl font-semibold">Experience</h3>
        </div>
      </div>
      <div class="group rounded">
        <div class="flex items-center space-x-3">
          <img src="/image/certification.svg" alt="" class="w-6 h-6" />
          <h3 class="text-slate text-xl font-semibold">Certification</h3>
        </div>
      </div>
    </div>
  </div>
</template>
