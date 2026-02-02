# AURUM Licitações

**AURUM** é uma plataforma web inteligente voltada à automação, organização e análise de licitações públicas e pregões eletrônicos no Brasil, com foco em **dispensas eletrônicas**, **PNCP** e **apoio à tomada de decisão** conforme a Lei nº 14.133/2021.

O projeto nasce com abordagem **data-driven**, arquitetura modular e foco em produtividade, compliance e redução de risco para empresas que participam de contratações públicas.

---

## 🎯 Objetivo do Projeto

Centralizar e automatizar tarefas críticas do ciclo de licitações públicas, tais como:

- Consulta e sincronização de dados do **PNCP**
- Organização e versionamento de documentos
- Análise de editais e oportunidades
- Apoio à decisão para participação em certames
- Preparação para auditoria e rastreabilidade

---

## 🧠 Visão Estratégica

O AURUM não é apenas um sistema de consulta, mas um **assistente inteligente para licitações**, capaz de:

- Reduzir tempo operacional
- Minimizar erros formais
- Organizar evidências documentais
- Aumentar a taxa de aproveitamento de oportunidades públicas

---

## 🏗️ Arquitetura (visão geral)

O projeto é dividido em dois grandes blocos:

### Backend
- Node.js
- Integração com PNCP (API e dados públicos)
- Regras de negócio baseadas na Lei 14.133
- Organização documental e scoring
- Execução local-first com possibilidade de expansão cloud

### Frontend
- React + Vite
- Dashboards e painéis de controle
- Visualização de oportunidades e status
- Interface orientada à decisão

---

## 📦 Estrutura Inicial (planejada)

```text
aurumlicita/
├─ backend/
│  ├─ src/
│  ├─ scripts/
│  ├─ data/
│  └─ package.json
├─ frontend/
│  ├─ src/
│  ├─ public/
│  └─ vite.config.js
├─ docs/
│  └─ arquitetura.md
├─ .env.example
└─ README.md
