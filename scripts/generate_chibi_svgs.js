import fs from 'fs';
import path from 'path';

const targetDir = 'C:\\Users\\anhkh\\OneDrive\\Desktop\\CV\\assets\\chibi';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Common colors:
// Skin: #FDE8D7, Shadows: #F2CBB2, Cheeks: #F2B39C
// Hair: #24292F, Highlights: #3A434D
// Shirt: #285B58, Shirt trim: #1F4543
// Pants: #E2E8F0, Shoes: #243247
// Accents: #F8E7A6 (note yellow), #E7B080 (warm orange), #D6DFE8 (border)

function getBaseHead(cx = 100, cy = 68) {
  return `
    <!-- Neck -->
    <path d="M92 105 L108 105 L106 118 L94 118 Z" fill="#F2CBB2"/>
    <!-- Head Base -->
    <path d="M60 70 C60 40 80 32 100 32 C120 32 140 40 140 70 C140 98 124 112 100 112 C76 112 60 98 60 70 Z" fill="#FDE8D7"/>
    <!-- Ears -->
    <circle cx="58" cy="74" r="9" fill="#FDE8D7"/>
    <circle cx="58" cy="74" r="5" fill="#F2CBB2"/>
    <circle cx="142" cy="74" r="9" fill="#FDE8D7"/>
    <circle cx="142" cy="74" r="5" fill="#F2CBB2"/>
    <!-- Hair Back/Base -->
    <path d="M56 64 C52 35 72 18 100 18 C128 18 148 35 144 64 C136 45 125 36 100 36 C75 36 64 45 56 64 Z" fill="#24292F"/>
    <!-- Hair Front Bangs -->
    <path d="M55 58 C62 42 75 38 88 44 C95 40 108 38 120 44 C128 40 138 46 144 56 C138 48 128 46 122 50 C114 44 102 46 96 52 C88 46 76 46 68 54 C62 56 58 58 55 58 Z" fill="#24292F"/>
    <path d="M57 60 C55 70 57 78 59 82 C61 74 61 68 62 60 Z" fill="#24292F"/>
    <path d="M143 60 C145 70 143 78 141 82 C139 74 139 68 138 60 Z" fill="#24292F"/>
    <!-- Cheeks (Blush) -->
    <ellipse cx="72" cy="85" rx="7" ry="4" fill="#F2B39C" opacity="0.6"/>
    <ellipse cx="128" cy="85" rx="7" ry="4" fill="#F2B39C" opacity="0.6"/>
    <!-- Eyebrows -->
    <path d="M72 65 Q80 62 88 66" stroke="#24292F" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <path d="M112 66 Q120 62 128 65" stroke="#24292F" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  `;
}

// 1. Welcome: Waving hand, smiling, holding notebook with TA logo
const welcomeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#243247" flood-opacity="0.12"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <!-- Shadow puddle -->
    <ellipse cx="100" cy="226" rx="46" ry="7" fill="#D6DFE8" opacity="0.7"/>

    <!-- Legs & Shoes -->
    <!-- Left Leg -->
    <path d="M86 168 L84 212 L96 212 L96 168 Z" fill="#E2E8F0"/>
    <path d="M80 212 C80 208 96 208 98 212 L98 220 C98 223 80 223 80 220 Z" fill="#243247"/>
    <!-- Right Leg -->
    <path d="M104 168 L104 212 L116 212 L114 168 Z" fill="#E2E8F0"/>
    <path d="M102 212 C102 208 118 208 120 212 L120 220 C120 223 102 223 102 220 Z" fill="#243247"/>

    <!-- Torso / Shirt -->
    <path d="M74 116 C78 112 122 112 126 116 L124 172 C124 174 76 174 76 172 Z" fill="#285B58"/>
    <!-- Collar -->
    <path d="M92 116 C92 122 108 122 108 116" stroke="#1F4543" stroke-width="3" fill="none"/>

    <!-- Left Arm holding Notebook -->
    <path d="M75 120 L60 148 L70 154 L80 132 Z" fill="#285B58"/>
    <!-- Notebook with TA logo -->
    <g transform="translate(48, 140) rotate(-10)">
      <rect x="0" y="0" width="28" height="38" rx="3" fill="#F8E7A6" stroke="#D6DFE8" stroke-width="1.5"/>
      <rect x="0" y="0" width="5" height="38" rx="1" fill="#285B58"/>
      <!-- Fold corner -->
      <path d="M20 0 L28 8 L20 8 Z" fill="#E7B080"/>
      <!-- TA Mark -->
      <text x="14" y="24" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="10" fill="#285B58" text-anchor="middle">TA</text>
    </g>
    <!-- Left Hand -->
    <circle cx="68" cy="156" r="7" fill="#FDE8D7"/>

    <!-- Right Arm (Waving) -->
    <path d="M125 122 Q144 118 152 100 Q158 88 162 76" stroke="#285B58" stroke-width="14" stroke-linecap="round" fill="none"/>
    <!-- Right Hand Waving -->
    <g transform="translate(162, 70) rotate(15)">
      <circle cx="0" cy="0" r="8" fill="#FDE8D7"/>
      <!-- Fingers wave -->
      <circle cx="3" cy="-6" r="3" fill="#FDE8D7"/>
      <circle cx="-2" cy="-7" r="3" fill="#FDE8D7"/>
      <!-- Wave motion marks -->
      <path d="M10 -6 Q14 -3 10 3" stroke="#F2B39C" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M15 -8 Q20 -3 15 6" stroke="#285B58" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
    </g>

    ${getBaseHead()}

    <!-- Eyes (Happy open arches) -->
    <circle cx="78" cy="76" r="4.5" fill="#243247"/>
    <circle cx="80" cy="74" r="1.5" fill="#FFFFFF"/>
    <circle cx="122" cy="76" r="4.5" fill="#243247"/>
    <circle cx="124" cy="74" r="1.5" fill="#FFFFFF"/>
    <!-- Smiling Mouth -->
    <path d="M92 86 Q100 96 108 86" stroke="#243247" stroke-width="2.5" fill="#F2B39C" stroke-linecap="round"/>
  </g>
</svg>
`;

// 2. Research: Reading a document / magnifying glass / studying
const researchSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#243247" flood-opacity="0.12"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <ellipse cx="100" cy="226" rx="46" ry="7" fill="#D6DFE8" opacity="0.7"/>

    <!-- Legs & Shoes -->
    <path d="M86 168 L84 212 L96 212 L96 168 Z" fill="#E2E8F0"/>
    <path d="M80 212 C80 208 96 208 98 212 L98 220 C98 223 80 223 80 220 Z" fill="#243247"/>
    <path d="M104 168 L104 212 L116 212 L114 168 Z" fill="#E2E8F0"/>
    <path d="M102 212 C102 208 118 208 120 212 L120 220 C120 223 102 223 102 220 Z" fill="#243247"/>

    <!-- Torso -->
    <path d="M74 116 C78 112 122 112 126 116 L124 172 C124 174 76 174 76 172 Z" fill="#285B58"/>
    <path d="M92 116 C92 122 108 122 108 116" stroke="#1F4543" stroke-width="3" fill="none"/>

    <!-- Document in both hands -->
    <!-- Document Sheet -->
    <g transform="translate(72, 128) rotate(-4)">
      <rect x="0" y="0" width="56" height="42" rx="3" fill="#FFFFFF" stroke="#D6DFE8" stroke-width="1.5"/>
      <!-- Text lines -->
      <line x1="8" y1="10" x2="48" y2="10" stroke="#285B58" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="8" y1="18" x2="40" y2="18" stroke="#53647A" stroke-width="2" stroke-linecap="round"/>
      <line x1="8" y1="26" x2="44" y2="26" stroke="#53647A" stroke-width="2" stroke-linecap="round"/>
      <line x1="8" y1="34" x2="28" y2="34" stroke="#F2B39C" stroke-width="2" stroke-linecap="round"/>
    </g>

    <!-- Arms holding document -->
    <path d="M75 120 Q65 142 80 152" stroke="#285B58" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="80" cy="152" r="6" fill="#FDE8D7"/>

    <path d="M125 120 Q135 142 120 152" stroke="#285B58" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="120" cy="152" r="6" fill="#FDE8D7"/>

    <!-- Magnifying Glass hovering -->
    <g transform="translate(136, 120) rotate(20)">
      <circle cx="0" cy="0" r="14" fill="#F5F7FB" stroke="#243247" stroke-width="3" opacity="0.9"/>
      <circle cx="0" cy="0" r="10" fill="none" stroke="#285B58" stroke-width="1.5" opacity="0.4"/>
      <path d="M10 10 L22 22" stroke="#243247" stroke-width="4.5" stroke-linecap="round"/>
    </g>

    ${getBaseHead()}

    <!-- Eyes (focused slightly downwards) -->
    <ellipse cx="78" cy="78" rx="4.5" ry="5" fill="#243247"/>
    <circle cx="80" cy="77" r="1.5" fill="#FFFFFF"/>
    <ellipse cx="122" cy="78" rx="4.5" ry="5" fill="#243247"/>
    <circle cx="124" cy="77" r="1.5" fill="#FFFFFF"/>
    <!-- Curious concentrated mouth -->
    <ellipse cx="100" cy="89" rx="3.5" ry="3.5" fill="#243247"/>
  </g>
</svg>
`;

// 3. Plan: Placing sticky note on board / planning
const planSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#243247" flood-opacity="0.12"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <ellipse cx="100" cy="226" rx="46" ry="7" fill="#D6DFE8" opacity="0.7"/>

    <!-- Planning Board on background left -->
    <g transform="translate(18, 50)">
      <rect x="0" y="0" width="50" height="70" rx="4" fill="#FFFFFF" stroke="#D6DFE8" stroke-width="1.5"/>
      <!-- Notes -->
      <rect x="6" y="8" width="16" height="16" rx="2" fill="#F8E7A6"/>
      <rect x="26" y="8" width="16" height="16" rx="2" fill="#F2B39C" opacity="0.8"/>
      <rect x="6" y="28" width="16" height="16" rx="2" fill="#D6DFE8"/>
      <rect x="26" y="28" width="16" height="16" rx="2" fill="#F8E7A6"/>
      <line x1="8" y1="52" x2="42" y2="52" stroke="#D6DFE8" stroke-width="2"/>
    </g>

    <!-- Legs & Shoes -->
    <path d="M86 168 L84 212 L96 212 L96 168 Z" fill="#E2E8F0"/>
    <path d="M80 212 C80 208 96 208 98 212 L98 220 C98 223 80 223 80 220 Z" fill="#243247"/>
    <path d="M104 168 L104 212 L116 212 L114 168 Z" fill="#E2E8F0"/>
    <path d="M102 212 C102 208 118 208 120 212 L120 220 C120 223 102 223 102 220 Z" fill="#243247"/>

    <!-- Torso -->
    <path d="M74 116 C78 112 122 112 126 116 L124 172 C124 174 76 174 76 172 Z" fill="#285B58"/>
    <path d="M92 116 C92 122 108 122 108 116" stroke="#1F4543" stroke-width="3" fill="none"/>

    <!-- Left Arm reaching to the board holding note -->
    <path d="M76 122 Q54 112 48 94" stroke="#285B58" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="48" cy="94" r="6" fill="#FDE8D7"/>
    <!-- Sticky note in hand -->
    <rect x="36" y="78" width="18" height="18" rx="2" fill="#F8E7A6" stroke="#E7B080" stroke-width="1"/>

    <!-- Right Arm holding pen -->
    <path d="M124 122 Q136 138 126 150" stroke="#285B58" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="126" cy="150" r="6" fill="#FDE8D7"/>
    <line x1="124" y1="154" x2="136" y2="140" stroke="#243247" stroke-width="3" stroke-linecap="round"/>

    ${getBaseHead()}

    <!-- Eyes (looking slightly left towards board) -->
    <circle cx="75" cy="76" r="4.5" fill="#243247"/>
    <circle cx="74" cy="74" r="1.5" fill="#FFFFFF"/>
    <circle cx="119" cy="76" r="4.5" fill="#243247"/>
    <circle cx="118" cy="74" r="1.5" fill="#FFFFFF"/>
    <!-- Confident Smile -->
    <path d="M92 86 Q100 94 108 86" stroke="#243247" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </g>
</svg>
`;

// 4. QA: Checklist & Thumbs up
const qaSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#243247" flood-opacity="0.12"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <ellipse cx="100" cy="226" rx="46" ry="7" fill="#D6DFE8" opacity="0.7"/>

    <!-- Legs & Shoes -->
    <path d="M86 168 L84 212 L96 212 L96 168 Z" fill="#E2E8F0"/>
    <path d="M80 212 C80 208 96 208 98 212 L98 220 C98 223 80 223 80 220 Z" fill="#243247"/>
    <path d="M104 168 L104 212 L116 212 L114 168 Z" fill="#E2E8F0"/>
    <path d="M102 212 C102 208 118 208 120 212 L120 220 C120 223 102 223 102 220 Z" fill="#243247"/>

    <!-- Torso -->
    <path d="M74 116 C78 112 122 112 126 116 L124 172 C124 174 76 174 76 172 Z" fill="#285B58"/>
    <path d="M92 116 C92 122 108 122 108 116" stroke="#1F4543" stroke-width="3" fill="none"/>

    <!-- Left Arm holding Checklist Clipboard -->
    <path d="M76 122 L56 142 L66 148 L80 134 Z" fill="#285B58"/>
    <g transform="translate(42, 130) rotate(-6)">
      <!-- Board -->
      <rect x="0" y="0" width="36" height="48" rx="3" fill="#593B2F"/>
      <!-- Clip -->
      <rect x="10" y="-4" width="16" height="6" rx="2" fill="#D6DFE8"/>
      <!-- Paper -->
      <rect x="3" y="4" width="30" height="40" rx="2" fill="#FFFFFF"/>
      <!-- Check items -->
      <path d="M7 12 L10 15 L16 9" stroke="#285B58" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="19" y1="12" x2="29" y2="12" stroke="#53647A" stroke-width="1.5"/>

      <path d="M7 22 L10 25 L16 19" stroke="#285B58" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="19" y1="22" x2="29" y2="22" stroke="#53647A" stroke-width="1.5"/>

      <path d="M7 32 L10 35 L16 29" stroke="#285B58" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <line x1="19" y1="32" x2="27" y2="32" stroke="#53647A" stroke-width="1.5"/>
    </g>
    <circle cx="58" cy="154" r="6" fill="#FDE8D7"/>

    <!-- Right Arm Thumbs Up -->
    <path d="M125 122 Q144 126 150 140" stroke="#285B58" stroke-width="12" stroke-linecap="round" fill="none"/>
    <!-- Thumbs up Hand -->
    <g transform="translate(150, 140)">
      <circle cx="0" cy="0" r="7" fill="#FDE8D7"/>
      <!-- Thumb sticking up -->
      <path d="M-2 -3 L-2 -11 C-2 -13 2 -13 2 -11 L2 -3 Z" fill="#FDE8D7"/>
    </g>

    ${getBaseHead()}

    <!-- Eyes (Big proud smile) -->
    <path d="M72 76 Q78 70 84 76" stroke="#243247" stroke-width="3" stroke-linecap="round" fill="none"/>
    <path d="M116 76 Q122 70 128 76" stroke="#243247" stroke-width="3" stroke-linecap="round" fill="none"/>
    <!-- Happy Smile -->
    <path d="M90 85 Q100 97 110 85" stroke="#243247" stroke-width="2.5" fill="#F2B39C" stroke-linecap="round"/>
  </g>
</svg>
`;

// 5. Present: Pointing towards showcase / content
const presentSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#243247" flood-opacity="0.12"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <ellipse cx="100" cy="226" rx="46" ry="7" fill="#D6DFE8" opacity="0.7"/>

    <!-- Legs & Shoes -->
    <path d="M86 168 L84 212 L96 212 L96 168 Z" fill="#E2E8F0"/>
    <path d="M80 212 C80 208 96 208 98 212 L98 220 C98 223 80 223 80 220 Z" fill="#243247"/>
    <path d="M104 168 L104 212 L116 212 L114 168 Z" fill="#E2E8F0"/>
    <path d="M102 212 C102 208 118 208 120 212 L120 220 C120 223 102 223 102 220 Z" fill="#243247"/>

    <!-- Torso -->
    <path d="M74 116 C78 112 122 112 126 116 L124 172 C124 174 76 174 76 172 Z" fill="#285B58"/>
    <path d="M92 116 C92 122 108 122 108 116" stroke="#1F4543" stroke-width="3" fill="none"/>

    <!-- Left hand resting on hip -->
    <path d="M75 122 Q60 134 68 152 Q72 154 78 146" stroke="#285B58" stroke-width="10" stroke-linecap="round" fill="none"/>
    <circle cx="68" cy="152" r="5" fill="#FDE8D7"/>

    <!-- Right Arm presenting gracefully outwards -->
    <path d="M125 122 Q148 118 168 106" stroke="#285B58" stroke-width="12" stroke-linecap="round" fill="none"/>
    <!-- Open palm hand -->
    <g transform="translate(170, 104) rotate(-20)">
      <ellipse cx="0" cy="0" rx="7" ry="5" fill="#FDE8D7"/>
      <path d="M3 -3 L9 -4" stroke="#FDE8D7" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M4 -1 L10 -1" stroke="#FDE8D7" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Sparkle -->
      <path d="M16 -12 L18 -8 L22 -6 L18 -4 L16 0 L14 -4 L10 -6 L14 -8 Z" fill="#E7B080"/>
    </g>

    ${getBaseHead()}

    <!-- Eyes (Looking towards presentation side) -->
    <circle cx="80" cy="76" r="4.5" fill="#243247"/>
    <circle cx="82" cy="74" r="1.5" fill="#FFFFFF"/>
    <circle cx="124" cy="76" r="4.5" fill="#243247"/>
    <circle cx="126" cy="74" r="1.5" fill="#FFFFFF"/>
    <!-- Welcoming Smile -->
    <path d="M92 86 Q100 96 108 86" stroke="#243247" stroke-width="2.5" fill="#F2B39C" stroke-linecap="round"/>
  </g>
</svg>
`;

// 6. 404: Looking around with map and magnifying glass / looking for lost page
const lost404Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#243247" flood-opacity="0.12"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <ellipse cx="100" cy="226" rx="46" ry="7" fill="#D6DFE8" opacity="0.7"/>

    <!-- Legs & Shoes -->
    <path d="M86 168 L84 212 L96 212 L96 168 Z" fill="#E2E8F0"/>
    <path d="M80 212 C80 208 96 208 98 212 L98 220 C98 223 80 223 80 220 Z" fill="#243247"/>
    <path d="M104 168 L104 212 L116 212 L114 168 Z" fill="#E2E8F0"/>
    <path d="M102 212 C102 208 118 208 120 212 L120 220 C120 223 102 223 102 220 Z" fill="#243247"/>

    <!-- Torso -->
    <path d="M74 116 C78 112 122 112 126 116 L124 172 C124 174 76 174 76 172 Z" fill="#285B58"/>
    <path d="M92 116 C92 122 108 122 108 116" stroke="#1F4543" stroke-width="3" fill="none"/>

    <!-- Left hand holding folded map -->
    <path d="M75 120 L58 140 L68 146 L80 132 Z" fill="#285B58"/>
    <g transform="translate(46, 134) rotate(-15)">
      <polygon points="0,0 12,-3 24,0 36,-3 36,24 24,27 12,24 0,27" fill="#FFFFFF" stroke="#D6DFE8" stroke-width="1.2"/>
      <path d="M6,6 Q18,12 30,8" stroke="#E7B080" stroke-width="1.5" fill="none" stroke-dasharray="2,2"/>
      <circle cx="30" cy="8" r="2" fill="#285B58"/>
      <!-- Small ? Mark on map -->
      <text x="18" y="20" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="8" fill="#53647A">?</text>
    </g>
    <circle cx="68" cy="148" r="5" fill="#FDE8D7"/>

    <!-- Right Arm holding magnifying glass looking up -->
    <path d="M125 122 Q144 114 148 94" stroke="#285B58" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="148" cy="94" r="6" fill="#FDE8D7"/>
    <!-- Magnifying glass -->
    <g transform="translate(154, 84) rotate(-30)">
      <circle cx="0" cy="0" r="14" fill="#F5F7FB" stroke="#243247" stroke-width="3" opacity="0.95"/>
      <line x1="0" y1="14" x2="0" y2="28" stroke="#243247" stroke-width="4.5" stroke-linecap="round"/>
      <!-- Big question mark inside lens -->
      <text x="0" y="6" font-family="'Be Vietnam Pro', sans-serif" font-weight="700" font-size="16" fill="#285B58" text-anchor="middle">404</text>
    </g>

    ${getBaseHead()}

    <!-- Eyes (Wide, curious / wondering) -->
    <circle cx="78" cy="74" r="5.5" fill="#243247"/>
    <circle cx="80" cy="72" r="2" fill="#FFFFFF"/>
    <circle cx="122" cy="74" r="5.5" fill="#243247"/>
    <circle cx="124" cy="72" r="2" fill="#FFFFFF"/>
    <!-- Sweat drop on temple -->
    <path d="M138 60 Q144 65 141 70 Q138 73 135 70 Q135 65 138 60 Z" fill="#285B58" opacity="0.4"/>
    <!-- Small 'o' mouth -->
    <circle cx="100" cy="88" r="4" fill="#243247"/>
  </g>
</svg>
`;

const svgs = {
  'ta-chibi-welcome.svg': welcomeSvg,
  'ta-chibi-research.svg': researchSvg,
  'ta-chibi-plan.svg': planSvg,
  'ta-chibi-qa.svg': qaSvg,
  'ta-chibi-present.svg': presentSvg,
  'ta-chibi-404.svg': lost404Svg,
};

for (const [name, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(targetDir, name), content.trim(), 'utf8');
  console.log(`Generated: ${name}`);
}

console.log('All 6 chibi SVGs created successfully in assets/chibi/');
