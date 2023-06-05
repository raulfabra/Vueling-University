using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;
using OpenQA.Selenium.Support.UI;
using System;
using Proyecto.Auto.Template.Common;
using NUnit.Framework;

namespace OpenCart.Auto.Template.Webpages
{
    public class SignUpPage : CommonPage
    {

        //Constructor
        public SignUpPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }
        
        //Define WebElements by: Id, CssSelector or XPath

        private IWebElement BtnAccount  => WebDriver.FindElementByXPath("//a[@title = 'My Account']");
        private IWebElement BtnSignUp    => WebDriver.FindElementByCssSelector("//a[@title='My Account']//../ul//a[text()='Login']");

        private By SubtitleNewCustomer => By.TagName("h1");
        private By SubtitleMyAccount => By.TagName("h1");
        private IWebElement MessageRegister => WebDriver.FindElementByXPath("//div[@id='content']/p[1]");

        private IWebElement FirstName => WebDriver.FindElementById("input-firstname");
        private IWebElement LastName => WebDriver.FindElementById("input-lastname");
        private IWebElement EmailAdress => WebDriver.FindElementById("input-email");
        private IWebElement Telephone => WebDriver.FindElementById("input-telephone");
        private IWebElement Password => WebDriver.FindElementById("input-password");
        private IWebElement RepeatPassword => WebDriver.FindElementById("input-confirm");

        private IWebElement AgreeConditions => WebDriver.FindElementByXPath("//input[@type= 'checkbox' and @name= 'agree']");
        private IWebElement BtnRegister => WebDriver.FindElementByXPath("//input[@value= 'Continue']");
        private IWebElement BtnContinue => WebDriver.FindElementByXPath("//div//a[text()='Continue']");



        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();
        private Helpers helpers;



        //Define functions and actions 

        public SignUpPage FillRegister()
        {                        
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(SubtitleNewCustomer));
            FirstName.SendKeys(Helpers.GenerateFirstName(5));
            LastName.SendKeys(Helpers.GenerateLastName(6));
            EmailAdress.SendKeys($"{Helpers.GetRandomString(5)}@mailinator.com");
            Telephone.SendKeys((Helpers.GetRandomPhoneNumber()).ToString());
            Password.SendKeys("123456789");
            RepeatPassword.SendKeys("123456789");

            AgreeConditions.Click();
            BtnRegister.Click();
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(SubtitleMyAccount));
            

            return this;
        }

        public SignUpPage ValidateRegister()
        {
            Assert.AreEqual("Congratulations! Your new account has been successfully created!", MessageRegister.Text);
            BtnContinue.Click();

            return this;
        }


    }
}