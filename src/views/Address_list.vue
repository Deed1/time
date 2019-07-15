<template>
    <div id="wrapper">
        <div class="page-address-list" data-log="地址列表">
            <div class="address-choose">
                <ul class="ui-list">
                    <li class="ui-list-item" v-for="item in tableData" @click.prevent="selected(item.id)"><p class="ui_fz30"><span class="consignee">{{item.name}}</span><span>{{item.tel}}</span>
                    </p>
                        <p>{{item.province+item.city+item.area}}</p>
                        <p>{{item.detail}}</p></li>
                </ul>
            </div>
            <div class="add"><a @click="skip" class="ui-button ui-button-active"><span>新建地址</span></a></div>
            <div class="popup-risk-check"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData:[]
            }
        },
        created() {
            this.axios.get(`api/address`).then(res=>{
                this.tableData=res.data
                // console.log(res.data)
            })
        },
        methods:{
            skip() {
                this.$router.push({name:'go_address'})
            },
            selected(id) {
                console.log(id);
                this.axios.patch(`api/address`,{address_id:id}).then (res=>{

                });
                this.$router.push({name:'checkout'})
            }
        }
    }
</script>
