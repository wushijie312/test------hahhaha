import {observable} from 'mobx';
const HomeStore=observable({
    title:'this is home pages',
    // timers:new Date().getTime(),
    getList(){
        this.title="this is home pages"+new Date().getTime()
    }
});
export default HomeStore;
