import React from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown, Award, Server, Shield } from 'lucide-react';

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
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Recherche Stage PFE 5-6 mois Cloud/Devops
          </p>
          <p className="text-lg text-blue-400 mb-8">
            À partir de Septembre 2026
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
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-2">Master Réseaux et Télécommunications parcours Administration et Sécurité Réseaux</h3>
              <p className="text-gray-400 mb-4">Août 2024 – Présent</p>
              <p className="text-gray-400 mb-4">Université de Reims Champagne Ardenne</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-2">Licence Professionnelle DATA ANALYST</h3>
              <p className="text-gray-400 mb-4">2023 – 2024</p>
              <p className="text-gray-400 mb-4">Université de N’Djamena</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-2">Licence en Informatique option Cybersécurité</h3>
              <p className="text-gray-400 mb-4">Septembre 2019 – Juin 2023</p>
              <p className="text-gray-400 mb-4">Ecole Nationale Supérieure des TIC (N’Djamena)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-4 bg-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projets & Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform border border-gray-600 shadow-xl">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 text-blue-400">
                  <Server size={28} />
                  <h3 className="text-xl font-bold">Online Boutique AWS Secure</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">Janvier 2026 – Avril 2026</p>
                <p className="text-gray-300 mb-4 h-32 overflow-y-auto">
                  Provisionnement AWS avec Terraform (VPC, IAM, EKS, ECR). Déploiement Kubernetes avec Kustomize et automatisation CI/CD via GitHub Actions. Mise en œuvre d'un flux GitOps avec Argo CD et observabilité via Prometheus et Grafana.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-semibold">Terraform</span>
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-semibold">AWS EKS</span>
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-semibold">Argo CD</span>
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs font-semibold">Kubernetes</span>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform border border-gray-600 shadow-xl">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  <Shield size={28} />
                  <h3 className="text-xl font-bold">Sécurisation Système Linux</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">Février 2025 – Mai 2025 (URCA)</p>
                <p className="text-gray-300 mb-4 h-32 overflow-y-auto">
                  Modélisation d'attaques Red Team, utilisation d'outils de sécurité (nmap, Hydra). Détection et configuration de règles d'audit via la stack Elastic (Kibana, Elasticsearch, Auditbeat).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs font-semibold">Red Team</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs font-semibold">Elastic Stack</span>
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs font-semibold">Auditbeat</span>
                </div>
              </div>
            </div>

            {/* Projet 3 / Certifications */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform border border-gray-600 shadow-xl">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <Award size={28} />
                  <h3 className="text-xl font-bold">Certifications Officielles</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">Validation des compétences</p>
                <div className="text-gray-300 mb-4 h-32 overflow-y-auto space-y-2">
                  <p className="flex items-center gap-2"><span>🏆</span> HashiCorp Certified: Terraform Associate</p>
                  <p className="flex items-center gap-2"><span>🏆</span> AWS Solutions Architect Associate</p>
                  <p className="flex items-center gap-2"><span>🏆</span> AWS Cloud Practitioner</p>
                  <p className="flex items-center gap-2"><span>🏆</span> Google Cybersecurity</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-xs font-semibold">Cloud</span>
                  <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-xs font-semibold">DevOps</span>
                  <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-xs font-semibold">SecOps</span>
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
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2">Administrateur Système et DevOps (Stage)</h3>
              <p className="text-blue-400 font-semibold mb-2">Innoqube SASU</p>
              <p className="text-gray-400 mb-4">Janvier 2025 – Mai 2025</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Mise en place de Proxmox Backup Server (PBS) : sauvegarde multi-sites et synchronisation.</li>
                <li>Haute disponibilité PostgreSQL : cluster HA avec Patroni, etcd, HAProxy, PgBouncer, Keepalived.</li>
                <li>Administration de serveurs virtuels : VMs/conteneurs sous Proxmox VE, NGINX. Gestion client WHMCS.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Compétences Techniques</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">AWS</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Terraform</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Kubernetes</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Docker</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Proxmox</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Ansible</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">GitHub Actions</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Prometheus / Grafana</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Elastic Stack</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Linux (Debian, Ubuntu)</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">Python / Shell</span>
            <span className="px-4 py-2 bg-gray-800 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">TCP/IP, BGP, OSPF</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          <p className="text-xl text-gray-300 mb-8">
            Je suis à la recherche d'un stage de fin d'études. N'hésitez pas à me contacter !
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:madouebray@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-colors shadow-lg hover:shadow-blue-500/50"
            >
              <Mail size={20} />
              Me contacter
            </a>
            <a 
              href="/CV.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-500 rounded-full font-bold transition-colors"
            >
              <FileText size={20} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p>© 2026 Bray Madoué Kagongbe. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
