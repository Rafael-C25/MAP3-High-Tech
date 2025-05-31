export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Soluções em Mecânica de Alta Precisão
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Especialistas em retrofitting, manutenção e modernização de máquinas industriais.
            Tecnologia e inovação para otimizar sua produção.
          </p>
          <div className="flex gap-4">
            <a
              href="#contato"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Fale Conosco
            </a>
            <a
              href="#servicos"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 