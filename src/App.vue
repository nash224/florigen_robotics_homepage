<template>
    <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </div>
</template>

<script>

import Main from '@/views/TheMain.vue'
import Header from '@/components/TheHeader.vue'
import Footer from '@/components/TheFooter.vue'



export default {
    name: 'App',
    components: {
        Header,
        Main,
        Footer
    }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');


*{
    padding:0;
    margin:0;
}
body,html{
    height:100%;
    width:100%;
    overflow: hidden;
}
@media (max-width: 1024px) {

}
html{
  background: url('./assets/background.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app{
    height:100%;
    width:100%;
}
</style>
