import Msg2 from './Msg2.vue'  

Msg2.install=function(Vue) {
	if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
	Vue.component(Msg2.name,Msg2)
}

export default Msg2; 