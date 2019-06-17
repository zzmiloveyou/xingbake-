
import header from '../components/header'
export default {
    install (Vue){
        Vue.component('el-header',header);
        const AlertClass=Vue.extend(alertConfig);//组件类
        Vue.prottotype.$alert=(text)=>{
            const AlertComponent=new AlertClass({
                propsData:{
                    text
                }
            });
            //组件实例
            AlertComponent.$mount();
            document.body.appendChild(AlertComponent.$el);
        }
    }
}