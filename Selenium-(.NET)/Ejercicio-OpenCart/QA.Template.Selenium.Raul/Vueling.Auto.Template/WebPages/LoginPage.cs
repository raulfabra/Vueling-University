using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;
using OpenQA.Selenium.Support.UI;
using System;
using Proyecto.Auto.Template.Common;

namespace OpenCart.Auto.Template.Webpages
{
    public class LoginPage : CommonPage
    {

        //Constructor
        public LoginPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }
        
        //Define WebElements by: Id, CssSelector or XPath

        private IWebElement BtnAccount  => WebDriver.FindElementByXPath("//a[@title = 'My Account']");

        private IWebElement BtnLogIn    => WebDriver.FindElementByCssSelector("//a[@title='My Account']//../ul//a[text()='Login']");

        private By SubtitleNewCustomer => By.TagName("h2");

        private By SubtitleMyAccount => By.TagName("h2");

        private IWebElement EmailAdress => WebDriver.FindElementById("input-email");

        private IWebElement Password => WebDriver.FindElementById("input-password");

        private IWebElement SetLogIn => WebDriver.FindElementByXPath("//input[@value= 'Login']");

        private IWebElement BtnHome => WebDriver.FindElementByXPath("//a[text()='Your Store']");







        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();


        //Define functions and actions 

        public LoginPage GetLogin(string email, string password)
        {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(SubtitleNewCustomer));
            EmailAdress.Click();
            EmailAdress.SendKeys(email);
            Password.Click();
            Password.SendKeys(password);
            SetLogIn.Click();
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(SubtitleMyAccount));
            BtnHome.Click();

            return this;
        }


    }
}



//new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(btnWelcome));
//WebDriver.FindElement(By.Id("ensCloseBanner")).Click();
            //act.SendKeys(Buscador, busqueda2).Build().Perform();
            //Thread.Sleep(1000);
            //Buscador.SendKeys(Keys.Return);
