interface Recepcion {
  cultivo: string;
  noProcesado: number;
  corriendo: Corriendo;
  completado: number;
  agricolas: Agricola[];
  detailed: boolean;
  total_para_empacar: number;
}

interface Agricola {
  agricola: string;
  noProcesado: number;
  corriendo: Corriendo;
  completado: number;
  lotes: Lote[];
  detailed: boolean;
  total_para_empacar: number;
}

interface Corriendo {
  procesado: number;
  porProcesar: number;
}

interface Lote {
  lote: string;
  noProcesado: number;
  corriendo: Corriendo;
  completado: number;
  recepciones: Recepcione[];
  detailed: boolean;
  total_para_empacar: number;
}

interface Recepcione {
  recepcion: string;
  noProcesado: number;
  corriendo: Corriendo;
  completado: number;
  dias_piso: number;
  total_para_empacar: number;
}

export default Recepcion;
