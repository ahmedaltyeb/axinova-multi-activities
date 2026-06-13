# Axinova Multi Activities Company

Corporate bilingual website for Axinova Multi Activities Company.
A multi-sector business platform for Industrial, Trading, Technical Services, Logistics, and Construction.

---

## Overview

This project is a modern corporate web platform for Axinova.

It delivers:

* Bilingual support (English and Arabic)
* RTL layout support for Arabic
* Corporate presentation for multiple business sectors
* Responsive design for all devices
* Fast UI with React and Vite

---

## Tech Stack

* React + TypeScript
* Vite
* Tailwind CSS
* Framer Motion
* Wouter routing
* Lucide icons
* Node.js workspace structure

---

## Features

* English and Arabic language switch
* RTL layout support
* Dark UI theme system
* Animated sections and counters
* Sector-based company structure
* Projects and services pages
* Careers and contact forms UI
* Investor relations page
* News and updates section

---

## Project Structure

artifacts/axinova/src/

* App.tsx → routes and providers
* context/LanguageContext.tsx → language + RTL logic
* data/mockData.ts → all content data
* components/ → UI and layout components
* pages/ → all website pages

---

## How to Run

Install dependencies:
pnpm install

Start development:
pnpm dev

Type check:
pnpm typecheck

Build:
pnpm build

---

## Architecture

* Frontend only application
* Data driven UI from mockData.ts
* No backend integration
* Language context controls direction and translations
* CSS logical properties for RTL support

---

## Language System

* Default language: English
* Arabic supported with RTL layout
* Toggle updates:

  * text direction (ltr / rtl)
  * UI content language

---

## Styling

* Tailwind CSS design system
* Dark navy corporate theme
* Gold accent color
* Responsive layout for mobile and desktop

---

## Roadmap

* CMS integration
* Real API backend
* CRM integration
* Investor dashboard
* Multi-tenant structure

---

## GitHub

Repository:
[https://github.com/ahmedaltyeb/axinova-multi-activities](https://github.com/ahmedaltyeb/axinova-multi-activities)

---

## Notes

* All content is mock data
* UI ready for production backend integration
* Designed for scalability
