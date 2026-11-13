# Contact form setup (Web3Forms)

The contact page uses **Web3Forms**, replacing Formspree. Your Next.js app is configured for static export, so submissions are sent directly from the visitor's browser to the Web3Forms API; you do not need an API route, database, or email server. No extra npm package is required.

## One-time setup

1. Visit [web3forms.com](https://web3forms.com/) and generate a free access key for the email address where you want to receive contact requests. Complete any email verification required by Web3Forms.
2. Copy `.env.example` to `.env.local` in the project root. Paste your access key after `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=`.
3. Restart `npm run dev` after editing `.env.local`. Open `/contact`, submit a test inquiry, and check your inbox and spam/junk folders.
4. For a live deployment, set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` as an environment variable **at build time** in your hosting dashboard, then rebuild and redeploy the site. Static HTML/JS exports embed the value during `next build`, so changing the setting without rebuilding will not update the deployed form.
5. Test a submission on your deployed domain. The form reports success when the Web3Forms API accepts the submission; **confirm that you actually receive the email** before relying on it for client inquiries.

## Notes

- This access key is a **public form identifier**, not a private secret. Web3Forms explicitly permits its use in browser code. Do not place an SMTP password or confidential API secret in a `NEXT_PUBLIC_` variable.
- Web3Forms includes spam filtering; the form also has a hidden bot-check field. If spam becomes a problem, enable their hCaptcha option rather than adding a server backend.
- The free plan is currently listed as 250 submissions/month (check Web3Forms for current limits).
- The form retains the original fields: name, optional phone, email, project subject, and project details. It preserves input validation, accessibility messages, and success/error states.
- Do not put a real access key into `.env.example` or commit `.env.local` to Git. `.gitignore` already ignores `.env*` files by default; verify your project's Git settings.
- If submissions fail, inspect the browser Network tab for the Web3Forms API response and verify that your key is correct and activated. A real browser test is required; no automated live submission is made by this package.
