import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import backgroundImgTop from '../../assets/background-img-top.svg';
import backgroundImgBottom from '../../assets/background-img-bottom.svg';
import imageInitial from '../../assets/image.svg';
import impulsoImg from '../../assets/impulso-img.svg';
import empatiaImg from '../../assets/empatia-img.svg';
import emotiosImg from '../../assets/emotions-img.svg';

import {
  Container,
  Header,
  MenuContainer,
  Main,
  Section,
  CardContainer,
  Card,
  Footer,
} from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Header>
      <img src={backgroundImgTop} alt="background" />
      <MenuContainer>
        <ul>
          <a href="#teste">
            <li>Home</li>
          </a>
          <a href="#footer">
            <li>Contatos</li>
          </a>
        </ul>
      </MenuContainer>
    </Header>

    <Main>
      <div>
        <h1>Resiliência</h1>
        <span>Lidar com problemas</span>

        <p>
          A palavra resiliência vem do latim: Resilire, que significa “voltar
          atrás”. Está associada capacidade de um indivíduo se adaptar à
          mudanças, até mesmo as mais difíceis, superar obstáculos ou resistir à
          pressão de situações adversas - choque, estresse, algum tipo de evento
          traumático, entre outros.
        </p>
      </div>

      <img src={imageInitial} alt="Imagen Inicial" />
    </Main>

    <Section>
      <header>
        <div>
          <span>Algums fatores interessantes da resiliência</span>
          <p>
            Uma pessoa resiliente é capaz de enfrentar crises, problemas,
            traumas, perdas, graves adversidades, transformações, desafios e
            muito mais, elaborando as situações e recuperando-se diante delas. A
            pessoa resiliente, além de suportar a pressão, ainda aprende com
            suas dificuldades e desafios, usa da sua flexibilidade para se
            adaptar e sua criatividade para encontrar soluções alternativas.
          </p>
        </div>
      </header>

      <CardContainer>
        <Card>
          <span>01</span>
          <strong>Controle dos impulsos</strong>

          <p>
            É a capacidade de regular a intensidade de seus impulsos no sistema
            neuromuscular (nervos e músculos), não se deixando levar
            impulsivamente pela experiência de uma emoção. As pessoas podem
            exercer um controle frouxo ou rígido do seu sistema muscular, visto
            que esse sistema está vinculado à regulação da intensidade das
            emoções. Dessa forma, a pessoa poderá viver uma emoção de forma
            exacerbada ou inibida. O controle de impulso garante a
            autorregulação dessas emoções ou a possibilidade de dar a devida
            força à vivência de emoções, tornando o grau de compreensão do autor
            mais sensível e apurado mediante a situação.
          </p>

          <div>
            <img src={impulsoImg} alt="Impulso" />
          </div>
        </Card>

        <Card>
          <span>02</span>
          <strong>Empatia</strong>

          <p>
            É a capacidade que o ser humano tem de compreender os estados
            psicológicos dos outros (emoções e sentimentos). Não é colocar-se no
            lugar do outro como muitos insistem em afirmar. É sim a capacidade
            de sentir o mesmo que o outro sente, ao passo que o colocar-se no
            lugar do outro de certa maneira contribui para a experiencialização
            e direcionamento das ações compreensivas.
          </p>

          <div>
            <img src={empatiaImg} alt="Impulso" />
          </div>
        </Card>

        <Card>
          <span>03</span>
          <strong>Administração de emoções</strong>

          <p>
            É a habilidade de se manter sereno diante de uma situação de
            estresse. Pessoas resilientes quanto a esse fator são capazes de
            utilizar as pistas que leem nas outras pessoas para reorientar o
            comportamento, promovendo a autorregulação. Quando essa habilidade é
            rudimentar, as pessoas encontram dificuldades em cultivar vínculos e
            com frequência desgastam, no âmbito emocional, aqueles com quem
            convivem em família ou no trabalho.
          </p>

          <div>
            <img src={emotiosImg} alt="Impulso" />
          </div>
        </Card>
      </CardContainer>
    </Section>

    <Footer>
      <section>
        <img src={backgroundImgBottom} alt="backgroundImage" />

        <p>
          O sucesso é resultado de inúmeras quedas e derrotas, que o indivíduo
          pode ver como oportunidade de aprendizado e crescimento. E a
          resiliência é resultado de aprendizagens de vida, o que torna possível
          qualquer um desenvolvê-la. Indivíduos que se tornam resilientes
          possuem, ainda, a capacidade de acreditar em si mesmos e são mais
          confiantes para lidar com os desafios que surgem ao longo do caminho.
        </p>
      </section>

      <div className="footer" id="footer">
        <a
          href="https://github.com/helitonoliveiraa"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={20} color="#264653" />
        </a>

        <a
          href="https://www.linkedin.com/in/helitonoliveira/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={20} color="#264653" />
        </a>
      </div>
    </Footer>
  </Container>
);

export default Dashboard;
