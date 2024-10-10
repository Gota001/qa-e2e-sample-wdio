import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CadastroPage {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('android=new UiSelector().description("input-email")');
    }

    public get inputPassword () {
        return $('android=new UiSelector().description("input-password")');
    }

    public get inputRepeatPassword () {
        return $('android=new UiSelector().description("input-repeat-password")');
    }

    public get lblSuccess () {
        return $('android=new UiSelector().text("You successfully signed up!")');
    }

    public get lblSignUp () {
        return $('android=new UiSelector().text("Sign up")');
    }
    
    public get btnOk () {
        return $('android=resourceId("android:id/button1")');
    }

    public get btnSubmit () {
        return $('android=new UiSelector().description("button-SIGN UP")');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async cadastro (email: string, password: string, password2: string) {
        await this.lblSignUp.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRepeatPassword.setValue(password2);
        await this.btnSubmit.click();
        //await this.lblSuccess.isDisplayed();
    }

    public async fecharPopUp () {
        await this.btnOk.click();
    }
    
}

export default new CadastroPage();