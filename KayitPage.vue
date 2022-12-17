<template>
    <img src="@/assets/images.jpeg" class="image1" />
    <br />
    <div style='heigth:100vh' class="genel">
        <label  style="margin-top: 5px; margin-left: 0px; margin-right: 10px; text-align: center;">SSN</label><br>
        <input style="border-style: solid; margin-top: 15px;" v-model="SSN" placeholder="Enter SSN" /><br>

        <label style="margin-top: 5px;margin-right: 10px;margin-left: 0px;">Name</label><br>
        <input style="border-style: solid;margin-top: 5px;" v-model="Name" placeholder="Enter Name" /> <br>

        <label style="margin-top: 5px; margin-right: 10px; margin-left:0px; ">Surname</label><br>
        <input style="border-style: solid;margin-top: 5px;" v-model="Surname" placeholder="Enter Surname" /> <br>

        <label style="margin-top: 5px;margin-right: 10px;margin-left: 0px;">Birth Date</label><br>
        <input style="border-style: solid;margin-top: 5px;" v-model="BirthDate" placeholder="Enter Birth Date" /> <br>

        <label style="margin-top: 5px;margin-right: 10px; margin-left: 0px; ">Blood Group</label><br>
        <input style="border-style: solid;margin-top: 5px;" v-model="BloodGroup" placeholder="Enter Blood Group" /> <br>

        <label style="margin-top: 5px;margin-right: 10px;margin-left: 0px;">Sex</label><br>
        <input style="border-style: solid; margin-top: 5px;" v-model="Sex" placeholder="Enter Sex" /> <br>

        <a class="button-login" v-on:click="enter()">
            Enter
        </a>


    </div>
</template>

<script>
    export default {
        name: 'KayitPage',
        components: {
        },
        data() {
            return {
                SSN: null,
                Name: null,
                Surname: null,
                BirthDate: null,
                BloodGroup: null,
                Sex: null,
            }
        },
        methods: {

            enter() {
                if (this.SSN === null) {
                    alert('SSN should be selected!');
                    return;
                } 
                else if(this.SSN.length !=9){
                    alert('SSN length must be 9')
                }else if (this.Name === null) {
                    alert('Name should be selected!');
                } else if (this.Surname == null) {
                    alert('Surname should be selected!');
                } else if (this.BirthDate == null) {
                    alert('BirthDate should be selected!');
                } else if (this.BloodGroup == null) {
                    alert('BloodGroup should be selected!');
                } else if (this.Sex == null) {
                    alert('Sex should be selected!');
                }
                let data = JSON.stringify(
                    {
                        "tc": this.SSN,
                        "isim": this.Name,
                        "soyisim": this.Surname,
                        "dogum_tarihi": this.BirthDate,
                        "kan_grubu": this.BloodGroup,
                        "cinsiyet": this.Sex,

                    });

                const url = 'http://127.0.0.1:5000/kayit';

                fetch(url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: data
                }).then(function (response) {
                    return response.json(myvalue);
                }).then(function (text) {
                    console.log(text);
                }).catch(function (error) {
                    console.error(error);
                });
                location.reload();
            },
        }
    }

</script>

<style scoped>

    .button-login:hover {
        box-shadow: 0px 0px 20px black;
        transition: box-shadow 0.2s ease-in-out;
    }

    .button-login {
        cursor: pointer;
        float: left;
        padding: 8px 12px;
        margin-top: 20px;
        margin-bottom: 5px;
        margin-left: 20px;
        background: #1b449c;
        color: #ffffff;
        width: 80px;
        text-decoration: none;
        font-weight: bold;
        border: 2px solid #1b449c;
        box-sizing: border-box;
        border-radius: 40px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
    .button-login > .text {
        font-size: 8px;
        vertical-align: middle;
    }
    .image1 {
         display: block;
         margin-left: 42%;
         margin-right: auto;
        width: 15%;
    }

    .genel {
        margin-left: 42%;
    }

</style>
