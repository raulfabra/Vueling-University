namespace CalcTesting
{
    [TestClass]
    public class UnitTest1
    {
      
        int x = 2;
        int y = 4;

        int esperadoSuma = 6;
        int esperadoResta = -2;
        int esperadoMultiplicacion = 8;
        int esperadoDivision = 2;
        int esperadoResto = 0;


        [TestMethod]
        public void sum_Test()
        {
            int resSuma = Calculadora.Program.Suma(x, y);
            Assert.AreEqual(esperadoSuma, resSuma);

        }

        
        [TestMethod]
        public void res_Test()
        {
            int resResta = Calculadora.Program.Resta(x, y);
            Assert.AreEqual(esperadoResta, resResta);
        }

        [TestMethod]
        public void mult_Test()
        {
            int resMult = Calculadora.Program.Mult(x, y);
            Assert.AreEqual(esperadoMultiplicacion, resMult);

        }

        [TestMethod]
        public void div_Test()
        {
            int resDiv = Calculadora.Program.Div(x, y);
            Assert.AreEqual(esperadoDivision, resDiv);

        }

        [TestMethod]
        public void resto_Test()
        {
            int resResto = Calculadora.Program.Resto(x, y);
            Assert.AreEqual(esperadoResto, resResto);
        }

    }

    [TestClass]
    public class UnitTest1_1
    {
        float r = 7.85693F;

        double x = 10.5;
        int y = 2;
        int z = 100;
        int resultado = 525;
    
        [TestMethod]
        public void oper_Test()
        {
            int operTest = Calculadora.Operations.Oper1(x, y, z);
            Assert.AreEqual(resultado, operTest);
        }

        [TestMethod]
        public void triangulo_Test()
        {
            double areaTest = Calculadora.Operations.AreaTriangulo(x, y);
            Assert.IsTrue(areaTest > 0);
        }

        [TestMethod]
        public void perimetro_Test()
        {
            double perimetro_esfera = Calculadora.Operations.PerimetroEsfera(r);
            var resultado = 2 * Math.PI * r;
            Assert.AreEqual(resultado, perimetro_esfera);
        }
    }

    [TestClass]
    public class UnitTest1_2
    {
        string animal = "Caballo";

        int precioA = 250;
        int precioB = 99;
        float descuento = 0.35F;

        [TestMethod]
        public void bucle_Test()
        {
            string resultado = Calculadora.Loops_Conditions.Bucle_Test();
            Assert.AreEqual(animal, resultado);
        }

        [TestMethod]
        public void Conditional_Test()
        {
            float nuevoPrecioEsperado1 = Calculadora.Loops_Conditions.Condicional_test(precioA, descuento);
            float nuevoPrecioEsperado2 = Calculadora.Loops_Conditions.Condicional_test(precioB, descuento);

            Assert.AreEqual(nuevoPrecioEsperado1, precioA);
            Assert.AreEqual(nuevoPrecioEsperado2, (precioB * descuento));
            
        }

    }
}