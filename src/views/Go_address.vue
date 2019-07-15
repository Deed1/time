<template>
    <div id="wrapper">
        <div class="page-address-edit" data-log="地址">

            <div class="edit-box">
                <ul class="ui-list">
                    <li class="ui-list-item">
                        <div class="label">收货人：</div>
                        <div class="ui-input"><input placeholder="真实姓名" name="consignee" maxlength="15" type="text"
                                                     v-model="address.name"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">手机号码：</div>
                        <div class="ui-input"><input placeholder="手机号" name="tel" maxlength="13" type="tel"
                                                     v-model="address.tel"></div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">所在地区：</div>
                        <div class="ui-input">
                            <input placeholder="省 市 区" name="pcd" maxlength="20" type="text" readonly="readonly"
                                   value="" @click="spread" v-model="address.pca">
                        </div>
                    </li>
                    <li class="ui-list-item">
                        <div class="label">街道地址：</div>
                        <div class="ui-input"><input placeholder="详细地址" name="address" maxlength="120" type="text"
                                                     v-model="address.detail"></div>
                    </li>
                </ul>
                <div class="save-button">
                    <a  class="ui-button" @click="skip"><span>保存地址</span></a>

                </div>
            </div>


            <div class="ui-mask" :style="is_show"></div>
            <div class="ui-pop" :style="is_show">
                <div class="ui-pop-content">
                    <div class="region-list">
                        <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
                    </div>
                </div>
                <div class="ui-pop-title">选择所在地区</div>
                <div class="ui-pop-close"><a><span class="icon-10chahaokuang" @click="close()"></span></a></div>
            </div>


            <div class="popup-risk-check"></div>
        </div>
    </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'

    export default {
        components: {VDistpicker},
        data() {
            return {
                is_show: "display:none;",
                tabletada:{},
                address: {
                    name: '',
                    tel: '',
                    pca: [],
                    detail: ''
                }
            }
        },
        watch: {
            tabletada: function () {
                if (this.tabletada.province.value!=null&&this.tabletada.city.value!=null&&this.tabletada.area.value!=null) {
                    this.is_show = 'display:none;'
                }
            }
        },
        methods: {
            onSelected(data) {
                // alert(data.province.value + ' | ' + data.city.value + ' | ' + data.area.value)
                console.log(data);
                this.tabletada=data;
                this.address.pca = data.province.value + ' ' + data.city.value + ' ' + data.area.value;

                // console.log(this.address.pca)
            },
            spread() {
                this.is_show = 'display:block;'
            },
            close() {
                this.is_show = 'display:none;'
            },
            skip() {
                this.axios.post(`api/address`,this.address).then(res=>{
                    console.log(res);
                    alert('创建成功');
                    this.$router.push({name:'address_list'})

                })

            }

        }
    }
</script>
