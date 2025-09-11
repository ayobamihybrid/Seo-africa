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
  code: string;
  name: string;
  flag: string;
}

const CustomGoogleTranslate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  const languages: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    // { code: "es", name: "Español", flag: "🇪🇸" },
    // { code: "de", name: "Deutsch", flag: "🇩🇪" },
 
  ];

  const translateTo = (langCode: string): void => {
    console.log(`Translating to: ${langCode}`);

    if (langCode === "en") {
      console.log("Resetting to English...");

      window.location.hash = "";

      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" +
        window.location.hostname +
        ";";
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." +
        window.location.hostname +
        ";";

      try {
        localStorage.removeItem("googtrans");
        sessionStorage.removeItem("googtrans");
      } catch (e) {
        console.log("Could not clear storage:", e);
      }

      document.body.classList.remove("translated-ltr", "translated-rtl");

      const url = window.location.href.split("#")[0];
      window.location.replace(url);
    } else {
      console.log(`Setting hash to translate to ${langCode}`);

      window.location.hash = "";

      setTimeout(() => {
        window.location.hash = `#googtrans(en|${langCode})`;
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }, 50);
    }
  };

  const resetToEnglish = (): void => {
    console.log("Aggressive English reset...");

    window.location.hash = "";

    const hostname = window.location.hostname;
    const domains = [hostname, "." + hostname, "localhost", ".localhost"];

    domains.forEach((domain) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=/en/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    });

    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {
      console.log("Storage clear failed:", e);
    }

    const googleTranslateElement = document.getElementById(
      "google_translate_element"
    );
    if (googleTranslateElement) {
      googleTranslateElement.innerHTML = "";
    }

    const googleTranslateBars = document.querySelectorAll(
      ".goog-te-banner-frame, .skiptranslate"
    );
    googleTranslateBars.forEach((el) => el.remove());

    setTimeout(() => {
      const cleanUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        window.location.search;
      window.location.replace(cleanUrl);
    }, 100);
  };

  useEffect(() => {
    const updateCurrentLanguage = () => {
      const hash = window.location.hash;
      console.log("Current hash:", hash);

      if (hash.includes("googtrans")) {
        const match = hash.match(/googtrans\([^|]*\|([^)]*)\)/);
        if (match && match[1]) {
          const langCode = match[1];
          const lang = languages.find((l) => l.code === langCode);
          if (lang) {
            console.log(`Detected language: ${lang.code}`);
            setCurrentLang(lang.code.toUpperCase());
          }
        }
      } else {
        console.log("No translation hash found, setting to English");
        setCurrentLang("EN");
      }
    };

    updateCurrentLanguage();

    const handleHashChange = () => {
      console.log("Hash changed");
      updateCurrentLanguage();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.google?.translate) {
      console.log("Loading Google Translate...");

      const existingElement = document.getElementById(
        "google_translate_element"
      );
      if (existingElement) {
        existingElement.remove();
      }

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
        console.log("Google Translate script loaded");
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,fr,es,de,zh,ja",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
          console.log("Google Translate element initialized");
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
            <span className="text-sm font-medium">{currentLang}</span>
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
                    if (lang.code === "en") {
                      resetToEnglish(); 
                    } else {
                      translateTo(lang.code);
                    }
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/10 transition-colors text-white text-sm"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {currentLang === lang.code.toUpperCase() && (
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
