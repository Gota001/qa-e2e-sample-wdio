import { $ } from '@wdio/globals'

class HomePage {

    public get tabLogin () {
        return $('android=new UiSelector().text("Login")');
    }

    public get tabForms () {
        return $('android=new UiSelector().text("Forms")');
    }

    public get tabHome () {
        return $('android=new UiSelector().text("Home")');
    }

    public async clicarTabLogin () {
        await this.tabLogin.click();
    }

    public async clicarTabHome () {
        await this.tabHome.click();
    }

    public async clicarTabForms () {
        await this.tabForms.click();
    }

}

export default new HomePage();
