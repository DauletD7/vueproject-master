<template>
  <div class="block">
    <div class="bg-secondBG">
      <div class="container mx-auto">
        <div class="topbar flex items-center justify-between py-4">
          <div class="bg-white w-max p-2 rounded-md">
            <i class="fas fa-map-marker-alt text-mapIcon"></i>
            <select class="bg-white" name="" id="">
              <option value="">Алматы</option>
              <option value="">Астана</option>
              <option value="">Павлодар</option>
            </select>
          </div>
          <div class="flex bg-or p-2 rounded-md items-center">
            <i class="fas fa-phone text-sm text-grayText"></i>
            <p class="mx-2 text-sm text-grayText">
              Горячая линия с 08:00 до 00:00
            </p>
            <a href="tel:1717">1717</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <div class="container mx-auto py-2">
        <div class="flex items-center justify-between">
          <router-link v-if="currentUser === null" to="/"><h1 class="text-3xl">LOGO</h1></router-link>
          <a v-if="currentUser != null" href="https://facebook.com"><h1 class="text-3xl">LOGO</h1></a>
          <div
            class="flex items-center bg-mainCol text-white py-2 px-4 rounded-md"
          >
            <i class="fas fa-list-ul mr-3"></i>
            <p class="uppercase text-sm font-semibold">Каталог</p>
          </div>
          <div class="relative w-2/5">
            <input
              type="text"
              class="w-full bg-white text-gray-300 border border-mainCol rounded-lg p-2"
              placeholder="Я хочу найти"
            />
            <i class="fas fa-search search-but"></i>
          </div>
          <div class="flex">
            <div
              class="text-center mx-3 text-grayText hover:text-mainCol hover:cursor-pointer"
            >
              <i class="fas fa-heart"></i>
              <p>Избранное</p>
            </div>
            <div
              class="text-center mx-3 text-grayText hover:text-mainCol hover:cursor-pointer"
            >
              <router-link :to="{ name: 'compare' }">
                <i class="fas fa-balance-scale-left"></i>
                <p>Сравнить</p>
              </router-link>
            </div>
            <div class="text-center mx-3 relative">
              <div
                class="hover:text-mainCol hover:cursor-pointer text-grayText"
                @click="shoFunc()"
              >
                <p class="counter">{{ showCounter }}</p>
                <i class="fas fa-shopping-cart"></i>
                <p>Корзина</p>
              </div>
              <div
                v-if="showCart === 1"
                class="h-auto p-4 bg-white rounded-lg cart"
              >
                <div
                  v-for="(products, index) of addedProducts"
                  :key="products"
                  class="mb-3"
                >
                  <div class="flex items-center justify-between">
                    <img
                      class="w-12 h-12"
                      :src="products.images[0].first"
                      alt=""
                    />
                    <p class="mx-3 text-xs">{{ products.name }}</p>
                    <p class="font-bold">{{ products.price }}т.</p>
                    <p
                      @click="removeItem(index)"
                      class="ml-3 bg-red-600 px-2 p-1 rounded-md"
                    >
                      <i class="fa-solid fa-xmark text-lg text-white"></i>
                    </p>
                  </div>
                </div>
                <p class="text-right">Итого: {{ sumOfProducts }}</p>
                <div class="flex justify-between items-center">
                  <router-link
                    class="hover:cursor-pointer hover:text-blue-400"
                    to="/cart"
                    >Открыть корзину</router-link
                  >
                  <p
                    @click="removeAll()"
                    class="hover:cursor-pointer hover:text-blue-400"
                  >
                    Очистить корзину
                  </p>
                </div>
              </div>
            </div>
            <div
              class="text-center mx-3 text-grayText hover:text-mainCol hover:cursor-pointer"
            >
              <div
                @click="currentUser = null"
                v-if="currentUser != null"
                class="block"
              >
                <div class="flex items-center justify-between">
                  <i class="fas fa-user"></i>
                  <p>{{ currentUser.name }}</p>
                </div>
                <p>Бонусы: {{ currentUser.bonuses }}</p>
              </div>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                v-if="currentUser == null"
              >
                <i class="fas fa-user"></i>
                <p>Вход</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <router-link to="/discount">
        <p class="hover:text-mainCol text-base my-2">Скидки</p>
      </router-link>
    </div>
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header flex justify-between items-center">
              <button
                @click="showForm = 1"
                :class="{ 'border-mainCol': showForm === 1 }"
                class="border rounded-lg py-3 w-full mr-2"
              >
                Вход
              </button>
              <button
                @click="showForm = 2"
                :class="{ 'border-mainCol': showForm === 2 }"
                class="border rounded-lg py-3 w-full ml-2"
              >
                Регистрация
              </button>
            </div>
            <div class="modal-body">
              <div
                v-if="valid_form.password === 1 || valid_form.email === 1"
                class="bg-red-400 text-white w-full p-2 rounded-lg"
              >
                <h2 class="text-lg">Вы ввели неправильный email или пароль</h2>
                <p>Попробуйте снова</p>
              </div>
              <form v-if="showForm === 1" action="">
                <input
                  v-model="form.email"
                  class="block border border-gray-200 p-2 my-4 w-full rounded-md"
                  type="text"
                  placeholder="E-mail"
                />
                <input
                  v-model="form.password"
                  class="block border border-gray-200 p-2 my-4 w-full rounded-md"
                  type="password"
                  placeholder="Пароль"
                />
                <p
                  @click="loginForm()"
                  class="bg-mainCol p-2 w-full rounded-md text-center text-white uppercase"
                >
                  Войти
                </p>
              </form>
              <form v-if="showForm === 2" action="">
                <div
                  v-if="isActive === 2"
                  class="bg-red-500 text-white p-3 rounded-lg text-sm"
                >
                  Неверная регистрация
                </div>
                <div
                  v-if="isActive === 1"
                  class="bg-green-500 text-white p-3 rounded-lg text-sm"
                >
                  Вы успешно зарегистрировались
                </div>
                <div class="my-4">
                  <input
                  v-model="register.name"
                  class="block border border-gray-200 p-2 w-full rounded-md"
                  type="text"
                  placeholder="Имя"
                />
                <p v-if="register.name === '' && isActive === 2" class="text-red-500 text-xs">Обязательное поле</p>
                </div>
                <div class="my-4">
                <input
                  v-model="register.surname"
                  class="block border border-gray-200 p-2 w-full rounded-md"
                  type="text"
                  placeholder="Фамилия"
                />
                <p v-if="register.surname === '' && isActive === 2" class="text-red-500 text-xs">Обязательное поле</p>
                </div>
                <div class="my-4">
                <input
                  v-model="register.email"
                  class="block border border-gray-200 p-2 w-full rounded-md"
                  type="email"
                  placeholder="E-mail"
                />
                <p v-if="register.email === '' && isActive === 2" class="text-red-500 text-xs">Обязательное поле</p>
                </div>
                <div class="my-4">
                <input
                  v-model="register.phone"
                  class="block border border-gray-200 p-2 w-full rounded-md"
                  type="number"
                  placeholder="Номер телефона"
                />
                <p v-if="register.phone === '' && isActive === 2" class="text-red-500 text-xs">Обязательное поле</p>
                </div>
                <div class="my-4">
                <input
                  v-model="register.pass"
                  class="block border border-gray-200 p-2 w-full rounded-md"
                  type="password"
                  placeholder="Пароль"
                />
                <p v-if="register.pass === '' && isActive === 2" class="text-red-500 text-xs">Обязательное поле</p>
                </div>
                <div class="my-4">
                <input
                  v-model="register.confirmPass"
                  class="block border border-gray-200 p-2 w-full rounded-md"
                  type="password"
                  placeholder="Подтвердите пароль"
                />
                <p v-if="register.confirmPass === '' && isActive === 2" class="text-red-500 text-xs">Обязательное поле</p>
                </div>
                <p
                  @click="addUser()"
                  class="bg-mainCol p-2 w-full rounded-md text-center text-white uppercase"
                >
                  Регистрация
                </p>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="w-full text-center text-sm"
                type="button"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "NavbarComp",
  computed: mapGetters(["addedProducts", "showCounter", "sumOfProducts"]),
  data() {
    return {
      showCart: 0,
      counter: 0,
      showForm: 1,
      users: [],
      currentUser: null,
      isActive: 0,
      form: {
        email: "",
        password: "",
      },
      register: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        pass: "",
        confirmPass: "",
        bonuses: 0,
      },
      valid_form: {
        email: 0,
        password: 0,
      },
    };
  },
  async mounted() {
    const res = await axios.get(`http://localhost:3001/users`);
    this.users = res.data;
    console.log(this.users);
  },
  methods: {
    ...mapActions(["removeByIndex", "removeAllCart"]),
    shoFunc() {
      if (this.showCart === 0) {
        this.showCart = 1;
      } else {
        this.showCart = 0;
      }
    },
    removeItem(id) {
      this.removeByIndex(id);
      console.log(id);
    },
    removeAll() {
      this.removeAllCart();
    },
    loginForm() {
      for (let i = 0; i <= this.users.length; i++) {
        if (
          this.users[i].email == this.form.email &&
          this.users[i].pass == this.form.password
        ) {
          this.currentUser = this.users[i];
          this.valid_form.email = 0;
          this.valid_form.password = 0;
          console.log("yes");
        } else if (this.currentUser != null) {
          this.valid_form.email = 0;
          this.valid_form.password = 0;
        } else {
          this.valid_form.email = 1;
          this.valid_form.password = 1;
          console.log("no");
        }
      }
    },
    async addUser() {
      var character = /[@]/
      if (
        this.register.pass === this.register.confirmPass &&
        this.register.name != "" &&
        this.register.surname != "" &&
        this.register.email != "" &&
        this.register.phone != "" &&
        this.register.pass != "" &&
        this.register.confirmPass != "" &&
        character.test(this.register.email)
      ) {
        this.isActive = 1;
        const res = await axios.post("http://localhost:3001/users", {
          name: this.register.name,
          surname: this.register.surname,
          email: this.register.email,
          phone: this.register.phone,
          pass: this.register.pass,
          bonuses: this.register.bonuses,
        });
        this.register = [...this.register, res.data];
      } else {
        this.isActive = 2;
      }
    },
  },
};
</script>