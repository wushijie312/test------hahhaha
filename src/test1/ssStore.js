//appStore.js
import {observable,action} from 'mobx';

var appStore = observable({
    counter: 0,
addCount : action(()=>{
    appStore.counter+=1;
}),
subCount : action(()=>{
    if(appStore.counter<=0){
        return;
    }
    appStore.counter-=1;
}),
changeCount :action((key)=>{
    if(key<=0){
        appStore.counter=0;
    }
    appStore.counter=parseInt(key);
})
});
export default appStore