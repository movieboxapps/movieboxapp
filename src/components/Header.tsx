/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download, ShieldCheck, Globe, ChevronDown, Check, Palette } from 'lucide-react';
import { useLanguage, Locale } from '../context/LanguageContext';
import { useTheme, THEMES, ThemeType } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const { theme, setTheme, currentThemeConfig } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: t('nav.home', 'Home'), href: '#home' },
    { name: t('nav.features', 'Features'), href: '#features' },
    { name: t('nav.installation', 'Installation'), href: '#installation' },
    { name: t('nav.compatibility', 'Compatibility'), href: '#compatibility' },
    { name: t('nav.faq', 'FAQ'), href: '#faq' },
    { name: t('nav.updates', 'Updates'), href: '#updates' },
    { name: t('nav.about', 'About'), href: '#about' },
    { name: t('nav.contact', 'Contact'), href: '#contact' },
  ];

  const languages = [
    { code: 'en' as Locale, label: 'English', flag: '🇺🇸' },
    { code: 'es' as Locale, label: 'Español', flag: '🇪🇸' },
    { code: 'fr' as Locale, label: 'Français', flag: '🇫🇷' },
    { code: 'de' as Locale, label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja' as Locale, label: '日本語', flag: '🇯🇵' },
    { code: 'ko' as Locale, label: '한국어', flag: '🇰🇷' },
    { code: 'hi' as Locale, label: 'हिन्दी', flag: '🇮🇳' },
  ];

  const currentLang = languages.find(lang => lang.code === locale) || languages[0];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    try {
      const target = document.querySelector(href);
      if (target) {
        const offset = 80; // height of sticky header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } catch (err) {
      console.warn("Smooth scroll to error:", err);
    }
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-surface-sec/60 shadow-lg shadow-black/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center shadow-md shadow-brand-primary/10 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <span className="font-sans font-black text-xl text-brand-bg tracking-tighter select-none">M</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-highlight rounded-full border border-brand-bg flex items-center justify-center">
                <span className="text-[6px] text-white font-black">v4</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-extrabold text-lg tracking-tight text-white group-hover:text-brand-primary transition-colors duration-200">MovieBox</span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-brand-primary/15 text-brand-primary border border-brand-primary/20 rounded-md">PRO</span>
              </div>
              <span className="text-[9px] text-brand-muted tracking-widest font-mono uppercase">Streaming Node</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5 bg-brand-surface/30 border border-brand-surface-sec/20 p-1 rounded-xl relative">
            {navItems.filter(item => ['home', 'features', 'installation', 'faq', 'updates'].includes(item.href.slice(1))).map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  id={`nav-item-${item.href.slice(1)}`}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`relative px-3 py-1.5 rounded-lg text-[11px] 2xl:text-xs font-semibold tracking-wider uppercase font-['Inter'] whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-brand-muted hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-brand-card/90 border border-brand-primary/15 rounded-lg -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Language Switcher Dropdown */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Theme Selector Dropdown */}
            <div className="relative" ref={themeDropdownRef}>
              <button
                id="theme-selector-btn"
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold text-brand-muted hover:text-white hover:bg-brand-surface-sec/30 rounded-lg font-['Inter'] tracking-wide transition-all cursor-pointer whitespace-nowrap"
                title="Change Skin Theme"
              >
                <Palette className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="font-mono text-[10px] uppercase">{currentThemeConfig.name.split(' ')[0]}</span>
              </button>

              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 mt-2 w-64 bg-brand-card/95 border border-brand-surface-sec rounded-xl shadow-xl shadow-black/60 backdrop-blur-md overflow-hidden z-50"
                  >
                    <div className="p-2 border-b border-brand-surface-sec/60">
                      <span className="text-[9px] font-black text-brand-muted font-mono uppercase tracking-wider block">Select Interface Skin</span>
                    </div>
                    <div className="p-1.5 space-y-1 max-h-[280px] overflow-y-auto scrollbar-none">
                      {Object.entries(THEMES).map(([key, val]) => {
                        const isSelected = key === theme;
                        return (
                          <button
                            key={key}
                            id={`theme-btn-${key}`}
                            onClick={() => {
                              setTheme(key as ThemeType);
                              setIsThemeOpen(false);
                            }}
                            className={`w-full flex items-start gap-2.5 p-2 rounded-lg text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/15'
                                : 'text-brand-muted hover:text-white hover:bg-brand-surface-sec/30'
                            }`}
                          >
                            <div className="flex gap-1 shrink-0 mt-1">
                              <span className="w-2.5 h-2.5 rounded-full border border-white/10" style={{ backgroundColor: val.colors['--brand-bg'] }} />
                              <span className="w-2.5 h-2.5 rounded-full border border-white/10" style={{ backgroundColor: val.colors['--brand-primary'] }} />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold truncate">{val.name}</span>
                                {isSelected && <Check className="w-3.5 h-3.5 text-brand-primary shrink-0" />}
                              </div>
                              <span className="text-[10px] text-brand-muted/80 block mt-0.5 leading-normal">{val.desc}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="language-selector-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold text-brand-muted hover:text-white hover:bg-brand-surface-sec/30 rounded-lg font-['Inter'] transition-all cursor-pointer whitespace-nowrap"
              >
                <Globe className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="font-mono text-[10px] uppercase">{currentLang.code}</span>
              </button>

              {/* Dropdown Panel with AnimatePresence */}
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 mt-2 w-40 bg-brand-card/95 border border-brand-surface-sec rounded-xl shadow-xl shadow-black/60 backdrop-blur-md overflow-hidden z-50"
                  >
                    <div className="p-1.5 space-y-0.5">
                      {languages.map((lang) => {
                        const isSelected = lang.code === locale;
                        return (
                          <button
                            key={lang.code}
                            id={`lang-btn-${lang.code}`}
                            onClick={() => {
                              setLocale(lang.code);
                              setIsLangOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-medium transition-all ${
                              isSelected
                                ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/15'
                                : 'text-brand-muted hover:text-white hover:bg-brand-surface-sec/30'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{lang.flag}</span>
                              <span>{lang.label}</span>
                            </div>
                            {isSelected && <Check className="w-3.5 h-3.5 text-brand-primary shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Action Button */}
            <a
              id="header-download-btn"
              href="https://www.moviesbox.com.co/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-[11px] font-bold text-brand-bg bg-gradient-to-r from-brand-primary via-brand-highlight to-brand-accent rounded-lg hover:from-brand-primary-hover hover:to-brand-accent/90 shadow-md shadow-brand-primary/10 hover:shadow-brand-primary/25 hover:scale-[1.02] transition-all duration-300 overflow-hidden font-['Inter'] tracking-wider uppercase whitespace-nowrap group"
            >
              {/* Shimmer reflection highlight overlay */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-out pointer-events-none" />
              <Download className="w-3.5 h-3.5 relative z-10 shrink-0" />
              <span className="relative z-10">{t('nav.download', 'Download APK')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-brand-muted hover:text-white hover:bg-brand-surface-sec/50 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden absolute top-full left-0 right-0 max-h-[85vh] overflow-y-auto glass-panel backdrop-blur-2xl border-b border-brand-surface-sec/60 z-50"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {/* Mobile Language Selector */}
              <div className="py-3 border-b border-brand-surface-sec/60 space-y-2 px-2">
                <span className="text-[9px] font-bold text-brand-muted font-mono uppercase tracking-wider block text-left">Language / Idioma / Langue</span>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      id={`mobile-lang-${lang.code}`}
                      onClick={() => setLocale(lang.code)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                        locale === lang.code
                          ? 'bg-brand-primary/15 text-brand-primary border border-brand-primary/20'
                          : 'bg-brand-surface/60 text-brand-muted border border-brand-surface-sec hover:text-white'
                      }`}
                    >
                      <span className="mr-1">{lang.flag}</span>
                      <span>{lang.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Theme Selector */}
              <div className="py-3 border-b border-brand-surface-sec/60 space-y-2 px-2">
                <span className="text-[9px] font-bold text-brand-muted font-mono uppercase tracking-wider block text-left">Interface Skin</span>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(THEMES).map(([key, val]) => {
                    const isSelected = key === theme;
                    return (
                      <button
                        key={key}
                        id={`mobile-theme-btn-${key}`}
                        onClick={() => setTheme(key as ThemeType)}
                        className={`flex flex-col items-start p-2 rounded-xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/20'
                            : 'bg-brand-surface/60 text-brand-muted border-brand-surface-sec hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 w-full">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: val.colors['--brand-bg'] }} />
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: val.colors['--brand-primary'] }} />
                          <span className="text-[10px] font-bold truncate flex-1">{val.name.split(' ')[0]}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    id={`mobile-nav-item-${item.href.slice(1)}`}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'text-brand-primary bg-brand-primary/5 border-l-4 border-brand-primary pl-3'
                        : 'text-brand-muted hover:text-white hover:bg-brand-surface-sec/50'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-brand-surface-sec/60 flex flex-col gap-3">
                <div className="flex items-center justify-between px-4 text-xs text-brand-muted font-mono">
                  <span>Active Protection</span>
                  <span className="text-brand-primary flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-ping"></span>
                    Safe Node
                  </span>
                </div>
                <a
                  id="mobile-download-btn"
                  href="https://www.moviesbox.com.co/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-brand-bg bg-gradient-to-r from-brand-primary to-brand-accent rounded-xl"
                >
                  <Download className="w-4 h-4" />
                  <span>{t('hero.latest_download_size', 'Download Latest APK (32.4MB)')}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
