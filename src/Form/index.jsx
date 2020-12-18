import { useState } from "react";
import {
  Price,
  Label,
  Textarea,
  SeparationWrapper,
  Wrapper,
  Input,
  Box,
  Button,
  InputElement,
  FormElement,
} from "./styles.jsx";
import Wizard from "./Wizard";

export default function Form() {
  const [firstStepData, setFirstStepData] = useState({});
  const [secondStepData, setSecondStepData] = useState({});
  const [thirdStepData, setThirdStepData] = useState({});

  const onChangeHandler = (e, setState) => {
    setState((state) => {
      console.info("This is the last state", state);
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Wrapper>
      <FormElement>
        <Wizard
          steps={[
            <>
              <Input
                label="Nombre"
                type="text"
                name="firstName"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.firstName}
                placeholder="Type Here"
              />
              <Input
                label="Número de Teléfono"
                type="text"
                name="phone"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.phone}
                placeholder="Type Here"
              />
              <Input
                label="Usuario"
                type="text"
                name="userName"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.userName}
                placeholder="Type Here"
              />
              <Input
                label="Apellido"
                type="text"
                name="lastName"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.lastName}
                placeholder="Type Here"
              />
              <Input
                label="Correo Electrónico"
                type="text"
                name="email"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.email}
                placeholder="Type Here"
              />
              <Input
                label="Contraseña"
                type="text"
                name="password"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.password}
                placeholder="Type Here"
              />
            </>,

            <>
              <Input
                label="Marca"
                type="text"
                name="brand"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.brand}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Año"
                type="text"
                name="year"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.year}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Combustible"
                type="text"
                name="fuel"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.fuel}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Timón"
                type="text"
                name="steeringWheel"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.steeringWheel}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Número de puertas"
                type="text"
                name="doorsQuantity"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.doorsQuantity}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Color"
                type="text"
                name="color"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.color}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Motor (Cilindrada)"
                type="text"
                name="engine"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.engine}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Modelo"
                type="text"
                name="model"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.model}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Tipo"
                type="text"
                name="type"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.type}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Tipo de Transmisión"
                type="text"
                name="transmissionType"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.transmissionType}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Código de referencia"
                type="text"
                name="referenceCode"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.referenceCode}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Kilometraje"
                type="text"
                name="mileage"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.mileage}
                placeholder="Enter the brand of your car"
              />
              <Input
                label="Nro. Cilindros"
                type="text"
                name="cylinderQuantity"
                onChange={(e) => onChangeHandler(e, setSecondStepData)}
                value={secondStepData.cylinderQuantity}
                placeholder="Enter the brand of your car"
              />
              <SeparationWrapper>
                <Label>Descripción</Label>
                <Textarea
                  name="description"
                  onChange={(e) => onChangeHandler(e, setSecondStepData)}
                  id=""
                  cols="30"
                  rows="10"
                  value={secondStepData.description}
                  placeholder="Enter something"
                />
              </SeparationWrapper>
            </>,
            <>
              <Box w="100%">
                <Price
                  label="Precio"
                  button="Precio"
                  type="text"
                  name="price"
                  onChange={(e) => onChangeHandler(e, setThirdStepData)}
                  value={thirdStepData.price}
                  placeholder="Enter the price"
                />
                <Box mt="2rem">
                  <Label>Ubicación</Label>

                  <Box display="flex" flexWrap="wrap">
                    <Box>
                      <Box w="100%">
                        <Label>Departamento</Label>
                      </Box>
                      <InputElement
                        type="text"
                        name="department"
                        onChange={(e) => onChangeHandler(e, setThirdStepData)}
                        value={thirdStepData.department}
                        placeholder="Enter text"
                      />
                    </Box>

                    <Box>
                      <Box w="100%">
                        <Label>Provincia</Label>
                      </Box>
                      <InputElement
                        type="text"
                        name="province"
                        onChange={(e) => onChangeHandler(e, setThirdStepData)}
                        value={thirdStepData.province}
                        placeholder="Enter text"
                      />
                    </Box>

                    <Box>
                      <Box w="100%">
                        <Label>Distrito</Label>
                      </Box>
                      <InputElement
                        type="text"
                        name="distrite"
                        onChange={(e) => onChangeHandler(e, setThirdStepData)}
                        value={thirdStepData.distrite}
                        placeholder="Enter text"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box mt="2rem" mr="auto" ml="auto">
                  <Label>Fotos</Label>

                  <Box mt="1rem">
                    <InputElement type="file" />
                  </Box>
                </Box>

                <Box mt="2rem" mr="auto" ml="auto">
                  <Label>Video Youtube</Label>

                  <Box mt="1rem">
                    <InputElement
                      type="text"
                      name="videoLink"
                      onChange={(e) => onChangeHandler(e, setThirdStepData)}
                      value={thirdStepData.videoLink}
                      placeholder="Enter your video url"
                    />
                  </Box>
                  <Box>
                    <Button color="white" background="blue">
                      Subir Video
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>,
            <>
              <Box w="100%">
                <Box mb="2rem">
                  <Label>Accesorios</Label>
                </Box>

                <Box display="flex">
                  <Box mr="auto" ml="auto">
                    <Box>
                      <Label>Equipamiento</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Retrovisores</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Neblineros</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Aire Acondicionado</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>full Equipo</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Computadora a Bordo</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Parlantes/Bajos</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Radio CD</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Radio MP3</Label>
                    </Box>
                  </Box>
                  <Box mr="auto" ml="auto">
                    <Box>
                      <Label>Exterior</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Aros</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Aros de Aleación</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Parrilla</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Luces Halógenas</Label>
                    </Box>
                  </Box>

                  <Box mr="auto" ml="auto">
                    <Box>
                      <Label>Seguridad</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Localizador(GPS)</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Airbag</Label>
                    </Box>

                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Láminas de Seguridad</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Blindado</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Faros antiniebla delantero</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Faros antiniebla traseros</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Inmovilizador de motor</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Repartidor electrónico de frenado</Label>
                    </Box>
                  </Box>

                  <Box mr="auto" ml="auto">
                    <Box>
                      <Label>Extras</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Sunroof</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Asientos de cuero</Label>
                    </Box>
                    <Box mt="1rem">
                      <Box mr=".75rem">
                        <InputElement type="checkbox" />
                      </Box>
                      <Label>Climatizador</Label>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>,
          ]}
        />
      </FormElement>
    </Wrapper>
  );
}
