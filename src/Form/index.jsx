import { Submit, Wrapper, Input, FormElement } from "./styles.jsx";
export default function Form() {
  return (
    <Wrapper>
      <FormElement>
        <Input label="Nombre" type="text" placeholder="Type Here" />
        <Input label="Número de Teléfono" type="text" placeholder="Type Here" />
        <Input label="Usuario" type="text" placeholder="Type Here" />
        <Input label="Apellido" type="text" placeholder="Type Here" />
        <Input label="Correo Electrónico" type="text" placeholder="Type Here" />
        <Input label="Contraseña" type="text" placeholder="Type Here" />
        <Submit type="submit" value="REGISTRATE" />
      </FormElement>
    </Wrapper>
  );
}
