import { observable, action, computed } from 'mobx';
 class SessionStore {
    @observable authUser = {}; //also handled in store
    @observable mobileMenuOpen = false;
    @observable isMobileMenu = false;
    @observable tab = 0;
    @action
    setIsMobileMenu = windowWidth => {
        this.isMobileMenu = windowWidth <= 768;
        //breakpoint in antd grid
    }
    @action
    toggleMobileMenuOpen = () => {
        if(!this.mobileMenuOpen) {
            if(this.isMobileMenu) {
                this.mobileMenuOpen = true;
            }
        } else {
            this.mobileMenuOpen = false;
        }
    }
}

