import React from 'react';
import { ArrowRight, ChevronDown, Menu, X, Phone, Mail, MapPin, Linkedin, Instagram, Youtube, Clock } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">MAP3 High Tech Mechanics</span>
          </div>
          
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
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <main>
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
              <div className="bg-gray-800 p-8 rounded-lg">
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
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 MAP3 High Tech Mechanics. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
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
        </div>
      </footer>
    </div>
  );
}

export default App; 