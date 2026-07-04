// Default Malang WFC Database (Updated July 2026)
const DEFAULT_CAFES = [
    {
        id: "handall",
        name: "Handall Coffee",
        type: "Cafe",
        area: "Klojen",
        address: "Jl. Jakarta No.22, Penanggungan, Kec. Klojen",
        hours: "07:00 - 23:00",
        wifiSpeed: 85,
        outletDensity: "Banyak",
        noiseLevel: "Sedang",
        comfortScore: 9,
        coffeeQuality: 8.5,
        description: "Cafe yang sangat luas dengan arsitektur modern-industrial. Dilengkapi area kaca indoor mirip glasshouse yang terang, sangat cocok untuk laptopan siang hari. Colokan listrik tersedia di hampir semua meja panjang.",
        coordinates: [-7.9654, 112.6174],
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "outdoor", "prayer", "meals"],
        reviews: [
            { author: "Budi Santoso", rating: 5, text: "WiFi kencang banget buat push code, colokan melimpah ruah dan kopi susunya enak.", date: "2026-06-28" },
            { author: "Sarah Amalia", rating: 4, text: "Tempat favorit ngerjain skripsi. Kadang agak ramai kalau sore, tapi tetep nyaman.", date: "2026-07-02" }
        ]
    },
    {
        id: "robucca",
        name: "Robucca",
        type: "Cafe",
        area: "Klojen",
        address: "Jl. Raya Ijen No.1b, Bareng, Kec. Klojen (Ijen Nirwana)",
        hours: "07:30 - 22:00",
        wifiSpeed: 65,
        outletDensity: "Banyak",
        noiseLevel: "Tenang",
        comfortScore: 9.5,
        coffeeQuality: 9,
        description: "Terletak di dalam perumahan Ijen Nirwana yang asri dan tenang. Desain minimalis ala Jepang dengan pencahayaan alami yang melimpah. Sangat hening di pagi dan siang hari, ideal untuk fokus tingkat tinggi.",
        coordinates: [-7.9786, 112.6190],
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "outdoor", "meals"],
        reviews: [
            { author: "Fahmi Kurnia", rating: 5, text: "Sangat tenang, suasananya premium banget. Croissant-nya juara dipadukan cold brew.", date: "2026-06-15" }
        ]
    },
    {
        id: "nakoa-bondowoso",
        name: "Nakoa Cafe - Bondowoso",
        type: "Cafe",
        area: "Klojen",
        address: "Jl. Bondowoso No.14, Gading Kasri, Kec. Klojen",
        hours: "24 Jam",
        wifiSpeed: 50,
        outletDensity: "Banyak",
        noiseLevel: "Ramai",
        comfortScore: 8,
        coffeeQuality: 7.5,
        description: "Tempat andalan mahasiswa Malang untuk begadang nugas. Buka 24 jam dengan area outdoor yang sangat luas dan indoor ber-AC. Seringkali ramai di malam hari, namun ketersediaan colokan tidak perlu diragukan.",
        coordinates: [-7.9698, 112.6158],
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80",
        facilities: ["24h", "ac", "outdoor", "meals"],
        reviews: [
            { author: "Rendi Wijaya", rating: 4, text: "Penyelamat pas tugas numpuk H-1. Buka 24 jam non-stop wifi cukup stabil.", date: "2026-07-03" }
        ]
    },
    {
        id: "gartenhaus",
        name: "Gartenhaus Co-working & Cafe",
        type: "Cafe",
        area: "Lowokwaru",
        address: "Jl. Kenanga Indah No.1, Jatimulyo, Kec. Lowokwaru",
        hours: "10:00 - 22:00",
        wifiSpeed: 45,
        outletDensity: "Cukup",
        noiseLevel: "Tenang",
        comfortScore: 8.5,
        coffeeQuality: 8,
        description: "Konsep kafe kebun raya mini tersembunyi (hidden gem) di tengah kota. Dikelilingi pepohonan rimbun dan suara gemercik air yang menenangkan. Cocok untuk mencari inspirasi kreatif atau bekerja santai.",
        coordinates: [-7.9442, 112.6215],
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=600&q=80",
        facilities: ["outdoor", "meals"],
        reviews: [
            { author: "Dewi Lestari", rating: 5, text: "Vibe kebunnya bikin adem otak yang lagi mumet. Serasa kerja di Ubud Bali.", date: "2026-06-20" }
        ]
    },
    {
        id: "bureau",
        name: "Bureau Coffee & Dine",
        type: "Cafe",
        area: "Lowokwaru",
        address: "Jl. Soekarno Hatta, Ruko Semanggi Barat No.4, Kec. Lowokwaru",
        hours: "09:00 - 23:00",
        wifiSpeed: 75,
        outletDensity: "Banyak",
        noiseLevel: "Tenang",
        comfortScore: 9,
        coffeeQuality: 8.5,
        description: "Berlokasi di lantai dua ruko Semanggi. Kafe ini dirancang khusus untuk kerja dengan layout kursi berjarak lebar dan suasana tenang. Kopi berkualitas dan menu makanan bergaya Barat tersedia.",
        coordinates: [-7.9431, 112.6148],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "meals"],
        reviews: [
            { author: "Adit Prasetyo", rating: 5, text: "Quiet zone ternyaman di daerah Suhat. Meja belajarnya pas banget tingginya buat laptop.", date: "2026-07-01" }
        ]
    },
    {
        id: "dw-coffee",
        name: "DW Coffee Shop",
        type: "Cafe",
        area: "Klojen",
        address: "Jl. Bogor No.11, Sumbersari, Kec. Klojen",
        hours: "08:00 - 24:00",
        wifiSpeed: 40,
        outletDensity: "Cukup",
        noiseLevel: "Sedang",
        comfortScore: 8,
        coffeeQuality: 7.8,
        description: "Salah satu pelopor kafe belajar di dekat area kampus Universitas Negeri Malang dan Universitas Brawijaya. Menyediakan suasana hangat dengan harga kopi ramah kantong mahasiswa.",
        coordinates: [-7.9621, 112.6162],
        image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "outdoor", "prayer"],
        reviews: [
            { author: "Rina Setyowati", rating: 4, text: "Harga bersahabat, tempat duduk ber-AC di lantai atas paling oke buat nugas seharian.", date: "2026-05-18" }
        ]
    },
    {
        id: "litchi",
        name: "Litchi Cafe",
        type: "Cafe",
        area: "Klojen",
        address: "Jl. Leci No.1, Bareng, Kec. Klojen",
        hours: "09:00 - 22:00",
        wifiSpeed: 60,
        outletDensity: "Cukup",
        noiseLevel: "Sedang",
        comfortScore: 8.5,
        coffeeQuality: 8.2,
        description: "Cafe dengan desain estetik ala Santorini, didominasi warna putih bersih. Cocok untuk Anda yang ingin bekerja di lingkungan yang menenangkan visual. Area indoor-nya ber-AC dingin dan tenang.",
        coordinates: [-7.9712, 112.6258],
        image: "https://images.unsplash.com/photo-1463797264807-0418a8c29e6a?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "outdoor", "meals"],
        reviews: [
            { author: "Indra Wijaya", rating: 4.5, text: "Instagrammable parah, makanan beratnya enak-enak. WiFi lumayan kencang 50 Mbps pas dicoba.", date: "2026-06-25" }
        ]
    },
    {
        id: "kopi-belakang-kantor",
        name: "Kopi Belakang Kantor",
        type: "Cafe",
        area: "Lowokwaru",
        address: "Jl. Terusan Candi Mendut No.17, Kec. Lowokwaru",
        hours: "08:00 - 02:00",
        wifiSpeed: 55,
        outletDensity: "Banyak",
        noiseLevel: "Tenang",
        comfortScore: 8.5,
        coffeeQuality: 7.5,
        description: "Dirancang khusus bagi mahasiswa tingkat akhir dan remote worker. Menyediakan fasilitas colokan berlimpah, cetak dokumen (printer), dan menu camilan murah meriah. Vibe-nya mirip perpustakaan mini.",
        coordinates: [-7.9458, 112.6288],
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "outdoor", "prayer"],
        reviews: [
            { author: "Dina Kartika", rating: 5, text: "Ada printer gratis tinggal bawa kertas sendiri. Atmosfer hening semua orang fokus kerja.", date: "2026-06-30" }
        ]
    },
    {
        id: "familymart-suhat",
        name: "FamilyMart Soekarno Hatta",
        type: "Convenience Store",
        area: "Lowokwaru",
        address: "Jl. Soekarno Hatta No.34, Kec. Lowokwaru",
        hours: "06:00 - 24:00",
        wifiSpeed: 45,
        outletDensity: "Cukup",
        noiseLevel: "Ramai",
        comfortScore: 7.5,
        coffeeQuality: 8.0,
        description: "Minimarket modern asal Jepang yang sangat populer untuk WFC cepat atau tempat singgah kerja hemat. Terkenal dengan 'Kopi Susu Keluarga' yang murah dan aneka snack instan. Dilengkapi meja bar panjang dengan stopkontak.",
        coordinates: [-7.9425, 112.6160],
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "meals"],
        reviews: [
            { author: "Galih", rating: 4, text: "Kopi murah meriah dan oden-nya enak buat nemenin kerja sore. Colokan pas di bar window.", date: "2026-07-01" }
        ]
    },
    {
        id: "indomaretpoint-bondowoso",
        name: "Indomaret Point Bondowoso",
        type: "Convenience Store",
        area: "Klojen",
        address: "Jl. Bondowoso No.22, Kec. Klojen",
        hours: "24 Jam",
        wifiSpeed: 40,
        outletDensity: "Cukup",
        noiseLevel: "Sedang",
        comfortScore: 7.0,
        coffeeQuality: 8.2,
        description: "Indomaret Point dengan gerai Point Coffee terintegrasi. Memiliki area tempat duduk indoor ber-AC dan outdoor. Sangat strategis, buka 24 jam, dan memiliki opsi minuman kopi segar dengan harga terjangkau.",
        coordinates: [-7.9692, 112.6164],
        image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80",
        facilities: ["24h", "ac", "outdoor", "meals"],
        reviews: [
            { author: "Hendra", rating: 4, text: "Suka beli Point Coffee sambil buka laptop di sini. Wifi lancar dan buka 24 jam.", date: "2026-06-25" }
        ]
    },
    {
        id: "lawson-dinoyo",
        name: "Lawson Dinoyo",
        type: "Convenience Store",
        area: "Lowokwaru",
        address: "Jl. M.T. Haryono No.168, Kec. Lowokwaru",
        hours: "07:00 - 02:00",
        wifiSpeed: 50,
        outletDensity: "Cukup",
        noiseLevel: "Ramai",
        comfortScore: 7.2,
        coffeeQuality: 8.0,
        description: "Minimarket khas Jepang yang terkenal dengan Oden hangatnya. Area lantai 2 menyediakan counter table khusus dengan stopkontak untuk pengerjaan tugas ringan atau koordinasi santai.",
        coordinates: [-7.9405, 112.6055],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
        facilities: ["ac", "meals"],
        reviews: [
            { author: "Sonia", rating: 4, text: "Odennya juara, lantai 2 lumayan tenang buat laptop sebentar.", date: "2026-06-29" }
        ]
    }
];

// App State Management
let cafes = [];
let bookmarks = [];
let activeFilters = {
    search: "",
    area: "",
    type: "",
    wifi: 10,
    outlets: "all",
    noise: "all",
    facilities: [],
    favoritesOnly: false
};

// Map Reference Variables
let map = null;
let markersGroup = null;
let currentTileLayer = null;

// Leaflet Map Tiles Configuration
const MAP_TILES = {
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    light: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
    // Load data from LocalStorage or seed defaults
    const savedCafes = localStorage.getItem("wfc_malang_cafes");
    if (savedCafes) {
        cafes = JSON.parse(savedCafes);
        // Safeguard: Migrate old localStorage cache to include newly added convenience stores (Famima, Lawson, Point Coffee)
        const hasConvStores = cafes.some(c => c.id === "familymart-suhat");
        if (!hasConvStores) {
            cafes = DEFAULT_CAFES;
            localStorage.setItem("wfc_malang_cafes", JSON.stringify(cafes));
        }
    } else {
        cafes = DEFAULT_CAFES;
        localStorage.setItem("wfc_malang_cafes", JSON.stringify(cafes));
    }

    // Load Bookmarks
    const savedBookmarks = localStorage.getItem("wfc_malang_bookmarks");
    if (savedBookmarks) {
        bookmarks = JSON.parse(savedBookmarks);
    }

    // Load user theme preference
    const savedTheme = localStorage.getItem("wfc_theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize Map
    initMap(savedTheme);

    // Initial Dashboard Stats Calculation
    updateDashboardStats();

    // Render initial list and map
    applyFilters();

    // Register all event listeners
    registerEventListeners();
});

// Calculate Dashboard Stats
function updateDashboardStats() {
    document.getElementById("stat-total").textContent = cafes.length;
    
    // Average WiFi speed
    const avgWifi = cafes.reduce((sum, cafe) => sum + cafe.wifiSpeed, 0) / cafes.length;
    document.getElementById("stat-wifi").textContent = `${Math.round(avgWifi)} Mbps`;
    
    // 24 Hour cafes
    const count24h = cafes.filter(c => c.facilities.includes("24h") || c.hours.toLowerCase().includes("24 jam")).length;
    document.getElementById("stat-24h").textContent = count24h;

    // Favorited count
    document.getElementById("stat-fav").textContent = bookmarks.length;
}

// Initialize Leaflet Map
function initMap(theme) {
    const malangCenter = [-7.965, 112.62]; // Central Malang
    
    map = L.map("map", {
        center: malangCenter,
        zoom: 13,
        scrollWheelZoom: true
    });

    // Set initial tile layer based on current theme
    const tileUrl = theme === "light" ? MAP_TILES.light : MAP_TILES.dark;
    currentTileLayer = L.tileLayer(tileUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    markersGroup = L.layerGroup().addTo(map);
}

// Refresh Leaflet Map Markers
function updateMapMarkers(filteredCafes) {
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    filteredCafes.forEach(cafe => {
        // Create custom glowing dot marker matching theme accents
        const pinColor = bookmarks.includes(cafe.id) ? "var(--accent-rose)" : "var(--accent-cyan)";
        const pulseGlow = bookmarks.includes(cafe.id) ? "rgba(244, 63, 94, 0.4)" : "rgba(6, 182, 212, 0.4)";
        
        const markerIcon = L.divIcon({
            className: "custom-map-pin-container",
            html: `<div class="map-pin-dot" style="background: ${pinColor}; box-shadow: 0 0 12px ${pulseGlow}; width: 14px; height: 14px; border-radius: 50%; border: 2.5px solid #ffffff; cursor: pointer; transition: transform 0.2s;"></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });

        const popupHTML = `
            <div class="map-popup-card">
                <h5>${cafe.name}</h5>
                <p><i data-lucide="map-pin" style="width:10px;height:10px;vertical-align:middle;"></i> ${cafe.area}</p>
                <div class="map-popup-wifi">
                    <i data-lucide="wifi" style="width:12px;height:12px;display:inline-block;"></i> ${cafe.wifiSpeed} Mbps
                </div>
                <button onclick="openCafeDetail('${cafe.id}')" class="btn-popup-link">Detail Lengkap</button>
            </div>
        `;

        const marker = L.marker(cafe.coordinates, { icon: markerIcon })
            .bindPopup(popupHTML)
            .on("click", () => {
                // Instantly highlight target card in the sidebar listing
                highlightCafeCard(cafe.id);
            });
            
        markersGroup.addLayer(marker);
    });

    // Automatically fit map view to show all active markers if any exist
    if (filteredCafes.length > 0 && map) {
        const bounds = L.latLngBounds(filteredCafes.map(c => c.coordinates));
        map.fitBounds(bounds, { padding: [40, 40] });
    }
}

// Highlight Card when map pin is clicked
function highlightCafeCard(cafeId) {
    const cards = document.querySelectorAll(".cafe-card");
    cards.forEach(card => card.classList.remove("highlighted"));

    const targetCard = document.getElementById(`card-${cafeId}`);
    if (targetCard) {
        targetCard.classList.add("highlighted");
        targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

// Render WFC list in cards grid
function renderCafeList(filteredCafes) {
    const listContainer = document.getElementById("cafe-list");
    listContainer.innerHTML = "";

    if (filteredCafes.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i data-lucide="coffee-off" class="empty-icon"></i>
                <h4>Tidak ada cafe yang cocok</h4>
                <p>Silakan kurangi filter pencarian Anda untuk melihat lebih banyak rekomendasi.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filteredCafes.forEach(cafe => {
        const isFav = bookmarks.includes(cafe.id);
        const isOpen = checkIfOpen(cafe.hours);
        
        // Facilities Icon Renderer helper
        const renderFacilitiesHTML = cafe.facilities.map(fac => {
            let iconName = "";
            let titleText = "";
            if (fac === "24h") { iconName = "clock"; titleText = "Buka 24 Jam"; }
            else if (fac === "ac") { iconName = "snowflake"; titleText = "Full AC"; }
            else if (fac === "outdoor") { iconName = "trees"; titleText = "Area Kebun/Outdoor"; }
            else if (fac === "prayer") { iconName = "heart"; titleText = "Ada Mushola"; }
            else if (fac === "meals") { iconName = "chef-hat"; titleText = "Makanan Berat Tersedia"; }
            
            return `<div class="facility-icon-badge" title="${titleText}"><i data-lucide="${iconName}"></i></div>`;
        }).join("");

        // Comfort and Coffee percentage widths for the rating bar gauges
        const comfortPct = cafe.comfortScore * 10;
        const coffeePct = cafe.coffeeQuality * 10;

        const card = document.createElement("div");
        card.className = `cafe-card`;
        card.id = `card-${cafe.id}`;
        card.innerHTML = `
            <div class="cafe-card-img-container">
                <img src="${cafe.image}" class="cafe-card-img" alt="${cafe.name}" onerror="this.src='https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80'">
                <div class="cafe-card-img-overlay"></div>
                <div class="card-badges-top">
                    <span class="badge-tag ${isOpen ? 'open' : 'closed'}">
                        ${isOpen ? 'Buka Sekarang' : 'Tutup'}
                    </span>
                    <span class="badge-tag type-badge" style="border-color: var(--accent-purple); color: var(--accent-purple);">
                        ${cafe.type || 'Cafe'}
                    </span>
                    <button class="btn-favorite-card ${isFav ? 'active' : ''}" onclick="toggleFavorite('${cafe.id}', event)">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="wifi-badge-float">
                    <i data-lucide="wifi"></i> <span>${cafe.wifiSpeed} Mbps</span>
                </div>
            </div>

            <div class="cafe-card-body">
                <div class="card-title-row">
                    <h4>${cafe.name}</h4>
                    <span class="location-text"><i data-lucide="map-pin"></i> ${cafe.address}</span>
                </div>
                
                <p class="cafe-description">${cafe.description}</p>
                
                <div class="cafe-meters">
                    <div class="meter-item">
                        <span class="meter-label">Kenyamanan Meja <span>${cafe.comfortScore}/10</span></span>
                        <div class="meter-track">
                            <div class="meter-bar cyan" style="width: ${comfortPct}%"></div>
                        </div>
                    </div>
                    <div class="meter-item">
                        <span class="meter-label">Colokan Listrik <span>${cafe.outletDensity}</span></span>
                        <div class="meter-track">
                            <div class="meter-bar purple" style="width: ${cafe.outletDensity === 'Banyak' ? '100%' : cafe.outletDensity === 'Cukup' ? '60%' : '25%'}"></div>
                        </div>
                    </div>
                </div>

                <div class="card-facilities">
                    ${renderFacilitiesHTML}
                </div>
            </div>

            <div class="cafe-card-footer">
                <div class="hours-info">
                    <i data-lucide="calendar"></i>
                    <span>${cafe.hours}</span>
                </div>
                <button onclick="openCafeDetail('${cafe.id}')" class="btn-secondary">
                    <span>Lihat Detail</span>
                    <i data-lucide="arrow-right"></i>
                </button>
            </div>
        `;
        listContainer.appendChild(card);
    });

    // Re-trigger Lucide icon conversions on the fresh cards
    lucide.createIcons();
}

// Check if cafe is open (Simple parser based on common time formats)
function checkIfOpen(hoursStr) {
    if (hoursStr.toLowerCase().includes("24 jam") || hoursStr.toLowerCase().includes("24h")) return true;
    
    // Parse range e.g. "09:00 - 22:00"
    const matches = hoursStr.match(/(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/);
    if (!matches) return true; // Default to open if parsing fails
    
    const now = new Date();
    const currentHours = now.getHours();
    const currentMins = now.getMinutes();
    const currentTimeVal = currentHours * 60 + currentMins;

    const startVal = parseInt(matches[1]) * 60 + parseInt(matches[2]);
    let endVal = parseInt(matches[3]) * 60 + parseInt(matches[4]);

    if (endVal < startVal) {
        // Over midnight shop (e.g. 08:00 - 02:00)
        return currentTimeVal >= startVal || currentTimeVal <= endVal;
    }
    
    return currentTimeVal >= startVal && currentTimeVal <= endVal;
}

// Toggle bookmarking for a cafe
function toggleFavorite(cafeId, event) {
    if (event) event.stopPropagation(); // Avoid triggering card details click

    const index = bookmarks.indexOf(cafeId);
    if (index === -1) {
        bookmarks.push(cafeId);
    } else {
        bookmarks.splice(index, 1);
    }

    localStorage.setItem("wfc_malang_bookmarks", JSON.stringify(bookmarks));
    updateDashboardStats();
    applyFilters();
}

// Apply multi-criteria search filters
function applyFilters() {
    const filtered = cafes.filter(cafe => {
        // Search bar match (Name, address, area, or description keywords)
        const query = activeFilters.search.toLowerCase();
        const matchesSearch = !query || 
            cafe.name.toLowerCase().includes(query) ||
            cafe.address.toLowerCase().includes(query) ||
            cafe.area.toLowerCase().includes(query) ||
            cafe.description.toLowerCase().includes(query);

        // Area Filter Match
        const matchesArea = !activeFilters.area || cafe.area === activeFilters.area;

        // Type Filter Match
        const matchesType = !activeFilters.type || (cafe.type || "Cafe") === activeFilters.type;

        // Wifi speed minimum match
        const matchesWifi = cafe.wifiSpeed >= activeFilters.wifi;

        // Outlet density matches
        const matchesOutlets = activeFilters.outlets === "all" || cafe.outletDensity === activeFilters.outlets;

        // Noise level match
        const matchesNoise = activeFilters.noise === "all" || cafe.noiseLevel === activeFilters.noise;

        // Facilities check (all checked items must exist in cafe facilities array)
        const matchesFacilities = activeFilters.facilities.every(fac => cafe.facilities.includes(fac));

        // Favorite checkbox filter
        const matchesFavorites = !activeFilters.favoritesOnly || bookmarks.includes(cafe.id);

        return matchesSearch && matchesArea && matchesType && matchesWifi && matchesOutlets && matchesNoise && matchesFacilities && matchesFavorites;
    });

    // Re-render UI list & maps
    renderCafeList(filtered);
    updateMapMarkers(filtered);
    
    document.getElementById("results-num").textContent = filtered.length;
}

// Open Detail Modal
function openCafeDetail(cafeId) {
    const cafe = cafes.find(c => c.id === cafeId);
    if (!cafe) return;

    const isFav = bookmarks.includes(cafe.id);
    const isOpen = checkIfOpen(cafe.hours);

    const facilitiesListHTML = cafe.facilities.map(fac => {
        let label = "";
        let iconName = "";
        if (fac === "24h") { label = "Buka 24 Jam"; iconName = "clock"; }
        else if (fac === "ac") { label = "Full AC (Indoor)"; iconName = "snowflake"; }
        else if (fac === "outdoor") { label = "Area Terbuka / Asri"; iconName = "trees"; }
        else if (fac === "prayer") { label = "Mushola"; iconName = "heart"; }
        else if (fac === "meals") { label = "Makanan Berat & Snack"; iconName = "chef-hat"; }
        
        return `<span class="badge-tag"><i data-lucide="${iconName}" style="width:12px;height:12px;display:inline-block;vertical-align:middle;margin-right:4px;"></i> ${label}</span>`;
    }).join(" ");

    // Reviews list render
    const reviewsHTML = cafe.reviews.map(rev => {
        const stars = "★".repeat(Math.round(rev.rating)) + "☆".repeat(5 - Math.round(rev.rating));
        return `
            <div class="review-item">
                <div class="review-author-row">
                    <span class="review-author">${rev.author}</span>
                    <span class="review-date">${rev.date}</span>
                </div>
                <div class="review-stars">${stars}</div>
                <p class="review-text">${rev.text}</p>
            </div>
        `;
    }).join("");

    const detailContainer = document.getElementById("detail-modal-body");
    detailContainer.innerHTML = `
        <div class="detail-grid">
            <div class="detail-img-wrapper">
                <img src="${cafe.image}" class="detail-img" alt="${cafe.name}" onerror="this.src='https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80'">
                <div class="cafe-card-img-overlay"></div>
                <div class="card-badges-top">
                    <span class="badge-tag ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Buka' : 'Tutup'}</span>
                    <span class="badge-tag type-badge" style="border-color: var(--accent-purple); color: var(--accent-purple);">${cafe.type || 'Cafe'}</span>
                    <button class="btn-favorite-card ${isFav ? 'active' : ''}" onclick="toggleFavorite('${cafe.id}'); openCafeDetail('${cafe.id}')">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
            </div>
            
            <div class="detail-info-block">
                <div class="detail-title-area">
                    <h2>${cafe.name}</h2>
                    <p class="detail-address"><i data-lucide="map-pin"></i> ${cafe.address}</p>
                </div>

                <div class="detail-stats-grid">
                    <div class="detail-stat-box">
                        <i data-lucide="wifi"></i>
                        <div class="box-info">
                            <span class="box-lbl">WiFi Tercepat</span>
                            <span class="box-val" id="detail-wifi-speed">${cafe.wifiSpeed} Mbps</span>
                        </div>
                    </div>
                    <div class="detail-stat-box">
                        <i data-lucide="pocket"></i>
                        <div class="box-info">
                            <span class="box-lbl">Stopkontak</span>
                            <span class="box-val">${cafe.outletDensity}</span>
                        </div>
                    </div>
                    <div class="detail-stat-box">
                        <i data-lucide="volume-2"></i>
                        <div class="box-info">
                            <span class="box-lbl">Kebisingan</span>
                            <span class="box-val">${cafe.noiseLevel}</span>
                        </div>
                    </div>
                    <div class="detail-stat-box">
                        <i data-lucide="star"></i>
                        <div class="box-info">
                            <span class="box-lbl">Rasa Kopi / Menu</span>
                            <span class="box-val">${cafe.coffeeQuality}/10</span>
                        </div>
                    </div>
                </div>

                <div class="detail-desc-area">
                    <h4 class="detail-section-title"><i data-lucide="info"></i> Deskripsi & Layanan</h4>
                    <p class="detail-desc-text">${cafe.description}</p>
                </div>

                <div class="detail-facilities-area">
                    <h4 class="detail-section-title"><i data-lucide="check-circle"></i> Fasilitas</h4>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px;">
                        ${facilitiesListHTML}
                    </div>
                </div>

                <!-- WiFi Speed Test Simulator Widget -->
                <div class="speedtest-widget">
                    <h4 style="font-size:0.9rem;font-weight:700;margin-bottom:8px;"><i data-lucide="gauge"></i> Uji Kecepatan WiFi Cafe Sekarang</h4>
                    <div class="speedtest-gauge" id="speed-gauge">
                        <span class="speedtest-needle" id="gauge-number">${cafe.wifiSpeed}</span>
                        <span class="speedtest-unit">Mbps</span>
                    </div>
                    <button class="btn-speedtest" id="btn-run-speedtest" onclick="runWiFiSpeedTest(${cafe.wifiSpeed})">Jalankan Tes Kecepatan</button>
                </div>

                <!-- Navigation link -->
                <a href="https://www.google.com/maps/search/?api=1&query=${cafe.coordinates[0]},${cafe.coordinates[1]}" target="_blank" class="btn-primary" style="justify-content:center;text-decoration:none;margin-top:10px;">
                    <i data-lucide="navigation"></i> Petunjuk Arah (Google Maps)
                </a>
            </div>

            <!-- Reviews and Comments Grid (Span both cols) -->
            <div class="reviews-section">
                <h4 class="detail-section-title"><i data-lucide="message-square"></i> Review Komunitas (${cafe.reviews.length})</h4>
                <div class="reviews-list">
                    ${reviewsHTML || '<p style="color:var(--text-muted);font-size:0.85rem;padding:12px;">Belum ada review. Jadilah yang pertama memberikan review!</p>'}
                </div>

                <!-- Add Review Form -->
                <form class="add-review-form" onsubmit="submitReview('${cafe.id}', event)">
                    <h5>Tulis Review Anda</h5>
                    <div class="form-group" style="margin-bottom:8px;">
                        <label>Rating Anda</label>
                        <div class="stars-rating-input">
                            <input type="hidden" id="review-rating-val" value="5">
                            <button type="button" class="star-input-btn active" data-score="1" onclick="setReviewRatingInput(1)">★</button>
                            <button type="button" class="star-input-btn active" data-score="2" onclick="setReviewRatingInput(2)">★</button>
                            <button type="button" class="star-input-btn active" data-score="3" onclick="setReviewRatingInput(3)">★</button>
                            <button type="button" class="star-input-btn active" data-score="4" onclick="setReviewRatingInput(4)">★</button>
                            <button type="button" class="star-input-btn active" data-score="5" onclick="setReviewRatingInput(5)">★</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="review-author-input">Nama Anda</label>
                        <input type="text" id="review-author-input" required placeholder="Contoh: Andi Wijaya">
                    </div>
                    <div class="form-group">
                        <label for="review-text-input">Isi Ulasan</label>
                        <textarea id="review-text-input" rows="2" required placeholder="Ulas wifi, colokan, makanan, dll..."></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="padding: 0.5rem 1rem;font-size:0.85rem;">Kirim Ulasan</button>
                </form>
            </div>
        </div>
    `;

    document.getElementById("detail-modal").classList.add("open");
    lucide.createIcons();
}

// Handle Rating star selection logic in modal review form
function setReviewRatingInput(score) {
    document.getElementById("review-rating-val").value = score;
    const stars = document.querySelectorAll(".star-input-btn");
    stars.forEach((star, idx) => {
        if (idx < score) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    });
}

// WiFi speed test visual simulator
function runWiFiSpeedTest(averageSpeed) {
    const btn = document.getElementById("btn-run-speedtest");
    const gauge = document.getElementById("speed-gauge");
    const displayNum = document.getElementById("gauge-number");
    
    if (btn.classList.contains("running")) return;
    
    btn.classList.add("running");
    btn.textContent = "Menguji WiFi...";
    gauge.classList.add("testing");

    let counter = 0;
    const duration = 3000; // 3 seconds
    const intervalTime = 50; 
    const steps = duration / intervalTime;

    const interval = setInterval(() => {
        counter++;
        // Create dynamic needle jitter simulation
        const progressRatio = counter / steps;
        const baseSpeed = averageSpeed * progressRatio;
        const jitter = (Math.random() - 0.5) * 15;
        const currentMockSpeed = Math.max(1, Math.round(baseSpeed + jitter));

        displayNum.textContent = currentMockSpeed;

        if (counter >= steps) {
            clearInterval(interval);
            // Lock onto actual speed test result (close to average)
            const finalResult = Math.round(averageSpeed + (Math.random() - 0.5) * 10);
            displayNum.textContent = finalResult;
            
            btn.classList.remove("running");
            btn.textContent = "Selesai! Tes Lagi";
            gauge.classList.remove("testing");

            // Temporary update speed on the panel detail card
            document.getElementById("detail-wifi-speed").textContent = `${finalResult} Mbps`;
        }
    }, intervalTime);
}

// Add user review
function submitReview(cafeId, event) {
    event.preventDefault();
    const rating = parseInt(document.getElementById("review-rating-val").value);
    const author = document.getElementById("review-author-input").value;
    const text = document.getElementById("review-text-input").value;
    const today = new Date().toISOString().split("T")[0];

    const cafe = cafes.find(c => c.id === cafeId);
    if (!cafe) return;

    cafe.reviews.unshift({ author, rating, text, date: today });
    
    // Save state back to localStorage
    localStorage.setItem("wfc_malang_cafes", JSON.stringify(cafes));

    // Instant reload modal data
    openCafeDetail(cafeId);
    applyFilters();
}

// Open / Close modal handlers
function registerEventListeners() {
    // Theme Switch Button
    document.getElementById("btn-theme").addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const currentTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
        localStorage.setItem("wfc_theme", currentTheme);

        // Dynamically shift map skin
        if (map && currentTileLayer) {
            map.removeLayer(currentTileLayer);
            const tileUrl = currentTheme === "light" ? MAP_TILES.light : MAP_TILES.dark;
            currentTileLayer = L.tileLayer(tileUrl, {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);
        }
    });

    // Close Modals on click of background or X buttons
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target.closest(".btn-close-modal")) {
                modal.classList.remove("open");
            }
        });
    });

    // Add Cafe Modal Open Button
    document.getElementById("btn-add-cafe").addEventListener("click", () => {
        document.getElementById("add-modal").classList.add("open");
    });

    // Add Cafe Form Submit
    document.getElementById("add-cafe-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("new-name").value;
        const type = document.getElementById("new-type").value;
        const area = document.getElementById("new-area").value;
        const address = document.getElementById("new-address").value;
        const hours = document.getElementById("new-hours").value;
        const wifi = parseInt(document.getElementById("new-wifi").value);
        const outlets = document.getElementById("new-outlets").value;
        const noise = document.getElementById("new-noise").value;
        let lat = parseFloat(document.getElementById("new-lat").value);
        let lng = parseFloat(document.getElementById("new-lng").value);
        const img = document.getElementById("new-img").value || "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80";
        const desc = document.getElementById("new-description").value;

        // Auto-assign random offset centered on Malang if lat/lng are missing
        if (isNaN(lat) || isNaN(lng)) {
            lat = -7.965 + (Math.random() - 0.5) * 0.05;
            lng = 112.62 + (Math.random() - 0.5) * 0.05;
        }

        // Collect checked amenities
        const facilities = [];
        if (document.getElementById("new-fac-24h").checked) facilities.push("24h");
        if (document.getElementById("new-fac-ac").checked) facilities.push("ac");
        if (document.getElementById("new-fac-outdoor").checked) facilities.push("outdoor");
        if (document.getElementById("new-fac-prayer").checked) facilities.push("prayer");
        if (document.getElementById("new-fac-meals").checked) facilities.push("meals");

        const newId = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

        const newCafe = {
            id: newId,
            name,
            type,
            area,
            address,
            hours,
            wifiSpeed: wifi,
            outletDensity: outlets,
            noiseLevel: noise,
            comfortScore: 8.5,
            coffeeQuality: 8.0,
            description: desc,
            coordinates: [lat, lng],
            image: img,
            facilities,
            reviews: []
        };

        // Prepend and save
        cafes.unshift(newCafe);
        localStorage.setItem("wfc_malang_cafes", JSON.stringify(cafes));

        // Reset and notify
        document.getElementById("add-cafe-form").reset();
        document.getElementById("add-modal").classList.remove("open");

        updateDashboardStats();
        applyFilters();

        alert(`Cafe ${name} berhasil ditambahkan ke database!`);
    });

    // Realtime Search Box Input Listener
    document.getElementById("search-input").addEventListener("input", (e) => {
        activeFilters.search = e.target.value;
        applyFilters();
    });

    // Area dropdown selector
    document.getElementById("filter-area").addEventListener("change", (e) => {
        activeFilters.area = e.target.value;
        applyFilters();
    });

    // Type dropdown selector
    document.getElementById("filter-type").addEventListener("change", (e) => {
        activeFilters.type = e.target.value;
        applyFilters();
    });

    // WiFi speed slider input
    const wifiSlider = document.getElementById("filter-wifi");
    wifiSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        activeFilters.wifi = val;
        
        const label = document.getElementById("wifi-val");
        if (val === 10) {
            label.textContent = "Semua";
        } else {
            label.textContent = `≥ ${val} Mbps`;
        }
        applyFilters();
    });

    // Outlet Density Pills
    const outletPills = document.querySelectorAll("#filter-outlets .pill-btn");
    outletPills.forEach(pill => {
        pill.addEventListener("click", () => {
            outletPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeFilters.outlets = pill.getAttribute("data-val");
            applyFilters();
        });
    });

    // Noise Level Pills
    const noisePills = document.querySelectorAll("#filter-noise .pill-btn");
    noisePills.forEach(pill => {
        pill.addEventListener("click", () => {
            noisePills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            activeFilters.noise = pill.getAttribute("data-val");
            applyFilters();
        });
    });

    // Reset Filters Button
    document.getElementById("btn-clear-filters").addEventListener("click", () => {
        // Reset state
        activeFilters = {
            search: "",
            area: "",
            type: "",
            wifi: 10,
            outlets: "all",
            noise: "all",
            facilities: [],
            favoritesOnly: false
        };

        // Reset inputs visual value
        document.getElementById("search-input").value = "";
        document.getElementById("filter-area").value = "";
        document.getElementById("filter-type").value = "";
        document.getElementById("filter-wifi").value = 10;
        document.getElementById("wifi-val").textContent = "Semua";
        
        outletPills.forEach(p => p.classList.remove("active"));
        document.querySelector("#filter-outlets .pill-btn[data-val='all']").classList.add("active");

        noisePills.forEach(p => p.classList.remove("active"));
        document.querySelector("#filter-noise .pill-btn[data-val='all']").classList.add("active");

        // Clear checkboxes
        const checkboxes = document.querySelectorAll(".sidebar-filters input[type='checkbox']");
        checkboxes.forEach(cb => cb.checked = false);

        applyFilters();
    });

    // Facility filter checkboxes
    const facilityCheckboxes = document.querySelectorAll(".checkbox-list input[type='checkbox']");
    facilityCheckboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            const val = cb.value;
            if (cb.value === "24h" || cb.value === "ac" || cb.value === "outdoor" || cb.value === "prayer" || cb.value === "meals") {
                if (cb.checked) {
                    activeFilters.facilities.push(val);
                } else {
                    const idx = activeFilters.facilities.indexOf(val);
                    if (idx > -1) activeFilters.facilities.splice(idx, 1);
                }
                applyFilters();
            }
        });
    });

    // Favorites filter toggle checkbox
    document.getElementById("filter-favorites").addEventListener("change", (e) => {
        activeFilters.favoritesOnly = e.target.checked;
        applyFilters();
    });

    // Mobile View toggle Buttons
    const btnList = document.getElementById("btn-view-list");
    const btnMap = document.getElementById("btn-view-map");
    const panesGrid = document.querySelector(".view-panes");

    btnList.addEventListener("click", () => {
        btnList.classList.add("active");
        btnMap.classList.remove("active");
        panesGrid.classList.remove("map-active");
        
        // Hide map pane on mobile screen, show list grid
        const mapPane = document.querySelector(".map-pane-wrapper");
        const listGrid = document.getElementById("cafe-list");
        mapPane.style.display = "none";
        listGrid.style.display = "grid";
    });

    btnMap.addEventListener("click", () => {
        btnMap.classList.add("active");
        btnList.classList.remove("active");
        panesGrid.classList.add("map-active");

        // Show map pane full width, hide list grid on mobile screens
        const mapPane = document.querySelector(".map-pane-wrapper");
        const listGrid = document.getElementById("cafe-list");
        mapPane.style.display = "block";
        listGrid.style.display = "none";
        
        // Leaflet maps bug fix (needs invalidate size after showing container)
        setTimeout(() => {
            if (map) map.invalidateSize();
        }, 150);
    });

    // Initial check for mobile viewport setting on load
    handleResize();
    window.addEventListener("resize", handleResize);
}

// Adjust UI panels depending on viewport width (Mobile map styling overrides)
function handleResize() {
    const width = window.innerWidth;
    const mapPane = document.querySelector(".map-pane-wrapper");
    const listGrid = document.getElementById("cafe-list");
    
    if (width > 1024) {
        // Desktop standard view
        mapPane.style.display = "block";
        listGrid.style.display = "grid";
    } else {
        // Tablet / Mobile: toggle view decides
        const isMapActive = document.getElementById("btn-view-map").classList.contains("active");
        if (isMapActive) {
            mapPane.style.display = "block";
            listGrid.style.display = "none";
        } else {
            mapPane.style.display = "none";
            listGrid.style.display = "grid";
        }
    }
}
