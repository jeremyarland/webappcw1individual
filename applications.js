const app = Vue.createApp({
    el: '#app',
    data() {
        return {
            cart: [],
            sortedPrice: true,
            showProducts: true,
            lessons: lessonsObj,
            location: false,
            price: false,
            availability: false,
            subject: false,
            ascending: false,
            descending: false,
            search: false,
            orders:
            {
                name: '',
                phone: '',
                slots: [],
            },
        }
    },
    methods: {
        sorted (){
       
        },
        toBasket(index) {
            console.log(index);
            this.lessons[index].spaces--;
            this.cart.push(
                {
                    id: this.lessons[index].id,
                }
            )
        },
        removeBasket(index) {
            for (let idx = 0; idx < this.cart.length; idx++) {
                const element = this.cart[idx];
                if (index === element.id) {
                    this.cart.splice(this.cart.indexOf(index), 1);
                    this.lessons[index].spaces++;
                }
            }
        },
        confirmOrder() {
            for (let i = 0; i < this.cart.length; i++) {
                const element = this.cart[i].id;
                console.log(element);
                this.orders.slots.push({
                    element
                });
                this.cart = [];
                this.showProducts = this.showProducts ? false : true;
                alert('Your Order Has Been Placed Successfully!');
            }
        },
        toggleShowProduct: function () {
            if (this.cart.length > 0) { this.showProducts = this.showProducts ? false : true; }
            else if (this.cart.length <= 0 && this.showProducts == false) {
                this.showProducts = true;
            }
        },
    },
    computed: {
        cartTotal() {
            let val = 0;
            this.cart.forEach(element => {
                val = val + this.lessons[element.id].price;
            });
            console.log(val);
            return val;
        },
        cartQty() {
            let val = 0;
            this.cart.forEach(element => {
                val++;
            });

            return val;
        },
        sortedArray(){
            
            let sortArray = this.lessons;
            
            return sortArray;

          },
    }
}).mount('#app');