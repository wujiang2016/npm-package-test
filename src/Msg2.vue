<style scoped lang="less">  
    @import 'styles/common.less';  
</style>  
<template>  
    <div class="msg-wrapper">  
        <span>hello, you are a special man!</span>  
        <span class="account">{{data.name}}</span>  
    </div>  
</template>  
<script>  
    export default {  
        name:'Msg2',  
        data () {  
            return {}  
        },  
        props:{  
            data:{  
                type:Object  
            }  
        },  
        methods: {  
  
        },  
        created(){  
            let that = this;  
        }  
    }  
</script>  