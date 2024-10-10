import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('android=new UiSelector().description("input-email")');
    }

    public get inputPassword () {
        return $('android=new UiSelector().description("input-password")');
    }

    public get lblSuccess () {
        return $('android=new UiSelector().text("Success")');
    }
    
    public get btnOk () {
        return $('android=resourceId("android:id/button1")');
    }

    public get btnSubmit () {
        return $('android=new UiSelector().description("button-LOGIN")');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        //await this.lblSuccess.isDisplayed();
    }

    public async fecharPopUp () {
        await this.btnOk.click();
    }
    
}

export default new LoginPage();
