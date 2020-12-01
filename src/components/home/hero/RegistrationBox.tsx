import { useState, useContext, ChangeEvent }from 'react'
import { 
  Flex, 
  Heading, 
  Text,
} from "@chakra-ui/react";
import CustomInput from "../../CustomInput";
import CustomSelect from "../../CustomSelect";
import CustomButton from '../../CustomButton'

import PageContext from '../../../context'

import Ufs from '../../../services/ufs'
import IBGEUrl from '../../../services/ApiIBGE'

export const profileOptions = [
  { value: "consumers", label: "Cliente"},
  { value: "couriers", label: "Entregador"},
  { value: "restaurants", label: "Restaurante"}
]

const ufsList = Ufs.map(uf => ({
  value: uf.sigla, label: uf.sigla
}))

type citiesProps = {value: string, label:string}[]

const RegistrationBox: React.FC = () => {
  const [profile, setProfile] = useState("")
  const [email, setEmail] = useState("")
  const [uf, setUf] = useState("")
  const [city, setCity] = useState("")
  const [isLoadingCities, setIsLoadingCities] = useState(false)
  const [citiesList, setCitiesList] = useState<citiesProps>([])
  const [isSubmiting, setIsSubmiting] = useState(false)

  const clearForm = () => {
    setProfile("")
    setEmail("")  
    setUf("")
    setCity("")
    setCitiesList([])
    return console.log("Chamou")
  }

  const getCities = async (uf: string) => {
    const response = await fetch(`${IBGEUrl}/${uf}/municipios`)
    const cities = await response.json()
    const newState = cities.map(city => (
      { value: city.nome, label: city.nome}
    ))
    setCitiesList(newState)
    return setIsLoadingCities(false)
  }

  const { handleModalConfirmation, handleSubscription } = useContext(PageContext)

  const handleProfile = (event: ChangeEvent<HTMLSelectElement>) => 
    setProfile(event.target.value)
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => 
    setEmail(event.target.value)
  const handleUf = (event: ChangeEvent<HTMLSelectElement>) => {
    setIsLoadingCities(true)
    const uf = event.target.value
    getCities(uf)
    return setUf(uf)
  }
  const handleCity = (event: ChangeEvent<HTMLSelectElement>) => 
    setCity(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmiting(true)
    await handleSubscription(profile, email, city, uf, "" )
    setIsSubmiting(false)
    clearForm()
    return handleModalConfirmation("subscribe")
  }
  return (
    <Flex 
      flexDir="column"
      p="24px 16px"
      bg="white"
    >
      <Heading as="h2" fontSize="24px" mb="4px">
        Faça o pré-cadastro agora!
      </Heading>
      <Text fontSize="16px" fontFamily="Barlow">
        Quanto mais pré-cadastros na sua cidade, mais rápido chegaremos nela.
      </Text>
      <Flex
        as="form"
        flexDir={["column", null, null, "row"]}
        onSubmit={(event) => handleSubmit(event)}
      >
        <CustomSelect 
          id="subscribe-profile"
          label="Perfil"
          placeholder="Selecione seu perfil"
          value={profile}
          handleChange={handleProfile}
          options={profileOptions}
        />
        <CustomInput 
          id="subscribe-email"
          type="email" 
          label="E-mail" 
          placeholder="Digite seu e-mail."
          value={email}
          handleChange={handleEmail}
        />
        <CustomSelect 
          id="subscribe-uf"
          label="UF"
          placeholder="..."
          value={uf}
          handleChange={handleUf}
          options={ufsList}
          maxW="100px"
        />
        <CustomSelect
          isLoading={isLoadingCities} 
          id="subscribe-city"
          label="Cidade"
          placeholder={uf !== "" ? "Selecione sua cidade" : "..."}
          value={city}
          handleChange={handleCity}
          options={citiesList}
        />
        <CustomButton 
          type="submit"
          label="Fazer pré-cadastro" 
          variant="secondary" 
          //handleClick={handleSubmit}
          isSubmiting={isSubmiting}  
        />
      </Flex>
    </Flex>
  );
}

export default RegistrationBox;