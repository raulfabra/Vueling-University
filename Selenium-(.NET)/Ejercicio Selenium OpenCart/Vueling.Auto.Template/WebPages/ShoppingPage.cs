using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;
using NUnit.Framework;
using OpenQA.Selenium.Support.UI;
using System;
using Proyecto.Auto.Template.Common;

namespace OpenCart.Auto.Template.Webpages
{
    public class ShoppingPage : CommonPage
    {

        //Constructor
        public ShoppingPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }

        //Define WebElements by: Id, CssSelector or XPath

        private IWebElement OptionCheckout => WebDriver.FindElementByXPath("//a[text()='Checkout']");
        private IWebElement BtnContinue => WebDriver.FindElementByXPath("//a[text()='Continue']");

        private By SubtitleShoppingCart => By.XPath("//div[@id='content']/h1");
        private IWebElement RemoveIt => WebDriver.FindElementByXPath("//button[@data-original-title='Remove']");
     
        private IWebElement MessageRemove => WebDriver.FindElementByXPath("//div[@id='content']/p");
        
        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();


        //Define functions and actions 

        public ShoppingPage RemoveItem()
        {
            RemoveIt.Click();

            return this;
        }

        public ShoppingPage ValidateRemoveAll()
        {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(SubtitleShoppingCart));
            Assert.AreEqual("Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.", MessageRemove.Text);
            BtnContinue.Click();

            return this;
        }

        public ShoppingPage GetPurchase()
        {
            OptionCheckout.Click();
            return this;
        }
    }
}