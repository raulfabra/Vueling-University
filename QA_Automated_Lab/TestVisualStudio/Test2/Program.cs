using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Introduccion();

            AreaTriangulo(BaseTriangulo(), AlturaTriangulo());

            Console.Read();
        }

        static void Introduccion()
        {
            Console.WriteLine("Vamos a calcular el area de un triangulo.");
        }

        static string BaseTriangulo()
        {
            Console.WriteLine("Introduce la base del triangulo: ");
            string baseTriangulo = Console.ReadLine();
            return baseTriangulo;
        }

        static string AlturaTriangulo()
        {
            Console.WriteLine("Introduce la altura del triangulo: ");
            string alturaTriangulo = Console.ReadLine();
            return alturaTriangulo;
        }

        static void AreaTriangulo(string b, string a)
        {
            int numB = Convert.ToInt32(b);
            int numA = Convert.ToInt32(a);  

            double areaTriangulo = numB * numA / 2;
            Console.WriteLine($"Por lo tanto, el area de este triangulo es {areaTriangulo}. Gracias");
        }
    }
}
