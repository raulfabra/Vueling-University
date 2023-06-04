using Proyecto.Auto.Template.SetUp;
using Proyecto.Auto.Template.WebPages.Base;
using OpenQA.Selenium;
using System.Collections.Generic;
using System.Threading;

namespace Proyecto.Auto.Template.Webpages
{
    public class DesktopsPage : CommonPage
    {

        //CONSTRUCTOR
        public DesktopsPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver)
        {
        }

        //Find IWebElement By, ID, Css, XPath

        private IWebElement Articulos (int idArticle) => WebDriver.FindElementByXPath($"//h4/a[contains(@href, 'product_id={idArticle}')]");

        

        protected override IWebElement ApartadosBusqueda => throw new System.NotImplementedException();



        //FUNCTIONS

        public DesktopsPage SeleccionarArticulo(int idArticle)
        {
            Articulos(idArticle).Click();
            return this;
        }

    }
}

            //Jse2.ExecuteScript("arguments[0].click()", Links[link]);
            ////act.Click(Links[link]).Build().Perform();
        //public DesktopsPage SiguientePagina()
        //{
        //    //act.MoveToElement(Pagina2).Build().Perform();
        //    Jse2.ExecuteScript("arguments[0].scrollIntoView()", Pagina2);
        //    Thread.Sleep(1000);
        //    Pagina2.Click();
        //    return this;
        //}