var test = {}
module.exports = {
    beforeEach: browser => {
        test = browser.page.testObjects()
        test
            .navigate()
            .waitForElementVisible('@evensOddsInput')
    },
    after: browser => {
        test.end()
    },
    'Odds and Evens Test': browser => {
        test
            .clearValue('@evensOddsInput')
            .setValue('@evensOddsInput', "10")
            .click('@evensOddsButton')
            .expect.element('@evensResult').text.contain('10')
        test
            .expect.element('@oddsResult').text.not.contain('10')

        test
            .clearValue('@evensOddsInput')
            .setValue('@evensOddsInput', "5")
            .click('@evensOddsButton')
            .expect.element('@evensResult').text.not.contain('5')
        test
            .expect.element('@oddsResult').text.contain('5')

        test
            .clearValue('@evensOddsInput')
            .setValue('@evensOddsInput', "banana")
            .click('@evensOddsButton')
            .expect.element('@evensResult').text.not.contain('banana')
        test
            .expect.element('@oddsResult').text.contain('null')
    },
    'Filter Object Test': browser => {
        test
            .clearValue('@filterObjectInput')
            .setValue('@filterObjectInput', 'name')
            .click('@filterObjectButton')
            .expect.element('@objectResult').text.contain("Jimmy")
        test    
            .expect.element('@objectResult').text.contain("Jeremy")
        test
            .expect.element('@objectResult').text.contain("Carly")            

        test
            .clearValue('@filterObjectInput')
            .setValue('@filterObjectInput', 'title')
            .click('@filterObjectButton')
            .expect.element('@objectResult').text.contain("Jimmy")
        test    
            .expect.element('@objectResult').text.not.contain("Jeremy")
        test
            .expect.element('@objectResult').text.contain("Carly")

        test
            .clearValue('@filterObjectInput')
            .setValue('@filterObjectInput', 'age')
            .click('@filterObjectButton')
            .expect.element('@objectResult').text.contain("Jimmy")
        test    
            .expect.element('@objectResult').text.contain("Jeremy")
        test
            .expect.element('@objectResult').text.not.contain("Carly")

        test
            .clearValue('@filterObjectInput')
            .setValue('@filterObjectInput', 'hairColor')
            .click('@filterObjectButton')
            .expect.element('@objectResult').text.not.contain("Jimmy")
        test    
            .expect.element('@objectResult').text.contain("Jeremy")
        test
            .expect.element('@objectResult').text.not.contain("Carly")

            test
            .clearValue('@filterObjectInput')
            .setValue('@filterObjectInput', 'banana')
            .click('@filterObjectButton')
            .expect.element('@objectResult').text.not.contain("Jimmy")
        test    
            .expect.element('@objectResult').text.not.contain("Jeremy")
        test
            .expect.element('@objectResult').text.not.contain("Carly")
    },
    'Filter String Test': browser => {
        test
            .clearValue('@filterStringInput')
            .setValue('@filterStringInput', 'a')
            .click('@filterStringButton')
            .expect.element('@stringResult').text.contain("James")
        test
            .expect.element('@stringResult').text.contain("Jessica")
        test
            .expect.element('@stringResult').text.not.contain("Melody")
        test
            .expect.element('@stringResult').text.not.contain("Tyler")
        test
            .expect.element('@stringResult').text.contain("Blake")
        test
            .expect.element('@stringResult').text.not.contain("Jennifer")
        test
            .expect.element('@stringResult').text.contain("Mark")
        test
            .expect.element('@stringResult').text.contain("Maddy")

        test
            .clearValue('@filterStringInput')
            .setValue('@filterStringInput', 'er')
            .click('@filterStringButton')
            .expect.element('@stringResult').text.not.contain("James")
        test
            .expect.element('@stringResult').text.not.contain("Jessica")
        test
            .expect.element('@stringResult').text.not.contain("Melody")
        test
            .expect.element('@stringResult').text.contain("Tyler")
        test
            .expect.element('@stringResult').text.not.contain("Blake")
        test
            .expect.element('@stringResult').text.contain("Jennifer")
        test
            .expect.element('@stringResult').text.not.contain("Mark")
        test
            .expect.element('@stringResult').text.not.contain("Maddy")

        test
            .clearValue('@filterStringInput')
            .setValue('@filterStringInput', '123')
            .click('@filterStringButton')
            .expect.element('@stringResult').text.not.contain("James")
        test
            .expect.element('@stringResult').text.not.contain("Jessica")
        test
            .expect.element('@stringResult').text.not.contain("Melody")
        test
            .expect.element('@stringResult').text.not.contain("Tyler")
        test
            .expect.element('@stringResult').text.not.contain("Blake")
        test
            .expect.element('@stringResult').text.not.contain("Jennifer")
        test
            .expect.element('@stringResult').text.not.contain("Mark")
        test
            .expect.element('@stringResult').text.not.contain("Maddy")
    },
    'Palindrome Test': browser => {
        test
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', "tacocat")
            .click('@palindromeButton')
            .expect.element('@palindromeResult').text.contain('true')

        test
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', "cats are cool")
            .click('@palindromeButton')
            .expect.element('@palindromeResult').text.contain('false')

        test
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', "1234321")
            .click('@palindromeButton')
            .expect.element('@palindromeResult').text.contain('true')

        test
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', "12345")
            .click('@palindromeButton')
            .expect.element('@palindromeResult').text.contain('false')

        test
            .clearValue('@palindromeInput')
            .setValue('@palindromeInput', "Ab1@@1bA")
            .click('@palindromeButton')
            .expect.element('@palindromeResult').text.contain('true')
    },
    'Sum Test': browser => {
        test
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '1')
            .setValue('@sumInput2', '5')
            .click('@sumButton')
            .expect.element('@sumResult').text.contain('6')

        test
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '20')
            .setValue('@sumInput2', '567')
            .click('@sumButton')
            .expect.element('@sumResult').text.contain('587')

        //BUG: clearValue does not actually clear the stored value in automation    
        // test
        //     .clearValue('@sumInput1')
        //     .clearValue('@sumInput2')
        //     .setValue('@sumInput2', '10')
        //     .click('@sumButton')
        //     .pause()
        //     .expect.element('@sumResult').text.contain('NaN')

        test
            .clearValue('@sumInput1')
            .clearValue('@sumInput2')
            .setValue('@sumInput1', '-6')
            .setValue('@sumInput2', '21')
            .click('@sumButton')
            .expect.element('@sumResult').text.contain('15')

        //BUG: The software cannot add decimals
        // test
        //     .clearValue('@sumInput1')
        //     .clearValue('@sumInput2')
        //     .setValue('@sumInput1', "1.7")
        //     .setValue('@sumInput2', "2.9")
        //     .click('@sumButton')
        //     .expect.element('@sumResult').text.contain('4.6')
    },
}