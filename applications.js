
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
            searchar:[],
            availability: false,
            subject: false,
            asec: false,
            desc: false,
            search: "",
            resultpage:false,
            validationcheck:false,
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
        
            if (this.subject==true && this.location==false && this.price==false && this.availability==false)
            { 
               if (this.asec==true){
                this.lesson.sort(function(a,b)
                {
                    return a.subject - b.subject;
                });
               }
               else{

               }
            }
            if (this.subject==false && this.location==true && this.price==false && this.availability==false)
            { 
               if (this.asec==true){
                
               }
               else{

               }
            }
            if (this.subject==false && this.location==false && this.price==true && this.availability==false)
            { 
                if (this.asec==true){ console.log ("HI");
                        this.lesson.sort(function(a,b)
                        {
                          console.log ("HI");
                            return a.price - b.price;
                        });
                }
                else{

                }
            }
            if (this.subject==false && this.location==false && this.price==false && this.availability==true)
            { 
                if (this.asec==true){
                
                }
                else{

                }
            }
  },
  srch(){
    for(let i=0;i<this.lessons;i++){
        if(this.lessons[i].subject.includes(this.search)){
            this.searchar.push(lessons[i]);
            this.resultpage=true;
        }
        else{
            searchar=[];
        }
    }
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
        validation(){
            
            if(/^[a-zA-Z]+$/.test(this.orders.name)&& /^\d+$/.test(this.orders.phone)){
                this.validationcheck=true;
               }
               else{
                   this.validationcheck=false;
               }
        },
        sortedArray(){
            
            let sortArray = this.lessons;
            
            return sortArray;

          },
    }
}).mount('#app');