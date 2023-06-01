using Vueling.Auto.Template.SetUp;
using Vueling.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Collections.Generic;
using System.Threading;


namespace Vueling.Auto.Template.WebPages
{
    public class LogInPages : CommonPage
    {
        public LogInPages(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
            
        }
        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();

        //Todo buscar elemento
        
        private IWebElement btnLogIn
        {
            get { return WebDriver.FindElementById("login2"); }
        }

        private IWebElement btnLogger
        {
            get { return WebDriver.FindElementByXPath("//button[text()='Log in']"); }
        }

        private IWebElement Username
        {
            get { return WebDriver.FindElementById("loginusername"); }
        }

        private IWebElement Password
        {
            get { return WebDriver.FindElementById("loginpassword"); }
        }

        private IWebElement btnClose
        {
            get { return WebDriver.FindElementByXPath("/html/body/div[4]/div/div/div[3]/button"); }
        }

        

        //FUNCIONES
        public LogInPages login()
        {
            btnLogIn.Click();
            Username.SendKeys("groguet1996");
            Password.SendKeys("1234asdf");
            btnLogger.Click();
            //new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(btnWelcome));

            return this;
        }

       
    }
}
