using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Threading;

namespace OpenCart.Auto.Template.Webpages
{
    public class LaptopsPage : CommonPage
    {

        //Constructor
        public LaptopsPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }
        
        //Define WebElements by: Id, CssSelector or XPath

        private IWebElement Articulos (int idArticle) => WebDriver.FindElementByXPath($"//h4/a[contains(@href, 'product_id={idArticle}')]");
        

        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();
        //private IWebElement BuscarButton => throw new System.NotImplementedException();


        //Define functions and actions 

        public LaptopsPage SeleccionarArticulo(int idArticle)
        {
            Articulos(idArticle).Click();
            return this;
        }
    }
}