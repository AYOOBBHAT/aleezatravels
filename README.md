# Aleeza Travels

Production-ready Next.js site for a Kashmir-based travel agency.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Business details (Name, Address, Phone) come from one place: `.env.local` and, when Sanity is connected, **Site settings**. The Contact page, About page, footer, and LocalBusiness structured data all read that record. Leave a field blank until the real value is confirmed. The site will show “To be published” instead of inventing an address, phone, hours, rating, or map pin.

Public values you can set in `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — live origin, for example `https://www.aleezatravels.com`
- `BUSINESS_EMAIL` / `BUSINESS_PHONE` / `WHATSAPP_NUMBER`
- `BUSINESS_ADDRESS` — street address only when confirmed
- `BUSINESS_HOURS` — free-text hours only when confirmed
- `GOOGLE_MAPS_EMBED_URL` — iframe `src` from Google Maps → Share → Embed a map
- `GOOGLE_MAPS_PLACE_URL` — public Maps or Business Profile link
- `GOOGLE_SITE_VERIFICATION` — Search Console HTML-tag token
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container, for example `GTM-XXXX`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4, for example `G-XXXX` (skip if GTM already loads GA4)
- `NEXT_PUBLIC_INSTAGRAM_URL` / `NEXT_PUBLIC_FACEBOOK_URL` / `NEXT_PUBLIC_YOUTUBE_URL`

Sanity Studio, webhooks, and CMS workflows are in [docs/cms.md](docs/cms.md).

## Checks

```bash
npm run lint
npm run typecheck
```

## Images

Placeholder destination photographs live in `public/images/`. Replace those files with licensed or owned photography, keeping the same filenames, or update the paths in `lib/data/`.

---

## Launch checklist: Google Search Console, Business Profile, Analytics

Do this after the site is on HTTPS with the final domain in `NEXT_PUBLIC_SITE_URL`.

### Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) and add a **URL prefix** property for the live origin (the same value as `NEXT_PUBLIC_SITE_URL`, including `https://` and the `www` choice you will keep).
2. Prefer **one canonical host**. Redirect `http` → `https` and pick either `www` or apex, then use that origin everywhere (sitemap, canonicals, Business Profile website URL).
3. Verify ownership with the **HTML tag** method: copy the `content` value from the meta tag Google shows, set `GOOGLE_SITE_VERIFICATION` in `.env.local` / hosting env, and redeploy. The site already emits `<meta name="google-site-verification">` when that variable is set.
4. After verification, submit `https://YOUR-DOMAIN/sitemap.xml`. `robots.txt` already points to that sitemap (`/robots.txt`).
5. Confirm Google can fetch `/`, `/contact`, `/about`, `/privacy`, `/terms`, package, destination, and blog URLs. `/studio` and `/api/` are disallowed.
6. Use **URL Inspection** on the homepage and `/contact`. Check that the rendered Name / Address / Phone match what you intend to show in search — unpublished fields must stay blank in structured data (they will).
7. Request indexing for the homepage and contact page once NAP is filled in, not while the address and phone are still placeholders.
8. Optional: add a **Domain** property as well (DNS TXT) if you want coverage of every subdomain.

The site is Search Console–ready when:

- Canonical URLs and Open Graph tags are generated per page
- `/sitemap.xml` lists the public routes
- `/robots.txt` allows crawling and lists the sitemap
- Google verification meta is wired through `GOOGLE_SITE_VERIFICATION`
- TravelAgency / LocalBusiness JSON-LD includes street, phone, email, and map links **only** when those values are published

### Google Business Profile

Claim or create the listing at [Google Business Profile](https://business.google.com/). Use the **same NAP** you will put in `.env.local` or Sanity Site settings.

| Field | What to enter |
| --- | --- |
| Name | `Aleeza Travels` (or the exact legal/trading name you publish on the site) |
| Address | The confirmed street address. Do not use a fake pin or a city-only address |
| Phone | The confirmed business phone, same formatting as `BUSINESS_PHONE` |
| Website | The canonical `NEXT_PUBLIC_SITE_URL` |
| Category | Travel Agency (primary). Add related categories only if they are accurate |
| Hours | Real opening hours, then copy the same wording into `BUSINESS_HOURS` / Site settings |
| Description | Kashmir tour packages and custom trips from Srinagar — no invented awards or ratings |

Then:

1. Add the Google Maps **place** URL to `GOOGLE_MAPS_PLACE_URL`.
2. Add the **embed** iframe URL to `GOOGLE_MAPS_EMBED_URL` so `/contact` can show the map.
3. Link the website’s contact page (`/contact`) from the profile if Google allows a specific landing URL.
4. Do not generate reviews. Ask real clients after completed trips.
5. Keep GBP, the website NAP, and structured data in lockstep. If you change the phone, update env/CMS the same day.
6. Until address and phone are confirmed, leave them empty on the site. Google should not be given a placeholder street in JSON-LD.

### Google Analytics

Use this if you want traffic reports and you are **not** already firing GA4 from Tag Manager.

1. Create a GA4 property at [Google Analytics](https://analytics.google.com/).
2. Create a **Web** data stream for the live origin.
3. Copy the Measurement ID (`G-…`) into `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
4. Redeploy. The site loads `gtag.js` only when that ID is present and valid.
5. In Admin → Data streams → Configure tag settings, set the correct domain.
6. Enable **Google signals** only if you understand the extra data collection; update the privacy policy if you do.
7. Link Analytics to Search Console (Admin → Product links) so queries and landing pages sit in one report.
8. Check Realtime after visiting `/contact` on the live site.

Skip `NEXT_PUBLIC_GA_MEASUREMENT_ID` if Tag Manager already loads the GA4 tag. Loading both will double-count.

### Google Tag Manager (only if needed)

Add Tag Manager when you expect several tags (GA4, conversion pixels, later ads) and want to change them without a deploy.

1. Create a container at [Google Tag Manager](https://tagmanager.google.com/) (Web).
2. Set `NEXT_PUBLIC_GTM_ID` to the container ID (`GTM-…`) and redeploy. The site injects the GTM snippet and noscript iframe only when this ID is set.
3. **Do not also set** `NEXT_PUBLIC_GA_MEASUREMENT_ID` if the GTM container will load GA4. This codebase loads GTM *or* gtag, not both.
4. In GTM, add the GA4 Configuration tag, trigger All Pages, and publish.
5. Preview the container, then click around Home, Packages, Destinations, Contact, and a blog post.
6. Keep marketing tags off until the privacy policy matches what you fire.

If you only need Analytics, GTM is optional — GA4 via `NEXT_PUBLIC_GA_MEASUREMENT_ID` is enough.
