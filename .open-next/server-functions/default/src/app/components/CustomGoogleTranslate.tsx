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

  const clearAllGoogleTranslateCookies = () => {
    const hostname = window.location.hostname;
    const domains = [
      hostname,
      "." + hostname,
      window.location.host,
      "." + window.location.host,
    ];

    domains.forEach((domain) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}; secure;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    try {
      localStorage.removeItem("googtrans");
      sessionStorage.removeItem("googtrans");

      Object.keys(localStorage).forEach((key) => {
        if (key.includes("googtrans") || key.includes("google-translate")) {
          localStorage.removeItem(key);
        }
      });

      Object.keys(sessionStorage).forEach((key) => {
        if (key.includes("googtrans") || key.includes("google-translate")) {
          sessionStorage.removeItem(key);
        }
      });
    } catch (e) {
      console.log("Storage clearing failed:", e);
    }
  };

  const hardResetGoogleTranslate = () => {
    window.location.hash = "";

    document
      .querySelectorAll(
        "iframe.goog-te-banner-frame, .goog-te-banner-frame, .skiptranslate, .goog-te-menu-frame"
      )
      .forEach((el) => el.remove());

    document.querySelectorAll("style, link").forEach((node) => {
      if (
        node.innerHTML?.includes(".goog-te") ||
        (node instanceof HTMLLinkElement && node.href?.includes("translate"))
      ) {
        node.remove();
      }
    });

    document.body.removeAttribute("style");
    document.documentElement.removeAttribute("style");
  };

  const forceReloadPage = () => {
    clearAllGoogleTranslateCookies();
    hardResetGoogleTranslate();

    const cleanUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      window.location.search;

    window.location.href = cleanUrl;
  };

  const setLanguage = (lang: "en" | "fr") => {
    if (lang === "en") {
      console.log("Switching to English - clearing all cookies and reloading");
      setCurrentLang("en");
      forceReloadPage();
    } else {
      console.log("Switching to French");
      clearAllGoogleTranslateCookies();

      const hostname = window.location.hostname;
      document.cookie = `googtrans=/en/${lang}; path=/; domain=${hostname};`;
      document.cookie = `googtrans=/en/${lang}; path=/; domain=.${hostname};`;

      setCurrentLang(lang);

      setTimeout(() => {
        window.location.hash = `#googtrans(en|${lang})`;
        window.location.reload();
      }, 100);
    }
  };

  useEffect(() => {
    const checkCurrentLanguage = () => {
      const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
      if (match && match[1] && match[1] !== "en") {
        setCurrentLang(match[1] as "en" | "fr");
      } else {
        setCurrentLang("en");
      }
    };

    checkCurrentLanguage();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.google?.translate) {
      let container = document.getElementById("google_translate_element");
      if (!container) {
        container = document.createElement("div");
        container.id = "google_translate_element";
        container.style.cssText = `
          position: absolute !important;
          left: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          visibility: hidden !important;
        `;
        document.body.appendChild(container);
      }

      if (!document.querySelector('script[src*="translate.google.com"]')) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onerror = () =>
          console.error("Failed to load Google Translate script");
        document.head.appendChild(script);
      }

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
