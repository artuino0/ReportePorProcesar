const formatearNumeroMexicano = (cadena: number): string => {
  try {
    const numero: number = cadena;
    return numero.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } catch (error) {
    return "Error: La cadena no es un número válido.";
  }
};
export default formatearNumeroMexicano;
