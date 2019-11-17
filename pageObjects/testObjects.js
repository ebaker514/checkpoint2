module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
    /////////////Evens and Odds//////////////
        evensOddsInput: {
            selector: '//input[@name="evenOddInput"]',
            locateStrategy: 'xpath'
        },
        evensOddsButton: {
            selector: '//button[@name="evenOddButton"]',
            locateStrategy: 'xpath'
        },
        evensResult: {
            selector: '//span[@name="evenResults"]',
            locateStrategy: 'xpath'
        },
        oddsResult: {
            selector: '//span[@name="oddResults"]',
            locateStrategy: 'xpath'
        },
    /////////////Filter Object//////////////        
        filterObjectInput: {
            selector: '//input[@name="objectFilterInput"]',
            locateStrategy: 'xpath'
        },
        filterObjectButton: {
            selector: '//button[@name="objectFilterButton"]',
            locateStrategy: 'xpath'
        },
        objectResult: {
            selector: '//span[@name="objectFilterResults"]',
            locateStrategy: 'xpath'
        },
    /////////////Filter String//////////////        
        filterStringInput: {
            selector: '//input[@id="nameFilterInput"]',
            locateStrategy: 'xpath'
        },
//The filterStringButton selector was weird on the console
        filterStringButton: {
            selector: '//button[@id="nameFilterButton"]',
            locateStrategy: 'xpath'
        },
        stringResult: {
            selector: '//span[@name="nameFilterResults"]',
            locateStrategy: 'xpath'
        },
    /////////////Palindrome//////////////        
        palindromeInput: {
            selector: '//input[@name="palindromeInput"]',
            locateStrategy: 'xpath'
        },
        palindromeButton: {
            selector: '//button[@name="palindromeButton"]',
            locateStrategy: 'xpath'
        },
        palindromeResult: {
            selector: '//span[@name="palindromeResults"]',
            locateStrategy: 'xpath'
        },
    /////////////Sum//////////////        
        sumInput1: {
            selector: '//input[@name="sumInput1"]',
            locateStrategy: 'xpath'
        },
        sumInput2: {
            selector: '//input[@name="sumInput2"]',
            locateStrategy: 'xpath'
        },
        sumButton: {
            selector: '//button[@name="sumButton"]',
            locateStrategy: 'xpath'
        },
        sumResult: {
            selector: '//span[@name="sumResults"]',
            locateStrategy: 'xpath'
        },
    }
}