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
  <div
    class="flex flex-col justify-center items-center mdp:mb-[350px] mb-[200px] mdp:mt-[250px] mt-[100px]"
  >
    <img src="/icon.svg" alt="logo" />
    <h1
      class="text-white mdp:text-[40px] md:text-[30px] ssm:text-[20px] text-[16px]"
    >
      NIHIL NOVI SUB LUNA [NNSL]
    </h1>
  </div>
  <div
    class="ssm:mx-[40px] mx-[20px] flex flex-col justify-center items-center text-white lg:flex-row lg:justify-evenly gap-y-[40px] lg:gap-y-[0px]"
  >
    <div
      class="flex flex-col justify-center items-center gap-y-[20px] max-w-[400px] bg-white bg-opacity-25 rounded-[50px] ssm:px-[20px] px-[15px] ssm:py-[30px] py-[25px]"
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
