<template>
    <div style="margin-left:15px;">
        <h1>
            Your Reservation:
        </h1>
        <div  style="margin-left:20px;" v-for="item in OldReservation">
            <p>
                {{item}}
            </p>
        </div>               
    </div>

    
    <div>
        <a class="button" v-on:click="takeReservation()">
            Take New Reservation
        </a>
    </div>
</template>

<script>
    export default {
        name: 'EnterUser',
        components: {

        },
        data() {
            return {
                SSN: null,
                OldReservation: ["murat", "gencer", "bil372", "proje"]
            }
        },
        created() {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: this.SSN
            };
            const url = 'http://127.0.0.1:5000/listCarFilter';
            fetch(url, requestOptions)
                .then(async response => {
                    const data = await response.json();

                    if (!response.ok) {
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    this.OldReservation = data;
                    console.log(this.OldReservation);
                })
                .catch(error => {
                    this.errorMessage = error;
                    console.error("There was an error!", error);
                });
        },

        methods: {

            takeReservation(){
                this.$router.push({
                    name: 'TakeReservation',
                    params: {
                    }
                }); 
            }
        }
    }
</script>


<style>
    .button {
        cursor: pointer;
        float: left;
        padding: 8px 12px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 20px;
        background: #1b449c;
        color: #ffffff;
        width: 500px;
        text-decoration: none;
        font-weight: bold;
        border: 2px solid #1b449c;
        box-sizing: border-box;
        border-radius: 40px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        text-align:center;
    }
</style>