# Conversation Inbox

A high-signal triage dashboard for support agents taking over escalated AI conversations. It presents the riskiest conversations first and makes the next action unambiguous.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to type-check and produce a production build.

## Product decisions

- The inbox is ordered by priority score so an urgent, unhappy customer is visible immediately.
- Wait time, sentiment, status, and priority remain visible in the scanning view; details provide the context needed to act.
- The recommended action is visually separated from the AI summary so agents can distinguish AI context from a human decision.
- Keyboard shortcuts (`j` / `k`, `a`, `r`) support fast queue processing. Buttons retain clear accessible labels and keyboard focus states.
- The UI uses high-contrast navy, slate, indigo, and status colors with textual labels; color is never the only signal.

## Architecture

```
src/
  api/           HTTP boundary and typed API functions
  mocks/         MSW handlers and realistic in-memory fixtures
  store/         Zustand UI-only state (selection, search, filter, toast)
  types/         Shared domain types
  styles/        Tailwind base styles
  App.tsx        Composed inbox and conversation detail experience
```

TanStack Query owns asynchronous server data, caching, and mutation lifecycle. Zustand intentionally owns only transient UI state. This keeps the source of truth for conversations in the query cache while making UI interactions lightweight.

MSW adds a randomized 200–500ms response time to every request. Conversation mutations randomly return a 503 response, providing a deliberate failure path with inline retry UI.

## Tradeoffs

The prototype stores fixture updates in the MSW worker’s memory, which gives a realistic client/server boundary without requiring a backend. A production deployment would point the API module to a real service and retain the same query and UI contracts.

The dashboard focuses on a focused triage path rather than broad CRM functionality. This avoids competing visual hierarchy and makes urgent work easier to identify.

## Future improvements

- Persist snooze schedules and show a dedicated snoozed queue.
- Add optimistic mutation updates with rollback and richer assignment routing.
- Add virtualized lists for high-volume inboxes and pagination/cursor support.
- Support live updates, SLA countdowns, bulk actions, and an audit timeline.
- Expand automated unit, accessibility, and end-to-end test coverage.
# Coversation-inbox
