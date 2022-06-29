<template>
  <div class="bg-secondBG py-10">
    <div class="container mx-auto">
      <h2 class="text-2xl font-black mb-5">Скидки</h2>
      <div class="flex flex-wrap items-start justify-between">
        <div 
          @click="$router.push({ name: 'single', params: { id: phone.id } })"
          class="bg-white rounded-lg p-2 phone mx-1 my-2 relative"
          v-for="phone of filters"
          :key="phone.id"
        >
          <div v-if="phone.discount != null">
              <p
                v-if="phone.discount != null"
                class="discount p-1 w-max bg-discount rounded-md text-white text-xs"
            >
                -{{ phone.discount }}%
            </p>
            <img class="my-2 mb-4" :src="phone.images[0].first" alt="" />
            <h3 class="font-medium my-2">{{ phone.name }}</h3>
            <p
                v-if="phone.discount != null"
                class="text-2xl font-semibold text-mainCol"
            >
                {{ phone.price - (phone.price * phone.discount) / 100 }} тг.
            </p>
            <p
                v-if="phone.discount != null"
                class="text-xs font-semibold line-through text-grayText"
            >
                {{ phone.price }} тг.
            </p>
            <p v-if="phone.discount == null" class="text-2xl font-semibold">
                {{ phone.price }} тг.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allPhones"]),
    filters() {
      return this.allPhones.filter((item) => item.category === "phones");
    },
  },
  async mounted() {
    this.fetchPhones();
  },
  methods: mapActions(["fetchPhones"]),
};
</script>