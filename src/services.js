export const getServiceContent = (service) => {
  switch (service) {
    case 'Manutenção Centrada em Confiabilidade':
      return `Soluções personalizadas para maximizar a disponibilidade dos equipamentos

Na MAP3 – High Tech Mechanics, implementamos programas de manutenção que garantem a máxima confiabilidade dos seus equipamentos industriais. Nossos serviços combinam técnicas modernas e monitoramento contínuo para reduzir paradas e otimizar a produção.

🔧 Do diagnóstico à execução

Nosso time técnico realiza todo o ciclo de manutenção, desde a análise inicial até a implementação do programa.

1. Levantamento técnico e diagnóstico da necessidade
2. Desenvolvimento do plano de manutenção
3. Implementação de monitoramento preditivo
4. Gestão informatizada da manutenção
5. Análise contínua de performance
6. Treinamento operacional e suporte`;

    case 'Geometria de Máquinas':
      return `Soluções personalizadas para precisão geométrica

Na MAP3 – High Tech Mechanics, realizamos análises e correções geométricas em máquinas industriais. Nossos serviços garantem alinhamento e precisão ideais para seus equipamentos, utilizando tecnologia de medição avançada.

📏 Do diagnóstico à correção

Nosso time técnico realiza todo o processo de análise e correção, desde as medições até os ajustes finais.

1. Levantamento técnico e diagnóstico inicial
2. Medição com equipamentos de precisão
3. Análise dos desvios geométricos
4. Planejamento das correções
5. Execução dos ajustes necessários
6. Documentação e validação final`;

    case 'Reforma e Retrofiting de Máquinas CNC':
      return `Soluções personalizadas para modernização de máquinas

Na MAP3 – High Tech Mechanics, transformamos máquinas CNC convencionais em equipamentos modernos e eficientes. Nossos projetos integram tecnologia atual com expertise técnica para maior produtividade.

🔄 Do diagnóstico à modernização

Nosso time técnico realiza todo o ciclo de modernização, desde a avaliação até a entrega final.

1. Levantamento técnico e diagnóstico inicial
2. Projeto de modernização detalhado
3. Atualização do comando CNC
4. Reforma mecânica completa
5. Instalação e configuração
6. Testes e treinamento operacional`;

    case 'Recuperação de Componentes':
      return `Soluções personalizadas para recuperação de precisão

Na MAP3 – High Tech Mechanics, recuperamos componentes mecânicos com alta precisão. Nosso trabalho garante o retorno das características originais e prolonga a vida útil dos componentes.

🛠️ Do diagnóstico à recuperação

Nosso time técnico realiza todo o processo de recuperação, desde a análise até a validação final.

1. Levantamento técnico e diagnóstico
2. Análise dimensional completa
3. Planejamento da recuperação
4. Execução do processo técnico
5. Controle dimensional final
6. Testes e documentação`;

    case 'Desenho 3D e Detalhamento':
      return `Soluções personalizadas para projetos técnicos

Na MAP3 – High Tech Mechanics, desenvolvemos projetos 3D e documentação técnica completa. Nossos projetos utilizam as mais modernas ferramentas CAD para garantir precisão e qualidade.

💻 Do conceito ao detalhamento

Nosso time técnico realiza todo o processo de projeto, desde a concepção até a documentação final.

1. Levantamento de requisitos
2. Modelagem 3D inicial
3. Análise e otimização
4. Detalhamento técnico
5. Documentação completa
6. Revisão e validação final`;

    case 'Montagem Industrial':
      return `Soluções personalizadas para montagens técnicas

Na MAP3 – High Tech Mechanics, executamos montagens industriais com alto padrão técnico. Nossos serviços garantem a instalação precisa e segura de equipamentos e sistemas industriais.

🏭 Do planejamento à execução

Nosso time técnico realiza todo o processo de montagem, desde o planejamento até a entrega.

1. Levantamento técnico inicial
2. Planejamento detalhado
3. Preparação da área
4. Execução da montagem
5. Alinhamento e ajustes
6. Testes e validação`;

    default:
      return `Mais informações sobre ${service} em breve.`;
  }
}; 