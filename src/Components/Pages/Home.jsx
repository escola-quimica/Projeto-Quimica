import { useSpring, animated } from "react-spring";
import DescriptionBox from "../Layouts/DescriptionBox";
import imagemEscolaQuimica from "../imgs/logoQuimica.jpeg";
import "./Home.css";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [bannerRef, bannerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [peopleRef, peopleInView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const [descriptionLeftRef, descriptionLeftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [descriptionRightRef, descriptionRightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const bannerAnimation = useSpring({
    opacity: bannerInView ? 1 : 0,
    transform: bannerInView ? "translateY(0)" : "translateY(-50px)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { tension: 120, friction: 54 },
  });

  const descriptionLeftAnimation = useSpring({
    opacity: descriptionLeftInView ? 1 : 0,
    transform: descriptionLeftInView ? "translateX(0)" : "translateX(-15%)",
    from: { opacity: 0, transform: "translateX(-15%)" },
    config: { tension: 50, friction: 44 },
  });

  const descriptionRightAnimation = useSpring({
    opacity: descriptionRightInView ? 1 : 0,
    transform: descriptionRightInView ? "translateX(0)" : "translateX(15%)",
    from: { opacity: 0, transform: "translateX(15%)" },
    config: { tension: 120, friction: 74 },
  });

  const peopleAnimation = useSpring({
    opacity: peopleInView ? 1 : 0,
    transform: peopleInView ? "translateX(0)" : "translateY(100px)",
    from: { opacity: 0, transform: "translateY(150px)" },
    config: { tension: 120, friction: 74 },
  });

  return (
    <main className="home">
      <div className="bannerHome">
        <animated.div
          className="description-banner"
          ref={bannerRef}
          style={bannerAnimation}
        >
          <h1>Escola de Química</h1>
          <span>Computacional</span>
          <p>
            O projeto tem como objetivo tornar mais acessíveis materiais de alta
            qualidade em língua portuguesa sobre Química Computacional e
            proporcionar aos alunos a oportunidade de terem sua primeira
            experiência com pesquisa científica.
          </p>
        </animated.div>
        <animated.div className="banner-img" style={bannerAnimation}>
          <img
            src={imagemEscolaQuimica}
            alt="Foto da Escola de Química Computacional"
          />
        </animated.div>
      </div>

      <div className="wraperDescription">
        <animated.div style={descriptionLeftAnimation} ref={descriptionLeftRef}>
          <DescriptionBox
            photo={imagemEscolaQuimica}
            alt="Foto da Escola de Química Computacional"
            title="Quem somos"
            text={`Somos um grupo de cientistas de diversas áreas e níveis acadêmicos, que incluem professores universitários, pós-doutorandos, doutores, mestres e graduandos, abrangendo cursos desde Química até Engenharia da Computação. Unimo-nos com o principal objetivo de fornecer materiais de qualidade e estimular a próxima geração de pesquisadores no Brasil.`}
            hasActions
            layoutType="photo-left"
          />
        </animated.div>

        <animated.div
          style={descriptionRightAnimation}
          ref={descriptionRightRef}
        >
          <DescriptionBox
            photo={imagemEscolaQuimica}
            alt="Foto da Escola de Química Computacional"
            title="O que é a Escola de Química Computacional?"
            text={`Durante o programa, os alunos atuarão como pesquisadores, desenvolvendo um projeto e recebendo orientação de pós-graduandos na área de Química Computacional. Além disso, terão a oportunidade de aprender a programar em Python, com foco na utilização de Inteligência Artificial. Para aprimorar ainda mais suas habilidades, serão realizados workshops mensais abordando temas como leitura de artigos científicos, aprendizado do inglês e o uso ético de ferramentas de inteligência artificial.
            `}
          />
        </animated.div>
      </div>

      <div className="singlePeople" ref={peopleRef}>
        <animated.div style={peopleAnimation}>
          <DescriptionBox
            photo={imagemEscolaQuimica}
            alt="Foto da Escola de Química Computacional"
            title="Quem sou eu"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit
              Voluptatum maxime quibusdam amet, quas doloribus incidunt vel ipsa
              ad quasi fugiat neque porro explicabo nam excepturi cum quisquam
              consectetur. Provident, unde`}
            layoutType="photo-left"
          />
        </animated.div>
      </div>
    </main>
  );
};

export default Home;
