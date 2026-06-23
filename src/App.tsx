import React from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown, Award, Server, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Navigation Glassmorphism */}
      <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-white hover:text-blue-400 transition-colors">
                  <span className="font-bold text-xl tracking-wide">BMK.</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <a href="#education" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Cursus</a>
                <a href="#experience" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Expérience</a>
                <a href="#projets" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Projets</a>
                <a href="#skills" className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">Compétences</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/CyberBray235" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bray-madoue-kagongbe" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:madouebray@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Premium */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20 overflow-hidden">
        {/* Effets de lueur en arrière-plan (Blobs) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="text-center z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Recherche Stage PFE (5-6 mois) dès Sept. 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            BRAY MADOUE KAGONGBE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Cloud & DevOps.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Je conçois, déploie et sécurise des environnements cloud performants. Certifié AWS et Terraform, passionné par l'automatisation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projets"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-full font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300"
            >
              Voir mes projets
              <ChevronDown size={20} />
            </a>
            <a 
              href="./CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 text-white hover:bg-slate-800 border border-slate-700 rounded-full font-semibold backdrop-blur-sm transition-all duration-300"
            >
              <FileText size={20} />
              Télécharger CV
            </a>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Cursus de <span className="text-blue-400">Formation</span></h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold text-white mb-2">Master Réseaux et Télécommunications (ASR)</h3>
              <p className="text-blue-400 font-medium mb-4">Août 2024 – Présent</p>
              <p className="text-slate-400">Université de Reims Champagne Ardenne</p>
            </div>
            
            <div className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold text-white mb-2">Licence Professionnelle DATA ANALYST</h3>
              <p className="text-purple-400 font-medium mb-4">2023 – 2024</p>
              <p className="text-slate-400">Université de N’Djamena</p>
            </div>

            <div className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl font-bold text-white mb-2">Licence en Informatique option Cybersécurité</h3>
              <p className="text-green-400 font-medium mb-4">Septembre 2019 – Juin 2023</p>
              <p className="text-slate-400">Ecole Nationale Supérieure des TIC (N’Djamena)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 px-4 relative z-10 bg-slate-900/20 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Projets & <span className="text-blue-400">Réalisations</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Projet 1 */}
            <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-sm flex flex-col">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Online Boutique AWS Secure</h3>
                </div>
                <p className="text-sm text-blue-400 font-medium mb-4">Janvier 2026 – Avril 2026</p>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Provisionnement AWS avec Terraform (VPC, IAM, EKS, ECR). Déploiement Kubernetes avec Kustomize et automatisation CI/CD via GitHub Actions. GitOps avec Argo CD et monitoring Grafana.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-semibold">Terraform</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-semibold">AWS EKS</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-semibold">Argo CD</span>
                </div>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] backdrop-blur-sm flex flex-col">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Sécurisation Système Linux</h3>
                </div>
                <p className="text-sm text-purple-400 font-medium mb-4">Février 2025 – Mai 2025 (URCA)</p>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Modélisation d'attaques Red Team, utilisation d'outils de sécurité (nmap, Hydra). Détection et configuration de règles d'audit via la stack Elastic (Kibana, Elasticsearch, Auditbeat).
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full text-xs font-semibold">Red Team</span>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full text-xs font-semibold">Elastic Stack</span>
                </div>
              </div>
            </div>

            {/* Projet 3 / Certifications */}
            <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] backdrop-blur-sm flex flex-col">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-8 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Certifications Officielles</h3>
                </div>
                <p className="text-sm text-green-400 font-medium mb-4">Validation des compétences</p>
                <div className="text-slate-300 mb-8 space-y-3">
                  <p className="flex items-center gap-3"><span className="text-green-500">✓</span> HashiCorp Terraform Associate</p>
                  <p className="flex items-center gap-3"><span className="text-green-500">✓</span> AWS Solutions Architect</p>
                  <p className="flex items-center gap-3"><span className="text-green-500">✓</span> AWS Cloud Practitioner</p>
                  <p className="flex items-center gap-3"><span className="text-green-500">✓</span> Google Cybersecurity</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-green-500/10 text-green-300 border border-green-500/20 rounded-full text-xs font-semibold">Cloud</span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-300 border border-green-500/20 rounded-full text-xs font-semibold">DevOps</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">Expériences <span className="text-blue-400">Professionnelles</span></h2>
          <div className="max-w-4xl mx-auto">
            <div className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Administrateur Système et DevOps</h3>
                  <p className="text-blue-400 font-semibold text-lg">Innoqube SASU (Stage)</p>
                </div>
                <span className="inline-block px-4 py-2 bg-slate-800 rounded-full text-sm font-medium text-slate-300 mt-4 md:mt-0">
                  Janvier 2025 – Mai 2025
                </span>
              </div>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Mise en place de Proxmox Backup Server (PBS) : sauvegarde multi-sites et synchronisation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Haute disponibilité PostgreSQL : cluster HA avec Patroni, etcd, HAProxy, PgBouncer, Keepalived.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Administration de serveurs virtuels : VMs/conteneurs sous Proxmox VE, NGINX. Gestion client WHMCS.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 relative z-10 bg-slate-900/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Stack <span className="text-blue-400">Technique</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AWS', 'Terraform', 'Kubernetes', 'Docker', 'Proxmox', 'Ansible', 
              'GitHub Actions', 'Prometheus / Grafana', 'Elastic Stack', 
              'Linux (Debian/Ubuntu)', 'Python / Shell', 'TCP/IP, BGP, OSPF'
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-5 py-3 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-xl text-sm font-semibold hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-full text-blue-400 mb-8">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Prêt à collaborer ?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Je suis activement à la recherche d'un stage de fin d'études. Discutons de vos enjeux d'infrastructure et de sécurité !
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:madouebray@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-500 rounded-full font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300"
            >
              Envoyer un email
            </a>
            <a 
              href="./CV.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-600 rounded-full font-bold transition-all duration-300"
            >
              <FileText size={20} />
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-slate-950 border-t border-white/5 text-slate-500">
        <p>© 2026 Bray Madoué Kagongbe. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;