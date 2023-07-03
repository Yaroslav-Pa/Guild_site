<script setup>
const sectionsItems = [
  {
    icon: "/aboutUs.jpg",
    name: "About us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque adipisci dolorem dolore est tenetur iusto incidunt sint esse ad dolores recusandae ab minima fugit cum dignissimos, officia quod quaerat ex officiis. Asperiores dolore quibusdam incidunt dolor omnis fuga repellendus itaque quia minus praesentium iure suscipit ipsam enim, fugiat veritatis magnam?",
  },
  {
    icon: "/aboutUs.jpg",
    name: "About us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque adipisci dolorem dolore est tenetur iusto incidunt sint esse ad dolores recusandae ab minima fugit cum dignissimos, officia quod quaerat ex officiis. Asperiores dolore quibusdam incidunt dolor omnis fuga repellendus itaque quia minus praesentium iure suscipit ipsam enim, fugiat veritatis magnam?",
  },
  {
    icon: "/aboutUs.jpg",
    name: "About us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque adipisci dolorem dolore est tenetur iusto incidunt sint esse ad dolores recusandae ab minima fugit cum dignissimos, officia quod quaerat ex officiis. Asperiores dolore quibusdam incidunt dolor omnis fuga repellendus itaque quia minus praesentium iure suscipit ipsam enim, fugiat veritatis magnam?",
  },
];
</script>
<template>
  <div class="flex flex-col justify-center items-center mb-[350px] mt-[250px]">
    <img src="/icon.svg" alt="logo" />
    <h1 class="text-white text-[40px]">NIHIL NOVI SUB LUNA [NNSL]</h1>
  </div>
  <div class="flex flex-row justify-evenly text-white">
    <div
      class="flex flex-col justify-center items-center gap-y-[20px] max-w-[400px] bg-white bg-opacity-25 rounded-[50px] px-[20px] py-[30px]"
      v-for="{ icon, name, description } in sectionsItems"
      id="AboutUsSection"
    >
      <img :src="icon" :alt="name" class="h-[150px]" />
      <h1 class="text-[30px]">{{ name }}</h1>
      <h2>{{ description }}</h2>
    </div>
  </div>
</template>
<style></style>
