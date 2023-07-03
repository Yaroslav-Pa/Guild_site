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
    <div class="flex flex-row mt-[20px] mx-[40px] justify-between mb-[50px]">
      <div class="flex flex-row gap-x-[50px]">
        <router-link
          v-for="{ tabName, tabTo } in menuItems"
          :to="tabTo"
          class="text-[20px] my-[10px] text-white transition-all duration-300 group leading-[35px]"
        >
          {{ tabName }}
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-700"
          ></span>
        </router-link>
      </div>
      <div class="text-white flex justify-centerm">
        <router-link
          class="pt-[5px] px-[30px] bg-green-700 text-center transition-all duration-300 rounded-[20px] my-[10px] text-[18px] leading-[25px] border-2 border-transparent hover:bg-transparent hover:border-green-600"
          to="/personalCabinet"
        >
          Login
        </router-link>
      </div>
    </div>
  </header>
  <main>
    <div>
      <NuxtPage />
    </div>
  </main>
  <footer>
    <div
      class="flex flex-row bg-white bg-opacity-25 w-full justify-around py-[10px] mt-[100px]"
    >
      <!-- <div class="flex flex-col gap-y-[10px]">
        <h1 class="text-[24px] text-white transition-all duration-300">
          Pages
        </h1>
        <div class="gap-y-[5px] flex flex-col">
          <router-link
            v-for="{ tabName, tabTo } in menuItems"
            :to="tabTo"
            class="text-[16px] text-white transition-all duration-300 hover:text-green-400"
          >
            {{ tabName }}
          </router-link>
        </div>
      </div> -->
      <div class="flex flex-col gap-y-[10px]">
        <h1 class="text-[24px] text-white transition-all duration-300">
          Contacts
        </h1>
        <div class="gap-x-[30px] flex flex-row">
          <a
            v-for="{ contactsName, linkContact, iconContact } in contactsItems"
            :href="linkContact"
            class="text-[16px] text-white transition-all duration-300 hover:text-green-400 flex flex-row gap-x-[10px]"
          >
            {{ contactsName }}
            <font-awesome-icon :icon="iconContact" class="text-[24px]" />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-y-[10px]">
        <div class="flex flex-row justify-between text-white">
          <router-link
            class="pt-[2px] px-[20px] bg-green-700 text-center transition-all duration-300 rounded-[20px] my-[10px] text-[18px] leading-[25px] border-transparent hover:bg-green-400 hover:text-black"
            to="/personalCabinet"
          >
            Apply
          </router-link>
          <router-link
            class="pt-[2px] px-[20px] bg-green-700 text-center transition-all duration-300 rounded-[20px] my-[10px] text-[18px] leading-[25px] border-transparent hover:bg-green-400 hover:text-black"
            to="/personalCabinet"
          >
            Login
          </router-link>
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
