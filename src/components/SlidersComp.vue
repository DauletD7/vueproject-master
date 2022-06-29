<template>
  <div class="my-4">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div
          id="carouselExampleIndicators"
          class="carousel slide w-79"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="9"
              aria-label="Slide 10"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/1.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/2.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/3.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/4.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/5.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/6.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/7.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/8.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/9.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/10.webp" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <i class="fas fa-chevron-left text-black text-xs"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <i class="fas fa-chevron-right text-black text-xs"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div
          id="carouselExampleIndicators1"
          class="carousel slide w-19"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              v-for="(indi, index) of allPhones" :key="indi.id"
              type="button"
              data-bs-target="#carouselExampleIndicators1"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
          </div>
          <div class="carousel-inner h-full bg-white rounded-lg p-4">
            <h2 class="text-2xl font-black mb-4 text-center">Товар дня</h2>
            <div
              v-for="(product, index) of allPhones"
              :key="product.id"
              class="carousel-item act-set min-h-full "
              :class="{ active: index === 0 }"
            >
              <img class="my-2 mb-4" :src="product.images[0].first" alt="" />
              <h3 class="font-medium">{{ product.name }}</h3>
              <p class="text-2xl font-medium">{{ product.price }} тг.</p>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="prev"
          >
            <i class="fas fa-chevron-left text-black text-xs"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide="next"
          >
            <i class="fas fa-chevron-right text-black text-xs"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { mapGetters } from "vuex";
export default {
  name: "SlidersComp",
  computed: mapGetters(["allPhones"]),
};
</script>