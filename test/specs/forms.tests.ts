import { expect } from '@wdio/globals'
import FormsPage from '../pageobjects/forms.page.js'
import HomePage from '../pageobjects/home.page.js'
import * as fs from 'node:fs';
import * as path from 'node:path';
import { parse } from 'csv-parse/sync';

const testData = parse(fs.readFileSync(path.join('./test/data/', 'forms.csv')), {
    columns: false,
    skip_empty_lines: true,
});


describe('Forms', () => {
    it('Preenchimento de formulário com dados válidos', async () => {
        //Dado que seja acessado o app wdio
        await HomePage.clicarTabForms()

        //Quando o preenchimento de fromulário iniciar com dados válidos
        await FormsPage.preencherFormulario(String(testData[0]), String(testData[0]))

        //Então o preenchimento será efetivado com sucesso
        const $msgSucesso = await $('//android.widget.TextView[@text="This button is active"]');
        await expect($msgSucesso).toBeDisplayed()
        await FormsPage.fecharPopUp();
    })

    it('Preenchimento de formulário e retorno a aba home', async () => {
        //Dado que seja acessado o app wdio
        await HomePage.clicarTabForms()

        //Quando o preenchimento de fromulário iniciar com dados válidos
        await FormsPage.preencherFormulario(String(testData[0]), String(testData[0]))

        //Então o preenchimento será efetivado com sucesso
        const $msgSucesso = await $('//android.widget.TextView[@text="This button is active"]');
        await expect($msgSucesso).toBeDisplayed()
        await FormsPage.fecharPopUp();
        await HomePage.clicarTabHome();
    })

})