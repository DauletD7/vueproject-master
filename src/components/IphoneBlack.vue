<template>
    <div class="bg-secondBG py-10">
        <div class="container mx-auto">
            <div class="flex flex-wrap justify-between">
                <div class="w-72 bg-white p-6">
                    <h2 class="font-semibold text-2xl tracking-wide">Смартфон Apple iPhone 11 128GB Black</h2>
                    <span class="text-graySpan text-xs">Артикул: 228942</span>
                    <div class="flex">
                        <div class="w-1/2">
                            <div class="mx-auto">
                                <img v-if="image == 1" 
                                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_1.jpg&w=828&q=85" 
                                alt="" class="p-3">
                                <img v-if="image == 2" 
                                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_2.jpg&w=828&q=85" 
                                alt="">
                                <img v-if="image == 3" 
                                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_3.jpg&w=828&q=85" 
                                alt="">
                                <img v-if="image == 4" 
                                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_4.jpg&w=828&q=85" 
                                alt="">
                                <img v-if="image == 5" 
                                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_5.jpg&w=828&q=85" 
                                alt="">
                                <img v-if="image == 6" 
                                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_6.jpg&w=828&q=85" 
                                alt="">
                            </div>
                            <div class="flex flex-wrap justify-between">
                                <div>
                                    <img @click="image = 1"
                                    src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_1.jpg&w=828&q=85" 
                                    alt="" class="small-images hover:border hover:border-mainCol">
                                </div>
                                <div>
                                    <img @click="image = 2" 
                                    src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_2.jpg&w=828&q=85" 
                                    alt="" class="small-images hover:border hover:border-mainCol">
                                </div>
                                <div>
                                    <img @click="image = 3" 
                                    src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_3.jpg&w=828&q=85" 
                                    alt="" class="small-images hover:border hover:border-mainCol">
                                </div>
                                <div>
                                    <img                                 
                                    @click="image = 4"
                                    src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_4.jpg&w=828&q=85" 
                                    alt="" class="small-images hover:border hover:border-mainCol">
                                </div>
                                <div>
                                    <img 
                                    @click="image = 5" 
                                    src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_5.jpg&w=828&q=85" 
                                    alt="" class="small-images hover:border hover:border-mainCol">
                                </div>
                                <div>
                                    <img 
                                    @click="image = 6" 
                                    src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228942_6.jpg&w=828&q=85" 
                                    alt="" class="small-images hover:border hover:border-mainCol">
                                </div>                             
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="flex justify-between mb-6">
                                <div class="w-1/2 flex justify-between items-center">
                                    <span class="bg-yellow-400 text-xs font-semibold py-0.5 px-1">0.0</span>
                                    <div class="flex">
                                        <i class="fa-solid fa-star text-orange-500"></i>
                                        <i class="fa-solid fa-star text-orange-500"></i>
                                        <i class="fa-solid fa-star text-orange-500"></i>
                                        <i class="fa-solid fa-star text-orange-500"></i>
                                        <i class="fa-solid fa-star text-orange-500"></i>
                                    </div>
                                    <span class="text-blue-500 text-sm">0 отзывов</span>
                                </div>
                                <div class="w-1/3">
                                    <span class="text-blue-500 text-xs">Гарантия низкой цены</span>
                                </div>
                            </div>
                            <div class="mb-2"><span class="bg-orange-500 text-white text-xs py-0.5 px-1">0 - 0 - 12</span></div>                            
                            <h3>Цвет <span class="text-gray-600">черный</span></h3>
                            <div class="mt-8 flex flex-wrap justify-between">
                                <div class="w-18 p-1 border-gray-400 border-2 hover:border-mainCol rounded-lg mr-2 mb-2 ">
                                    <img 
                                    src="https://api.technodom.kz/f3/api/v1/images/800/800/228952_1.webp" alt="">
                                </div>
                                <div class="w-18 p-1 border-gray-400 border-2 hover:border-mainCol rounded-lg mr-2 mb-2">
                                    <img 
                                    src="https://api.technodom.kz/f3/api/v1/images/800/800/228937_1.webp" alt="">
                                </div>
                                <div class="w-18 p-1 border-gray-400 border-2 hover:border-mainCol rounded-lg mr-2 mb-2">
                                    <img 
                                    src="https://api.technodom.kz/f3/api/v1/images/800/800/228938_1.webp" alt="">
                                </div>
                                <div class="w-18 p-1 border-gray-400 border-2 hover:border-mainCol rounded-lg mr-2 mb-2">
                                    <img 
                                    src="https://api.technodom.kz/f3/api/v1/images/800/800/228936_1.webp" alt="">
                                </div>
                                <div class="w-18 p-1 border-gray-400 border-2 hover:border-mainCol rounded-lg mr-2 mb-2">
                                    <img 
                                    src="https://api.technodom.kz/f3/api/v1/images/800/800/228941_1.webp" alt="">
                                </div>
                                <div class="w-18 p-1 border-gray-400 border-2 hover:border-mainCol rounded-lg mr-2 mb-2">
                                    <img 
                                    src="https://api.technodom.kz/f3/api/v1/images/800/800/228945_1.webp" alt="">
                                </div>
                            </div>
                            <p class="font-bold">Объем памяти</p>
                            <div class="flex flex-wrap">
                                <div class="mr-1 p-2 border-gray-500 border"><span class="font-bold text-sm">64 GB</span></div>
                                <div class="mr-1 p-2 border-gray-500 border"><span class="font-bold text-sm">256 GB</span></div>
                                <div class="mr-1 p-2 border-gray-500 border"><span class="font-bold text-sm">128 GB</span></div>
                            </div>
                            <p class="mt-6 font-semibold text-xl">Описание</p>
                            <div v-for="iphone of allPhones" :key="iphone.id">
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Модельный год</div>
                                    <div>{{iphone.year}}</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Диагональ дисплея, дюйм</div>
                                    <div>{{iphone.diagonal}}</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Разрешение дисплея</div>
                                    <div>{{iphone.resolution}}</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Тип матрицы</div>
                                    <div>Liquid Retina HD</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Объем оперативной памяти, ГБ</div>
                                    <div>4</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Объем встроенной памяти, ГБ</div>
                                    <div>128</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Модель процессора</div>
                                    <div>A13 Bionic</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Операционная система</div>
                                    <div>iOS 14</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Интерфейсы</div>
                                    <div>Bluetooth, NFC, Wi-Fi</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Беспроводная зарядка</div>
                                    <div>Да</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Стандарт защиты от пыли и влаги</div>
                                    <div>IP68</div>
                                </div>
                                <div class="flex justify-between border-b border-dotted">
                                    <div>Вес, гр</div>
                                    <div>194</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-25 bg-white p-4 h-fit">
                    <p class="font-bold text-2xl text-center">404 990</p>
                    <div class="flex items-center mt-4">
                        <i class="fa-solid fa-truck-droplet text-orange-500 mr-2"></i>
                        <p class="text-xs">Доставка <span class="font-semibold">31 марта</span> - бесплатно</p>
                    </div>
                    <div class="flex items-center mt-4">
                        <i class="fa-thin fa-box-archive text-orange-500 mr-2"></i>
                        <p class="text-xs">К самовывозу будет готов <span class="font-semibold">31 марта</span></p>
                    </div>
                    <div class="my-4">
                        <p class="text-blue-500 text-center" style="font-size: 8px;">УСЛОВИЯ ДОСТАВКИ / САМОВЫВОЗА</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-xs bg-blue-400 text-white border rounded-2xl py-2 px-3"><p class="uppercase">Добавить в корзину</p></div>
                        <div class="bg-brownSpan border rounded-2xl p-2"><i class="fa-solid fa-heart"></i></div>
                    </div>
                    <div class="flex items-center bg-brownSpan py-1 px-2 mt-5 mb-3">
                        <div class="mr-2"><i class="fa-solid fa-clock"></i></div>                        
                        <p class="text-xs">В кредит <span class="font-semibold">11 117 тг.</span> x 60 мес</p>
                    </div>
                    <div class="flex items-center bg-brownSpan py-1 px-2 mb-3">
                        <div class="mr-2"><i class="fa-solid fa-clock"></i></div>                        
                        <p class="text-xs">В рассрочку <span class="font-semibold">15 625 тг.</span> x 24 мес</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center text-graySpan">
                            <i class="fa-solid fa-share-nodes mr-1"></i>
                            <span class="">Поделиться</span>
                        </div>
                        <div class="flex items-center text-graySpan">
                            <i class="fa-solid fa-scale-unbalanced mr-1"></i>
                            <span class="">Сравнить</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data(){
      return{
          image: 1,
      };
  },
  computed: mapGetters(["allPhones"]),
  async mounted() {
    this.fetchPhones();
  },
  methods: mapActions(["fetchPhones"]),
  
};
</script>