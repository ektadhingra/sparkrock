Feature('homepage');

/** Test cases to verify navigation links */
Scenario('Verify Navigation Links On HomePage - Who we Serve',  ({ I }) => {
    I.amOnPage("https://sparkrock.com/");
    I.click("//ul[@id = 'menu-main-menu']/li[1]/a");
    I.waitForText("Integrated Finance, Human Resources, and Payroll Software",30);
    I.seeElement("//h1[contains(text(),'Integrated Finance, Human Resources, and Payroll Software')]")
});

Scenario('Verify Navigation Links On HomePage - Lets talk',  ({ I }) => {
    I.amOnPage("https://sparkrock.com/");
    I.click("//ul[@id = 'menu-main-menu']/li[5]/a");
    I.waitForText("talk about your next move",30);
    I.seeElement("//h4[contains(text(),'talk about your next move')]")
});

/** Test cases to verify contact form  */
Scenario('Lets Talk - Verify Contact Form Functionality',  ({ I }) => {
    I.amOnPage("https://sparkrock.com/");
    I.click("//ul[@id = 'menu-main-menu']/li[5]/a");
    I.waitForText("talk about your next move",30);
    I.seeElement("//h4[contains(text(),'talk about your next move')]")
    I.waitForVisible("input[aria-label='First Name']", 30);
    I.fillField("input[aria-label='First Name']", "First");
    I.fillField("input[aria-label='Last Name']", "Last");
    I.fillField("input[leadfield='emailaddress1']","ektadhingra029@gmail.com");
    I.fillField("input[aria-label='Phone Number']","+917722008012");
    I.fillField("input[aria-label='Organization Name']","Cognizant");
    I.fillField("input[aria-label='State/Province']","Arizona");
    I.fillField("textarea[contactfield='sr_commentcapture']","Just a test enquiry");
    I.click("input[id='btnSubmit']");
    I.waitForText("Thank you for your interest.")
    I.see("Thank you for your interest.");

});

/** Improvements */

/** We can create page object model by creating page classes and maintaining the locators and creating functions there, currently we have just automated using default codeceptjs framrwork structure */
