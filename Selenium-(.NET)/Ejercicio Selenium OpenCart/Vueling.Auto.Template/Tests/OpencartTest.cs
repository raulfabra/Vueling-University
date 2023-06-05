using AventStack.ExtentReports;
using NUnit.Framework;
using OpenCart.Auto.Template.Webpages;
using OpenQA.Selenium;
using Proyecto.Auto.Template.Webpages;
using System;
using System.Net.Mail;

namespace Proyecto.Auto.Template.Tests
{
    [TestFixture]
    class OpenCartPage : TestSetCleanBase
    {

        //VARIABLES
        string email         = "pruebas@mailinator.com";
        string password      = "groguet96";
        int[] price          = { 80, 100 };
        int[] value          = { 226, 217 };
        int[] value_2        = { 15, 2 };
        int[] idArticle      = { 30, 42, 48, 46 };
        string[] menuPage    = { "Show All Desktops", "Show All Laptops & Notebooks" };
        string[] nameArticle = { "Canon EOS 5D", "Apple Cinema 30", "iPod Classic", "Sony VAIO" };
        string[] formulario  = { "Raul", "Fabra", "Sant vicent del raspeig", "Barcelona", "08010" };


        [TestCase]
        public void SignupANDLoginup()
        {
            homePage        = new HomePage(setUpWebDriver);
            signupPage      = new SignUpPage(setUpWebDriver);

            homePage        .GoSignUpPage();
            signupPage      .FillRegister();
            signupPage      .ValidateRegister(); //ASSERT
        }

        [TestCase]
        public void AddToCartProduct()
        {
            homePage        = new HomePage(setUpWebDriver);
            loginPage       = new LoginPage(setUpWebDriver);
            desktopsPage    = new DesktopsPage(setUpWebDriver);
            elementPage     = new ElementPage(setUpWebDriver);

            homePage        .GoLoginPage();
            loginPage       .GetLogin(email, password);

            homePage        .GoDesktopsPage(menuPage[0]);
            desktopsPage    .SeleccionarArticulo(idArticle[0]);
            elementPage     .AddToCart(nameArticle[0], value[0], value_2[0]);
            elementPage     .ValidateAddCart(price[0]);         //ASSERT
            homePage        .GoToCartPage();

        }

        [TestCase]
        public void RemoveProductFromCart()
        {
            homePage           = new HomePage(setUpWebDriver);
            loginPage          = new LoginPage(setUpWebDriver);
            desktopsPage       = new DesktopsPage(setUpWebDriver);
            elementPage        = new ElementPage(setUpWebDriver);
            shoppingPage       = new ShoppingPage(setUpWebDriver);

            homePage            .GoLoginPage();
            loginPage           .GetLogin(email, password);

            homePage            .GoDesktopsPage(menuPage[0]);
            desktopsPage        .SeleccionarArticulo(idArticle[2]);
            elementPage         .AddToCart(nameArticle[2], value[0], value_2[0]);
            elementPage         .ValidateAddCart(price[1]);     //ASSERT
            homePage            .GoToCartPage();
            shoppingPage        .RemoveItem();
            shoppingPage        .ValidateRemoveAll();           //ASSERT

        }

        [TestCase]
        public void BuyElectrodomestics()
        {
            homePage        = new HomePage(setUpWebDriver);
            loginPage       = new LoginPage(setUpWebDriver);
            desktopsPage    = new DesktopsPage(setUpWebDriver);
            laptopsPage     = new LaptopsPage(setUpWebDriver);
            elementPage     = new ElementPage(setUpWebDriver);
            shoppingPage    = new ShoppingPage(setUpWebDriver);
            paymentPage     = new PaymentPage(setUpWebDriver);



            homePage        .ValidateStayAtHome();              //ASSERT
            homePage        .GoLoginPage();
            loginPage       .GetLogin(email, password);
            loginPage       .ValidateLogIn();                   //ASSERT

            homePage        .GoDesktopsPage(menuPage[0]);
            desktopsPage    .ValidateGetAllDesktops();          //ASSERT
            desktopsPage    .SeleccionarArticulo(idArticle[0]);
            elementPage     .AddToCart(nameArticle[0], value[0], value_2[0]);

            homePage        .GoDesktopsPage(menuPage[0]);
            desktopsPage    .SeleccionarArticulo(idArticle[1]);
            elementPage     .AddToCart(nameArticle[1], value[1], value_2[1]); ;

            homePage        .GoDesktopsPage(menuPage[0]);
            desktopsPage    .SeleccionarArticulo(idArticle[2]);
            elementPage     .AddToCart(nameArticle[2], value[0], value_2[0]);

            homePage        .GoLaptopsPage(menuPage[1]);
            laptopsPage     .SeleccionarArticulo(idArticle[3]);
            elementPage     .AddToCart(nameArticle[3], value[0], value_2[0]);

            homePage        .GoToCartPage();
            shoppingPage    .GetPurchase();



            paymentPage     .BillingDetails(formulario);
            paymentPage     .DeliveryDetails();
            paymentPage     .DeliveryMethod();
            paymentPage     .PaymentMethod();
            paymentPage     .ConfirmOrder();
            
                    
            //Agrupar metodos repetitivos en un bucle // COMO LO PODRIA PASAR AL TEST?
            
            //FormularioPaymentMethod(formulario); // LO MISMO QUE LO DE ARRIBAR, ME GUSTARIA AGRUPAR TODO
                                                   // EL PAYMENT EN UNA FUNCION APARTE Y LLAMAR ESA FUNCION.
            
        }

        [TestCase]
        public void CheckSponsor()
        {
            homePage = new HomePage(setUpWebDriver);

            homePage.Sponsors(10, "Nintendo");                      //ASSERT

        }

    }

}
        //public void FormularioPaymentMethod(string[] formulario)
        //{
        //    paymentPage = new PaymentPage(setUpWebDriver);

        //    paymentPage.BillingDetails(formulario);
        //    paymentPage.DeliveryDetails();
        //    paymentPage.DeliveryMethod();
        //    paymentPage.PaymentMethod();
        //    paymentPage.ConfirmOrder();
        //    //ASSERT estoy en la pagina de pagar
        //    //ASSERT cumplo con los requisitos del formulario
        //    //ASSERT CONFIRMADO EL PEDIDO

        //}

            //googlePage = new GooglePage(setUpWebDriver);
            //test.Log(Status.Debug, "Entra en Google.");
            //string search1 = objectsTest.CallCase1FromScenarioTestXml(scenario);
            //string search2 = objectsTest.CallCase2FromScenarioTestXml(scenario);
            //googlePage.Busqueda(search1, search2);
            //test.Log(Status.Info, "Hace busqueda.");

            //googleSearch = new GoogleSearch(setUpWebDriver);
            ////test.Log(Status.Fail, "Cambio de pagina.");
            //googleSearch.SiguientePagina();
            //googleSearch.SeleccionarLink(0);
            ////test.Log(Status.Fatal, "No se que poner.");
            //test.Log(Status.Pass, "Fin del test.");