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
        private IWebElement BtnSignUp => WebDriver.FindElementByXPath("//a[@title='My Account']//../ul//a[text()='Register']");
        private IWebElement BtnDesktops => WebDriver.FindElementByXPath("//li[@class = 'dropdown']/a[text()='Desktops']");
        private IWebElement BtnLaptops => WebDriver.FindElementByXPath("//li[@class = 'dropdown']/a[text()='Laptops & Notebooks']");
        private IWebElement BtnShoppingCart => WebDriver.FindElementByXPath("//a[@title='Shopping Cart']");

        private IWebElement ShowAllItems (string article) => WebDriver.FindElementByXPath($"//div[@class = 'dropdown-menu']/a[text()='{article}']");

        private IWebElement MessageHome => WebDriver.FindElementByTagName("h3");
        
        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();

        private IWebElement RightCarousel => WebDriver.FindElementByXPath("//*[@id='content']/div[3]/div[3]/div[1]");
        private IWebElement LightCarousel => WebDriver.FindElementByXPath("//*[@id='content']/div[3]/div[3]/div[2]");
        private IWebElement NameSponsor (string name) => WebDriver.FindElementByXPath($"//img[contains(@alt,'{name}')]");
        private IWebElement Sponsor(int num, string name) => WebDriver.FindElementByXPath($"//div[@data-swiper-slide-index='{num}']/img[contains(@alt,{name})]");

        //Define functions and actions 

        public HomePage GoSignUpPage()
        {
            BtnAccount.Click();
            BtnSignUp.Click();

            return this;
        }

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

        public HomePage ValidateStayAtHome()
        {
            Assert.AreEqual("Featured", MessageHome.Text);
            return this;
        }

        
        public HomePage Sponsors(int num, string name)
        {
            for (int i = 0; i < 11; i++)
            {
                if (Sponsor(i,name).GetAttribute("alt") == name)
                {
                    Assert.AreEqual(name, NameSponsor(name).GetAttribute("alt"));
                }
            }
            
            return this;
        }
    }
}