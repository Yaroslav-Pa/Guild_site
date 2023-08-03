<script setup>
import InputField from "@/components/CustomInputField.vue";
import InputCheckBox from "@/components/CustomCheckBox.vue";
import TextCard from "@/components/TextCard.vue";

// This needs to go & be replaced with "content" module later
let title = "Guild application & membership info";
let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis\
        ipsa non incidunt facilis temporibus laboriosam nobis vero officia autem\
        odit perferendis recusandae doloremque neque placeat quam quia rerum\
        aperiam architecto voluptatum! Harum assumenda cupiditate itaque!\
        Tempora necessitatibus sed obcaecati aspernatur totam iusto non deleniti\
        quaerat omnis natus. Eligendi atque natus iste id ipsam eius accusantium\
        nulla? Ex possimus vel quibusdam animi est facere in tempora dolorem\
        repudiandae commodi ad, eos reprehenderit quae quo quas delectus\
        deserunt porro nemo sed aut? Nihil dolorem similique sapiente id\
        adipisci odio quia vero temporibus autem recusandae, hic consequatur eos\
        voluptate, aliquid numquam excepturi illum, asperiores porro ab dolore\
        iusto distinctio et? Optio sapiente quis, exercitationem laboriosam\
        aperiam, quidem eaque molestiae tempore sed a commodi nostrum asperiores\
        et voluptate perferendis odit ullam distinctio sit excepturi ipsam\
        inventore animi voluptatum est itaque! Iste nostrum adipisci, laudantium\
        soluta quas autem quae recusandae quos minima quidem ex nobis debitis\
        deleniti consequuntur voluptatum fuga ducimus eveniet veniam nisi\
        voluptates fugiat blanditiis iusto dolores odio. Natus in eligendi\
        consectetur quas dolor, ex illum necessitatibus esse quia doloribus\
        tempora repellat aperiam quibusdam, ad iure molestias pariatur corrupti\
        ipsa iusto vero cum ea, earum libero minima. Impedit molestias et\
        exercitationem similique.";
</script>
<template>
  <div class="flex flex-row justify-center items-center gap-x-[50px]">
    <!-- <div
      class="border-2 border-gray-500 p-[40px] bg-black bg-opacity-50 rounded-[25px] text-white"
    >
      <h1 class="text-[24px] mb-[50px]">Guild application & membership info</h1>
      <h3 class="text-[17px] max-w-[700px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis
        ipsa non incidunt facilis temporibus laboriosam nobis vero officia autem
        odit perferendis recusandae doloremque neque placeat quam quia rerum
        aperiam architecto voluptatum! Harum assumenda cupiditate itaque!
        Tempora necessitatibus sed obcaecati aspernatur totam iusto non deleniti
        quaerat omnis natus. Eligendi atque natus iste id ipsam eius accusantium
        nulla? Ex possimus vel quibusdam animi est facere in tempora dolorem
        repudiandae commodi ad, eos reprehenderit quae quo quas delectus
        deserunt porro nemo sed aut? Nihil dolorem similique sapiente id
        adipisci odio quia vero temporibus autem recusandae, hic consequatur eos
        voluptate, aliquid numquam excepturi illum, asperiores porro ab dolore
        iusto distinctio et? Optio sapiente quis, exercitationem laboriosam
        aperiam, quidem eaque molestiae tempore sed a commodi nostrum asperiores
        et voluptate perferendis odit ullam distinctio sit excepturi ipsam
        inventore animi voluptatum est itaque! Iste nostrum adipisci, laudantium
        soluta quas autem quae recusandae quos minima quidem ex nobis debitis
        deleniti consequuntur voluptatum fuga ducimus eveniet veniam nisi
        voluptates fugiat blanditiis iusto dolores odio. Natus in eligendi
        consectetur quas dolor, ex illum necessitatibus esse quia doloribus
        tempora repellat aperiam quibusdam, ad iure molestias pariatur corrupti
        ipsa iusto vero cum ea, earum libero minima. Impedit molestias et
        exercitationem similique.
      </h3>
    </div> -->
    <TextCard class="max-w-[800px]" :title="title" :text="text" />
    <div
      class="border-2 border-gray-500 p-[40px] bg-black bg-opacity-50 rounded-[25px] text-white"
    >
      <div class="flex flex-col justify-center items-center gap-y-[45px]">
        <h1 class="text-[24px]">Membership application form</h1>
        <div class="flex flex-col gap-y-[20px]">
          <InputField
            :title="'Input name'"
            :iconName="'fa-solid fa-user'"
            :type="'text'"
          />
          <InputField
            :title="'Input name'"
            :iconName="'fa-solid fa-user'"
            :type="'text'"
          />
        </div>
        <div class="flex flex-col gap-y-[10px]">
          <InputCheckBox :text="'Lorem, ipsum dolor.'" />
          <InputCheckBox :text="'Lorem, ipsum dolor.'" />
          <InputCheckBox :text="'Lorem, ipsum dolor.'" />
          <InputCheckBox :text="'Lorem, ipsum dolor.'" />
        </div>

        <div>
          <!-- Ya: need re-do this butoon to componet but maybe not?
               Yo: I see no need yet. We're not reusing this kind of submit button anywhere -->
          <button
            type="submit"
            class="group relative h-full w-full py-[5px] px-[30px] overflow-hidden rounded-lg bg-black dark:bg-white shadow"
          >
            <div
              class="absolute inset-0 w-0 bg-green-600 transition-all duration-[250ms] ease-out group-hover:w-full"
            ></div>
            <span class="relative text-black text-[18px] group-hover:text-white"
              >Apply!</span
            >
          </button>
        </div>

        <div class="flex flex-row justify-between w-full">
          <button type="button">←</button>
          <button type="button">→</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
