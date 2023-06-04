using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium.Support.UI;
using Proyecto.Auto.Template.Common;
using System;

namespace OpenCart.Auto.Template.Webpages
{
    public class HomePage : CommonPage
    {

        //Constructor
        public HomePage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }


        //Define WebElements by: Id, CssSelector or XPath

        private IWebElement BtnHome => WebDriver.FindElementByXPath("//a[text()='Your Store']");

        private IWebElement BtnAccount => WebDriver.FindElementByXPath("//a[@title = 'My Account']");

        private IWebElement BtnLogIn => WebDriver.FindElementByXPath("//a[@title='My Account']//../ul//a[text()='Login']");

        private IWebElement BtnDesktops => WebDriver.FindElementByXPath("//li[@class = 'dropdown']/a[text()='Desktops']");

        private IWebElement BtnLaptops => WebDriver.FindElementByXPath("//li[@class = 'dropdown']/a[text()='Laptops & Notebooks']");

        private IWebElement BtnShoppingCart => WebDriver.FindElementByXPath("//a[@title='Shopping Cart']");

        private IWebElement ShowAllItems (string article) => WebDriver.FindElementByXPath($"//div[@class = 'dropdown-menu']/a[text()='{article}']");




        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();


        //Define functions and actions 

        public HomePage GoLoginPage()
        {            
            BtnAccount.Click();
            BtnLogIn.Click();
            
            return this;
        }

        public HomePage GoDesktopsPage(string article)
        {
            BtnDesktops.Click();
            ShowAllItems(article).Click();

            return this;
        }

        public HomePage GoLaptopsPage(string article)
        {
            BtnLaptops.Click();
            ShowAllItems(article).Click();

            return this;
        }

        public HomePage GoToCartPage()
        {
            BtnShoppingCart.Click();
            WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(10));

            return this;

        }

        //public HomePage CheckSponsor()
        //{

        //}
    }
}