import React from 'react';
import { ArrowRight, ChevronDown, Menu, X, Phone, Mail, MapPin, Linkedin, Instagram, Youtube, Clock, Shield, Zap, Wrench, Cog, PenTool, Settings, Factory, PenTool as Tool, Hammer } from 'lucide-react';
import './App.css';
import { getServiceContent } from './services.js';

// Comentando temporariamente as importações de imagens
// import doosanImage from './assets/portfolio/doosan-lynx.jpg';
// import retrofit1 from './assets/portfolio/retrofit1.jpg';
// import retrofit2 from './assets/portfolio/retrofit2.jpg';
// import retrofit3 from './assets/portfolio/retrofit3.jpg';
// import retrofit4 from './assets/portfolio/retrofit4.jpg';
// import retrofit5 from './assets/portfolio/retrofit5.jpg';
// import modelo3d from './assets/portfolio/modelo3d.jpg';
// import recuperacao from './assets/portfolio/recuperacao.jpg';

const Modal = ({ isOpen, onClose, title, content, images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && images) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && images) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      {/* Modal Principal */}
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Galeria de Imagens */}
          {images && images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${title} - Imagem ${index + 1}`}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Conteúdo */}
          <div className="prose prose-invert max-w-none">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Visualizador de Imagem */}
      {selectedImageIndex !== null && images && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronDown className="h-12 w-12 rotate-90" />
          </button>

          <div className="relative max-w-[80vw] max-h-[80vh]">
            <img
              src={images[selectedImageIndex]}
              alt={`${title} - Imagem ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronDown className="h-12 w-12 -rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const [selectedService, setSelectedService] = React.useState(null);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({
    isOpen: false,
    title: '',
    content: '',
    images: []
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleServiceClick = (service) => {
    setModalInfo({
      isOpen: true,
      title: service,
      content: getServiceContent(service)
    });
  };

  const handleContactClick = () => {
    scrollToSection('contact');
    setShowContactForm(true);
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Reforma e Retrofiting de Máquinas CNC',
      description: 'Modernização completa de máquinas CNC, incluindo atualização de comandos, drives, motores e componentes mecânicos para maior precisão e produtividade.',
      image: 'https://via.placeholder.com/800x600',
      category: 'retrofiting',
      detailedContent: `Projeto de Modernização de Máquinas CNC

Nossa equipe realiza a reforma e retrofiting completo de máquinas CNC, implementando as seguintes melhorias:

• Substituição completa do sistema de comando CNC
• Atualização dos drives e motores
• Recuperação de guias e barramentos
• Revisão do sistema hidráulico e pneumático
• Instalação de novo painel elétrico
• Implementação de recursos de Indústria 4.0

O resultado são máquinas completamente renovadas, com maior precisão, confiabilidade e recursos tecnológicos atualizados.`,
      galleryImages: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
      ]
    },
    {
      id: 2,
      title: 'Recuperação de Componentes Mecânicos',
      description: 'Serviço especializado em recuperação de fusos de esferas, guias lineares e patins, restaurando precisão e funcionalidade original.',
      image: 'https://via.placeholder.com/800x600',
      category: 'recuperacao',
      detailedContent: `Recuperação Especializada de Componentes Mecânicos

Nossa equipe realiza a recuperação de diversos componentes mecânicos de precisão, incluindo:

• Fusos de esferas
• Guias lineares
• Patins e rolamentos
• Mancais e suportes
• Eixos e acoplamentos
• Componentes hidráulicos e pneumáticos

Utilizamos técnicas avançadas de recuperação e equipamentos de alta precisão para garantir que os componentes retornem às suas especificações originais de funcionamento.`,
      galleryImages: [
        'https://via.placeholder.com/800x600'
      ]
    },
    {
      id: 3,
      title: 'Modelagem 3D',
      description: 'Projeto 3D e detalhamento técnico para fabricação de componentes industriais.',
      image: 'https://via.placeholder.com/800x600',
      category: 'projetos3d',
      detailedContent: `Desenvolvimento de Projetos 3D Industriais

Nossa equipe realiza a modelagem 3D completa de componentes e conjuntos mecânicos, utilizando as mais modernas ferramentas de CAD. Este projeto específico mostra o desenvolvimento de um eixo telescópico com sistema de transmissão integrado.

Características do Projeto:
• Modelagem paramétrica em SolidWorks
• Análise de interferências e movimentos
• Detalhamento técnico completo
• Documentação para fabricação
• Lista de materiais e especificações técnicas

O modelo 3D permite visualizar todos os detalhes do conjunto antes da fabricação, garantindo precisão e qualidade no resultado final.`,
      galleryImages: [
        'https://via.placeholder.com/800x600'
      ]
    }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    const form = e.target;
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Cog className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">MAP3 High Tech Mechanics</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${
                  activeSection === section ? 'text-blue-500 font-semibold' : 'text-gray-300'
                }`}
              >
                {section === 'home' ? 'Início' : 
                 section === 'about' ? 'Quem Somos' : 
                 section === 'services' ? 'Serviços' : 
                 section === 'portfolio' ? 'Portfólio' : 'Contato'}
              </button>
            ))}
          </nav>
          
          <button 
            onClick={handleContactClick}
            className="hidden md:flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-b border-blue-500/20">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm uppercase tracking-wider hover:text-blue-400 transition-colors ${
                      activeSection === section ? 'text-blue-500 font-semibold' : 'text-gray-300'
                    }`}
                  >
                    {section === 'home' ? 'Início' : 
                     section === 'about' ? 'Quem Somos' : 
                     section === 'services' ? 'Serviços' : 
                     section === 'portfolio' ? 'Portfólio' : 'Contato'}
                  </button>
                ))}
                <button 
                  onClick={handleContactClick}
                  className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition-colors self-start"
                >
                  Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center pt-16">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="hero-bg"></div>
          </div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-blue-500">Precisão.</span> <span className="text-blue-400">Performance.</span> <span className="text-blue-300">Produtividade.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Soluções industriais de alta tecnologia para impulsionar o seu negócio ao próximo nível.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-medium transition-colors">
                  Solicitar Orçamento
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="border border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-md text-white font-medium transition-colors">
                  Ver Portfólio
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors">
              <span className="text-sm mb-2">Saiba Mais</span>
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800">
          {/* ... (rest of About section remains unchanged) ... */}
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Oferecemos soluções completas para otimizar seus processos industriais, 
                desde o projeto até a implementação e manutenção.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards with onClick handlers */}
              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Cog className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">01</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Projetos de Máquinas Especiais</h3>
                  <p className="text-gray-400 mb-6">
                    Desenvolvimento de máquinas customizadas para necessidades específicas da sua indústria, com foco em eficiência e produtividade.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Projetos de Máquinas Especiais')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Settings className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">02</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Consultoria em Processos e Ferramentaria</h3>
                  <p className="text-gray-400 mb-6">
                    Otimização de processos industriais e desenvolvimento de soluções em ferramentaria para maior eficiência operacional.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Consultoria em Processos e Ferramentaria')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Tool className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">03</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Manutenção Centrada em Confiabilidade</h3>
                  <p className="text-gray-400 mb-6">
                    Serviços de manutenção preventiva, preditiva e corretiva para garantir máxima disponibilidade dos equipamentos.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Manutenção Centrada em Confiabilidade')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <PenTool className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">04</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Geometria de Máquinas</h3>
                  <p className="text-gray-400 mb-6">
                    Análise e correção geométrica precisa para garantir a qualidade e precisão dos processos de fabricação.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Geometria de Máquinas')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Factory className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">05</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reforma e Retrofiting de Máquinas CNC</h3>
                  <p className="text-gray-400 mb-6">
                    Modernização e atualização tecnológica de máquinas CNC para maior eficiência e produtividade.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Reforma e Retrofiting de Máquinas CNC')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Wrench className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">06</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Recuperação de Componentes</h3>
                  <p className="text-gray-400 mb-6">
                    Recuperação especializada de fusos de esferas, guias lineares e patins para restaurar precisão e funcionalidade.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Recuperação de Componentes')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <PenTool className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">07</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Desenho 3D e Detalhamento</h3>
                  <p className="text-gray-400 mb-6">
                    Projetos 3D e documentação técnica detalhada para fabricação de componentes industriais com precisão.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Desenho 3D e Detalhamento')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Factory className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">08</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Montagens Industriais</h3>
                  <p className="text-gray-400 mb-6">
                    Execução profissional de montagens mecânicas e elétricas com foco em qualidade e segurança.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Montagens Industriais')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="service-card bg-gray-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Tool className="h-10 w-10 text-blue-500 group-hover:rotate-45 transition-transform duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-full">
                      <span className="text-blue-400 font-bold">09</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Confecção de Carenagens</h3>
                  <p className="text-gray-400 mb-6">
                    Fabricação de carenagens técnicas com alta qualidade e acabamento, seguindo normas de segurança.
                  </p>
                  <button 
                    onClick={() => handleServiceClick('Confecção de Carenagens')}
                    className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Portfólio</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Conheça alguns dos nossos projetos mais recentes e como temos ajudado 
                empresas a alcançar excelência operacional.
              </p>
            </div>
            
            {/* Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <div key={item.id} className="portfolio-item group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <button 
                        onClick={() => setModalInfo({
                          isOpen: true,
                          title: item.title,
                          content: item.detailedContent || item.description,
                          images: item.galleryImages
                        })}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm font-medium transition-colors self-start"
                      >
                        Ver Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="border border-blue-500 hover:bg-blue-500/10 px-6 py-3 rounded-md text-white font-medium transition-colors">
                Ver Mais Projetos
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Estamos prontos para ajudar a encontrar a solução ideal para o seu negócio. 
                Entre em contato conosco para uma consulta personalizada.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800 p-8 rounded-lg border border-blue-500/20">
                <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:border-blue-500"
                      placeholder="Descreva seu projeto ou necessidade..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 px-4 rounded-md text-white font-medium transition-colors">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <div className="bg-gray-800 p-8 rounded-lg border border-blue-500/20 mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Endereço</h4>
                        <p className="text-gray-400">Av. Industrial, 1500 - Distrito Industrial</p>
                        <p className="text-gray-400">São Paulo - SP, 04000-000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Telefone</h4>
                        <p className="text-gray-400">+55 (11) 3000-0000</p>
                        <p className="text-gray-400">+55 (11) 99000-0000</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">E-mail</h4>
                        <p className="text-gray-400">contatoMap3HighTech@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">Horário de Atendimento</h4>
                        <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-400">Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-500/10 p-3 rounded-full hover:bg-blue-500/20 transition-colors">
                      <Linkedin className="h-6 w-6 text-blue-500" />
                    </a>
                    <a href="#" className="bg-blue-500/10 p-3 rounded-full hover:bg-blue-500/20 transition-colors">
                      <Instagram className="h-6 w-6 text-blue-500" />
                    </a>
                    <a href="#" className="bg-blue-500/10 p-3 rounded-full hover:bg-blue-500/20 transition-colors">
                      <Youtube className="h-6 w-6 text-blue-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-blue-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Cog className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold">MAP3 High Tech Mechanics</span>
              </div>
              <p className="text-gray-400 mb-6">
                Soluções industriais de alta tecnologia para impulsionar o seu negócio ao próximo nível.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Início</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">Quem Somos</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Projetos de Máquinas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Consultoria Industrial</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Carenagens Técnicas</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Desenhos 3D</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Montagens Industriais</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-400">Av. Industrial, 1500 - SP</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-400">+55 (11) 3000-0000</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-400">contatoMap3HighTech@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-gray-400">Seg-Sex: 8h às 18h</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 MAP3 High Tech Mechanics. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Termos de Uso</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
      <Modal
        isOpen={modalInfo.isOpen}
        onClose={() => setModalInfo({ ...modalInfo, isOpen: false })}
        title={modalInfo.title}
        content={modalInfo.content}
        images={modalInfo.images}
      />
    </div>
  );
}

export default App;