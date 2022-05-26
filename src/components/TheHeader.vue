<template>
    <div class="header" v-bind:style="headerCss">
        <span class="logo" @click="clickMenu(0)"></span>
        <span @click="clickMenu(5)">Contact Us</span>
    </div>
</template>

<script>
import {reactive} from "vue";
import { useStore } from "vuex";

export default {
    name: 'TheHeader',
    props: {
        bgColor: {
            type: String,
            default: '#0000bb00'
        }
    },
    setup(context, props){
        const store = useStore();
        const headerCss = reactive({
            backgroundColor: '#0000bb00',
            color: '#ffffff'
        });
        const clickMenu = (index) => {
            store.dispatch('main/setPageIndex', index);
        }
        store.watch(() => store.getters['main/currentPageIndex'], index => {
            if(index > 0)
                headerCss.backgroundColor = '#000000ff';
            else
                headerCss.backgroundColor = '#00000000';
        }, {deep: true});
        return{
            headerCss,
            clickMenu
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    position:fixed;
    z-index:10;
    height:80px;
    top:0;
    width:100%;
    /* background: v-bind(bgColor); */
    transition:0.4s;
    display:flex;
}
.logo{
    width:150px;
}
.header span{
    margin: auto 10px auto 10px;
}
</style>
