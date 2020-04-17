import {Builder, Capabilities} from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from 'mocha-webdriver';

describe('testDrugi', function () {
    it('should say something', async function() {
        this.timeout(20000);
        await driver.get('file:///home/ukasz/Dokumenty/Informatyka/studia/www/loty/loty.html');
        expect(await driver.find('#toselect').getText()).to.include('Warszawa');
        await driver.find('input[name=name]').sendKeys('Jan');
        await driver.find('input[name=surname]').sendKeys('Woreczko');
        await driver.find('input[type=button]').doClick();
    });
})