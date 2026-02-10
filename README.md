# 🎯 Transbirday - Página de Regras da Empresa

Landing page moderna e responsiva para exibição das regras da empresa Transbirday, otimizada para acesso via QR code em dispositivos móveis.

## 📋 Sobre o Projeto

Esta página foi desenvolvida para ser facilmente acessível através de um QR code, permitindo que visitantes e funcionários da Transbirday consultem rapidamente as regras e normas da empresa.

## 🎨 Características

- ✅ Design moderno com tema branco e azul
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves e interativas
- ✅ Otimizado para QR code scanning
- ✅ Acessibilidade (WCAG)
- ✅ Performance otimizada
- ✅ SEO-friendly

## 🚀 Como Usar Localmente

1. **Clone ou baixe os arquivos** para seu computador

2. **Abra o arquivo `index.html`** em qualquer navegador moderno:
   - Chrome
   - Firefox
   - Safari
   - Edge

3. **Ou use um servidor local** (recomendado):
   ```bash
   # Se tiver Python instalado
   python -m http.server 8000
   
   # Ou use Node.js com http-server
   npx http-server
   ```

## 📱 Publicar no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em **"New repository"** (Novo repositório)
3. Configure o repositório:
   - **Nome**: `regras-transbirday` (ou outro nome de sua preferência)
   - **Descrição**: "Página de regras da empresa Transbirday"
   - **Visibilidade**: Público (ou Privado, se preferir)
4. Clique em **"Create repository"**

### Passo 2: Upload dos Arquivos

**Opção A: Via Interface Web do GitHub**

1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste e solte os arquivos:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Adicione uma mensagem de commit (ex: "Initial commit")
4. Clique em **"Commit changes"**

**Opção B: Via Git (Linha de Comando)**

```bash
# Navegue até a pasta do projeto
cd c:\Users\Segurança\Documents\Regras_Transbirday

# Inicialize o repositório Git
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Initial commit: Página de regras Transbirday"

# Adicione o repositório remoto (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/regras-transbirday.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No seu repositório no GitHub, vá em **Settings** (Configurações)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **Source** (Origem):
   - Selecione **"Deploy from a branch"**
   - Branch: **main** (ou master)
   - Folder: **/ (root)**
4. Clique em **Save** (Salvar)
5. Aguarde alguns minutos e sua página estará online!

### 📍 URL da Página

Após a ativação, sua página estará disponível em:
```
https://SEU-USUARIO.github.io/regras-transbirday/
```

## 🔗 Gerar QR Code

Após publicar no GitHub Pages, você pode gerar um QR code:

### Opções Online Gratuitas:

1. **[QR Code Generator](https://www.qr-code-generator.com/)**
2. **[QRCode Monkey](https://www.qrcode-monkey.com/)**
3. **[Google Chrome](chrome://dino)** - Digite a URL e use "Compartilhar > Criar QR Code"

### Passos para Criar o QR Code:

1. Acesse um dos sites acima
2. Cole a URL da sua página GitHub Pages
3. Personalize o design (opcional):
   - Cores: Azul (#0066CC) para combinar com o tema
   - Logo: Adicione o logo da Transbirday (se tiver)
4. Baixe o QR code em alta resolução (PNG ou SVG)
5. Imprima e coloque na entrada da empresa

## ✏️ Personalizar Conteúdo

### Editar Regras

Abra o arquivo `index.html` e localize a seção `<div class="rules-grid">`:

```html
<!-- Rule 1 -->
<div class="rule-card fade-in">
    <div class="rule-icon">
        <!-- Ícone SVG aqui -->
    </div>
    <h3 class="rule-title">1. Pontualidade</h3>
    <p class="rule-description">
        Chegar no horário é fundamental...
    </p>
</div>
```

**Substitua**:
- `rule-title`: Título da regra
- `rule-description`: Descrição da regra
- Adicione ou remova cards conforme necessário

### Alterar Cores

Edite o arquivo `style.css` na seção `:root` para personalizar as cores:

```css
:root {
    --color-primary: #0066CC;        /* Azul principal */
    --color-primary-dark: #0052A3;   /* Azul escuro */
    --color-primary-light: #4A90E2;  /* Azul claro */
    /* ... */
}
```

### Adicionar Logo

Se você tiver um logo da empresa:

1. Adicione o arquivo de imagem (ex: `logo.png`) na pasta do projeto
2. No `index.html`, substitua:

```html
<!-- De: -->
<div class="logo-text">Transbirday</div>

<!-- Para: -->
<img src="logo.png" alt="Transbirday Logo" class="logo-img">
```

3. Adicione estilos no `style.css`:

```css
.logo-img {
    height: 50px;
    width: auto;
}
```

## 📁 Estrutura de Arquivos

```
Regras_Transbirday/
├── index.html          # Estrutura HTML da página
├── style.css           # Estilos e design
├── script.js           # Interatividade e animações
└── README.md           # Documentação
```

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna
  - CSS Grid & Flexbox
  - Animações CSS
  - Variáveis CSS
  - Media Queries (Responsividade)
- **JavaScript (Vanilla)** - Interatividade
  - Intersection Observer
  - Event Listeners
  - DOM Manipulation

## 🌐 Compatibilidade de Navegadores

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Navegadores móveis (iOS Safari, Chrome Mobile)

## 📱 Testado em Dispositivos

- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablet (iPad, Android tablets)
- ✅ Mobile (iPhone, Android phones)

## 🎯 Performance

- ⚡ Carregamento rápido (< 1s)
- 📦 Tamanho mínimo (sem dependências externas, exceto fonte Google)
- 🚀 Otimizado para mobile

## 📞 Suporte

Para dúvidas ou personalizações adicionais:
- Edite diretamente os arquivos HTML, CSS e JS
- Consulte a documentação inline nos arquivos
- Teste as mudanças localmente antes de fazer commit

## 📄 Licença

Este projeto foi criado para uso exclusivo da empresa Transbirday.

---

**Desenvolvido com ❤️ para Transbirday**

*Última atualização: Fevereiro 2026*
