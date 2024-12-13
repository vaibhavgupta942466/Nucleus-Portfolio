<template>
  <div class="container mx-autorounded-xlshadow-md p-2 flex flex-col">
    <h2 class="text-3xl font-bold my-6">Resume</h2>
    <!-- Certification Section -->
    <div class="container mx-auto pt-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="bg-red-100 rounded-lg flex items-center justify-center">
          <img src="/image/certification.svg" alt="" class="w-8 h-8" />
        </div>
        <h2 class="text-2xl font-bold">Certification</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Certification Item 1 -->
        <div class="bg-pink-50 rounded-lg p-4">
          <div class="text-gray-600">July-2021</div>
          <h3 class="text-xl font-semibold mt-1">C++ Programming</h3>
          <p class="text-gray-700">Tim Buchalka's Learn Programming Academy</p>
        </div>

        <!-- Certification Item 2 -->
        <div class="bg-pink-50 rounded-lg p-4">
          <div class="text-gray-600">Dec-2021</div>
          <h3 class="text-xl font-semibold mt-1">
            Python and Django Full Stack Web Developer
          </h3>
          <p class="text-gray-700">Udemy By Instructor Jose Portilla</p>
        </div>
      </div>
    </div>
  </div>
</template>
