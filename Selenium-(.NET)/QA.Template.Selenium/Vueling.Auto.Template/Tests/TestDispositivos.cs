using AventStack.ExtentReports;
using NUnit.Framework;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium;
using System;
using Vueling.Auto.Template.Common;
using Vueling.Auto.Template.WebPages;
using System.Threading;

namespace Vueling.Auto.Template.Tests
{
    [TestFixture]
    class Add_Laptop : TestSetCleanBase
    {


        [TestCase]
        public void Test1()
        {
            hacerLogIn           = new WebPages.LogInPages(setUpWebDriver);
            abrirCatalogoLaptops = new WebPages.HomePage(setUpWebDriver);
            añadirLaptopToCart   = new WebPages.ItemPage(setUpWebDriver);
            abrirCardPage        = new CartPage(setUpWebDriver);
            
            
            hacerLogIn          .login();
            abrirCatalogoLaptops.listLaptops();
            añadirLaptopToCart  .GoCart();
            abrirCardPage       .Payment();
           
        }

        [TestCase]
        public void Test2()
        {
            hacerLogIn           = new WebPages.LogInPages(setUpWebDriver);
            abrirCatalogoPhones  = new WebPages.HomePage(setUpWebDriver);
            añadirLaptopToCart   = new WebPages.ItemPage(setUpWebDriver);
            abrirCardPage        = new CartPage(setUpWebDriver);


            hacerLogIn         .login();
            abrirCatalogoPhones.listPhones();
            añadirLaptopToCart .GoCart();
            abrirCardPage      .Payment();

        }

        [TestCase]
        public void Test3()
        {
            hacerLogIn             = new WebPages.LogInPages(setUpWebDriver);
            abrirCatalogoMonitores = new WebPages.HomePage(setUpWebDriver);
            añadirLaptopToCart     = new WebPages.ItemPage(setUpWebDriver);
            abrirCardPage          = new CartPage(setUpWebDriver);
            
            
            hacerLogIn              .login();
            abrirCatalogoMonitores  .listMonitores();
            añadirLaptopToCart      .GoCart();
            abrirCardPage           .Payment();

        }

        [TestCase]
        public void Test4()
        {
            hacerLogIn              = new WebPages.LogInPages(setUpWebDriver);
            abrirCatalogoMonitores  = new WebPages.HomePage(setUpWebDriver);
            añadirLaptopToCart      = new WebPages.ItemPage(setUpWebDriver);
            abrirCatalogoPhones     = new WebPages.HomePage(setUpWebDriver);
            comprobarItems          = new CartPage(setUpWebDriver);

            hacerLogIn              .login();
            abrirCatalogoMonitores  .listMonitores();
            añadirLaptopToCart      .AddCart();
            abrirCatalogoPhones     .listPhones();
            añadirLaptopToCart      .GoCart();
            comprobarItems          .ComprobarCarrito("HTC One M9", "Apple monitor 24");
            
        }

        [TestCase]
        public void Test5()
        {
            hacerLogIn              = new WebPages.LogInPages(setUpWebDriver);
            abrirCatalogoMonitores  = new WebPages.HomePage(setUpWebDriver);
            añadirLaptopToCart      = new WebPages.ItemPage(setUpWebDriver);
            abrirCatalogoPhones     = new WebPages.HomePage(setUpWebDriver);
            comprobarItems          = new CartPage(setUpWebDriver);
            eliminarItems           = new CartPage(setUpWebDriver);
            
            hacerLogIn              .login();
            abrirCatalogoMonitores  .listMonitores();
            añadirLaptopToCart      .AddCart();
            abrirCatalogoPhones     .listPhones();
            añadirLaptopToCart      .GoCart();
            comprobarItems          .ComprobarCarrito("HTC One M9", "Apple monitor 24");
            eliminarItems           .EliminarItems("HTC One M9");
            
        }
    }
}
