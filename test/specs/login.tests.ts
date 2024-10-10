import { expect } from '@wdio/globals'
import * as Massa from '../utils/jsonReader.js'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('Login', () => {
    it('Login com credenciais válidas', async () => {
        //Dado que seja acessado o app wdio
        const testData = Massa.lerMassaDados('login')
        await HomePage.clicarTabLogin()

        //Quando o login for solicitado com dados válidos
        await LoginPage.login(testData.email, testData.senha)

        //Então o login será efetivado com sucesso
        const $msgSucesso = await $('//android.widget.TextView[@resource-id="android:id/message"]');
        await expect($msgSucesso).toBeDisplayed()
        await LoginPage.fecharPopUp();
    })

    it('Login com credenciais inválidas', async () => {
        //Dado que seja acessado o app wdio
        const testData = Massa.lerMassaDados('login')
        await HomePage.clicarTabLogin()

        //Quando o login for solicitado com dados inválidos
        await LoginPage.login(testData.email, testData.senhaInvalida)

        //Então o login não será efetivado
        const $msgSucesso = await $('//android.widget.TextView[@text="Please enter a valid email address"]');
        await expect($msgSucesso).toBeDisplayed()
    })

    it('Login com senha menor que 8 caracteres', async () => {
        //Dado que seja acessado o app wdio
        const testData = Massa.lerMassaDados('login')
        await HomePage.clicarTabLogin()

        //Quando o login for solicitado com dados inválidos
        await LoginPage.login(testData.email, testData.senhaInvalida)

        //Então o login não será efetivado
        const $msgSucesso = await $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
        await expect($msgSucesso).toBeDisplayed()
    })

    it('Efetivar login e retornar a aba home', async () => {
        //Dado que seja acessado o app wdio
        const testData = Massa.lerMassaDados('login')
        await HomePage.clicarTabLogin()

        //Quando o login for solicitado com dados válidos
        await LoginPage.login(testData.email, testData.senha)

        //Então o login será efetivado com sucesso
        const $msgSucesso = await $('//android.widget.TextView[@resource-id="android:id/message"]');
        await expect($msgSucesso).toBeDisplayed()
        await LoginPage.fecharPopUp();
        await HomePage.clicarTabHome()
    })
})

