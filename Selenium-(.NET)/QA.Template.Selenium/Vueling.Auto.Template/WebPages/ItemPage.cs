using Vueling.Auto.Template.SetUp;
using Vueling.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Collections.Generic;
using System.Threading;
using OpenQA.Selenium.Support.UI;
using System;
using Vueling.Auto.Template.Common;

namespace Vueling.Auto.Template.WebPages
{
    public class ItemPage : CommonPage
    {
        //CONSTRUCTOR

        public ItemPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }

        //WEB ELEMENTS

        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();

        private IWebElement btnHome => WebDriver.FindElementByXPath("//a[text()='Home ']");

        private IWebElement btnCart => WebDriver.FindElementByXPath("//a[text()='Cart']");

        private IWebElement btnClose => WebDriver.FindElementByXPath("/html/body/div[4]/div/div/div[3]/button");

        private IWebElement btnAddCart => WebDriver.FindElementByXPath("//a[text()='Add to cart']");



        //FUNCIONES 

        public ItemPage GoCart()
        {
            btnAddCart.Click();
            WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(10));
            IAlert alert = wait.Until(ExpectedConditions.AlertIsPresent());
            alert.Accept();
            btnCart.Click();
            
            return this;
        }

        public ItemPage AddCart()
        {
            Thread.Sleep(2000);
            btnAddCart.Click();
            btnHome.Click();

            return this;
        }


    }
}
