<script setup>
// This needs to go & should be replaced with "content" module later
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
    icon: "",
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
      class="text-white mdp:text-[40px] md:text-[30px] ssm:text-[20px] text-[16px] text-center"
    >
      NIHIL NOVI SUB LUNA [NNSL]
    </h1>
  </div>
  <div
    class="ssm:mx-[40px] mx-[50px] flex flex-col justify-center items-center text-white lg:flex-row lg:justify-evenly gap-y-[40px] lg:gap-y-[0px]"
  >
    <div
      class="flex flex-col justify-center items-center gap-y-[10px] sm:gap-y-[20px] max-w-[400px] rounded-[50px] ssm:px-[20px] px-[15px] py-[30px]"
      v-for="{ icon, name, description } in sectionsItems"
      id="AboutUsSection"
    >
      <TextCard :text="description" :title="name" :iconPath="icon" />
    </div>
  </div>
</template>
