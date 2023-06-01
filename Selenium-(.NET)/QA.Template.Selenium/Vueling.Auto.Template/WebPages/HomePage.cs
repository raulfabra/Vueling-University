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
    public class HomePage : CommonPage
    {
        //CONSTRUCTOR

        public HomePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {     
        }


        //WEB ELEMENTS

        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();

        //Todo buscar elemento
        private IWebElement btnHome => WebDriver.FindElementByXPath("//a[text()='Home']");
        
        private IWebElement btnCart => WebDriver.FindElementByXPath("//a[text()='Cart']");
       
        
        private IWebElement _btnWelcome => WebDriver.FindElementById("nameofuser");
        private By btnWelcome => By.Id("nameofuser");
        

        private IWebElement btnLaptops => WebDriver.FindElementByXPath("//a[text()='Laptops']");
        private IWebElement laptop => WebDriver.FindElementByXPath("//a[text()='Sony vaio i5']");


        private IWebElement btnPhones => WebDriver.FindElementByXPath("//a[text()='Phones']");
        private IWebElement phone => WebDriver.FindElementByXPath("//a[text()='HTC One M9']");


        private IWebElement btnMonitor => WebDriver.FindElementByXPath("//a[text()='Monitors']");
        private IWebElement monitor => WebDriver.FindElementByXPath("//a[text()='Apple monitor 24']");




        //FUNCTIONS

        public HomePage listLaptops()
        {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(btnWelcome));
            btnLaptops.Click();
            laptop.Click();
            
            return this;
        }

        public HomePage listPhones()
        {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(btnWelcome));
            btnPhones.Click();
            phone.Click();

            return this;
        }

        public HomePage listMonitores()
        {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(btnWelcome));
            btnMonitor.Click();
            monitor.Click();

            return this;
        }


    }
}
