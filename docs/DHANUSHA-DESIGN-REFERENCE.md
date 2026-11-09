# Dhanusha's Magical Birthday Journey — design reference

The supplied 1536×1024 storyboard is the visual master reference for this experience. It depicts eleven distinct mobile-first screens: welcome, readiness prompt, journey map, photo memories, playful teasing, appreciation, surprise picker, birthday cake/wish, personal letter, best-friend question, and thank-you/replay.

Visual direction: deep midnight violet and indigo, luminous pink/lavender clouds, champagne-gold highlights, moonlight, butterflies, flowers, sparkles, handwritten display lettering, rounded glowing buttons, scrapbook photo frames and a parchment-style letter.

Implementation notes:
- Each storyboard panel is a real route-like application state with back/next navigation and direct progress dots.
- The five user-provided photos are individual assets in `public/memories/`.
- Background music is original synthesized ambient audio and begins only after the visitor presses the music control (browser autoplay restrictions).
- This branch is a preview; production is not changed.
