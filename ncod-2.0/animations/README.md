# NCOD 2.0 — Layered character animation pipeline

## Approved target
Detailed semi-realistic 2D illustrated people, not emoji or cartoon CSS figures. Fixed seat positions; idle seated, stand, dance, laugh, shock, cheer, sit. Nameplates must be positioned ABOVE head and never overlap faces.

## Asset dependency
The current `lounge.png` is a flattened composite with people already seated. Do NOT overlay a second moving Eli on it: this creates duplicates. First export a matching clean room background and transparent layered character art, with foreground couch/table masks. The existing room art is a reference, not animation-ready source.

## Suggested per-character files
`characters/eli/layers/{head,torso,upper-arm-left,forearm-left,hand-left,upper-arm-right,forearm-right,hand-right,hips,thigh-left,calf-left,foot-left,thigh-right,calf-right,foot-right}.png`

`characters/eli/rig.json`: pivots/anchor points in normalized local coordinates, layer order, scale, seat coordinates, standing coordinates, head-top label anchor.

`characters/eli/animations.json`: keyed states idle-sit, stand-up, dance, laugh, shock, cheer, sit-down. Prefer transforms and easing, avoid large scale deformation.

## Runtime plan
Use a single character controller to load character-specific rig data, schedule states and restore original seat coordinates. Render body parts in a shared 2D canvas or WebGL scene. Keep the HUD in HTML above the scene. Reactions anchor to head-top with screen-edge clamping and a 12px gap.

## Acceptance criteria
1. No duplicated character baked into background.
2. Face and clothing consistent across all frames.
3. Sit → stand → dance → sit sequence visible and repeatable on iPhone.
4. Nameplates never obscure faces, even during dance.
5. 12 simultaneous characters at mobile frame rates.
6. The official production site remains untouched.

## Current status
Pipeline documentation only; production-quality layered art assets and body animation runtime have NOT yet been created. Previous motion prototype used placeholder cartoon rigs and is not the approved art direction.
