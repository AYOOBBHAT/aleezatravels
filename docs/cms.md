# Sanity CMS

Aleeza Travels can run entirely on the local catalogue. When Sanity is configured, published CMS documents replace that catalogue. If Sanity is unset, times out, or errors, the website keeps serving local packages, destinations, articles, FAQs, and placeholders.

## 1. Create a Sanity project

1. Sign in at [sanity.io/manage](https://www.sanity.io/manage) and create a project.
2. Copy the project ID.
3. Add these values to `.env.local` (see `.env.example`):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
SANITY_REVALIDATE_SECRET=a-long-random-string
```

4. In the Sanity project: **API → CORS origins** — add `http://localhost:3000` and the live site origin. Allow credentials.
5. Restart `npm run dev`.
6. Open Studio at [http://localhost:3000/studio](http://localhost:3000/studio) and sign in.

Do **not** put `SANITY_API_READ_TOKEN` or `SANITY_REVALIDATE_SECRET` in any `NEXT_PUBLIC_` variable. Those stay on the server. A read token is only needed if the dataset is private.

## 2. How content reaches the website

- The server fetches published documents from the Sanity CDN (or the API if a read token is set).
- Results are cached for 60 seconds and tagged (`packages`, `destinations`, `blog`, `faqs`, `testimonials`, `settings`).
- A Sanity webhook to `POST /api/revalidate` expires those tags immediately so the next visitor gets the new page without rebuilding the whole site.

Webhook setup (Sanity project → API → Webhooks):

- URL: `https://your-domain.com/api/revalidate`
- Secret: the same value as `SANITY_REVALIDATE_SECRET` (send as `Authorization: Bearer …`, or `?secret=` on the URL)
- Trigger on create / update / delete
- Projection:

```
{
  _type,
  "slug": slug.current
}
```

Until at least one document of a type is **published** in Studio, the site continues to show the local version of that type.

## 3. Create a package

1. Open Studio → **Travel packages** → Create.
2. Fill **Title**, **Slug** (Generate), **Short description**, **Description**, and **Duration** (for example `5 nights / 6 days`).
3. Set **Package type** and link **Primary destination** plus **Destinations**.
4. Add a **Hero image** with alt text. Add gallery images if you have them.
5. Write the **Itinerary** (one item per day). Link a destination on each day when it applies.
6. List **Inclusions**, **Exclusions**, and package **FAQs**.
7. Leave **Price** empty until a real tariff exists. Do not invent a rupee figure. Hotel names in **Stays** stay empty until a property is confirmed in a quote.
8. Complete the **SEO** tab (`SEO title`, `SEO description`).
9. Turn **Published** on. Optionally turn **Featured** on for the homepage.
10. Publish the document. The package appears at `/packages/[slug]` after cache refresh (or immediately after the webhook runs).

## 4. Create a destination

1. Open Studio → **Destinations** → Create.
2. Fill **Title** (place name, for example `Gulmarg`), **Slug**, **Description**, and **Introduction**.
3. Add **Attractions** and **Things to do** (title + summary for each).
4. Fill **Best time** (overview and seasons) and travel information.
5. Add a **Hero image** with alt text, plus extra **Images** if you have them.
6. Add destination **FAQs**. Link **Nearby destinations**.
7. Complete the **SEO** tab.
8. Turn **Published** on (and **Featured** if it should appear on the homepage).
9. Publish. The guide appears at `/destinations/[slug]`.

Create destinations before the packages that reference them.

## 5. Publish a blog post

1. Open Studio → **Blog posts** → Create.
2. Fill **Title**, **Slug**, **Excerpt**, **Author**, **Category**, and **Tags**.
3. Write the **Body**. Use H2/H3 headings for the table of contents. Use the Note block for cautions. Do not invent visitor numbers or prices.
4. Add a **Featured image** with alt text.
5. Set **Published date**. Set **Updated date** when you revise the article.
6. Link related packages and destinations.
7. Add FAQs if they help.
8. Complete the **SEO** tab.
9. Turn **Published** on.
10. Publish. The article appears at `/blog/[slug]` and on `/blog`.

Drafts (Published off) never appear on the public site.

## 6. Update SEO metadata

**Whole site (homepage title, description, share image, business name):**

1. Studio → **Site settings**.
2. Edit **Default SEO title**, **Default SEO description**, and **Default share image**.
3. Edit **Business name**, phone, WhatsApp, email, street address, business hours, Google Maps URLs, logo, and social links in the Business tab. Leave a field blank rather than inventing it. JSON-LD only includes address, phone, email, and map links when they are filled.
4. Publish. NAP on Contact, About, and the footer, plus LocalBusiness structured data, pick this up after revalidation.

**One package, destination, or article:**

1. Open that document.
2. Open the **SEO** tab.
3. Set **SEO title** (about 50–60 characters) and **SEO description** (about 150–160 characters). Match the page; do not stuff keywords.
4. Publish.

Canonical URLs, Open Graph tags, and Article JSON-LD are generated from these fields plus the slug.

## 7. FAQs and testimonials

- **FAQs** in Studio replace the homepage FAQ list once at least one FAQ is published.
- **Testimonials** stay off the public site until a document has permission, verified, and published all set. Do not publish invented reviews. There is no Review / aggregateRating schema.
