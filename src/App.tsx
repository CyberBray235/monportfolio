import React from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown} from 'lucide-react';

function App() {
  return (

    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* Navigation */}
      <nav className="bg-gray-700 fixed w-full z-10 top-0 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-200 hover:text-gray-400">
                  <span className="font-bold text-xl">À propos</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#education" className="py-5 px-3 text-gray-200 hover:text-gray-400">Cursus</a>
                <a href="#experience" className="py-5 px-3 text-gray-200 hover:text-gray-400">Expérience</a>
                <a href="#projets" className="py-5 px-3 text-gray-200 hover:text-gray-400">Projets</a>
                <a href="#skills" className="py-5 px-3 text-gray-200 hover:text-gray-400">Compétences</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="https://github.com/CyberBray235" className="py-5 px-3 text-gray-200 hover:text-gray-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bray-madoue-kagongbe" className="py-5 px-3 text-gray-200 hover:text-gray-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:madouebray@gmail.com" className="py-5 px-3 text-gray-200 hover:text-gray-400">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-400 hover:to-blue-500 transition-colors duration-500">
              BRAY MADOUE KAGONGBE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Administrateur Systèmes et Réseaux
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/CyberBray235" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bray-madoue-kagongbe" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:madouebray@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a 
            href="#projets"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
          >
            Voir mes projets
            <ChevronDown size={20} />
          </a>
        </div>
      </header>


      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cursus de Formation</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Master 1 Administration et Sécurité des Réseaux (ASR)</h3>
              <p className="text-gray-400 mb-4">Août 2024 – Juillet 2025</p>
              <p className="text-gray-400 mb-4">Université de Reims Champagne Ardenne</p>
              <a 
                href="https://master-reseaux-telecom-reims.fr/master-asr" 
                className="text-blue-400 hover:underline"
              >
                https://master-reseaux-telecom-reims.fr/master-asr
              </a>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Licence Professionnelle Data Analysis/Data Developer</h3>
              <p className="text-gray-400 mb-4">Juin 2024</p>
              <p className="text-gray-400 mb-4">Université de N’Djamena</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Licence en Informatique option Cybersécurité</h3>
              <p className="text-gray-400 mb-4">Juin 2023</p>
              <p className="text-gray-400 mb-4">Ecole Nationale Supérieure des TIC (N’Djamena, Tchad)</p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projets" className="py-20 px-4 bg-gray-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Mes Projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img 
                src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800`}
                alt="Project Preview"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Projet 2024 à l'Université de Reims champagne Ardenne</h3>
                <p className="text-gray-400 mb-4">
                  Création d'une vidéothèque avec Flask.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Flask</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">API REST</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                    <a href="https://github.com/CyberBray235/video_flask" className="hover:text-blue-400 transition-colors">
                    <Github size={24} />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img 
                src={`https://animations-innovantes.fr/wp-content/uploads/2019/02/Blockchain-Blog.jpeg`} 
                alt="Project Preview" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Projet ENASTIC 2023</h3>
                <p className="text-gray-400 mb-4">
                  Sécurisation du processus de la délivrance des casiers judiciaires au Tchad.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Web3</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Blockchain</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img 
                src={`https://www.vaadata.com/blog/wp-content/uploads/2024/06/audits-de-securite-informatique-1536x803.png`} 
                alt="Project Preview" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Projet ENASTIC 2022</h3>
                <p className="text-gray-400 mb-4">
                  Audit de sécurité Informatique de l'école nationale supérieure des TIC: Vérification des conformités, audit physique...
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Cybersécurité</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Audit</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Sécurité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Professional Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Expériences Professionnelles</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Administrateur Systèmes et Devops (Stage) à Innoqube</h3>
              <p className="text-gray-400 mb-4">Janvier 2025 – Now</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>PROXMOX, WHMCS, DOCKER, PROVISIONNING</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Agence de Développement des TIC | ADETIC-TCHAD</h3>
              <p className="text-gray-400 mb-4">Septembre 2022</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Déploiement Réseaux, Sécurité Réseaux : Pfsense, Soudage Fibre optique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Compétences</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Linux</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Windows Server</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">AWS</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Proxmox</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Docker</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Administration Linux</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Python</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">React</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Vue.js</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Node.js</span>
            <span className="px-4 py-2 bg-blue-600 rounded-full text-sm">Tailwind CSS</span>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          <p className="text-xl text-gray-300 mb-8">
            Je suis ouvert aux opportunités professionnelles. N'hésitez pas à me contacter !
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:contact@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              <Mail size={20} />
              Me contacter
            </a>
            <a 
              href="/MONCV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
            >
              <FileText size={20} />
              Mon CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Bray Madoué. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;