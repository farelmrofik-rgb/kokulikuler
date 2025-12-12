// Data acara budaya tradisional Indonesia 2026
const culturalEvents = [
    {
        id: 1,
        title: "Festival Danau Sentani",
        category: "festival",
        date: "2026-06-19",
        endDate: "2026-06-25",
        location: "Jayapura, Papua",
        region: "papua",
        description: "Festival tahunan yang menampilkan kekayaan budaya Papua dengan tari-tarian tradisional, ukiran khas, dan kuliner lokal di sekitar Danau Sentani.",
        image: "https://www.iwarebatik.org/wp-content/uploads/2020/01/Amazing-Papua.jpg",
        lat: -2.5489,
        lng: 140.5000
    },
    {
        id: 2,
        title: "Upacara Ngaben Massal",
        category: "ceremony",
        date: "2026-07-12",
        endDate: "2026-07-12",
        location: "Denpasar, Bali",
        region: "bali",
        description: "Upacara pembakaran jenazah secara massal sesuai tradisi Hindu Bali, dilengkapi dengan prosesi adat dan persembahan yang megah.",
        image: "https://i.pinimg.com/736x/90/3b/05/903b05159c040dcbc21f7f3fdbfbec96.jpg",
        lat: -8.6705,
        lng: 115.2126
    },
    {
        id: 3,
        title: "Pesta Budaya Lembah Baliem",
        category: "festival",
        date: "2026-08-08",
        endDate: "2026-08-10",
        location: "Wamena, Papua",
        region: "papua",
        description: "Festival perang tradisional suku Dani, Lani, dan Yali yang menampilkan kekayaan budaya pegunungan tengah Papua.",
        image: "https://apimice.kemenparekraf.go.id/event-daerah/public/664/c40/b61/664c40b61c2b4996545661.png",
        lat: -4.0833,
        lng: 138.9500
    },
    {
        id: 4,
        title: "Wayang Orang Sriwedari",
        category: "performance",
        date: "2026-01-15",
        endDate: "2026-12-15",
        location: "Surakarta, Jawa Tengah",
        region: "java",
        description: "Pertunjukan wayang orang rutin setiap malam dengan cerita dari epos Mahabharata dan Ramayana.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Wayang_Orang_Sriwedari_Solo.jpg/960px-Wayang_Orang_Sriwedari_Solo.jpg",
        lat: -7.5667,
        lng: 110.8167
    },
    {
        id: 5,
        title: "Festival Erau Kutai Kartanegara",
        category: "festival",
        date: "2026-09-22",
        endDate: "2026-09-30",
        location: "Tenggarong, Kalimantan Timur",
        region: "kalimantan",
        description: "Festival adat Kesultanan Kutai Kartanegara dengan berbagai ritual, tarian, dan perlombaan tradisional.",
        image: "https://ayojalanjalan.com/wp-content/uploads/2020/05/Haritage_-adat-erau-ENGULUR-NAGA.jpg",
        lat: -0.4402,
        lng: 116.9865
    },
    {
        id: 6,
        title: "Pasar Malam Sekaten",
        category: "exhibition",
        date: "2026-04-10",
        endDate: "2026-04-20",
        location: "Yogyakarta",
        region: "java",
        description: "Pasar malam tradisional dalam rangka memperingati Maulid Nabi Muhammad dengan berbagai jajanan khas dan pertunjukan.",
        image: "https://r1.community.samsung.com/t5/image/serverpage/image-id/9042998i71797AA8092E1C0C/image-size/large?v=v2&px=999",
        lat: -7.8032,
        lng: 110.3398
    },
    {
        id: 7,
        title: "Upacara Kasada",
        category: "ceremony",
        date: "2026-07-24",
        endDate: "2026-07-24",
        location: "Gunung Bromo, Jawa Timur",
        region: "java",
        description: "Upacara persembahan suku Tengger kepada Sang Hyang Widhi dengan melemparkan sesaji ke kawah Gunung Bromo.",
        image: "https://www.iwarebatik.org/wp-content/uploads/2019/09/upacara-kasada-jawa-timur-de51dd18abd823b1575664bbb0ab7dee-1080x747.jpg",
        lat: -7.9425,
        lng: 112.9530
    },
    {
        id: 8,
        title: "Festival Tabuik",
        category: "festival",
        date: "2026-09-01",
        endDate: "2026-09-10",
        location: "Pariaman, Sumatra Barat",
        region: "sumatra",
        description: "Perayaan tradisional masyarakat Minangkabau dalam memperingati wafatnya cucu Nabi Muhammad, Hasan dan Husein.",
        image: "https://hypeabis.id/assets/photo/20230903234352000000HusnulFikri085766512919HoyakTabuikBudayaPariaman.jpg",
        lat: -0.6360,
        lng: 100.1203
    },
    {
        id: 9,
        title: "Tari Saman Aceh",
        category: "performance",
        date: "2026-08-17",
        endDate: "2026-08-17",
        location: "Banda Aceh",
        region: "sumatra",
        description: "Pertunjukan tari Saman massal dalam rangka perayaan Hari Kemerdekaan Indonesia.",
        image: "https://parksidehotels.co.id/wp-content/uploads/2025/07/60dacbf4238f5.jpg",
        lat: 5.5483,
        lng: 95.3238
    },
    {
        id: 10,
        title: "Pameran Batik Nusantara",
        category: "exhibition",
        date: "2026-10-02",
        endDate: "2026-10-10",
        location: "Jakarta",
        region: "java",
        description: "Pameran batik dari seluruh daerah di Indonesia dengan workshop membatik dan fashion show.",
        image: "https://static.bacasaja.id/po-content/uploads/202409/festival-batik.jpeg",
        lat: -6.2088,
        lng: 106.8456
    },
    {
        id: 11,
        title: "Festival Pesona Toraja",
        category: "festival",
        date: "2026-08-01",
        endDate: "2026-08-07",
        location: "Tana Toraja, Sulawesi Selatan",
        region: "sulawesi",
        description: "Festival budaya Toraja dengan upacara Rambu Solo', adu kerbau, dan pameran rumah adat Tongkonan.",
        image: "https://indonesiakaya.com/wp-content/uploads/2020/10/upacara_rambu_solo_1200.jpg",
        lat: -3.0972,
        lng: 119.8667
    },
    {
        id: 12,
        title: "Karnaval Budaya Cirebon",
        category: "festival",
        date: "2026-04-21",
        endDate: "2026-04-23",
        location: "Cirebon, Jawa Barat",
        region: "java",
        description: "Karnaval yang menampilkan keragaman budaya Cirebon dengan parade seni tari, musik, dan busana tradisional.",
        image: "https://www.batiqa.com/upload/news/l/ilustrasi-keindahan-budaya-cirebon_h27f0.jpg",
        lat: -6.7320,
        lng: 108.5523
    }
];

// Data peta lokasi acara
const mapEvents = [
    { id: 1, lat: -2.5489, lng: 140.5000, title: "Festival Danau Sentani", category: "festival" },
    { id: 2, lat: -8.6705, lng: 115.2126, title: "Upacara Ngaben Massal", category: "ceremony" },
    { id: 3, lat: -4.0833, lng: 138.9500, title: "Pesta Budaya Lembah Baliem", category: "festival" },
    { id: 4, lat: -7.5667, lng: 110.8167, title: "Wayang Orang Sriwedari", category: "performance" },
    { id: 5, lat: -0.4402, lng: 116.9865, title: "Festival Erau Kutai Kartanegara", category: "festival" },
    { id: 6, lat: -7.8032, lng: 110.3398, title: "Pasar Malam Sekaten", category: "exhibition" },
    { id: 7, lat: -7.9425, lng: 112.9530, title: "Upacara Kasada", category: "ceremony" },
    { id: 8, lat: -0.6360, lng: 100.1203, title: "Festival Tabuik", category: "festival" },
    { id: 9, lat: 5.5483, lng: 95.3238, title: "Tari Saman Aceh", category: "performance" },
    { id: 10, lat: -6.2088, lng: 106.8456, title: "Pameran Batik Nusantara", category: "exhibition" },
    { id: 11, lat: -3.0972, lng: 119.8667, title: "Festival Pesona Toraja", category: "festival" },
    { id: 12, lat: -6.7320, lng: 108.5523, title: "Karnaval Budaya Cirebon", category: "festival" }
];

// Inisialisasi variabel global
let currentMonth = 0; // 0 = Januari, 11 = Desember
let currentYear = 2026;
let map;
let markers = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi
    initNavigation();
    renderEvents();
    initCalendar();
    initMap();
    initFilters();
    initModal();
    
    // Set tahun ke 2026 untuk kalender
    currentYear = 2026;
    renderCalendar(currentMonth, currentYear);
});

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Render Events
function renderEvents(filteredEvents = culturalEvents) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';
    
    filteredEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-image" style="background-image: url('${event.image}');"></div>
            <div class="event-content">
                <span class="event-category ${event.category}">${getCategoryName(event.category)}</span>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-date">
                    <i class="far fa-calendar-alt"></i>
                    <span>${formattedDate}</span>
                </div>
                <div class="event-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${event.location}</span>
                </div>
                <p class="event-description">${event.description}</p>
                <button class="event-btn" data-id="${event.id}">Detail Acara</button>
            </div>
        `;
        
        eventsContainer.appendChild(eventCard);
    });
    
    // Add event listeners to detail buttons
    document.querySelectorAll('.event-btn').forEach(button => {
        button.addEventListener('click', function() {
            const eventId = parseInt(this.getAttribute('data-id'));
            openEventModal(eventId);
        });
    });
}

// Get category name in Indonesian
function getCategoryName(category) {
    const categories = {
        'festival': 'Festival',
        'ceremony': 'Upacara Adat',
        'performance': 'Pertunjukan Seni',
        'exhibition': 'Pameran & Pasar'
    };
    return categories[category] || 'Acara Budaya';
}

// Initialize Filters
function initFilters() {
    const regionFilter = document.getElementById('region-filter');
    const monthFilter = document.getElementById('month-filter');
    const resetButton = document.getElementById('reset-filters');
    
    regionFilter.addEventListener('change', filterEvents);
    monthFilter.addEventListener('change', filterEvents);
    resetButton.addEventListener('click', resetFilters);
}

// Filter Events
function filterEvents() {
    const regionValue = document.getElementById('region-filter').value;
    const monthValue = document.getElementById('month-filter').value;
    
    let filteredEvents = culturalEvents;
    
    // Filter by region
    if (regionValue !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.region === regionValue);
    }
    
    // Filter by month
    if (monthValue !== 'all') {
        const month = parseInt(monthValue);
        filteredEvents = filteredEvents.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() + 1 === month;
        });
    }
    
    renderEvents(filteredEvents);
    
    // Update map markers
    updateMapMarkers(filteredEvents);
}

// Reset Filters
function resetFilters() {
    document.getElementById('region-filter').value = 'all';
    document.getElementById('month-filter').value = 'all';
    renderEvents(culturalEvents);
    updateMapMarkers(culturalEvents);
}

// Update Map Markers
function updateMapMarkers(filteredEvents) {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    // Add new markers for filtered events
    filteredEvents.forEach(event => {
        const mapEvent = mapEvents.find(mapEv => mapEv.id === event.id);
        if (mapEvent) {
            const marker = L.marker([mapEvent.lat, mapEvent.lng])
                .addTo(map)
                .bindPopup(`<strong>${event.title}</strong><br>${event.location}<br><button class="map-popup-btn" data-id="${event.id}">Detail</button>`);
            
            markers.push(marker);
            
            // Add click event to popup button
            marker.on('popupopen', () => {
                document.querySelector('.map-popup-btn').addEventListener('click', function() {
                    const eventId = parseInt(this.getAttribute('data-id'));
                    openEventModal(eventId);
                });
            });
        }
    });
}

// Initialize Map
function initMap() {
    // Initialize map centered on Indonesia
    map = L.map('cultural-map').setView([-2.5489, 118.0], 5);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add markers for all events
    updateMapMarkers(culturalEvents);
}

// Initialize Calendar
function initCalendar() {
    // Set up calendar navigation
    document.getElementById('prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });
}

// Render Calendar
function renderCalendar(month, year) {
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    
    // Update month/year display
    document.getElementById('current-month-year').textContent = `${monthNames[month]} ${year}`;
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    // Adjust for Monday as first day of week
    const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;
    
    // Get events for this month
    const monthEvents = culturalEvents.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
    
    // Build calendar HTML
    const calendarBody = document.getElementById('calendar-container');
    calendarBody.innerHTML = '';
    
    // Add header
    const weekdays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
    const headerRow = document.createElement('div');
    headerRow.className = 'calendar-header';
    weekdays.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        headerRow.appendChild(dayElement);
    });
    calendarBody.appendChild(headerRow);
    
    // Create calendar body
    const calendarGrid = document.createElement('div');
    calendarGrid.className = 'calendar-body';
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < adjustedStartingDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date empty';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'calendar-date';
        
        // Add day number
        const dayNumber = document.createElement('div');
        dayNumber.className = 'calendar-date-number';
        dayNumber.textContent = day;
        dateCell.appendChild(dayNumber);
        
        // Add events for this day
        const dayEvents = monthEvents.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day;
        });
        
        dayEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'calendar-event';
            eventElement.textContent = event.title;
            eventElement.setAttribute('data-id', event.id);
            eventElement.addEventListener('click', function() {
                const eventId = parseInt(this.getAttribute('data-id'));
                openEventModal(eventId);
            });
            dateCell.appendChild(eventElement);
        });
        
        calendarGrid.appendChild(dateCell);
    }
    
    calendarBody.appendChild(calendarGrid);
}

// Initialize Modal
function initModal() {
    const modal = document.getElementById('event-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Open Event Modal
function openEventModal(eventId) {
    const event = culturalEvents.find(e => e.id === eventId);
    if (!event) return;
    
    const modal = document.getElementById('event-modal');
    const modalBody = document.getElementById('modal-body');
    
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Check if event has end date
    let dateInfo = formattedDate;
    if (event.endDate && event.endDate !== event.date) {
        const endDate = new Date(event.endDate);
        const formattedEndDate = endDate.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        dateInfo = `${formattedDate} - ${formattedEndDate}`;
    }
    
    modalBody.innerHTML = `
        <div class="modal-event-image" style="background-image: url('${event.image}'); height: 300px; border-radius: 8px; background-size: cover; background-position: center; margin-bottom: 25px;"></div>
        <span class="event-category ${event.category}">${getCategoryName(event.category)}</span>
        <h2>${event.title}</h2>
        <div class="modal-event-info">
            <p><i class="far fa-calendar-alt"></i> <strong>Tanggal:</strong> ${dateInfo}</p>
            <p><i class="fas fa-map-marker-alt"></i> <strong>Lokasi:</strong> ${event.location}</p>
            <p><i class="fas fa-globe-asia"></i> <strong>Daerah:</strong> ${getRegionName(event.region)}</p>
        </div>
        <div class="modal-event-description">
            <h3>Deskripsi Acara</h3>
            <p>${event.description}</p>
            <p>Acara ini merupakan bagian dari warisan budaya Indonesia yang perlu dilestarikan dan dikembangkan untuk generasi mendatang. Partisipasi masyarakat dan wisatawan sangat diharapkan untuk menjaga keberlangsungan tradisi ini.</p>
        </div>
        <div class="modal-event-actions">
            <button class="modal-btn share-btn"><i class="fas fa-share-alt"></i> Bagikan</button>
            <button class="modal-btn save-btn"><i class="far fa-calendar-plus"></i> Tambah ke Kalender</button>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add event listeners to modal buttons
    document.querySelector('.share-btn').addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: event.description,
                url: window.location.href + `?event=${event.id}`
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href + `?event=${event.id}`);
            alert('Tautan acara telah disalin ke clipboard!');
        }
    });
    
    document.querySelector('.save-btn').addEventListener('click', () => {
        alert(`Acara "${event.title}" telah ditambahkan ke kalender Anda!`);
    });
}

// Get region name in Indonesian
function getRegionName(region) {
    const regions = {
        'sumatra': 'Sumatra',
        'java': 'Jawa',
        'bali': 'Bali & Nusa Tenggara',
        'kalimantan': 'Kalimantan',
        'sulawesi': 'Sulawesi',
        'papua': 'Papua & Maluku'
    };
    return regions[region] || 'Indonesia';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});