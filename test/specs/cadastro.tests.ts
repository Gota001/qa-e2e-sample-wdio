import { expect } from '@wdio/globals'
import * as Massa from '../utils/jsonReader.js'
import CadastroPage from '../pageobjects/cadastro.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('Cadastro', () => {
    it('Cadastro com dados válidos', async () => {
        //Dado que seja acessado o app wdio
        const testData = Massa.lerMassaDados('cadastro')
        await HomePage.clicarTabLogin()

        //Quando o cadastro for solicitado com dados válidos
        await CadastroPage.cadastro(testData.email, testData.senha, testData.senha)

        //Então o cadastro será efetivado com sucesso
        const $msgSucesso = await $('//android.widget.TextView[@resource-id="android:id/message"]');
        await expect($msgSucesso).toBeDisplayed()
        await CadastroPage.fecharPopUp();
    })

    it('Cadastro com dados inválidos', async () => {
        //Dado que seja acessado o app wdio
        const testData = Massa.lerMassaDados('cadastro')
        await HomePage.clicarTabForms()

        //Quando o cadastro for solicitado com dados válidos
        await CadastroPage.cadastro(testData.email, testData.senha, testData.senhaInvalida)

        //Então o cadastro será efetivado com sucesso
        const $msgSucesso = await $('//android.widget.TextView[@text="Please enter the same password"]');
        await expect($msgSucesso).toBeDisplayed()
        await CadastroPage.fecharPopUp();
    })

    it('Cadastro com senha menor que 8 caracteres', async () => {
        //Dado que seja acessado o app wdio
        const testData = Massa.lerMassaDados('cadastro')
        await HomePage.clicarTabForms()

        //Quando o cadastro for solicitado com dados válidos
        await CadastroPage.cadastro(testData.email, testData.senhaInvalida, testData.senhaInvalida)

        //Então o cadastro será efetivado com sucesso
        const $msgSucesso = await $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
        await expect($msgSucesso).toBeDisplayed()
        await CadastroPage.fecharPopUp();
    })

})