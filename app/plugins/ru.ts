import { BuiltinPlugin } from "./typing";

export const EN_PLUGINS: BuiltinPlugin[] = [
  {
    name: "WebSearch",
    toolName: "web-search",
    lang: "ru",
    description: "Инструмент для поиска веб-страниц в поисковых системах.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "Calculator",
    toolName: "calculator",
    lang: "ru",
    description:
      "Класс Калькулятор используется для вычисления математических выражений. Он расширяет базовый класс Tool.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "WebBrowser",
    toolName: "web-browser",
    lang: "ru",
    description:
      "Класс, предназначенный для взаимодействия с веб-страницами, либо для извлечения информации из них, либо для краткого изложения их содержания.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "Wikipedia",
    toolName: "WikipediaQueryRun",
    lang: "ru",
    description:
      "Инструмент для взаимодействия с API Википедии и получения данных из него.",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
  },
  {
    name: "DALL·E",
    toolName: "dalle_image_generator",
    lang: "ru",
    description:
      "DALL·E 2 - это система искусственного интеллекта, которая может создавать реалистичные изображения и искусство на основе описания на естественном языке. Для использования этого плагина требуется настройка сервиса Cloudflare R2 для хранения объектов.",
    builtin: true,
    createdAt: 1694703673000,
    enable: false,
  },
  {
    name: "Stable Diffusion",
    toolName: "stable_diffusion_image_generator",
    lang: "ru",
    description:
      "Модель текст-в-изображение Stable Diffusion. Для использования этого плагина требуется настройка сервиса Cloudflare R2 для хранения объектов и API stable-diffusion-webui.",
    builtin: true,
    createdAt: 1688899480510,
    enable: false,
  },
];
