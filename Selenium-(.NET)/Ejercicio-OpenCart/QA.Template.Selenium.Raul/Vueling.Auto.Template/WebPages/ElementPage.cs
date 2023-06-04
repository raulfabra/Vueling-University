using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;
using OpenQA.Selenium.Support.UI;
using System;
using Proyecto.Auto.Template.Common;

namespace OpenCart.Auto.Template.Webpages
{
    public class ElementPage : CommonPage
    {

        //Constructor
        public ElementPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }


        //Define WebElements by: Id, CssSelector or XPath

        private By ImagenDelProducto (string nameArticle) => By.XPath($"//img[@title ='{nameArticle}']");

        private IWebElement OptionRadio => WebDriver.FindElementByXPath("//input[@type = 'radio' and @name= 'option[218]']");

        private IWebElement OptionCheckbox => WebDriver.FindElementByXPath("//input[@type = 'checkbox' and @name= 'option[223][]']");

        private IWebElement OptionTextArea => WebDriver.FindElementById("input-option209");

        private IWebElement InputOfColor (int value) => WebDriver.FindElementById($"input-option{value}");

        private IWebElement SelectColor (int value_2) => WebDriver.FindElementByXPath($"//option[@value='{value_2}']");

        private IWebElement OptionFile => WebDriver.FindElementById("button-upload222");

        private IWebElement OptionQTY => WebDriver.FindElementById("input-quantity");

        private IWebElement ButtonAddCart => WebDriver.FindElementById("button-cart");

        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();


        //Define functions and actions 

        public ElementPage AddToCart(string nameArticle, int value, int value_2)
        {
            if (nameArticle == "Canon EOS 5D")
            {
                InputOfColor(value).Click();
                SelectColor(value_2).Click();
                ButtonAddCart.Click();
                WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(10));

            }
            if (nameArticle == "Apple Cinema 30")
            {
                OptionRadio.Click();
                OptionCheckbox.Click();
                InputOfColor(value).Click();
                SelectColor(value_2).Click();
                OptionTextArea.SendKeys("Me gusta la TV");
                //OptionFile.Click();
                OptionQTY.Click();
                OptionQTY.Clear();
                OptionQTY.SendKeys("1");
                WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(10));

            }
            if (nameArticle == "iPod Classic" || nameArticle == "Sony VAIO")
            {
                ButtonAddCart.Click();
                WebDriverWait wait = new WebDriverWait(WebDriver, TimeSpan.FromSeconds(10));
            }


            return this;
        }
    }
}