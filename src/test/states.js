import { observable, action,computed } from 'mobx'

class States {

    @observable timer = null;
    @observable secend = 0;
    // @observable plus=false;
    @action 
    add = () => {
        this.secend++
    }
    @computed get msg(){
		// console.log('msg的getter里执行...')
        // return `msg结果===>${this.max>this.count}`
       return this.secend +2
	}
    // plus = computed(() => this.secend.get() > 2)
    // autorun(() => {
    // console.log(plus.get());
    // })


    @observable value = 0;
    addValue() {
      this.value ++;
    }
    subValue() {
      this.value --;
    }
    @computed get getValue() {
      return this.value * 10;
    }
    // getTheValue() {
    //   return this.value * 10;
    // }
}

export default new States()