/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'ko' | 'hi';

export interface Translations {
  [key: string]: {
    [key in Locale]?: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', es: 'Inicio', fr: 'Accueil' },
  'nav.features': { en: 'Features', es: 'Características', fr: 'Fonctionnalités' },
  'nav.installation': { en: 'Guides', es: 'Instalación', fr: 'Installation' },
  'nav.compatibility': { en: 'Devices', es: 'Compatibilidad', fr: 'Compatibilité' },
  'nav.faq': { en: 'FAQ', es: 'Preguntas Frecuentes', fr: 'FAQ' },
  'nav.updates': { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour' },
  'nav.about': { en: 'About', es: 'Acerca de', fr: 'À propos' },
  'nav.contact': { en: 'Support', es: 'Contacto', fr: 'Contact' },
  'nav.sideload': { en: 'Sideload Guide', es: 'Sideload', fr: 'Installation' },
  'nav.gateway': { en: 'Secure Gateway', es: 'Pasarela', fr: 'Passerelle' },
  'nav.guide': { en: 'Setup Map', es: 'Guía', fr: 'Guide' },
  'nav.live_sports': { en: 'Live Sports', es: 'Deportes en Vivo', fr: 'Sports en Direct' },
  'nav.trending': { en: 'Trending Reels', es: 'Tendencias', fr: 'Tendances' },
  'nav.pricing': { en: 'Access Tiers', es: 'Planes', fr: 'Tarifs' },
  'nav.screenshots': { en: 'UI Screenshots', es: 'Capturas', fr: 'Captures' },
  'nav.certified': { en: 'v4.8.2 Certified Safe', es: 'v4.8.2 Certificado', fr: 'v4.8.2 Certifié' },
  'nav.download': { en: 'Download APK', es: 'Descargar APK', fr: 'Télécharger l\'APK' },

  // Hero
  'hero.tagline': { en: 'SECURE & MODERN MULTIMEDIA MEDIA SYSTEM', es: 'SISTEMA MULTIMEDIA SEGURO Y MODERNO', fr: 'SYSTÈME MULTIMÉDIA SECURISE ET MODERNE' },
  'hero.headline': { en: 'MovieBox App', es: 'MovieBox App', fr: 'MovieBox App', de: 'MovieBox App', ja: 'MovieBox App', ko: 'MovieBox App', hi: 'MovieBox App' },
  'hero.headline_sub': { en: 'Verified Premium Media Stream & Sports Player', es: 'Reproductor de Cine Premium y Deportes en Vivo Verificado', fr: 'Lecteur de Cinéma Premium et de Sports en Direct Vérifié', de: 'Verifizierter Premium Kino & Sport Stream Player', ja: '検証済みプレミアム映画＆スポーツプレイヤー', ko: '검증된 프리미엄 영화 및 스포츠 플레이어', hi: 'सत्यापित प्रीमियम सिनेमा और खेल' },
  'hero.description': { 
    en: 'Access a lightweight, secure gateway engineered to resolve top-tier public streams smoothly. Our optimized MovieBox App incorporates smart ad-filtering script blocking, native 4K UHD rendering engines, multi-language synchronized subtitles, and zero user logging—providing a clean, independent home entertainment experience.', 
    es: 'Accede a un cliente multimedia rápido y seguro diseñado para reproducir transmisiones de alto ancho de banda. La app incluye bloqueadores de publicidad, soporte 4K UHD, traducción de subtítulos y total privacidad sin registros.', 
    fr: 'Accédez à une plateforme multimédia rapide et sécurisée conçue pour décoder vos flux vidéo sans latence. L\'application intègre des filtres anti-pub, le rendu 4K UHD, des sous-titres et respecte votre vie privée.' 
  },
  'hero.download_btn': { en: 'Download MovieBox APK', es: 'Descargar MovieBox APK', fr: 'Télécharger MovieBox APK' },
  'hero.explore_btn': { en: 'Explore Features', es: 'Explorar Funciones', fr: 'Découvrir les Fonctions' },
  'hero.active_protection': { en: 'Malware-Free Build', es: 'Libre de Amenazas', fr: 'Fichier Sécurisé' },
  'hero.safe_node': { en: 'Verified Safe', es: 'Nodo Verificado', fr: 'Nœud Vérifié' },
 
  // Features Section
  'features.badge': { en: 'ELITE PERFORMANCE', es: 'RENDIMIENTO DE ÉLITE', fr: 'PERFORMANCE D\'ÉLITE' },
  'features.title': { en: 'Optimized for High-Resolution Bitrates & Smooth Frame-Rates', es: 'Optimizado para Altas Resoluciones y Rendimiento Fluido', fr: 'Optimisé pour les Hautes Résolutions et Rendus Fluides' },
  'features.description': { 
    en: 'Our custom media playback client combines robust connection pooling with advanced hardware-accelerated rendering codecs. Benefit from instant video seek speeds, responsive touch interface gesture scaling, and comprehensive file format compatibility on all standard screens.', 
    es: 'Nuestra arquitectura de renderizado combina conexiones simultáneas de alta velocidad con decodificación de video acelerada por hardware para ofrecer una reproducción fluida.', 
    fr: 'Notre architecture de lecture associe des flux à haute vitesse à un décodage vidéo matériel pour garantir une expérience de visionnage fluide.' 
  },
  'features.pro_badge': { en: 'PREMIUM CAPABILITY', es: 'FUNCIÓN PREMIUM', fr: 'OPTION PREMIUM' },

  // Installation / Sideload Selector
  'sideload.badge': { en: 'VERIFIED PACKAGES', es: 'PAQUETES VERIFICADOS', fr: 'PAQUETS VÉRIFIÉS' },
  'sideload.title': { en: 'Install MovieBox App For Perfect Playback', es: 'Instala la Aplicación Oficial en Todos tus Dispositivos', fr: 'Déployez l\'Application Officielle sur Vos Appareils' },
  'sideload.description': { 
    en: 'Download our certified virus-free installer binaries. Follow our clean, step-by-step sideloading setups tailored to optimize streaming performance across your mobile devices, streaming sticks, and Smart TVs.', 
    es: 'Descarga archivos binarios certificados y sigue guías detalladas paso a paso para configurar la aplicación y optimizar el rendimiento en celulares, Firestick y Smart TVs.', 
    fr: 'Téléchargez nos fichiers d\'installation sécurisés. Suivez nos guides étape par étape conçus pour optimiser la lecture vidéo sur smartphones, Firestick et Smart TVs.' 
  },
  'sideload.recommended': { en: 'RECOMMENDED METHOD', es: 'MÉTODO RECOMENDADO', fr: 'MÉTHODE RECOMMANDÉE' },

  // Overview / Gateway
  'gateway.badge': { en: 'PRIVACY ARCHITECTURE', es: 'ARQUITECTURA DE PRIVACIDAD', fr: 'ARCHITECTURE DE CONFIDENTIALITÉ' },
  'gateway.title': { en: 'Secure Multi-Source Sourcing & Direct Cloud Proxy', es: 'Servidores Privados e Indexación Avanzada Sin Rastreadores', fr: 'Proxy de Contenu Découplés & Flux Privés Sans Traceurs' },
  'gateway.description': { 
    en: 'MovieBox App functions as a premium, containerized media proxy designed to resolve high-speed public media indexes instantly. It strips script injection triggers and aggressive ad-trackers to preserve your absolute data autonomy and digital security.', 
    es: 'La App MovieBox funciona como un cliente multimedia avanzado y optimizado, enlazando directamente con servidores estables mientras elimina rastreadores publicitarios y código malicioso.', 
    fr: 'L\'application MovieBox résout directement les index multimédias publics tout en filtrant les traceurs tiers et les publicités intrusives pour garantir votre sécurité.' 
  },

  // Guide Section
  'guide.badge': { en: 'DEPLOYMENT MAPS', es: 'MAPAS DE DESPLIEGUE', fr: 'PLANS DE DÉPLOIEMENT' },
  'guide.title': { en: 'Optimized Sideload Setup Protocols', es: 'Protocolos de Instalación y Configuración Paso a Paso', fr: 'Protocoles d\'Installation et Configuration Étape par Étape' },
  'guide.description': { 
    en: 'Follow our verified installation blueprints to manually configure the official MovieBox App on your hardware. Maintain peak performance, Dolby Vision integrity, and high refresh-rate rendering effortlessly.', 
    es: 'Sigue nuestras guías certificadas para instalar y configurar manualmente la aplicación MovieBox oficial en tus dispositivos, asegurando la máxima fidelidad visual sin esfuerzo.', 
    fr: 'Suivez nos guides d\'installation vérifiés pour configurer manuellement l\'application MovieBox officielle sur votre matériel tout en préservant le rendu HDR et Dolby Vision.' 
  },
  'guide.timeline_title_prefix': { en: 'How to Setup MovieBox App on', es: 'Cómo configurar MovieBox App en', fr: 'Comment installer MovieBox App sur' },
  'guide.notice_badge': { en: 'SECURITY AUDIT REPORT', es: 'INFORME DE AUDITORÍA DE SEGURIDAD', fr: 'RAPPORT D\'AUDIT DE SÉCURITÉ' },
  
  // Guide - Mobile
  'guide.mobile.name': { en: 'Android Phone & Tablet', es: 'Móvil y Tableta Android', fr: 'Smartphone & Tablette Android' },
  'guide.mobile.sub': { en: 'Official Ad-Free APK', es: 'APK Oficial Sin Anuncios', fr: 'APK Officiel Sans Publicité' },
  'guide.mobile.notice': { 
    en: 'No root, developer unlock, or jailbreak required. Clean digital signature verified by leading antivirus services.', 
    es: 'No requiere root ni modificaciones complejas. Paquete de instalación seguro verificado por los principales motores antivirus.', 
    fr: 'Aucun root ou modification système requis. Signature numérique propre et approuvée par les services de sécurité.' 
  },
  'guide.mobile.step1.title': { en: 'Acquire the Verified Binary', es: 'Adquirir el Binario Verificado', fr: 'Acquérir le Binaire Vérifié' },
  'guide.mobile.step1.desc': { 
    en: 'Download the signed, uncompressed APK installer package directly from our secure CDN to ensure cryptographic integrity.', 
    es: 'Descarga el paquete de instalación APK firmado directamente desde nuestra red segura para garantizar la máxima seguridad.', 
    fr: 'Téléchargez le package d\'installation APK signé directement depuis notre réseau de diffusion sécurisé.' 
  },
  'guide.mobile.step2.title': { en: 'Authorize Target Permissions', es: 'Autorizar Permisos del Dispositivo', fr: 'Autoriser les Permissions Requises' },
  'guide.mobile.step2.desc': { 
    en: 'Navigate to Settings > Security and temporarily toggle "Install Unknown Apps" for your web browser or local file system.', 
    es: 'Accede a Ajustes > Seguridad en tu dispositivo móvil y activa la opción para instalar aplicaciones de fuentes externas.', 
    fr: 'Allez dans Paramètres > Sécurité sur votre appareil et autorisez l\'installation d\'applications depuis des sources inconnues.' 
  },
  'guide.mobile.step3.title': { en: 'Execute Local Installation', es: 'Ejecutar la Instalación Local', fr: 'Exécuter l\'Installation Locale' },
  'guide.mobile.step3.desc': { 
    en: 'Open your device\'s local file manager, locate the downloaded APK file in your Downloads folder, and tap to trigger the installer.', 
    es: 'Abre el administrador de archivos, busca el instalador de MovieBox App en descargas y pulsa el archivo para comenzar.', 
    fr: 'Ouvrez votre gestionnaire de fichiers, allez dans Téléchargements et cliquez sur le fichier APK pour lancer l\'installation.' 
  },
  'guide.mobile.step4.title': { en: 'Enjoy Unlimited High-Fidelity Streams', es: 'Disfruta de la Alta Fidelidad', fr: 'Profitez de Flux Haute Fidélité' },
  'guide.mobile.step4.desc': { 
    en: 'Launch the application from your launcher drawer, configure your subtitle preferences, and immediately stream premium content.', 
    es: 'Inicia la aplicación, configura tus subtítulos favoritos y comienza a reproducir de inmediato.', 
    fr: 'Ouvrez l\'application, configurez vos langues de sous-titrage et commencez la lecture de vos contenus favoris.' 
  },

  // Guide - Firestick
  'guide.firestick.name': { en: 'Amazon Fire TV / Stick / Cube', es: 'Amazon Firestick / Fire TV', fr: 'Amazon Firestick / Fire TV' },
  'guide.firestick.sub': { en: 'Optimized for Fire OS Remote Control Navigation', es: 'Optimizado para Navegación con Mando Fire OS', fr: 'Optimisé pour la Télécommande Fire OS' },
  'guide.firestick.notice': { 
    en: 'Fully compatible with all versions of the Amazon Fire TV Stick, Fire TV Cube, and integrated Smart Fire TVs.', 
    es: 'Soporte completo para todas las generaciones de Fire TV Stick, Fire TV Cube y televisores con sistema Fire OS integrado.', 
    fr: 'Parfaitement compatible avec toutes les versions d\'Amazon Fire TV Stick, Fire TV Cube et téléviseurs Fire OS.' 
  },
  'guide.firestick.step1.title': { en: 'Install Utility Downloader', es: 'Instala la App Downloader', fr: 'Installer l\'Application Downloader' },
  'guide.firestick.step1.desc': { 
    en: 'Search for the official, lightweight "Downloader" application within the Amazon Appstore and install it onto your TV.', 
    es: 'Busca la aplicación gratuita oficial "Downloader" en la tienda de Amazon e instálala en tu de Fire TV.', 
    fr: 'Recherchez l\'application gratuite officielle "Downloader" sur l\'Appstore d\'Amazon et installez-la.' 
  },
  'guide.firestick.step2.title': { en: 'Toggle Developer Configurations', es: 'Habilitar Modo Desarrollador', fr: 'Activer le Mode Développeur' },
  'guide.firestick.step2.desc': { 
    en: 'Navigate to Settings > My Fire TV > Developer Options. Select "Install unknown apps" and grant authorization privileges to Downloader.', 
    es: 'Vaya a Configuración > Mi Fire TV > Opciones de desarrollador y active el permiso para instalar apps desconocidas para Downloader.', 
    fr: 'Allez dans Paramètres > Mon Fire TV > Options pour les développeurs et autorisez Downloader à installer des apps inconnues.' 
  },
  'guide.firestick.step3.title': { en: 'Submit Direct Download Link', es: 'Introduce el Enlace de Descarga', fr: 'Saisir l\'Adresse de Téléchargement' },
  'guide.firestick.step3.desc': { 
    en: 'Launch Downloader, enter the direct shortcode or official download URL, and trigger the remote file transfer protocol.', 
    es: 'Abre la app Downloader, escribe el enlace de descarga directa de MovieBox App y pulsa el botón para iniciar la descarga.', 
    fr: 'Lancez Downloader, saisissez le lien de téléchargement direct de MovieBox App et validez pour démarrer le transfert.' 
  },
  'guide.firestick.step4.title': { en: 'Complete Setup & Clean Storage', es: 'Instalar y Limpiar Espacio', fr: 'Installer et Nettoyer les Fichiers' },
  'guide.firestick.step4.desc': { 
    en: 'Complete the on-screen setup, then permit the Downloader utility to delete the temporary installer package to conserve TV storage.', 
    es: 'Completa la instalación y elimina el archivo APK temporal para no ocupar espacio de almacenamiento innecesario.', 
    fr: 'Finalisez l\'installation, puis supprimez le fichier APK d\'origine pour économiser l\'espace de votre téléviseur.' 
  },

  // Guide - SmartTV
  'guide.smarttv.name': { en: 'Android TV & Smart Displays', es: 'Android TV / Smart TV', fr: 'Android TV / Smart TV' },
  'guide.smarttv.sub': { en: 'Sony, TCL, Hisense, Xiaomi, Nvidia Shield', es: 'Sony, TCL, Hisense, Xiaomi, Shield', fr: 'Sony, TCL, Hisense, Xiaomi, Shield' },
  'guide.smarttv.notice': { 
    en: 'Presents an intuitive, landscape-oriented layout designed for comfortable physical navigation using standard TV remotes.', 
    es: 'Ofrece una interfaz en modo horizontal optimizada especialmente para una cómoda navegación con el mando de la TV.', 
    fr: 'Mise en page horizontale optimisée pour une navigation simple et agréable depuis votre télécommande.' 
  },
  'guide.smarttv.step1.title': { en: 'Transfer Installer via USB', es: 'Copia el APK a una Memoria USB', fr: 'Copier l\'APK sur Clé USB' },
  'guide.smarttv.step1.desc': { 
    en: 'Download the TV-optimized MovieBox APK onto your computer workstation, and copy it to a standard FAT32-formatted USB drive.', 
    es: 'Descarga el archivo APK optimizado para televisores en tu ordenador y transfiérelo a una memoria USB.', 
    fr: 'Téléchargez le fichier APK de MovieBox optimisé pour TV sur votre ordinateur et copiez-le sur une clé USB.' 
  },
  'guide.smarttv.step2.title': { en: 'Access Drive Contents', es: 'Conecta el USB en tu Smart TV', fr: 'Brancher la Clé sur le Téléviseur' },
  'guide.smarttv.step2.desc': { 
    en: 'Insert the USB drive into your Smart TV, then open any File Explorer utility downloaded from the Google Play Store on your TV.', 
    es: 'Inserta la memoria USB en tu televisor y abre un explorador de archivos para examinar el contenido de la unidad.', 
    fr: 'Branchez la clé USB sur votre TV et ouvrez un explorateur de fichiers (disponible sur le Play Store de votre TV).' 
  },
  'guide.smarttv.step3.title': { en: 'Execute Package Wizard', es: 'Ejecutar el Instalador', fr: 'Lancer l\'Installation de l\'APK' },
  'guide.smarttv.step3.desc': { 
    en: 'Select the MovieBox TV APK file, run the package installer, and accept any system security prompts to complete deployment.', 
    es: 'Busca el archivo de MovieBox App en tu USB, ejecútalo y acepta los mensajes de confirmación de seguridad.', 
    fr: 'Sélectionnez l\'APK de MovieBox App sur votre clé, lancez l\'assistant de configuration et validez les alertes.' 
  },
  'guide.smarttv.step4.title': { en: 'Pin to TV Dashboard', es: 'Añadir al Menú de Inicio', fr: 'Épingler à l\'Écran d\'Accueil' },
  'guide.smarttv.step4.desc': { 
    en: 'Add the application shortcut to your favorite TV apps bar or home screen shortcut row for rapid high-resolution entertainment access.', 
    es: 'Ve a la lista de aplicaciones de tu Smart TV y añade MovieBox App a tu menú de accesos rápidos para entrar con un solo clic.', 
    fr: 'Allez dans vos applications préférées et ajoutez MovieBox App à vos raccourcis principaux pour y accéder instantanément.' 
  },

  // Guide - Emulator
  'guide.emulator.notice': { 
    en: 'Supports flawless 4K high-resolution scaling on wide monitors with customizable keyboard mappings and smooth mouse controls.', 
    es: 'Admite resoluciones ultra nítidas de hasta 4K en pantallas de computadora con navegación mediante teclado y ratón.', 
    fr: 'Affiche des résolutions de pointe allant jusqu\'au 4K sur PC avec navigation par souris et clavier.' 
  },
  'guide.emulator.step1.title': { en: 'Deploy Emulation Utility', es: 'Descarga un Emulador', fr: 'Installer un Émulateur' },
  'guide.emulator.step1.desc': { 
    en: 'Download and install a lightweight, premium Android emulator like BlueStacks or LDPlayer on your Windows or macOS workstation.', 
    es: 'Instala un emulador de Android gratuito y seguro como BlueStacks o LDPlayer en tu ordenador.', 
    fr: 'Installez un émulateur Android gratuit de confiance comme BlueStacks ou LDPlayer sur votre PC ou Mac.' 
  },
  'guide.emulator.step2.title': { en: 'Download the Binary Package', es: 'Guarda el Archivo APK', fr: 'Récupérer le Fichier APK' },
  'guide.emulator.step2.desc': { 
    en: 'Download the certified, secure MovieBox App APK from our official website directly to your computer desktop storage.', 
    es: 'Descarga el paquete oficial verificado de MovieBox App en el escritorio de tu ordenador.', 
    fr: 'Téléchargez le pack APK officiel de MovieBox App directement sur le bureau de votre ordinateur.' 
  },
  'guide.emulator.step3.title': { en: 'Install via Drag & Drop', es: 'Arrastra el Archivo para Instalar', fr: 'Glisser-Déposer pour Installer' },
  'guide.emulator.step3.desc': { 
    en: 'Launch the emulator application window and drag the downloaded MovieBox APK file directly into the emulation screen to trigger automatic installation.', 
    es: 'Inicia el emulador, arrastra el archivo descargado de MovieBox App hacia la ventana del emulador y espera unos segundos.', 
    fr: 'Démarrez l\'émulateur, glissez le fichier APK de MovieBox App vers la fenêtre pour lancer l\'installation.' 
  },
  'guide.emulator.step4.title': { en: 'Adjust Display & Scale', es: 'Ajusta la Resolución y Disfruta', fr: 'Régler l\'Affichage et Profiter' },
  'guide.emulator.step4.desc': { 
    en: 'Open the app inside your emulator, configure display parameters to Tablet mode in settings, and enjoy fullscreen media playback.', 
    es: 'Abre la aplicación, ajusta la resolución preferida y disfruta de todo el entretenimiento en pantalla completa.', 
    fr: 'Ouvrez MovieBox App, ajustez la résolution dans les réglages et lancez la lecture en plein écran.' 
  },

  // Live Sports
  'live_sports.badge': { en: 'REAL-TIME BROADCASTS', es: 'PROGRAMACIÓN EN TIEMPO REAL', fr: 'DIFFUSIONS EN TEMPS RÉEL' },
  'live_sports.title': { en: 'Live Sports & Premium PPV Events', es: 'Transmisiones Deportivas Mundiales en Vivo', fr: 'Événements Sportifs Mondiaux en Direct' },
  'live_sports.description': { 
    en: 'Stream live soccer matches, elite combat fixtures, and international athletic tournaments in crisp resolution. MovieBox App provides secure, direct connections to verified server nodes, eliminating regional restrictions.', 
    es: 'Sigue campeonatos internacionales de fútbol, ligas de primer nivel y eventos especiales en directo desde la app, sin costes extra ni bloqueos regionales.', 
    fr: 'Suivez les plus grandes compétitions de football, tournois d\'élite et combats mondiaux en direct depuis l\'application, sans frais ni blocages.' 
  },
  'live_sports.filter.all': { en: 'All Events', es: 'Todos los Eventos', fr: 'Tous les Événements' },
  'live_sports.filter.live': { en: 'Live Now', es: 'En Vivo', fr: 'En Direct' },
  'live_sports.filter.upcoming': { en: 'Upcoming', es: 'Programados', fr: 'À Venir' },
  'live_sports.live_status': { en: 'LIVE STREAM', es: 'EN TRANSMISIÓN', fr: 'EN DIRECT' },
  'live_sports.upcoming_status': { en: 'SCHEDULED', es: 'PROGRAMADO', fr: 'PROGRAMMÉ' },
  'live_sports.source_label': { en: 'Server Node:', es: 'Servidor:', fr: 'Nœud Serveur:' },
  'live_sports.banner.title': { en: 'Private PPV & Live Match Infrastructure Included:', es: 'Acceso Completo PPV e Internacional:', fr: 'Accès PPV & Sports Complets Inclus:' },
  'live_sports.banner.description': {
    en: 'Gain instant access to top-tier soccer leagues, elite combat sports, and motorsport events. Eliminate monthly network bills and paywalls forever with the MovieBox APK.',
    es: 'Accede a las mejores ligas de fútbol, campeonatos de combate y carreras. Instala la app MovieBox y olvídate de las costosas mensualidades de televisión.',
    fr: 'Suivez les compétitions de football de haut niveau, sports de combat et courses automobiles. Installez MovieBox pour économiser sur vos abonnements.'
  },
  'live_sports.banner.cta': { en: 'Open Sports Hub', es: 'Ver Deportes en Vivo', fr: 'Lancer le Centre Sportif' },

  // Trending
  'trending.badge': { en: 'DYNAMICAL CATALOG', es: 'CATÁLOGO DINÁMICO', fr: 'CATALOGUE DYNAMIQUE' },
  'trending.title': { en: 'Trending Cinema Releases & Episode Catalogs', es: 'Catálogo de Películas y Series del Momento', fr: 'Catalogue de Films & Séries Tendances' },
  'trending.description': { 
    en: 'Browse dynamic directories of recent blockbuster movies and newly updated serials. Seamlessly customize audio tracks, playback speeds, and high-contrast subtitles to match your viewing preferences.', 
    es: 'Explora listas curadas de los últimos éxitos de taquilla, series galardonadas y clásicos del cine con opciones de audio de alta fidelidad y subtítulos.', 
    fr: 'Découvrez notre sélection des derniers succès du cinéma, séries à succès et chefs-d\'œuvre classiques avec pistes audio et sous-titres de qualité.' 
  },

  // Comparison
  'comparison.badge': { en: 'BENCHMARK ANALYSIS', es: 'ANÁLISIS COMPARATIVO', fr: 'ANALYSE COMPARATIVE' },
  'comparison.title': { en: 'Why Streamers Prefer MovieBox App', es: 'Por Qué los Usuarios Prefieren MovieBox App', fr: 'Pourquoi Choisir l\'Application MovieBox' },
  'comparison.description': { 
    en: 'Compare the features of our lightweight, containerized media proxy to traditional subscription platforms, and see how we eliminate premium paywalls, ads, and speed caps.', 
    es: 'Descubre por qué nuestra plataforma de descarga directa y servidores dedicados superan a los servicios de suscripción tradicionales.', 
    fr: 'Comparez nos débits, notre bloqueur de publicités et notre design moderne avec les abonnements classiques pour faire le meilleur choix.' 
  },

  // Plans / Pricing
  'pricing.badge': { en: 'RESOURCE ACCESSIBILITY', es: 'ACCESIBILIDAD DE RECURSOS', fr: 'ACCESSIBILITÉ DES RESSOURCES' },
  'pricing.title': { en: 'Select Your Optimal Network Gateway', es: 'Elige tu Experiencia de Entretenimiento', fr: 'Sélectionnez votre Expérience de Lecture' },
  'pricing.description': { 
    en: 'Instantly connect through our standard multi-sourced index mirrors for free, or experience low-latency prioritized pipelines designed for true premium cord-cutters.', 
    es: 'Disfruta de la transmisión estándar a través de nuestros servidores abiertos o accede a conexiones premium VIP.', 
    fr: 'Regardez vos films sur nos serveurs standards gratuits ou optez pour nos réseaux VIP ultra-prioritaires.' 
  },

  // Screenshots
  'screenshots.badge': { en: 'VISUAL PREVIEW', es: 'VISTA PREVIA VISUAL', fr: 'APERÇU VISUEL' },
  'screenshots.title': { en: 'Premium Dark Mode Interface Preview', es: 'Interfaz de Usuario Moderna e Intuitiva', fr: 'Une Interface Moderne, Sobre & Fluide' },
  'screenshots.description': { 
    en: 'Our clean, elegant design uses high-contrast typography, fluid layouts, gesture-based volume controls, and dark-mode color schemes engineered to prevent eye strain during long-form cinema viewing.', 
    es: 'Conoce el diseño premium en modo oscuro, optimizado para ofrecer comodidad visual y una navegación sumamente sencilla.', 
    fr: 'Découvrez notre design sobre en mode sombre, optimisé pour un confort visuel optimal et une navigation aisée.' 
  },

  // Reviews
  'reviews.badge': { en: 'USER TESTIMONIALS', es: 'TESTIMONIOS DE USUARIOS', fr: 'TÉMOIGNAGES D\'UTILISATEURS' },
  'reviews.title': { en: 'Endorsed by Millions of Cord-Cutters', es: 'Opiniones de Nuestra Comunidad de Usuarios', fr: 'Ce que Dit Notre Communauté de Spectateurs' },
  'reviews.description': { 
    en: 'See why tech enthusiasts, network administrators, and home theater hobbyists trust the official MovieBox App to resolve high-fidelity media across all major home streaming setups.', 
    es: 'Millones de entusiastas del cine y la tecnología utilizan MovieBox App a diario para disfrutar de una excelente experiencia de transmisión sin costes.', 
    fr: 'Plus de 12 millions d\'utilisateurs font confiance à MovieBox App pour diffuser leurs films et séries préférés en toute sécurité.' 
  },

  // FAQ
  'faq.badge': { en: 'TECHNICAL DOCUMENTATION', es: 'DOCUMENTACIÓN TÉCNICA', fr: 'DOCUMENTATION TECHNIQUE' },
  'faq.title': { en: 'Verified Architecture Information Center', es: 'Respuestas a Preguntas Comunes', fr: 'Questions Fréquemment Posées' },
  'faq.description': { 
    en: 'Get clear, technical, and objective answers to common queries regarding application safety, network connections, platform compatibility, and sideload guides.', 
    es: 'Encuentra respuestas rápidas y confiables sobre seguridad de la app, compatibilidad y métodos de instalación paso a paso.', 
    fr: 'Trouvez des réponses rapides concernant la sécurité, la compatibilité des systèmes et l\'installation de l\'application.' 
  },

  // CTA Block
  'cta.badge': { en: 'DECODE YOUR STREAMING POTENTIAL', es: 'DESBLOQUEA TU POTENCIAL', fr: 'DÉBLOQUEZ VOTRE POTENTIEL' },
  'cta.title': { en: 'Get MovieBox App Instantly', es: 'Descarga MovieBox App v4.8.2 de Forma Segura', fr: 'Téléchargez MovieBox App v4.8.2 Maintenant' },
  'cta.description': { 
    en: 'Download our certified, secure, ad-free package today to unlock cinematic 4K UHD streaming. Start watching premium cinema and live sports on any device with zero monthly fees.', 
    es: 'Únete a más de 12 millones de usuarios en todo el mundo. Descarga nuestro paquete verificado, libre de publicidad y verificado hoy mismo para acceder a la verdadera libertad.', 
    fr: 'Rejoignez plus de 12 millions d\'utilisateurs. Téléchargez notre package vérifié, sans publicité et sécurisé aujourd\'hui pour vivre le vrai divertissement libre.' 
  },
  'cta.download_apk': { en: 'Download MovieBox APK Now', es: 'Descargar MovieBox APK Ahora', fr: 'Télécharger MovieBox APK' },
  'cta.secure_version': { en: 'Official Safe v4.8.2 Release • 32.4MB', es: 'Versión Oficial Segura v4.8.2 • 32.4MB', fr: 'Version Officielle Sécurisée v4.8.2 • 32.4MB' },
  'cta.malware_free': { en: '100% Virus & Malware Free Checked', es: 'Certificado 100% Libre de Virus', fr: 'Garanti 100% Sans Virus' },
  'cta.zero_subs': { en: 'No Subscription Fees', es: 'Sin Cuotas de Suscripción', fr: 'Aucun Frais d\'Abonnement' },
  'cta.ad_blocking': { en: 'Built-in Ad-Blocker Active', es: 'Bloqueador de Anuncios Integrado Activo', fr: 'Bloqueur de Publicités Actif' }
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('moviebox_locale');
      const validLocales = ['en', 'es', 'fr', 'de', 'ja', 'ko', 'hi'];
      if (saved && validLocales.includes(saved)) {
        return saved as Locale;
      }
    } catch (e) {
      console.warn('localStorage is not accessible in LanguageProvider init:', e);
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('moviebox_locale', locale);
    } catch (e) {
      console.warn('localStorage is not accessible in LanguageProvider update:', e);
    }
    // Dynamically adjust html lang attribute
    document.documentElement.lang = locale;
  }, [locale]);

  const t = (key: string, defaultValue?: string): string => {
    const entry = translations[key];
    if (entry) {
      if (entry[locale]) {
        return entry[locale]!;
      }
      if (entry['en']) {
        return entry['en']!;
      }
    }
    return defaultValue || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
