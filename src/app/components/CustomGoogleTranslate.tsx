import React, { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (options: any, elementId: string): any;
          InlineLayout: {
            SIMPLE: number;
            HORIZONTAL: number;
            VERTICAL: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

interface Language {
  code: "en" | "fr";
  name: string;
  flag: string;
}

const CustomGoogleTranslate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"en" | "fr">("en");

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const clearGoogTransCompletely = () => {
    const hostname = window.location.hostname;
    const domains = [hostname, "." + hostname];

    domains.forEach((domain) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    });

    try {
      localStorage.removeItem("googtrans");
      sessionStorage.removeItem("googtrans");
    } catch {}
  };

  const hardResetGoogleTranslate = () => {
    window.location.hash = "";

    document
      .querySelectorAll(
        "iframe.goog-te-banner-frame, .goog-te-banner-frame, .skiptranslate"
      )
      .forEach((el) => el.remove());

    document.querySelectorAll("style, link").forEach((node) => {
      if (
        node.innerHTML.includes(".goog-te") ||
        (node instanceof HTMLLinkElement && node.href.includes("translate"))
      ) {
        node.remove();
      }
    });
  };

  const setLanguage = (lang: "en" | "fr") => {
    if (lang === "en") {
      clearGoogTransCompletely();
      hardResetGoogleTranslate();
      setCurrentLang("en");

      setTimeout(() => {
        const cleanUrl =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          window.location.search;
        window.location.replace(cleanUrl);
      }, 200);
    } else {
      clearGoogTransCompletely();
      document.cookie = `googtrans=/en/${lang}; path=/; domain=${window.location.hostname};`;
      document.cookie = `googtrans=/en/${lang}; path=/; domain=.${window.location.hostname};`;
      setCurrentLang("fr");

      setTimeout(() => {
        window.location.hash = `#googtrans(en|${lang})`;
        window.location.reload();
      }, 200);
    }
  };

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match && match[1]) {
      setCurrentLang(match[1] as "en" | "fr");
    } else {
      setCurrentLang("en");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.google?.translate) {
      const container = document.createElement("div");
      container.id = "google_translate_element";
      container.style.cssText = `
        position: absolute;
        left: -9999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
      `;
      document.body.appendChild(container);

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);

      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,fr",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        } catch (error) {
          console.error("Error initializing Google Translate:", error);
        }
      };
    }
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <Globe className="w-4 h-4 text-white/80" />
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 text-white hover:bg-white/20 transition-all duration-300 min-w-[80px]"
          >
            <span className="text-sm font-medium">
              {currentLang.toUpperCase()}
            </span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full mt-2 right-0 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl py-2 min-w-[200px] z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/10 transition-colors text-white text-sm"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {currentLang === lang.code && (
                    <span className="ml-auto w-2 h-2 bg-blue-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default CustomGoogleTranslate;
