import React from 'react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Eva Josina Júlio Martins
            </h1>
            <p className="text-xs text-gray-400 mt-1">Soluções digitais & prestação de serviços eletrónicos</p>
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex gap-1 items-center"
          >
            <a 
              href="#services" 
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 relative group"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </motion.nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.1 }} 
            className="text-4xl md:text-5xl font-bold leading-tight mx-auto max-w-4xl"
          >
            Criamos produtos digitais que resolvem problemas reais.
          </motion.h2>
          
          <motion.p 
            initial={{ y: 10, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }} 
            className="mt-6 text-gray-300 max-w-xl mx-auto"
          >
            Eu, <strong>Eva Josina Júlio Martins</strong>, opero como empresário em nome individual — especializada em desenvolvimento de aplicações, plataformas SaaS e serviços eletrónicos para empresas e profissionais. Trabalho desde a concepção até à entrega e manutenção.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 transition px-5 py-3 rounded-lg shadow-md">
              Contratar serviços
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-3 border border-gray-700 px-5 py-3 rounded-lg hover:bg-white/5 transition">
              Ver portfólio
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.02 }} className="p-5 bg-gray-850/40 rounded-2xl backdrop-blur-md border border-gray-700">
              <h3 className="font-semibold">Apps & SaaS</h3>
              <p className="text-sm text-gray-300 mt-2">Desenvolvimento full-stack, mobile (Flutter / React Native) e plataformas SaaS de alto desempenho.</p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="p-5 bg-gray-850/40 rounded-2xl backdrop-blur-md border border-gray-700">
              <h3 className="font-semibold">Fintech & Pagamentos</h3>
              <p className="text-sm text-gray-300 mt-2">Integrações de pagamentos, gestão de receitas e compliance básico para receber pagamentos digitalmente.</p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="p-5 bg-gray-850/40 rounded-2xl backdrop-blur-md border border-gray-700">
              <h3 className="font-semibold">UI/UX & Design</h3>
              <p className="text-sm text-gray-300 mt-2">Design moderno e interação fluida, com foco em conversão e usabilidade.</p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="p-5 bg-gray-850/40 rounded-2xl backdrop-blur-md border border-gray-700">
              <h3 className="font-semibold">Suporte & Manutenção</h3>
              <p className="text-sm text-gray-300 mt-2">Acordos de SLA, monitorização e updates contínuos.</p>
            </motion.div>
          </div>
        </section>
      </main>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-gray-850/40 to-black/30 border border-gray-700 rounded-3xl p-8">
          <h3 className="text-2xl font-bold">Sobre</h3>
          <p className="mt-4 text-gray-300 max-w-3xl"><strong>Eva Josina Júlio Martins</strong> presta serviços personalizados de desenvolvimento digital e consultoria tecnológica. Projetos entregues com práticas modernas de segurança, testes e deployment. Ideal para PMEs, startups e profissionais independentes.</p>
        </div>
      </section>

      <footer id="contact" className="max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-2xl p-8 bg-gradient-to-br from-black/30 to-gray-900/40 border border-gray-700">
          <h4 className="text-lg font-bold">Contato</h4>
          <p className="text-sm text-gray-300 mt-2">Email: <a href="mailto:vijumartins@gmail.com" className="underline">vijumartins@gmail.com</a> · Phone: +244943792271</p>

          

          <p className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} — Empresário em Nome Individual.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
