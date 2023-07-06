<script setup>
const menuItems = [
  { tabName: "About us", tabTo: "/#AboutUsSection" },
  { tabName: "Apply", tabTo: "/apply" },
  { tabName: "Guild cabinet", tabTo: "/" },
  { tabName: "Personal cabinet", tabTo: "/" },
];
const contactsItems = [
  {
    contactsName: "Discord",
    linkContact: "dis",
    iconContact: "fa-brands fa-discord",
  },
  {
    contactsName: "Gmail",
    linkContact: "gmail",
    iconContact: "fa-solid fa-envelope",
  },
  {
    contactsName: "Telegram",
    linkContact: "@tel",
    iconContact: "fa-brands fa-telegram",
  },
];
</script>
<template>
  <header>
    <div
      class="flex flex-row mt-[5px] sm:mt-[20px] mx-[20px] ssm:mx-[40px] justify-end md:justify-between mb-[50px]"
    >
      <div class="hidden md:flex flex-row gap-x-[50px]">
        <NuxtLink
          v-for="{ tabName, tabTo } in menuItems"
          :to="tabTo"
          class="mdp:text-[20px] text-[18px] my-[10px] text-white transition-all duration-300 group leading-[35px]"
        >
          {{ tabName }}
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-700"
          ></span>
        </NuxtLink>
      </div>
      <div class="md:hidden">
        <img
          src="/smallMenu.png"
          class="fixed top-3 left-3 h-[35px] sm:h-[40px]"
          alt=""
        />
      </div>
      <div class="text-white flex justify-centern">
        <NuxtLink
          class="sm:pt-[5px] pt-[3px] px-[20px] sm:px-[30px] bg-green-700 text-center transition-all duration-300 rounded-[20px] my-[10px] text-[14px] sm:text-[18px] leading-[25px] border-2 border-transparent hover:bg-transparent hover:border-green-600"
          to="/personalCabinet"
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </header>
  <div>
    <slot />
  </div>
  <footer>
    <div
      class="flex sm:flex-row flex-col bg-white bg-opacity-25 w-full items-center justify-around gap-y-[20px] py-[10px] md:mt-[100px] mt-[50px]"
    >
      <div class="flex flex-col gap-y-[10px]">
        <h1 class="text-[24px] text-white transition-all duration-300">
          Contacts
        </h1>
        <div
          class="gap-x-[30px] gap-y-[5px] flex flex-col lg:flex-row items-center items-start"
        >
          <a
            v-for="{ contactsName, linkContact, iconContact } in contactsItems"
            :href="linkContact"
            class="text-[16px] text-white transition-all duration-300 hover:text-green-400 flex flex-row w-full justify-between gap-x-[10px]"
          >
            <div>{{ contactsName }}</div>
            <font-awesome-icon :icon="iconContact" class="text-[24px]" />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-y-[10px]">
        <div class="flex flex-col lg:flex-row justify-between text-white">
          <NuxtLink
            class="pt-[2px] px-[20px] bg-green-700 text-center transition-all duration-300 rounded-[20px] my-[10px] text-[18px] leading-[25px] border-transparent hover:bg-green-400 hover:text-black"
            to="/personalCabinet"
          >
            Apply
          </NuxtLink>
          <NuxtLink
            class="pt-[2px] px-[20px] bg-green-700 text-center transition-all duration-300 rounded-[20px] my-[10px] text-[18px] leading-[25px] border-transparent hover:bg-green-400 hover:text-black"
            to="/personalCabinet"
          >
            Login
          </NuxtLink>
        </div>
        <div class="gap-x-[10px] flex flex-row">
          <h1
            class="text-[16px] text-white transition-all duration-300 flex flex-row gap-x-[10px]"
          >
            Created by:
          </h1>
          <a
            href="linkContact"
            class="text-[16px] text-white transition-all duration-300 hover:text-green-400 flex flex-row gap-x-[10px]"
          >
            Lorem, ipsum.
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
/* .router-link-active {
  background-color: aqua;
} */
</style>
