
using System.Text.RegularExpressions;

namespace Calculadora;
public class Program
{
    public static void Main(string[] args)
    {
        
    }

    public static int Suma(int x, int y)
    {
        return x + y;
    }

    public static int Resta(int x, int y)
    {
        return x - y;
    }

    public static int Mult(int x, int y)
    {
        return x * y;
    }

    public static int Div(int x, int y)
    {
        return y / x;
    }

    public static int Resto(int x, int y)
    {
        return y % x;
    }
}

public class Operations
{ 
    
    public static int Oper1(double x, int y, int z)
    {
        var logica = Math.Floor(x / y * z);
        return (int) logica;
    }

    public static double AreaTriangulo(double b, int a)
    {
        return b * a / 2;
    }

    public static double PerimetroEsfera (float r)
    {        
        return 2 * Math.PI * r;
    }
}

public class Loops_Conditions
{

    public static string Bucle_Test()
    {
        string animal = "Caballo";
        string characters = "";

        for (int i = 0; i < animal.Length; i++)
        {
            characters += animal.Substring(i, 1);
            
        }
        return characters;

    }

    public static float Condicional_test(int precio, float descuento)
    {
        if (precio >= 200 && descuento < 0.15F) { return precio * descuento; };
        if (precio <= 200 || descuento > 0.50F) {return precio * descuento; };
        
        return precio;
    }

}
