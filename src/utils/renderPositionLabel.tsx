export const renderPositionLabel = (position: string): string => {
  let label = "";
  switch (position) {
    case "F1S1":
      label = "Fila 1, Sezione 1";
      break;
    case "F1S2":
      label = "Fila 1, Sezione 2";
      break;
    case "F1S3":
      label = "Fila 1, Sezione 3";
      break;
    case "F1S4":
      label = "Fila 1, Sezione 4";
      break;
    case "F2S1":
      label = "Fila 2, Sezione 1";
      break;
    case "F2S2":
      label = "Fila 2, Sezione 2";
      break;
    case "F2S3":
      label = "Fila 2, Sezione 3";
      break;
    case "F2S4":
      label = "Fila 2, Sezione 4";
      break;
    case "F3S1":
      label = "Fila 3, Sezione 1";
      break;
    case "F3S2":
      label = "Fila 3, Sezione 2";
      break;
    case "F3S3":
      label = "Fila 3, Sezione 3";
      break;
    case "F3S4":
      label = "Fila 3, Sezione 4";
      break;
    case "F4S1":
      label = "Fila 4, Sezione 1";
      break;
    case "F4S2":
      label = "Fila 4, Sezione 2";
      break;
    case "F4S3":
      label = "Fila 4, Sezione 3";
      break;
    case "F4S4":
      label = "Fila 4, Sezione 4";
      break;

    default:
      label = "Ho ordinato questo film ed è in arrivo!";
      break;
  }
  return label;
};
