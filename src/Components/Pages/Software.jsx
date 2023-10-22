import "./Software.css";

import softwareOrcaLogo from "../../assets/imgs/software-orca-logo.png";
import softwareQuantumEspressoLogo from "../../assets/imgs/software-quantum-espresso-logo.png";
import logoQuimica from "../../assets/imgs/logoQuimica.jpeg";
import SoftwareCard from "../Layouts/SoftwareCard";

const Software = () => {
  return (
    <main className="home">
      <div className="bannerHome">
        <div className="description-banner">
          <span>Softwares</span>
          <p>
            Essa página é dedicada a tutoriais de como utilizar os principais
            softwares de Química Computacional
          </p>
        </div>
        <div className="banner-img">
          <img src={logoQuimica} />
        </div>
      </div>

      <div className="software-list">
        {/* Add an article property to SoftwareCard component to render the button */}
        <SoftwareCard
          title="Orca"
          logo={softwareOrcaLogo}
          article="orca.gg"
        >
          <p>
            O ORCA é um renomado software de química quântica utilizado para
            realizar cálculos ab initio avançados em sistemas moleculares e
            materiais. Desenvolvido por uma equipe de cientistas, o ORCA oferece
            uma ampla gama de métodos teóricos precisos, permitindo a simulação
            de propriedades eletrônicas, estruturais e espectroscópicas de
            moléculas e sólidos. Sua interface amigável e flexibilidade na
            escolha de métodos e base de dados tornam-no uma ferramenta valiosa
            para pesquisadores na área da química teórica e computacional. Com
            uma comunidade ativa e suporte contínuo, o ORCA é amplamente
            utilizado em estudos acadêmicos e industriais para investigações
            detalhadas de sistemas químicos complexos.
          </p>
        </SoftwareCard>

        <SoftwareCard
          title="Quantum ESPRESSO"
          logo={softwareQuantumEspressoLogo}
          article="ddg.gg"
        >
          <p>
            O Quantum ESPRESSO é um poderoso software de simulação de materiais
            baseado na teoria do funcional da densidade (DFT) e na teoria do
            funcional da densidade autoconsistente (DFT-SCF). Projetado para
            estudar propriedades eletrônicas e estruturais de sólidos e
            moléculas, o Quantum ESPRESSO oferece uma ampla variedade de métodos
            numéricos de alta precisão. Sua abordagem de código aberto e
            modularidade facilita a customização e integração em projetos de
            pesquisa complexos. Além disso, a plataforma inclui ferramentas para
            cálculos de dinâmica molecular e espectroscopia, ampliando sua
            utilidade em diversas áreas da ciência de materiais. Com uma
            comunidade ativa de usuários e desenvolvedores, o Quantum ESPRESSO é
            uma ferramenta essencial na modelagem e predição de propriedades de
            materiais.
          </p>
        </SoftwareCard>
      </div>
    </main>
  );
};

export default Software;
