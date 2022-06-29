<template>
  <div class="singlePage">
    <div class="container">
      <div class="flex items-start justify-between my-5">
        <div class="block w-3/4 mr-4">
          <div class="bg-white p-6 rounded-lg">
            <h1 class="text-3xl font-semibold mb-2">
              {{ allPhones[curID].name }}
            </h1>
            <p class="text-xs text-grayText">
              Артикул: {{ allPhones[curID].article }}
            </p>
            <div class="flex items-start justify-between mt-5">
              <div class="w-1/2">
                <div
                  v-for="(fimages, index) of allPhones[curID].images[0]"
                  :key="fimages"
                >
                  <img v-if="setImg == index" :src="fimages" alt="" />
                </div>
                <div class="flex justify-center items-center">
                  <div
                    v-for="(simages, index) of allPhones[curID].images[0]"
                    :key="simages"
                  >
                    <img
                      @click="setImg = index"
                      class="w-12 h-12"
                      :src="simages"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="w-1/2">
                <p
                  class="text-xs font-semibold bg-credit text-white w-max p-1 rounded-md"
                >
                  0 - 0 - 12
                </p>
                <h2 class="text-xl font-semibold my-3">Описание</h2>
                <div
                  class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300"
                >
                  <p>Модельный год</p>
                  <p>{{ allPhones[curID].year }}</p>
                </div>
                <div
                  class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300"
                >
                  <p>Диагональ дисплея, дюйм</p>
                  <p>{{ allPhones[curID].diagonal }}</p>
                </div>
                <div
                  class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300"
                >
                  <p>Разрешение дисплея</p>
                  <p>{{ allPhones[curID].resolution }}</p>
                </div>
                <div
                  class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300"
                >
                  <p>Объем оперативной памяти, ГБ</p>
                  <p>{{ allPhones[curID].ram }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg my-5">
            <div class="flex items-center mb-4">
              <button
                @click="actBut = 1"
                class="font-semibold py-3 px-4 rounded-md border mr-4"
                :class="{ 'border-mainCol': actBut === 1 }"
              >
                О товаре
              </button>
              <button
                @click="actBut = 2"
                class="font-semibold py-3 px-4 rounded-md border"
                :class="{ 'border-mainCol': actBut === 2 }"
              >
                Отзывы
              </button>
            </div>
            <iframe
              v-if="actBut === 1"
              class="w-full h-screen"
              :src="allPhones[curID].website"
            ></iframe>
            <div v-if="actBut === 2">
              <div class="block">
                <div
                  class="review"
                  v-for="review of allPhones[curID].review"
                  :key="review"
                >
                  <div class="flex items-start justify-between mb-3">
                    <div>
                      <p>{{ review.name }}</p>
                      <p
                        class="bg-yellow-300 p-1 text-black rounded-md w-max my-3"
                      >
                        {{ review.stars }}.0
                      </p>
                    </div>
                    <div>
                      <p class="text-xs text-grayText">{{ review.date }}</p>
                      <div class="flex items-center justify-between my-3">
                        <p class="text-green-400 text-xs">
                          <i class="fa-solid fa-thumbs-up mr-2"></i
                          >{{ review.likes }}
                        </p>
                        <p class="text-red-400 text-xs ml-4">
                          <i class="fa-solid fa-thumbs-down mr-2"></i
                          >{{ review.dislikes }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p class="flex items-center">
                    <i
                      class="fa-solid fa-message text-mapIcon opacity-50 mr-3"
                    ></i>
                    Отзыв
                  </p>
                  <p class="text-grayText font-normal mt-2">
                    {{ review.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block bg-white p-6 rounded-lg w-1/4 sticky top-5">
          <p
            v-if="allPhones[curID].discount != null"
            class="text-3xl font-semibold text-mainCol"
          >
            {{
              allPhones[curID].price -
              (allPhones[curID].price * allPhones[curID].discount) / 100
            }}
            тг.
          </p>
          <p
            v-if="allPhones[curID].discount != null"
            class="text-base font-semibold line-through my-3 text-grayText"
          >
            {{ allPhones[curID].price }} тг.
          </p>
          <p
            v-if="allPhones[curID].discount == null"
            class="text-3xl font-semibold"
          >
            {{ allPhones[curID].price }} тг.
          </p>
          <p
            v-if="allPhones[curID].discount != null"
            class="p-1 w-max bg-discount rounded-md text-white text-xs"
          >
            -{{ allPhones[curID].discount }}%
          </p>
          <div class="flex justify-between items-center mt-3">
            <p
              @click="sendData()"
              class="bg-mapIcon text-center hover:cursor-pointer text-white py-2 px-3 mr-2 rounded-lg text-sm w-full"
            >
              ДОБАВИТЬ В КОРЗИНУ
            </p>
            <p class="bg-orangelight p-2 w-max rounded-lg">
              <i style="color: #8e979f" class="fa-solid fa-heart"></i>
            </p>
            <p @click="addElements(curID)">Сравнить</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SingleComp",
  data() {
    return {
      curID: this.$route.params.id - 1,
      setImg: "first",
      actBut: 1,
    };
  },
  computed: mapGetters(["allPhones", "addedProducts"]),
  methods: {
    ...mapActions(["fetchPhones", "addProduct", "addElements"]),
    async sendData() {
      this.addProduct(this.curID);
    },
  },
  async mounted() {
    this.fetchPhones();
  },
  metaInfo() {
      return {
        title: this.allPhones[this.curID].name,
      }
  },
};
</script>