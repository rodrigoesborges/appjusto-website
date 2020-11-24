import Image from 'next/image'
import { Flex, Heading, Text } from '@chakra-ui/react'

import Section from "../../Section";
import Container from '../../Container';
import NumberBox from './NumberBox';
import HelpBox from './HelpBox'

const Hero: React.FC = () => {
  return (
    <Section 
      id="numbers"
      bgColor="primary" 
      minHeight="100vh"
    >
      <Container 
        flexDir="column"
        pt={["220px", "220px", "220px", "20px"]}
        pb="64px"
      >
        <Heading 
          as="h1" 
          fontSize="24px"
          display={["block", "block", "block", "none"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. 
          Faça a sua parte divulgando agora.
        </Heading>
        <Heading 
          as="h1" 
          fontSize={["24px", "24px", "24px", "32px"]}
          display={["none", "none", "none", "block"]}
        >
          Se todos colaborarem, este projeto vai dar certo e será melhor a todos. <br/> 
          Faça a sua parte divulgando agora.
        </Heading>
        <Text 
          mt="30px" 
          textStyle="p"
          fontSize={["16px", "16px", "16px", "18px"]}>
          Pré-cadastros até o momento:
        </Text>
        <Flex
          w="100%"
          flexDir={["column", "column", "column", "row"]}
        >
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox icon="/shield.svg" number={500} label="Cidades" />
            <NumberBox icon="/bike.svg" number={800} label="Entregadores" />
          </Flex>
          <Flex
            w="100%"
            flexDir="row"
          >
            <NumberBox icon="/cutlery.svg" number={500} label="Restaurantes" />
            <NumberBox icon="/happy.svg" number={800} label="Consumidores" />
          </Flex>
        </Flex>
        <Heading
          mt="32px"
          mb={["8px", "8px", "8px", "30px"]}  
          as="h1" 
          fontSize={["24px", "24px", "24px", "32px"]}
        >
          Formas de ajudar
        </Heading>
        <Text 
          textStyle="p"
          fontSize={["16px", "16px", "16px", "18px"]}>
          Entenda como você pode ajudar o AppJusto a chegar mais longe:
        </Text>
        <Flex
          flexDir={["column", "column", "column", "row"]}
        >
          <HelpBox 
            icon="/icon-promotion.svg"
            title="Indique o AppJusto"
            text="Indique o AppJusto para amigos, entregadores, restaurantes, e todos que desejam um modelo mais justo."
            singleLink={true}
            link1Label="Indicar o AppJusto"
            link1href="/"
            isLast={false}
          />
          <HelpBox 
            icon="/icon-high-five.svg"
            title="Faça parte do AppJusto"
            text="Estamos em busca de voluntários, empresas parceiras, investidores, e todos que podem colaborar ativamente com esse movimento."
            singleLink={true}
            link1Label="Quero ser um parceiro"
            link1href="/"
            isLast={false}
          />
          <HelpBox 
            icon="/icon-chat-bubble.svg"
            title="Responda a pesquisa"
            text="Estamos ouvindo entregadores e restaurantes para criar uma plataforma pensada desde o início para todos."
            singleLink={false}
            link1Label="Sou Entregador"
            link1href="/"
            link2Label="Sou Restaurante"
            link2href="/"
            isLast={true}
          />
        </Flex>
      </Container>
    </Section>
  );
}

export default Hero;