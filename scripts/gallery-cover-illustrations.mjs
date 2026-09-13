export const illustratedProjects = [
    {
        id: 'quantitative-research', category: '毕业论文',
        caption: '社会学方法 · 法学问题 · 公共管理', color: '#466b76',
        draw: painted => {
            const blue = painted ? '#d8e8ec' : '#eeeeee';
            const red = painted ? '#ba6860' : '#606060';
            return `<g stroke="#343a3b" stroke-width="4" fill="white" stroke-linecap="round" stroke-linejoin="round">
                <path d="M158 674Q380 665 616 677M168 683l440 5" fill="none"/>
                <path d="m243 256 261 18-17 385-263-16Z" fill="${blue}"/>
                <path d="m266 234 263 30-38 381-260-26Z"/>
                <path d="m277 248 237 29-31 351-239-23Z" fill="none" stroke-width="1.8"/>
                <path d="m300 300 135 15m-138 4 130 15m-137 22 186 21m-189-4 183 21m-187-3 134 16" fill="none"/>
                <path d="m293 417-12 112 169 19" fill="none"/>
                <path d="m303 501 36-32 33 18 45-44 36-14" fill="none" stroke="${red}" stroke-width="6"/>
                <g fill="${red}" stroke="none"><circle cx="303" cy="501" r="6"/><circle cx="339" cy="469" r="6"/><circle cx="372" cy="487" r="6"/><circle cx="417" cy="443" r="6"/><circle cx="453" cy="429" r="6"/></g>
                <path d="m288 562 157 17m-160 3 146 16m-150 4 95 10" fill="none" stroke-width="3"/>
                <path d="M187 401v224m-46 13q48-23 94 0l-1 14h-94Z" fill="${blue}"/>
                <circle cx="187" cy="398" r="8"/>
                <path d="m116 433 70-19 79-7m-111 17-33 87m33-87 26 89m49-103-26 87m26-87 28 86" fill="none"/>
                <path d="M116 514q30 44 64 0ZM201 500q28 43 58 0Z" fill="${blue}"/>
                <circle cx="516" cy="566" r="58" fill="${blue}"/>
                <circle cx="516" cy="566" r="45" fill="white"/>
                <path d="m487 579 16-14 13 8 26-29m-53 58 53-48" fill="none" stroke="${red}"/>
                <path d="m555 609 51 57-14 13-51-57Z" fill="${red}"/>
                <path d="m297 692 202-13 25 5-24 10-201 13Z" fill="${blue}"/>
                <path d="m499 679 2 15m9-12 14 1-13 7" fill="#343a3b"/>
                <path d="m297 692 2 15m12-15 1 12" fill="none"/>
                <path d="m553 306 13 10m-3-31 12 7m-17 52 17 1M153 311l-12 13m9-38-15 5" stroke-width="2" fill="none"/>
            </g>`;
        },
    },
    {
        id: 'campus-food-project', category: '校园餐饮休闲空间',
        caption: '餐饮 · 交流 · 休闲', color: '#537866',
        draw: painted => {
            const green = painted ? '#b4cebb' : '#dddddd';
            const coral = painted ? '#d5957e' : '#b4b4b4';
            const pale = painted ? '#edf3ef' : '#f5f5f5';
            return `<g stroke="#343a3b" stroke-width="4" fill="white" stroke-linecap="round" stroke-linejoin="round">
                <path d="M121 682q260-11 528 3m-511 9 490 2" fill="none"/>
                <path d="m177 381 362-1 2 240-363 5Z" fill="${pale}"/>
                <path d="m191 309 337 2 33 80-402-1Z" fill="${green}"/>
                <path d="m191 309-32 81v20q28 24 52-1 25 26 52-1 25 28 52 0 25 26 51 0 27 26 52 0 26 25 51 0 26 25 52 0 25 24 40 1v-18" fill="${green}"/>
                <path d="m232 312-22 77m69-77-15 78m64-78-13 77m59-76-6 77m52-77 1 77m50-77 4 78m37-78 17 77" fill="none" stroke="#ffffff" stroke-width="12"/>
                <path d="m226 263 269 3 1 43-270-1Z"/>
                <path d="m237 276 247 1" fill="none" stroke-width="1.5"/>
                <g fill="#343a3b" stroke="none" font-family="Microsoft YaHei, sans-serif" text-anchor="middle"><text x="360" y="298" font-size="23">悦味之家</text></g>
                <path d="M204 439h184v120H204ZM416 437h96v180h-96Z" fill="white"/>
                <path d="M294 440v117m-88-40h180m42-63h72v116h-72Z" fill="none"/>
                <path d="M218 492q24 33 50 0Zm83 0q22 30 46 0Z" fill="${coral}"/>
                <path d="M229 478q-8-10 1-19m20 19q-9-9 0-19m63 20q-8-10 1-20m20 20q-8-10 0-20" fill="none" stroke-width="2"/>
                <path d="M229 548v-17h40v17m43 0v-17h48v17" fill="${green}"/>
                <circle cx="496" cy="588" r="3" fill="#343a3b"/>
                <path d="m153 634 32-52 38 2 31 62Z" fill="${coral}"/>
                <path d="m184 587-27 77m67-80 27 80m-65-57h25m-31 16h40" fill="none"/>
                <ellipse cx="356" cy="603" rx="83" ry="21" fill="${green}"/>
                <path d="M350 624v51m13-51v50m-41 4h69" fill="none"/>
                <path d="m284 636-37-7v-52h-12v64l55 10m-48-10-3 36m43-27 4 28m136-39 34-10v-52h13v65l-51 12m44-13 3 35m-45-23-3 27" fill="${coral}"/>
                <path d="M324 580h28v20h-28Zm29 3q21-2 10 13h-10"/>
                <ellipse cx="389" cy="597" rx="21" ry="6"/>
                <path d="M373 594q16-25 32 0" fill="${coral}"/>
                <path d="m572 606 45-1-7 67h-32Z" fill="${coral}"/>
                <path d="M593 607v-95m0 55q-47-3-42-35 37 2 42 35Zm1 18q48-8 42-39-34 2-42 39Zm0-31q29-25 13-51-28 15-13 51Z" fill="${green}"/>
            </g>`;
        },
    },
];
