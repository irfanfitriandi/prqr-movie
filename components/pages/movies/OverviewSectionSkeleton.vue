<template>
  <section class="flex gap-8">
    <div class="relative aspect-[2/3] h-[330px]">
      <div></div>
    </div>
    <div class="w-full">
      <div class="flex flex-col gap-2">
        <SkeletonLoading class="mt-4 h-12 w-52" />
        <SkeletonLoading class="h-8 w-52" />
      </div>

      <SkeletonLoading class="mt-14 h-8 w-1/2" />
      <div class="mt-14">
        <SkeletonLoading class="mt-4 h-16" />
      </div>
    </div>
  </section>
</template>
