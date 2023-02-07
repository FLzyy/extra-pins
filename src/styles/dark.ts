import { GithubAPIResponse } from "../types/res.d.ts";
import languages from "../utils/languages.ts";

export default (
  res: GithubAPIResponse,
  fullName: boolean,
) => {
  return `<svg width="440" height="107" viewBox="0 0 440 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style type="text/css">
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500');
  </style>
</defs>

<g id="Dark">
<rect x="0.5" y="0.5" width="439" height="106" rx="5.5" fill="#22272E"/>
<g id="Top 1">
<g id="Title Card">
<g id="Icon and Title">
<path id="Repo" d="M19 21.6169C19 20.9013 19.2853 20.2149 19.7933 19.7089C20.3012 19.2028 20.99 18.9185 21.7083 18.9185H31.1875C31.403 18.9185 31.6097 19.0038 31.762 19.1556C31.9144 19.3074 32 19.5133 32 19.728V33.2201C32 33.4348 31.9144 33.6407 31.762 33.7925C31.6097 33.9443 31.403 34.0296 31.1875 34.0296H28.4792C28.2637 34.0296 28.057 33.9443 27.9046 33.7925C27.7523 33.6407 27.6667 33.4348 27.6667 33.2201C27.6667 33.0054 27.7523 32.7995 27.9046 32.6477C28.057 32.4959 28.2637 32.4106 28.4792 32.4106H30.375V30.2519H21.7083C21.495 30.2519 21.2864 30.3147 21.1088 30.4323C20.9311 30.55 20.7923 30.7173 20.7097 30.9133C20.6271 31.1092 20.6044 31.3251 20.6444 31.5339C20.6845 31.7426 20.7855 31.935 20.9348 32.0868C21.0095 32.1627 21.0685 32.2526 21.1083 32.3513C21.1481 32.45 21.168 32.5555 21.1669 32.6618C21.1658 32.7682 21.1437 32.8733 21.1018 32.9711C21.06 33.0689 20.9992 33.1576 20.9229 33.232C20.8467 33.3064 20.7564 33.3651 20.6574 33.4048C20.5584 33.4445 20.4525 33.4643 20.3457 33.4632C20.239 33.4621 20.1335 33.4401 20.0354 33.3984C19.9372 33.3567 19.8482 33.2961 19.7735 33.2201C19.277 32.7159 18.9992 32.0375 19 31.3312V21.6169ZM30.375 20.5376H21.7083C21.421 20.5376 21.1455 20.6513 20.9423 20.8537C20.7391 21.0561 20.625 21.3307 20.625 21.6169V28.8573C20.9666 28.7086 21.3355 28.6321 21.7083 28.6328H30.375V20.5376ZM22.25 32.1407C22.25 32.0692 22.2785 32.0005 22.3293 31.9499C22.3801 31.8993 22.449 31.8709 22.5208 31.8709H26.3125C26.3843 31.8709 26.4532 31.8993 26.504 31.9499C26.5548 32.0005 26.5833 32.0692 26.5833 32.1407V35.6487C26.5833 35.6988 26.5693 35.7479 26.5429 35.7905C26.5164 35.8332 26.4786 35.8676 26.4336 35.89C26.3886 35.9124 26.3383 35.9219 26.2882 35.9174C26.2381 35.9129 26.1902 35.8946 26.15 35.8646L24.5792 34.6913C24.5324 34.6561 24.4753 34.637 24.4167 34.637C24.358 34.637 24.301 34.6561 24.2542 34.6913L22.6833 35.8646C22.6431 35.8946 22.5953 35.9129 22.5452 35.9174C22.4951 35.9219 22.4447 35.9124 22.3997 35.89C22.3547 35.8676 22.3169 35.8332 22.2904 35.7905C22.264 35.7479 22.25 35.6988 22.25 35.6487V32.1407Z" fill="#768390"/>
<text id="Title" fill="#539BF5" xml:space="preserve" style="white-space: pre; font-family: 'Noto Sans', sans-serif;" font-family='Noto Sans,sans-serif' font-size="14" font-weight="500" letter-spacing="0em"><tspan x="44" y="32.8505">${
    fullName ? res.full_name : res.name
  }</tspan></text>
</g>
</g>
<path id="Grabber" d="M420 32.4185C419.735 32.4185 419.48 32.3132 419.293 32.1256C419.105 31.9381 419 31.6837 419 31.4185C419 31.1533 419.105 30.8989 419.293 30.7114C419.48 30.5239 419.735 30.4185 420 30.4185C420.265 30.4185 420.52 30.5239 420.707 30.7114C420.895 30.8989 421 31.1533 421 31.4185C421 31.6837 420.895 31.9381 420.707 32.1256C420.52 32.3132 420.265 32.4185 420 32.4185ZM420 28.4185C419.735 28.4185 419.48 28.3132 419.293 28.1256C419.105 27.9381 419 27.6837 419 27.4185C419 27.1533 419.105 26.8989 419.293 26.7114C419.48 26.5239 419.735 26.4185 420 26.4185C420.265 26.4185 420.52 26.5239 420.707 26.7114C420.895 26.8989 421 27.1533 421 27.4185C421 27.6837 420.895 27.9381 420.707 28.1256C420.52 28.3132 420.265 28.4185 420 28.4185ZM416 32.4185C415.735 32.4185 415.48 32.3132 415.293 32.1256C415.105 31.9381 415 31.6837 415 31.4185C415 31.1533 415.105 30.8989 415.293 30.7114C415.48 30.5239 415.735 30.4185 416 30.4185C416.265 30.4185 416.52 30.5239 416.707 30.7114C416.895 30.8989 417 31.1533 417 31.4185C417 31.6837 416.895 31.9381 416.707 32.1256C416.52 32.3132 416.265 32.4185 416 32.4185ZM421 23.4185C421 23.6837 420.895 23.9381 420.707 24.1256C420.52 24.3132 420.265 24.4185 420 24.4185C419.735 24.4185 419.48 24.3132 419.293 24.1256C419.105 23.9381 419 23.6837 419 23.4185C419 23.1533 419.105 22.8989 419.293 22.7114C419.48 22.5239 419.735 22.4185 420 22.4185C420.265 22.4185 420.52 22.5239 420.707 22.7114C420.895 22.8989 421 23.1533 421 23.4185ZM417 27.4185C417 27.6837 416.895 27.9381 416.707 28.1256C416.52 28.3132 416.265 28.4185 416 28.4185C415.735 28.4185 415.48 28.3132 415.293 28.1256C415.105 27.9381 415 27.6837 415 27.4185C415 27.1533 415.105 26.8989 415.293 26.7114C415.48 26.5239 415.735 26.4185 416 26.4185C416.265 26.4185 416.52 26.5239 416.707 26.7114C416.895 26.8989 417 27.1533 417 27.4185ZM416 24.4185C415.735 24.4185 415.48 24.3132 415.293 24.1256C415.105 23.9381 415 23.6837 415 23.4185C415 23.1533 415.105 22.8989 415.293 22.7114C415.48 22.5239 415.735 22.4185 416 22.4185C416.265 22.4185 416.52 22.5239 416.707 22.7114C416.895 22.8989 417 23.1533 417 23.4185C417 23.6837 416.895 23.9381 416.707 24.1256C416.52 24.3132 416.265 24.4185 416 24.4185Z" fill="#66717D"/>
</g>
<text id="Description" fill="#768390" xml:space="preserve" style="white-space: pre; font-family: 'Noto Sans', sans-serif;" font-family='Noto Sans,sans-serif' font-size="10" letter-spacing="0em"><tspan x="19" y="60.7985">${res.description}</tspan></text>
<g id="Metadata">
<g id="Language">
<circle id="Color" cx="25" cy="83" r="5.9" fill="${
    languages[res.language as keyof typeof languages].color
  }" stroke="#E1D471" stroke-width="0.2"/>
<text id="Text" fill="#768390" xml:space="preserve" style="white-space: pre; font-family: 'Noto Sans', sans-serif;" font-family='Noto Sans,sans-serif' font-size="10" letter-spacing="0em"><tspan x="35" y="86.88">${res.language}</tspan></text>
</g>
<g id="Stars">
<path id="Star" d="M104.205 75.9185C104.341 75.9184 104.475 75.9575 104.59 76.0314C104.706 76.1053 104.799 76.211 104.859 76.3365L106.69 80.1515L110.784 80.7635C110.918 80.7836 111.045 80.8421 111.149 80.9322C111.253 81.0224 111.33 81.1407 111.372 81.2738C111.414 81.4068 111.42 81.5493 111.387 81.6852C111.354 81.821 111.286 81.9448 111.188 82.0425L108.226 85.0125L108.925 89.2045C108.948 89.3424 108.933 89.484 108.881 89.6134C108.83 89.7429 108.745 89.855 108.635 89.9372C108.525 90.0194 108.395 90.0684 108.259 90.0787C108.123 90.089 107.988 90.0602 107.867 89.9955L104.205 88.0155L100.543 89.9955C100.422 90.0605 100.287 90.0896 100.151 90.0795C100.015 90.0694 99.8852 90.0205 99.7752 89.9384C99.6651 89.8562 99.5796 89.744 99.5283 89.6145C99.477 89.485 99.4619 89.3434 99.4847 89.2055L100.185 85.0115L97.2208 82.0425C97.1232 81.9448 97.0541 81.821 97.0213 81.685C96.9886 81.549 96.9936 81.4063 97.0357 81.273C97.0778 81.1398 97.1554 81.0214 97.2596 80.9311C97.3638 80.8409 97.4905 80.7825 97.6254 80.7625L101.719 80.1515L103.551 76.3365C103.611 76.211 103.704 76.1053 103.82 76.0314C103.935 75.9575 104.069 75.9184 104.205 75.9185ZM104.205 78.3635L102.858 81.1685C102.806 81.2774 102.729 81.3716 102.633 81.443C102.538 81.5145 102.427 81.561 102.31 81.5785L99.298 82.0285L101.476 84.2125C101.561 84.2974 101.624 84.4022 101.661 84.5178C101.698 84.6335 101.706 84.7566 101.686 84.8765L101.173 87.9605L103.866 86.5045C103.97 86.4479 104.087 86.4184 104.205 86.4184C104.323 86.4184 104.44 86.4479 104.544 86.5045L107.238 87.9605L106.723 84.8765C106.703 84.7566 106.711 84.6335 106.748 84.5178C106.785 84.4022 106.848 84.2974 106.933 84.2125L109.111 82.0295L106.1 81.5795C105.983 81.562 105.872 81.5155 105.777 81.444C105.681 81.3726 105.604 81.2784 105.552 81.1695L104.205 78.3635Z" fill="#768390"/>
<text id="Amount" fill="#768390" xml:space="preserve" style="white-space: pre; font-family: 'Noto Sans', sans-serif;" font-family='Noto Sans,sans-serif' font-size="12" letter-spacing="0em"><tspan x="114.408" y="87.656">${res.stargazers_count}</tspan></text>
</g>
</g>
<rect x="0.5" y="0.5" width="439" height="106" rx="5.5" stroke="#444C56"/>
</g>
</svg>
`;
};
