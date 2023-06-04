using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;

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
        

        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();


        //Define functions and actions 

        public ShoppingPage GetPurchase()
        {
            OptionCheckout.Click();
            return this;
        }
    }
}