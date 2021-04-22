import { extendObervable } from 'mobx';

//UserStore
class UserStore {
    constructor(){
        extendObervable(this,{

            loading: true,
            isLoggedIn: false,
            username: ''
        })
    }
}
export default new UserStore();
