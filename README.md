# ferixdi.ai — AI Reels landing (GitHub Pages)

## What it is
Static landing with:
- Hero + pricing (1 / 5 / 20 videos)
- Lead form (Formspree)
- Payment buttons (replace links)
- “Bot under turnkey” block (Telegra.ph)

## Quick deploy (GitHub Pages)
1) Create repo `ferixdi-ai-reels`
2) Upload files from this folder
3) Settings → Pages → Deploy from branch → `main` / `/ (root)`
4) Open your site URL

## Setup form (Formspree)
Replace in `index.html`:
`action="https://formspree.io/f/your_form_id"`
with your real Formspree form endpoint.

## Setup payments
Replace in `script.js`:
`PAY.single / PAY.pack5 / PAY.month` with your real payment links.
Optionally set redirect to `/thanks.html` in the payment provider.

## Telegram
Update Telegram link if needed:
- `https://t.me/ferixdi_bot_ai_bot`
