# Pollen Towers

[![Made with pollinations.ai](https://raw.githubusercontent.com/pollinations/pollinations/main/packages/ui/src/brand/badge-made-with.svg)](https://pollinations.ai/?ref=badge)

A building of AI-run companies. Five floors, one company per floor, each run by
one person and their AI agents. The agents do the daily work and bring finished
jobs to the owner. The owner makes the decisions that need a human.

Built for Pollinations quest
[#17999](https://github.com/pollinations/pollinations/issues/17999).

Live app: https://dextheking1.github.io/pollen-towers/

## What you can do

- Turn the 3D tower (drag), ride the elevator to a floor (click a floor or a
  floor button), and step into the office.
- Read each company's work board: what its agent finished, and what is waiting
  on the owner's decision.
- Talk to a company's agent from its office.
- Browse the company directory, with search.
- Apply to rent floor 6, the next office. The form is client-side and saves
  applications in your browser only.

## The companies and their agents

Every company runs on a managed Pollinations prompt agent, created with the
`/account/agents` API on the owner's account.

| Floor | Company | Agent model | Agent id |
| --- | --- | --- | --- |
| 5 | Rampart Audit Studio (security audits) | `community/Dextheking1/tower-rampart` | `dfb6a5ac-118c-4cd4-ae96-e31ada8919d2` |
| 4 | Meridian Research Lab (research briefs) | `community/Dextheking1/tower-meridian` | `cc3320ed-db73-4de7-afb1-fcacab833243` |
| 3 | Plaintext Writing Studio (docs and changelogs) | `community/Dextheking1/tower-plaintext` | `6cf26e44-7019-48b1-82b3-ac995a62ea8e` |
| 2 | Forma Design Studio (landing pages, brand) | `community/Dextheking1/tower-forma` | `8c80898f-ffa6-4dc5-87ab-7e3d347c165d` |
| 1 | Stackline Dev Studio (small tools, fixes) | `community/Dextheking1/tower-stackline` | `7f564f62-6995-468f-931c-4d4f921e20e7` |

## Bring your own Pollen

Visitors pay with their own Pollen. In an office, paste your Pollinations key
(`sk_` or `pk_`) into the connect box. The key is stored only in your browser
(localStorage). Chat calls go straight from your browser to
`gen.pollinations.ai` with the company's agent as the model. Nothing is sent
anywhere else, and this repo ships no key of its own.

## The alpha limitation, stated plainly

Pollinations agents are in alpha. Public agents need publisher access, which
this account does not have yet, so the five built-in agents are private to the
owner's account. That means a visitor's key generally cannot call them yet:
the office tries the live call, and if it fails it says so and answers in demo
mode with clearly labeled sample replies. The work boards are sample data for
the same reason. When publisher access opens up, the agents go public and the
demo mode becomes a fallback instead of the default.

Agent feedback for the Pollinations team, found while building this:

- Calling a private prompt agent without the owner's key returns the same
  generic 400 "Invalid model or alias" as calling a model that does not exist
  (reproduced 2026-10-23, with no key and with an invalid key). Apps cannot
  tell "this agent is private" apart from "no such model", so they cannot show
  the visitor a precise message.
- The agents list endpoint returns the full system prompt of private agents to
  the owner. That is expected for the owner, but worth a note in the docs so
  nobody treats system prompts as secret from the account holder.

## Tech

Static site, no build step. `index.html`, `style.css`, `app.js`. The tower is
Three.js (r128, CDN) with a hand-rolled orbit and elevator animation. Hosted on
GitHub Pages from this repo.

## License

MIT. See `LICENSE`.
