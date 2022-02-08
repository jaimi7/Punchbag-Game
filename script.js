const app = new Vue({
    el:'#app',
    data: {
        status: 100,
        end:false
    },
    methods: {
        punch() {
            this.status -= 10;
            if(this.status<=0){
                this.end=true;
            }
        },
        reset() {
            this.status = 100;
            this.end=false;
        }
    },
    computed: {
        // bagBurst
    }
})