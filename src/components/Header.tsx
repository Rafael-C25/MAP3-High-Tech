import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MAP3 High Tech Mechanics
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/#servicos" className="text-gray-600 hover:text-blue-600">
              Serviços
            </Link>
            <Link href="/#portfolio" className="text-gray-600 hover:text-blue-600">
              Portfólio
            </Link>
            <Link href="/#sobre" className="text-gray-600 hover:text-blue-600">
              Sobre
            </Link>
            <Link href="/#contato" className="text-gray-600 hover:text-blue-600">
              Contato
            </Link>
          </nav>

          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 