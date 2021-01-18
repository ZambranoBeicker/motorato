import { useState, useEffect } from "react";
import {
  Checkbox,
  SelectElement,
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
  const [photos, setPhotos] = useState([]);

  const days = Array(31).fill(null);

  const onChangeHandler = (e, setState) => {
    setState((state) => {
      console.info("This is the last state", state);
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    console.info("this is the file", thirdStepData.photo);
  }, [thirdStepData]);

  return (
    <Wrapper>
      <FormElement>
        <Wizard
          data={{
            user: firstStepData,
            vehicle: {
              main: secondStepData,
              commercial: thirdStepData,
            },
            files: [...photos],
          }}
          steps={[
            <>
              <Input
                label="Nombre"
                type="text"
                name="firstName"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.firstName}
                placeholder="Tu nombre"
              />
              <Input
                label="Apellido"
                type="text"
                name="lastName"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.lastName}
                placeholder="Tu apellido"
              />
              <Input
                label="Correo Electrónico"
                type="text"
                name="email"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.email}
                placeholder="Tu correo electónico"
              />
              <Input
                label="Número de Teléfono"
                type="text"
                name="phone"
                onChange={(e) => onChangeHandler(e, setFirstStepData)}
                value={firstStepData.phone}
                placeholder="Tu número de teléfono"
              />
              <Box>
                <Box>
                  <Label>Documento</Label>
                </Box>
                <Box display="flex" mt="0.625rem">
                  <Box w="30%" mr="auto">
                    <SelectElement
                      options={["DNI", "Pasaporte", "Carnet De Extranjería"]}
                    />
                  </Box>
                  <Box w="68%" ml="auto">
                    <InputElement
                      type="text"
                      placeholder="Número de documento"
                    />
                  </Box>
                </Box>
              </Box>
              <Box>
                <InputElement type="checkbox" />
                <Label>
                  Acepto las políticas de privacidad y los terminos de
                  condiciones de Motorato.com
                </Label>
              </Box>
            </>,

            <>
              <Box>
                <Box>
                  <Label>Sobre el auto</Label>
                </Box>
                <Box>
                  <Label>Marca</Label>
                  <SelectElement options={["BMW", "Ford", "Toyota"]} />
                </Box>
                <Box mt="1rem">
                  <Label>Modelo</Label>
                  <SelectElement options={["BMW", "Ford", "Toyota"]} />
                </Box>
                <Input
                  label="Combustible"
                  type="text"
                  name="fuel"
                  onChange={(e) => onChangeHandler(e, setSecondStepData)}
                  value={secondStepData.fuel}
                  placeholder="Tipo de combustible"
                />
                <Input
                  label="Timón"
                  type="text"
                  name="steeringWheel"
                  onChange={(e) => onChangeHandler(e, setSecondStepData)}
                  value={secondStepData.steeringWheel}
                  placeholder=""
                />
                <Input
                  label="Número de puertas"
                  type="text"
                  name="doorsQuantity"
                  onChange={(e) => onChangeHandler(e, setSecondStepData)}
                  value={secondStepData.doorsQuantity}
                  placeholder="Cantidad de puertas de tu auto"
                />
                <Input
                  label="Color"
                  type="text"
                  name="color"
                  onChange={(e) => onChangeHandler(e, setSecondStepData)}
                  value={secondStepData.color}
                  placeholder=""
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
                  label="Tipo de vehículo"
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
              </Box>
              <Box mt="1.75rem">
                <Box mb="-1rem">
                  <Label>Condiciones del Auto</Label>
                </Box>
                <Input
                  label="Año"
                  type="text"
                  name="year"
                  onChange={(e) => onChangeHandler(e, setSecondStepData)}
                  value={secondStepData.year}
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
                  label="Tipo de Placa"
                  type="text"
                  name="placa"
                  onChange={(e) => onChangeHandler(e, setSecondStepData)}
                  value={secondStepData.referenceCode}
                  placeholder="Enter the brand of your car"
                />
              </Box>
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
                    <InputElement
                      multiple={true}
                      name="file[]"
                      onChange={(e) => {
                        if (e.target.files.length > 20) {
                          alert("Solo puedes guardar hasta 20 imágenes");
                          e.preventDefault();
                        } else {
                          console.info(e.target);
                          console.info(e.target.files.length);
                          console.log("Changed");
                          setPhotos([...e.target.files]);
                        }
                      }}
                      type="file"
                    />
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
                    <Button
                      margin="1rem 0 0 0"
                      color="white"
                      background="var(--azul)"
                      next
                    >
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

                <Box flexWrap="wrap" display="flex">
                  <Box mt="1rem">
                    <Checkbox label="Retrovisores Eléctricos" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Neblineros" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Aire Acondicionado" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Full Equipo" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Computadora de abordo" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Parlantes/Bajos" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Radio CD" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Radio MP3" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Aros" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Aros de Aleación" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Parrilla" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Luces Halógenas" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Localizador (GPS)" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Airbag" />
                  </Box>

                  <Box mt="1rem">
                    <Checkbox label="Láminas de Seguridad" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Blindado" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Faros antiniebla delantero" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Faros antiniebla traseros" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Inmovilizador de motor" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Repartidor electrónico de frenado" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Frenos ABS" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Alarma" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Sunroof" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Asientos de cuero" />
                  </Box>
                  <Box mt="1rem">
                    <Checkbox label="Climatizador" />
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
