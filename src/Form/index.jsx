import {
  Label,
  Textarea,
  SeparationWrapper,
  Wrapper,
  Input,
  FormElement,
} from "./styles.jsx";
import Wizard from "./Wizard";

export default function Form() {
  return (
    <Wrapper>
      <FormElement>
        <Wizard
          steps={[
            <>
              <Input label="Nombre" type="text" placeholder="Type Here" />
              <Input
                label="Número de Teléfono"
                type="text"
                placeholder="Type Here"
              />
              <Input label="Usuario" type="text" placeholder="Type Here" />
              <Input label="Apellido" type="text" placeholder="Type Here" />
              <Input
                label="Correo Electrónico"
                type="text"
                placeholder="Type Here"
              />
              <Input label="Contraseña" type="text" placeholder="Type Here" />
            </>,

            <>
              <Input
                label="Marca"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Año"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Combustible"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Timón"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Número de puertas"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Color"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Motor (Cilindrada)"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Modelo"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Tipo"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Tipo de Transmisión"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Código de referencia"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Kilometraje"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Nro. Cilindros"
                type="text"
                placeholder="Enter the brand of your car"
              />
              <SeparationWrapper>
                <Label>Descripción</Label>
                <Textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter something"
                />
              </SeparationWrapper>
            </>,
          ]}
        />
      </FormElement>
    </Wrapper>
  );
}
