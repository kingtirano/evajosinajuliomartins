# Site Eva Josina Júlio Martins

Site React profissional para Eva Josina Júlio Martins - Soluções digitais & prestação de serviços eletrónicos.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deploy no GitHub Pages

O projeto está configurado para deploy automático via GitHub Actions.

### Passos para fazer push:

1. **Fazer push para o GitHub:**
   ```bash
   git push -u origin main
   ```
   (Você precisará autenticar com suas credenciais do GitHub)

2. **Configurar GitHub Pages:**
   - Vá para o repositório no GitHub: https://github.com/kingtirano/evajosinajuliomartins
   - Clique em **Settings** → **Pages**
   - Em **Source**, selecione **GitHub Actions**
   - O site será publicado automaticamente após o primeiro push

3. **URL do site:**
   Após o deploy, o site estará disponível em:
   `https://kingtirano.github.io/evajosinajuliomartins/`

### Nota:
O workflow do GitHub Actions está configurado em `.github/workflows/deploy.yml` e será executado automaticamente a cada push na branch `main`.

### Forçar um novo deploy

Se precisar forçar um novo deploy sem mudar código, você pode:

- Re-executar o workflow no GitHub (Actions → selecione o workflow → Re-run jobs).
- Ou criar um commit vazio e dar push:

```bash
git commit --allow-empty -m "chore: trigger deploy"
git push origin main
```

### Observações sobre o caminho base

O `vite.config.js` já tem `base: '/evajosinajuliomartins/'` configurado, então as URLs dos assets serão resolvidas corretamente quando o site for servido em `https://kingtirano.github.io/evajosinajuliomartins/`.

