# Contact form setup (Resend)

The form on /contact posts to `src/app/api/contact/route.ts`, which sends the email
through Resend. Your API key stays on the server — it is never sent to visitors.

## 1. Get an API key
1. Sign in at https://resend.com
2. API Keys → Create API key (permission: "Sending access") → copy it.

## 2. Add environment variables
Locally, create `.env.local` in the project root (it is git-ignored):

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO=m.ahmadfaizan30@gmail.com
```

On Vercel: Project → Settings → Environment Variables → add the same values → redeploy.

> Without a verified domain, Resend's test sender (`onboarding@resend.dev`) can only deliver
> to the email address of your Resend account — so make `CONTACT_TO` that same address.

## 3. (Recommended) Verify your domain + auto-reply
1. Resend → Domains → Add domain → add the DNS records it shows at your domain provider.
2. When it shows "Verified", add:

```
CONTACT_FROM=Muhammad Ahmad Faizan <hello@yourdomain.com>
CONTACT_AUTOREPLY=true
```

Visitors then get an instant "Thanks — I've received your message" email,
and you can send to any inbox.

## How it behaves
- Not configured yet (no `RESEND_API_KEY`): the form opens the visitor's email app, pre-filled.
- Spam: hidden honeypot field + max 5 messages per 10 minutes per visitor.
- "Reply" on an inquiry email goes straight to the visitor's address.
- Free plan: 3,000 emails/month, 100/day.
