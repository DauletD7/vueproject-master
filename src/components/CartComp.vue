<template>
  <div class="singlePage">
    <div class="container">
      <h1 class="my-5 text-black text-3xl">Корзина</h1>
      <div class="flex items-start justify-between my-5">
        <div class="block w-3/4 mr-4">
          <div class="bg-white p-6 rounded-lg">
            <div
              v-for="(products, index) of addedProducts"
              :key="products"
              class="mb-3"
            >
              <div class="flex items-center">
                <div class="block text-center w-max">                  
                  <img
                    class="w-20 h-16 mx-auto"
                    :src="products.images[0].first"
                    alt=""
                  />
                  <p class="text-xs text-center text-gray-400 uppercase mt-3" @click="removeItem(index)">Удалить</p>
                </div>
                <p class="mx-3 text-lg w-full">{{ products.name }}</p>
                <p class="font-bold flex justify-end w-full">{{ products.price }}т.</p>
                <p class="counter-1 ml-5"> {{ showSameCounter }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg my-5">dasdasd</div>
        </div>
        <div class="block bg-white p-6 rounded-lg w-1/4 sticky top-5">
          dasdasda
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CartComp",
  data() {
    return{
      sameCounter: 0,
    }
  },
  computed: mapGetters(["allPhones", "addedProducts", "showSameCounter"]),
  methods: {
    ...mapActions(["fetchPhones"]),
  },
  async mounted() {
    this.fetchPhones();
  },
};
</script>