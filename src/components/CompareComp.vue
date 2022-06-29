<template>
    <div>
        <div class="container mx-auto">
            <div class="bg-orangelight w-full p-2 rounded-lg my-4">
                <div>
                    Сравниваемые товары
                </div>
                <div v-for="item in allFetchedProductsFiltered" :key="item">
                    {{ item }}
                </div>
                <button @click="increaseFunc()">Click me!</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "CompareComp",
    methods: mapActions(['addProductsC']),
    async mounted() {
        this.addProductsC();
    },
    computed: mapGetters(['allFetchedProducts', 'allFetchedProductsFiltered'])
}
</script>