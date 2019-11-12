<template>
    <main role="main" class="product">
        <section class="product-list 00 container-xl px-3 pt-8 pb-10">
            <div class="d-flex flex-wrap">
                <div class="col-12">

                    <p class="error" v-if="error"> {{error}}</p>
                    <div class="posts-container">
                        <div class="post"
                             v-for="(product, index) in products"
                             v-bind:item="product"
                             v-bind:index="index"
                             v-bind:key="product._id"
                             v-on:dblclick="removeProducts(product._id)">

                            <button>
                                <h1>{{product.text}}</h1>
                                <p> {{product.createdAt}}</p>
                            </button>

                        </div>
                    </div>

                    <div class="create-post">
                        <label for="create-post">Something...</label>
                        <input type="text" id="create-post" v-model="text" placeholder="Create a post">
                        <button v-on:click="createProducts">Post!</button>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>

<script>

    import ProductsService from '@/informations';

    // import ProductsService from '../../start';

    export default {
        name: 'ProductsService',
        data() {
            return {
                products: [],
                error: '',
                text: '',
                category: null,
            };
        },
        async created() {
            try {
                this.products = await ProductsService.getProducts();
            } catch (err) {Z
                this.error = err.message;
            }
        },

        methods: {
            async createProducts() {
                await ProductsService.insertProducts(this.text);
                this.products = await ProductsService.getProducts();
            },
            async removeProducts(id) {
                await ProductsService.deleteProducts(id);
                this.products = await ProductsService.getProducts();
            },
        },
    };
</script>
