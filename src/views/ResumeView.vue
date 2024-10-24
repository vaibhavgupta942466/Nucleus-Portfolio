<!-- src/views/ResumeView.vue -->
<template>
  <div class="container mx-auto rounded shadow-md p-4 flex flex-col">
    <h2 class="text-3xl font-bold my-6">Resume</h2>
    <div class="container mx-auto py-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Education Section -->
        <div class="space-y-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-red-100 rounded-lg flex items-center justify-center">
              <img src="/image/graduation.svg" alt="" class="w-8 h-8" />
            </div>
            <h2 class="text-2xl font-bold">Education</h2>
          </div>

          <div class="space-y-4">
            <!-- Education Item 1 -->
            <div class="bg-pink-50 rounded-lg p-4">
              <div class="text-gray-600">2019-2023</div>
              <h3 class="text-xl font-semibold mt-1">
                Bachelor of Technology in Information Technology
              </h3>
              <p class="text-gray-700">
                University institute of technology, RGPV, Bhopal
              </p>
            </div>
            <!-- Education Item 2 -->
            <div class="bg-pink-50 rounded-lg p-4">
              <div class="text-gray-600">2018-2019</div>
              <h3 class="text-xl font-semibold mt-1">
                Higher Secondary (12th) - Madhya Pradesh Board
              </h3>
              <p class="text-gray-700">
                Bal Vikas Higher Secondary School, Rewa, Madhya-Pradesh
              </p>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="space-y-6">
          <div class="flex items-center gap-3 mb-6">
            <div class="bg-red-100 rounded-lg flex items-center justify-center">
              <img src="/image/experience.svg" alt="" class="w-8 h-8" />
            </div>
            <h2 class="text-2xl font-bold">Experience</h2>
          </div>

          <div class="space-y-4">
            <!-- Experience Item 1 -->
            <div class="bg-blue-50 rounded-lg p-4">
              <div class="text-gray-600">2023-2024</div>
              <h3 class="text-xl font-semibold mt-1">Software Developer</h3>
              <p class="text-gray-700">
                Trusted Communities Org, GandhiNagar, Gujrat
              </p>
            </div>

            <!-- Experience Item 2 -->
            <div class="bg-blue-50 rounded-lg p-4">
              <div class="text-gray-600">2023-2023</div>
              <h3 class="text-xl font-semibold mt-1">Software Developer</h3>
              <p class="text-gray-700">Persistent Systems, Pune, Maharastra</p>
            </div>

            <!-- Experience Item 3 -->
            <div class="bg-blue-50 rounded-lg p-4">
              <div class="text-gray-600">2022-2022</div>
              <h3 class="text-xl font-semibold mt-1">Full Stack Developer</h3>
              <p class="text-gray-700">Carsify, Bhopal, Madhya-Pradesh</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Certification Section -->
      <div class="container mx-auto py-6 space-y-4">
        <div class="flex items-center gap-3 mb-6">
          <div class="bg-red-100 rounded-lg flex items-center justify-center">
            <img src="/image/certification.svg" alt="" class="w-8 h-8" />
          </div>
          <h2 class="text-2xl font-bold">Certification</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 space-y-4">
          <!-- Certification Item 1 -->
          <div class="bg-pink-50 rounded-lg p-4">
            <div class="text-gray-600">2021-2023</div>
            <h3 class="text-xl font-semibold mt-1">Ph.D in Horriblensess</h3>
            <p class="text-gray-700">ABC University, Los Angeles, CA</p>
          </div>

          <!-- Certification Item 2 -->
          <div class="bg-pink-50 rounded-lg p-4">
            <div class="text-gray-600">2019 - Present</div>
            <h3 class="text-xl font-semibold mt-1">Sr. Software Tester</h3>
            <p class="text-gray-700">Google Inc.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
