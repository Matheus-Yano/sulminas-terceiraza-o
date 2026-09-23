# Segurança de publicação

## O que já está configurado

- CSP restritiva, permitindo somente os recursos usados pelo site.
- HSTS para exigir HTTPS depois da primeira visita.
- Proteção contra clickjacking e MIME sniffing.
- Referrer Policy e Permissions Policy restritivas.
- Isolamento de origem e desativação de listagem de diretórios.
- Campos do formulário limitados e validados antes do redirecionamento ao WhatsApp.

## Antes de publicar

1. Confirme que o domínio real é `www.sulminasserv.com.br` e substitua o domínio em `index.html`, `robots.txt` e `sitemap.xml` se necessário.
2. Ative HTTPS válido para o domínio e subdomínios antes de manter HSTS habilitado.
3. Use somente um arquivo de cabeçalhos conforme a hospedagem: `_headers` para Netlify, `.htaccess` para Apache ou `web.config` para IIS.
4. No IIS, confirme que o módulo URL Rewrite está instalado para o redirecionamento HTTP para HTTPS.
5. Faça um teste externo dos cabeçalhos após a publicação e confirme que o mapa, fontes, favicon e WhatsApp continuam funcionando.
6. Revise a política de privacidade com os dados legais reais da empresa, incluindo CNPJ e responsável pelo tratamento.

## O que a página estática não consegue proteger

Não há backend ou banco de dados neste projeto. Portanto, não existe endpoint próprio para proteger contra SQL injection, CSRF ou brute force. Se um backend for criado, ele deverá validar tudo novamente no servidor, aplicar rate limiting, proteção contra spam, logs sem dados sensíveis e gerenciamento de segredos fora do código.

HSTS, CSP, TLS, WAF, CDN, backups e monitoramento dependem da hospedagem. Nenhum código frontend consegue garantir proteção absoluta contra invasões.