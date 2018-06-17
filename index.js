// import Msg from './src/app.js'  
// import Msg2 from './src/app2.js'  
import Msg from './src/Msg'  
import Msg2 from './src/Msg2'  
const components=[
	Msg,
	Msg2
]
const install=function(Vue) {
	components.map(component => {
		Vue.component(component.name,component)
	})
}

// export default Msg
export default {
	Msg,
	Msg2
}
