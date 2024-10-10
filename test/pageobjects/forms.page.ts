import { $ } from '@wdio/globals'

class FormsPage {

    public get inputForm () {
        return $('android=new UiSelector().description("text-input")');
    }

    public get btnActive () {
        return $('android=new UiSelector().description("button-Active")');
    }

    public get inputFormResult () {
        return $('android=new UiSelector().text("input-text-result")');
    }

    public get dropbox () {
        return $('//android.widget.EditText[@resource-id="text_input"]');
    }

    public get lblActivate () {
        return $('android=new UiSelector().text("This button is active")');
    }
    
    public get btnOk () {
        return $('android=resourceId("android:id/button1")');
    }

    public async preencherFormulario (form: string, dropbox: string) {
        await this.inputForm.setValue(form)
        await this.dropbox.click();
        const btndrop = $('android=new UiSelector().text("'+dropbox+'")')
        await btndrop.click();
        await this.btnActive.click();

    }

    public async fecharPopUp () {
        await this.btnOk.click();
    }


}

export default new FormsPage();
