

const libraryItems = [
    {
        id: "item1",
        caption: "Manuscript, 19th c.",
        englishTitle: `Royal Chronicle Fragments`,
        khmerTitle: `ព្រះរាជពង្សាវតារ`,
        english: `Palm-leaf manuscript pages recording royal genealogies and court events, preserved under climate-controlled glass.`,
        khmer: `ទំព័រសាស្ត្រាស្លឹករឹតកត់ត្រាពង្សាវតារនៃព្រះមហាក្សត្រ និងព្រឹត្តិការណ៍ក្នុងព្រះបរមរាជវាំង ដែលរក្សាទុកក្រោមកញ្ចក់ត្រួតពិនិត្យសីតុណ្ហភាព។`
    },
    {
        id: "item2",
        caption: "Photograph, 1932",
        englishTitle: `Village Life Photographs`,
        khmerTitle: `រូបថតជីវិតភូមិ`,
        english: `A donated collection of silver-gelatin prints documenting daily rural life before the museum's founding.`,
        khmer: `ជាបណ្ដុំរូបថតដែលបានឧបត្ថម្ភ កត់ត្រាជីវិតប្រចាំថ្ងៃនៅជនបទ មុនពេលបង្កើតសារមន្ទីរនេះ។`
    },
    {
        id: "item3",
        caption: "Map, hand-drawn",
        featured: true,
        englishTitle: `Cartography of the River Basin`,
        khmerTitle: `ផែនទីអាងទន្លេ`,
        english: `Hand-drawn survey maps charting settlements along the river, annotated by early museum founders.`,
        khmer: `ផែនទីស្ទង់ដៃដែលបង្ហាញពីទីតាំងភូមិឋានតាមដងទន្លេ ដោយមានកំណត់ចំណាំពីស្ថាបនិកដំបូងរបស់សារមន្ទីរ។`
    },
    {
        id: "item4",
        caption: "Recording, audio",
        englishTitle: `Elders' Oral History Archive`,
        khmerTitle: `ប័ណ្ណសារប្រវត្តិសាស្ត្រផ្ទាល់មាត់`,
        english: `Recorded interviews with community elders, transcribed and indexed for research use in the reading room.`,
        khmer: `ការសម្ភាសន៍ដែលបានថតជាមួយចាស់ទុំក្នុងសហគមន៍ ត្រូវបានចម្លងជាអក្សរ និងរៀបចំសម្រាប់ការស្រាវជ្រាវនៅបន្ទប់អាន។`
    },
    {
        id: "item5",
        caption: "Manuscript, folio",
        englishTitle: `Temple Inscriptions Rubbings`,
        khmerTitle: `ការជូតអក្សរចារឹកលើប្រាសាទ`,
        english: `Paper rubbings of stone temple inscriptions, made to protect the originals from repeated handling.`,
        khmer: `ការជូតច្បាប់ចម្លងលើក្រដាសនៃអក្សរចារឹកលើថ្មប្រាសាទ ធ្វើឡើងដើម្បីការពារច្បាប់ដើមពីការប៉ះពាល់ញឹកញាប់។`
    },
    {
        id: "item6",
        caption: "Ledger, bound",
        englishTitle: `Founders' Correspondence`,
        khmerTitle: `លិខិតឆ្លងឆ្លើយស្ថាបនិក`,
        english: `Letters and ledgers from the museum's founding committee, tracing the institution's early years.`,
        khmer: `សំបុត្រ និងសៀវភៅបញ្ជីពីគណៈកម្មការស្ថាបនិកសារមន្ទីរ ដែលបង្ហាញពីដំណាក់កាលដំបូងនៃស្ថាប័ននេះ។`
    },
    {
        id: "item7",
        caption: "Logbook, workshop",
        englishTitle: `Restoration Workshop Records`,
        khmerTitle: `កំណត់ត្រាសិក្ខាសាលាជួសជុល`,
        english: `Logs and technical notes from the conservation team detailing how fragile items in the collection were cleaned, repaired, and stabilized.`,
        khmer: `កំណត់ត្រា និងកំណត់ចំណាំបច្ចេកទេសពីក្រុមអភិរក្ស ដែលពិពណ៌នាអំពីរបៀបសម្អាត ជួសជុល និងធ្វើឲ្យមានស្ថេរភាពនៃវត្ថុងាយបែកបាក់ក្នុងបណ្ដុំសម្ភារៈនេះ។`
    }

 
];



function renderLibraryCards() {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;

    grid.innerHTML = libraryItems.map(function (item) {
        const featuredClass = item.featured ? " featured" : "";
        const placeholderClass = item.featured ? " large" : "";

        return `
            <div class="info-card${featuredClass}">
                <div class="info-img-placeholder${placeholderClass}" data-caption="${item.caption || ""}"></div>
                <h3 id="${item.id}-title">${item.englishTitle}</h3>
                <p id="${item.id}-text">${item.english}</p>
                <button class="translate" id="${item.id}-btn" data-id="${item.id}">Khmer</button>
            </div>
        `;
    }).join("");

    // wire up each translate button
    libraryItems.forEach(function (item) {
        const button = document.getElementById(item.id + "-btn");
        if (!button) return;

        button.onclick = function () {
            const title = document.getElementById(item.id + "-title");
            const text = document.getElementById(item.id + "-text");

            if (button.textContent === "Khmer") {
                title.textContent = item.khmerTitle;
                text.textContent = item.khmer;
                title.classList.add("khmer-title");
                text.classList.add("khmer-text");
                button.textContent = "English";
            } else {
                title.textContent = item.englishTitle;
                text.textContent = item.english;
                title.classList.remove("khmer-title");
                text.classList.remove("khmer-text");
                button.textContent = "Khmer";
            }
        };
    });
}

document.addEventListener("DOMContentLoaded", renderLibraryCards);

const libraryFooterYear = document.getElementById('footer-year');
if (libraryFooterYear) libraryFooterYear.textContent = new Date().getFullYear();