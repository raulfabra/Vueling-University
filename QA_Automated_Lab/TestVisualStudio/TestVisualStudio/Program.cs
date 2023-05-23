using System;

class Ejemplo
{
    private const string V = ".";

    public static void Main(string[] args)
    {
        Console.WriteLine("¿Cual es tu lenguaje de programación preferido?");
        String texto;
        texto = Console.ReadLine();
        Console.WriteLine("Tu lenguaje favorito es: " + texto);
        Console.WriteLine("¿Cuantos años tienes de experiencia en el lenguaje? ");
        string stringNumero1;
        stringNumero1 = Console.ReadLine();
        try
        {
            int numero1 = Int32.Parse(stringNumero1);
            Console.WriteLine("Asi que tienes " + numero1 + " año/s de experiencia en " + texto + V);
        }
        catch (FormatException)
        {
            Console.WriteLine("No has introducido los caracteres validos");
        }

    }
}