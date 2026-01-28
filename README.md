# 📝 Task Manager - Frontend

Interface web para gerenciamento de tarefas, construída com React e Tailwind CSS.

## 🚀 Tecnologias

- React 18
- Vite
- React Router v6
- Axios
- Tailwind CSS
- Context API

## 📋 Funcionalidades

- ✅ Login e registro de usuários
- ✅ Dashboard com estatísticas
- ✅ Criar, editar e deletar tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Filtrar tarefas (todas, pendentes, concluídas)
- ✅ Interface responsiva (mobile-first)
- ✅ Feedback visual e loading states

## 🔧 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- API Backend rodando (task-manager-api)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/DiegoRapichan/task-manager-frontend.git
cd task-manager-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure a URL da API:

```
VITE_API_URL=http://localhost:3000/api
```

4. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará rodando em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 🌐 Deploy

**Vercel (Recomendado):**

1. Faça push para o GitHub
2. Importe projeto no Vercel
3. Configure variável de ambiente:
   - `VITE_API_URL`: URL da sua API em produção
4. Deploy automático!

**Deploy em produção:** [LINK_AQUI_DEPOIS_DO_DEPLOY]

## 🗂️ Estrutura do Projeto

```
src/
├── components/       # Componentes reutilizáveis
├── contexts/         # Context API (autenticação)
├── pages/            # Páginas da aplicação
├── services/         # Serviços (API)
├── App.jsx           # Componente principal com rotas
├── main.jsx          # Entry point
└── index.css         # Estilos globais (Tailwind)
```

## 📸 Screenshots

[Adicionar screenshots depois]

## 🔗 Links Relacionados

- **API Backend:** https://github.com/DiegoRapichan/task-manager-api
- **API em Produção:** https://task-manager-api-xxxx.onrender.com

## 👨‍💻 Autor

**Diego Rapichan**

- GitHub: [@DiegoRapichan](https://github.com/DiegoRapichan)

---

Desenvolvido como parte do roadmap de transição de carreira para JavaScript Fullstack.
