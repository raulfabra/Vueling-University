using Vueling.Auto.Template.SetUp;
using Vueling.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Collections.Generic;
using System.Threading;
using OpenQA.Selenium.Support.UI;
using System;
using Vueling.Auto.Template.Common;
using NUnit.Framework;

namespace Vueling.Auto.Template.WebPages
{
    public class CartPage : CommonPage
    {
        //CONSTRUCTOR

        public CartPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }


        //WEB ELEMENTS

        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();


        private IWebElement firstItem(string firstItemName) => WebDriver.FindElementByXPath($"//td[text()='{firstItemName}']");

        private IWebElement secondItem(string secondItemName) => WebDriver.FindElementByXPath($"//td[text()='{secondItemName}']");


        private IWebElement btnOrder => WebDriver.FindElementByXPath("//button[text()='Place Order']");

        private By _btnOrder => By.XPath("//button[text()='Place Order']");

        private IWebElement btnDelete(string itemName) => WebDriver.FindElementByXPath($"//tr[@class='success']/td[text()='{itemName}']/../td/a");


        private IWebElement name => WebDriver.FindElementById("name");

        private IWebElement country => WebDriver.FindElementById("country");

        private IWebElement city => WebDriver.FindElementById("city");

        private IWebElement card => WebDriver.FindElementById("card");

        private IWebElement month => WebDriver.FindElementById("month");

        private IWebElement year => WebDriver.FindElementById("year");

        private IWebElement Purchase => WebDriver.FindElementByXPath("//button[text()='Purchase']");


        //FUNCTIONS

        public CartPage Payment()
        {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_btnOrder));
            btnOrder.Click();
            name.SendKeys("Raul");
            country.SendKeys("Spain");
            city.SendKeys("Barna");
            card.SendKeys("15948159");
            month.SendKeys("January");
            year.SendKeys("1996");
            Purchase.Click();


            return this;
        }

        public CartPage ComprobarCarrito(string firstItemName, string secondItemName)
        {
            
            Assert.AreEqual("HTC One M9", firstItem(firstItemName).Text);
            Assert.AreEqual("Apple monitor 24", secondItem(secondItemName).Text);


            return this;
        }

        public CartPage EliminarItems(string itemName)
        {
            btnDelete(itemName).Click();

            return this;
        }

    }
}
