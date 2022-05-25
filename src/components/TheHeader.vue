<template>
    <div class="header">
    </div>
</template>

<script>
export default {
    name: 'TheHeader',
    props: {
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
    background: #0000bb;
}
</style>
