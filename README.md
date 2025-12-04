```markdown
# Bootstrap + Vite Starter

Минимальный шаблон для проектов с Bootstrap 5 и Vite.

## Запуск

1. Клонируйте проект:
```bash
git clone https://github.com/NerdySnake6/Bootstrap-Vite-.git
cd Bootstrap-Vite-
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```
Сервер запустится на http://localhost:8000

## Структура проекта

```
Bootstrap-Vite-/
├── Screenshot/
│   ├── Screenshot
│   ├── Screenshot
│   ├── Screenshot
│   └── Screenshot
├── src/
│   ├── index.html
│   ├── style.css
│   └── js/
│       └── main.js
├── package.json
├── vite.config.js
└──README.md
```

## Команды

- `npm run dev` – запуск сервера разработки
- `npm run build` – сборка проекта
- `npm run preview` – просмотр сборки

## Технологии

- Vite
- Bootstrap 5
- Popper.js

## Выводы 
Использование Bootstrap через CDN уменьшает размер итогового бандла на 85-90%, так как Bootstrap не включается в сборку, а загружается отдельно из сети доставки контента.
