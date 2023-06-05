using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;
using OpenQA.Selenium.Support.UI;
using System;
using Proyecto.Auto.Template.Common;

namespace OpenCart.Auto.Template.Webpages
{
    public class PaymentPage : CommonPage
    {

        //Constructor
        public PaymentPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }


        //Define WebElements by: Id, CssSelector or XPath
        private IWebElement CheckNewAdress  => WebDriver.FindElementByXPath("//input[@type='radio' and @value='new']");

        private IWebElement FirstName       => WebDriver.FindElementById("input-payment-firstname");
        private IWebElement LastName        => WebDriver.FindElementById("input-payment-lastname");
        private IWebElement Address1        => WebDriver.FindElementById("input-payment-address-1");
        private IWebElement City            => WebDriver.FindElementById("input-payment-city");
        private IWebElement PostCode        => WebDriver.FindElementById("input-payment-postcode");
        private IWebElement Country         => WebDriver.FindElementById("input-payment-country");
        private IWebElement SelectCountry   => WebDriver.FindElementByXPath("//option[text()= 'Spain']");
        private IWebElement Zone            => WebDriver.FindElementById("input-payment-zone");
        private IWebElement SelectZone      => WebDriver.FindElementByXPath("//option[text()= 'Barcelona']");
        
        private IWebElement AcceptTermsAndConditions => WebDriver.FindElementByXPath("//input[@type='checkbox' and @name='agree']");

        private IWebElement BtnContinue     => WebDriver.FindElementById("button-payment-address");
        private IWebElement BtnContinue1    => WebDriver.FindElementById("button-shipping-address");
        private IWebElement BtnContinue2    => WebDriver.FindElementById("button-shipping-method");
        private IWebElement BtnContinue3    => WebDriver.FindElementById("button-payment-method");
        private IWebElement BtnConfirmOrder => WebDriver.FindElementById("button-confirm");



        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();


        //Define functions and actions 

        public PaymentPage BillingDetails(string[] formulario)
        {
            
            CheckNewAdress  .Click();

            FirstName       .SendKeys(formulario[0]);
            LastName        .SendKeys(formulario[1]);
            Address1        .SendKeys(formulario[2]);
            City            .SendKeys(formulario[3]);
            PostCode        .SendKeys(formulario[4]);
            Country         .Click();
            SelectCountry   .Click();
            Zone            .Click();
            SelectZone      .Click();

            BtnContinue     .Click();

            return this;
        }

        public PaymentPage DeliveryDetails()
        {
            WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(40));
            BtnContinue1.Click();
            return this;
        }

        public PaymentPage DeliveryMethod()
        {
            WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(40));
            BtnContinue2.Click();
            return this;
        }

        public PaymentPage PaymentMethod()
        {
            WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(40));
            AcceptTermsAndConditions.Click();
            BtnContinue3.Click();
            return this;
        }

        public PaymentPage ConfirmOrder()
        {
            BtnConfirmOrder.Click(); 
            return this;
        }
    }
}