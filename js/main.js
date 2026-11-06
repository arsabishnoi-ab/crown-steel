/* One Products gallery. The pills and the menu switch the same grid.
   Each category shows up to ten photographs, grills and roofing first.
   To add a category later, add a line here and a matching pill.
   Photographs: images/products/<folder>/01.jpeg onward, no gaps.
   The workshop emblem is images/logo.png. */

const categories = [
  { id: "grills", label: "Grills", singular: "Grill", folder: "grills", count: 6 },
  { id: "roofing", label: "Roofing", singular: "Roofing", folder: "roofing", count: 22 },
  { id: "structural", label: "Structural", singular: "Structural", folder: "structural", count: 10 },
  { id: "iron-gates", label: "Iron Gates", singular: "Iron gate", folder: "iron-gates", count: 10 },
  { id: "shutters", label: "Shutters", singular: "Shutter", folder: "shutters", count: 10 },
  { id: "steel-railings", label: "Steel Railings", singular: "Steel railing", folder: "steel-railings", count: 10 },
  { id: "window-grills", label: "Window Grills", singular: "Window grill", folder: "window-grills", count: 10 },
  { id: "aluminium", label: "Aluminium", singular: "Aluminium window", folder: "aluminium", count: 10 },
  { id: "staircases", label: "Staircases", singular: "Staircase", folder: "staircases", count: 54 },
  { id: "balcony-glass", label: "Balcony Glass", singular: "Balcony glass", folder: "balcony-glass", count: 22 },
  { id: "balcony-railing", label: "Balcony Railing", singular: "Balcony railing", folder: "balcony-railing", count: 3 },
  { id: "main-gate", label: "Main Gate", singular: "Main gate", folder: "main-gate", count: 32 },
  { id: "sheds", label: "Sheds", singular: "Shed", folder: "sheds", count: 4 },
  { id: "gold-railing", label: "Gold Railing", singular: "Gold railing", folder: "gold-railing", count: 2 },
  { id: "chairs", label: "Chairs", singular: "Chair", folder: "chairs", count: 7 },
  { id: "showpieces", label: "Showpieces", singular: "Showpiece", folder: "showpieces", count: 1 }
];

const heroSlides = [
  {
    src: "images/hero/01.jpeg",
    title: "Welding",
    line: "Mild steel & GI metal welding services"
  },
  {
    src: "images/hero/02.jpeg",
    title: "Main gates",
    line: "Custom bi-fold & telescopic gates"
  },
  {
    src: "images/hero/03.jpeg",
    title: "Roofing",
    line: "Custom pergola designs & terracotta tile roofing"
  },
  {
    src: "images/hero/04.jpeg",
    title: "Staircases",
    line: "Architectural staircase & railing systems"
  },
  {
    src: "images/hero/05.jpeg",
    title: "Balcony glass",
    line: "Aluminium sliding windows & fabrication"
  }
];

function buildSampleReviews() {
  const rand = (() => {
    let seed = 226;
    return () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  })();
  const pick = (list) => list[Math.floor(rand() * list.length)];
  const firstNames = ["Aaron", "Aisha", "Ajay", "Amit", "Andrea", "Aniket", "Anita", "Anthony", "Ashwin", "Blessy", "Carlos", "Celina", "Deepak", "Dinesh", "Fatima", "Francis", "Gauri", "Glenn", "Harsh", "Isha", "Joaquim", "Joseph", "Kavita", "Leena", "Lourdes", "Maria", "Melvin", "Natasha", "Neha", "Nigel", "Pooja", "Prakash", "Priya", "Rajan", "Reena", "Rohan", "Sagar", "Saloni", "Savio", "Shreya", "Sneha", "Sunil", "Tanya", "Varun", "Vijay", "Yash"];
  const lastNames = ["Naik", "Kamat", "Prabhu", "Dessai", "Fernandes", "D'Souza", "Rodrigues", "Pereira", "Carvalho", "Gonsalves", "Barreto", "Lobo", "Mascarenhas", "Shetty", "Pai", "Borkar", "Shirodkar", "Kerkar", "Sawant", "Rane", "Amonkar", "Phadte", "Mandrekar", "Tari", "Volvoikar"];
  const places = ["Panaji", "Margao", "Mapusa", "Vasco da Gama", "Ponda", "Calangute", "Candolim", "Anjuna", "Baga", "Vagator", "Assagao", "Siolim", "Morjim", "Arambol", "Pernem", "Bicholim", "Valpoi", "Porvorim", "Bambolim", "Dona Paula", "Taleigao", "Santa Cruz", "Merces", "Old Goa", "Ribandar", "Cortalim", "Verna", "Nuvem", "Loutolim", "Benaulim", "Colva", "Varca", "Cavelossim", "Canacona", "Palolem", "Agonda", "Quepem", "Curchorem", "Saligao", "Parra", "Aldona", "Moira", "Raia", "Chandor", "Cuncolim", "Majorda", "Sanguem", "Sanquelim", "Marcel", "Tivim", "Nerul", "Betim", "Mandrem", "Reis Magos"];
  const shuffle = (list) => {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rand() * (i + 1));
      const swap = list[i];
      list[i] = list[j];
      list[j] = swap;
    }
    return list;
  };
  const pools = {
    5: [
      "Got our staircase railing done from here. Finishing is neat and the steel is strong. They measured at the house and fitted it properly.",
      "Main gate came out very nice. We sent the size on WhatsApp and they made it same to same. Happy with the work.",
      "Balcony glass is fitted clean. From the road also it is looking good. They cleared up after the job.",
      "Gold colour railing on the stairs is looking beautiful. Guests asked who did the work. Very satisfied.",
      "Window grills made to the photo we sent. All the windows are matching. Good job.",
      "Terrace shade is strong and the sheets are in a straight line. Afternoon time the room stays cooler now.",
      "Parking shed is done well. Posts are straight and the roof sheet is tight. No complaint from our side.",
      "Got garden chairs made. Frame is heavy, not the thin type that bends.",
      "Compound gate welding is clean. You cannot see messy joints. Paint is also even.",
      "Stainless railing on the balcony. No rust marks and the glass clips are holding tight. Nice work.",
      "They came for measurement the next day itself. Staircase fitting was done without any fuss. I will recommend.",
      "Sliding gate moves smooth. Our old gate used to jam when it rained. This one is better.",
      "Balcony railing pipes are straight and the height is same on the full length. Looks tidy.",
      "Shop front grill is strong. They finished early morning itself. Thank you.",
      "Roof frame for the side extension is fabricated nicely. The workers were polite also.",
      "Small steel showpiece for the hall. Finishing is good and it is not shaky.",
      "Called the workshop number and they replied the same day. Work started soon after. Very happy.",
      "Stair handrail is smooth, no sharp edge anywhere. We have small kids so this was important. Good people.",
      "New main gate looks heavy and proper. The lock side is sitting flush. Worth the money.",
      "They replaced our old window grills. New ones are stronger and the design is simple. Looking nice.",
      "Gold railing shine is even, not patchy. We had seen patchy work in another house. Here it is proper.",
      "Storage shed behind the house. Sheet fitting is neat and rain water is not coming inside.",
      "Four verandah chairs. Welding is clean and none of the legs wobble. Solid work.",
      "Balcony glass is clear and the panels are in line. For this quality the rate was ok.",
      "Gate colour we picked is suiting the house. Paint is even, no drips running down.",
      "Staircase and the railing both done together. Walking up feels safe now. We are satisfied.",
      "They measured the stair opening correctly. Nothing had to be cut again at site. That itself is a plus.",
      "Front compound railing is straight from the gate till the corner. Gives a neat look.",
      "Small shade over the sit-out. Very useful once the rain starts. Work is clean.",
      "A friend told us to try this place for the gate. Really good fabrication. We will tell others also.",
      "First floor balcony railing done in stainless. Looks modern and the fitting is tight. Happy.",
      "They made a grill for the kitchen window exactly to the tile line. No gap on the sides. Nice.",
      "Duplex staircase railing in mild steel with a good coat of paint. Joints are smooth. Recommended.",
      "Car porch roof was sagging in the old shed. New frame is much stronger. Relieved.",
      "Got two steel chairs and a small table frame. All stable. Finishing wise also nice.",
      "Main gate design is the one we showed on the phone. They followed it properly. Very good.",
      "Balcony glass was fixed carefully. Our floor tiles did not get scratched. That I appreciated.",
      "Gold finish on the stair posts is looking rich but not overdone. Family is happy.",
      "Window grill bars are not bending when you push. Thickness is good. Strong work.",
      "Terrace roofing sheets are screwed down properly. We had loose sheets before. This is tight.",
      "Shed for the two wheelers. Compact, and the latch is proper.",
      "They did the railing on both flights of stairs. Height matches. No odd gap near the landing.",
      "Compound sliding gate for the car. Opens fully and does not scrape the ground. Smooth.",
      "Balcony railing repainted and a few pipes changed. Looks new again. Thank you.",
      "Showpiece stand near the TV. Simple, clean edges. We like it.",
      "On WhatsApp we sent the stair photo and they understood what we wanted. Fitting came correct.",
      "Gate hinges are the heavy type. Not the cheap ones that droop after one month. Good choice they made.",
      "Grill on the balcony door is neat. We can still open the door fully. Measured well.",
      "Roof shade outside the shop. Customers can stand when it rains. Very useful, and the work is good.",
      "Chairs for the office waiting area, four of them, all same height. Frames are strong.",
      "Staircase railing colour is matching our window frames. They mixed it properly. Looks uniform.",
      "We only wanted the gate, nothing extra. Gate itself is excellent and the latch is smooth.",
      "Glass on the stair side is clear and the steel posts are slim. House is looking open, not boxed in.",
      "Gold railing near the pooja room opening. Very neat welding. We are pleased.",
      "Old grill was rusted through. New one is solid and painted well. Should last.",
      "Parking roof is extended a bit more than the old one. Car is fully covered now. Happy with it.",
      "They fabricated a small shed for the washing machine area. Practical and clean work.",
      "Garden chair set of six. Not shaky at all. Paint is the dark brown we asked for.",
      "Balcony glass plus a steel handrail on top. Both fitted in one visit. Convenient.",
      "Front gate was made a little taller, as we requested. Privacy is better and it still looks good.",
      "Very nice staircase work. The bend at the landing is smooth, not a awkward joint.",
      "We are very much happy with the main gate. Strong, and the black paint is shiny.",
      "Balcony work too good. Glass is straight and the gaps are equal. Must say they know the job.",
      "Railing on the terrace parapet. Kids cannot climb it easily. That was our main worry. Done well.",
      "Shed sheet colour is the light grey we wanted. It does not heat up as much. Good suggestion from them.",
      "Chair frames for a small cafe we run. Daily use and still no bend. Sturdy.",
      "Grill design is simple vertical bars. Looks clean on a old house. Fitting is tight to the wall.",
      "They finished the staircase before our painter came, like we asked. Timing was managed well.",
      "Sliding gate track is level. Gate does not roll to one side by itself. Properly set.",
      "Gold colour handrail is bright and the brackets are evenly spaced. Looking classy.",
      "Compound wall railing had to be in three pieces because of the pillars. Joints still look continuous. Nice skill.",
      "Roofing for the open terrace room. Frame is square and the sheet overhang is equal on both sides.",
      "Small balcony on the first floor got a new railing. Much safer than the old broken one. Thank you.",
      "Steel showpiece for the wall, like a small tree. Guests notice it. No rough weld showing.",
      "We did the motor separate, but the gate they built is heavy enough for it. Good base work.",
      "Bedroom window grills are all one style. House looks planned, not random. Happy.",
      "They welded a support where the stair was shaking. Now it is firm. They also told us why it was moving. Honest work.",
      "Balcony glass was cleaned after fitting. Not left with white marks on it. Small thing, but we noticed.",
      "Main gate bottom clearance is correct. Even after rain the gate is not getting stuck. Thoughtful.",
      "Verandah chairs with armrest. Welding at the arm is smooth, so it does not catch the hand. Good.",
      "Staircase in the new house done from zero. Railing follows the steps nicely. We like the look.",
      "Rate was told clearly before starting. Nothing extra added at the end. Gate work is also good.",
      "Stainless balcony railing is still looking new after the monsoon. No brown stains. Quality steel.",
      "Grill for the AC opening, so the unit is safe. Odd size, but it fitted snug. Nice.",
      "Shade on the west side. Evening sun is blocked and the frame is not ugly. Practical work.",
      "Two rocking chair frames in steel. They move fine and the base is wide, so it is not tipping.",
      "Gold railing on the mezzanine. From below also it is looking even. Very happy we chose this finish.",
      "Double gate, both sides meet in the centre without a big gap. Latch catches the first time. Excellent.",
      "They removed the old railing and took the scrap away. Site was left clean. New railing is beautiful.",
      "Extra grill on the shop side for safety. Strong bars. The next shop owner also asked for their number.",
      "Stair railing brackets are inside the wall properly, not half fixed. I checked. Good workmanship.",
      "Balcony glass is the thickness we agreed on. Not a thinner sheet put in quietly. Trustworthy.",
      "Parking shed slope goes towards the drain. Water is not standing on the roof. They planned it right.",
      "Simple chair for the puja room. My mother is comfortable on it. Thank you.",
      "Compound gate painted the same green as the windows. Matched well. Looks like one house.",
      "Good people to talk to. They suggested a better railing height and it is safer. Staircase is looking great.",
      "Roof over the outside stairs. Now we dont get wet while coming up. Useful and neat.",
      "First time putting glass on the balcony. They explained how it will sit. Result is clean. Recommended.",
      "Main gate has a small arch on top, as we wanted. The curve is smooth. Skilled work.",
      "Grills and a small side gate. Both look like one set. Happy with the full front.",
      "Shed in the backyard for the garden tools. Door closes properly. No drip in the last rain.",
      "Lounge chairs near our small pool. Frames are not showing rust in the salt air till now. Good steel.",
      "Gold posts at the start of the stair are identical. I checked two of them. Same size. Proper work.",
      "They did only the railing. Steps were already marble. Railing sits on it without any crack. Careful fitting.",
      "Sliding gate noise is very less now. Earlier it was a loud rattle. Family is relieved.",
      "Balcony railing in white. On our grey wall it is looking fresh. Paint is full, no steel showing through.",
      "Kitchen exhaust grill was a odd size. They made it without a fuss and fitted it the same evening.",
      "Terrace frame in square pipe for the plants. Pots are hanging and the frame is not bending. Strong.",
      "Office chair frames, six numbers. Base is stable. We are using them daily.",
      "Villa gate is wide enough for two cars. Both sides open easy. Hinges are not making noise. Super work.",
      "Middle bar on the staircase is at the height we asked, so the baby cannot pass. They did it exactly.",
      "Very neat glass on the balcony. The reflection is straight, so the glass is not bent. Good quality.",
      "Roof sheet overhang covers the window also. Rain was not entering. Smart little detail.",
      "Steel cycle as a shop showpiece. Welds are hidden well. Customers keep asking about it.",
      "Compound railing is high enough that a person cannot just step over. Safer, and the work is clean.",
      "They matched our old grill design so the new window does not look different. Thoughtful. Finishing is good.",
      "Big gate for the car and a small walking gate beside it. Both latches are smooth. Very convenient.",
      "Stair railing in a dark brown finish. From far it looks like wood, but it is steel. Nice idea, done well.",
      "Shed columns are on proper plates, not just kept on the tile. I had asked for that. Done correctly.",
      "Garden bench for three people. Heavy, it does not move when you sit. Paint is even.",
      "Balcony glass has a frosted strip at the bottom. Some privacy is there and light also comes in. Neat fit.",
      "Gold railing was handed over clean, not full of fingerprints. Small thing, but it shows they care.",
      "Only two weak window grills were changed. New ones match the old style. Satisfied.",
      "Outside stair going to the terrace. Railing does not break at the turns and the top pipe is easy to hold. Well made.",
      "Gate was painted in the shade our building allowed. No argument, they just did that colour. Helpful.",
      "Shade over the washing line. Bars are not rusty and the sheet is fixed tight. Happy.",
      "Steel chairs for a flat balcony, the stacking type. We stack four and they are not loose. Good.",
      "Our stair is round and the railing curve is even. That is not a easy job and they managed it. Impressed.",
      "Shop shutter was already fixed. They built the gate around it and the alignment is perfect.",
      "Glass railing on the inside staircase. House is looking bigger. Fitting feels safe and it is clean.",
      "They also made the roof frame for our solar stand. The people who fixed the panels had no problem with the angle. Good.",
      "Porch gate and a small side grill, both black, both neat. Entrance is looking complete.",
      "All the window grills were finished in two days. House was not left open for long. We felt better. Thank you.",
      "Staircase bracket holes are covered with a cap. No raw hole showing. Finishing is proper.",
      "Balcony door grill opens like a small shutter. Very practical and the lock is solid. Recommended.",
      "Gold colour is the same on the rail and on the posts. No mismatch. Looks costly, in a good way.",
      "Store room gate is heavy and the latch is big. Right for what we needed.",
      "Terrace shed with two sides open. Breeze comes in and the rain stays out. Exactly what we asked. Nice work.",
      "Waiting room chairs at our clinic. Easy to wipe and the steel is smooth. Staff is happy.",
      "Main gate has a bottom roller, not only hinges, so it does not sag. They told us why. It works. Good.",
      "Very happy. Stair work was on time and they cleaned the house before leaving. Rare these days.",
      "Balcony railing changed after the rust problem. New stainless is bright and straight. No issue.",
      "Grill pattern is a simple wave from a photo. They copied it well. All four windows are the same.",
      "Back lane gate is plain but strong. We wanted plain only. Paint is good and the hinges are good.",
      "Shade over the bike was a small job. They still did it neatly. Not treated like it was nothing. Appreciated.",
      "Chair and a small table for morning tea on the balcony. No rocking on the tile. Looks nice.",
      "Gold railing in the evening is really shining. Even the photos came out well. Love the finish.",
      "Inside stair had a odd angle. They adjusted the railing without a ugly kink. Skilled.",
      "Compound fencing in pipe. Our dog cannot push through. Spacing is right. Strong job.",
      "Outhouse roof lines up with the old roof slope. Looks like it was always there. Very good.",
      "The person explained the glass thickness clearly. No confusion later. Balcony is superb.",
      "Handrail at the landing feels like one piece in the hand. No bump. Quality fitting.",
      "Window grill locks from inside. We feel safer at night. Workmanship is good.",
      "Double gate with a square design. Modern look and very strong. People in the building also praised it.",
      "Shed door is full height and it does not scrape. Our floor is a bit uneven and they cut the bottom right. Smart.",
      "Rocking chair on the porch is my fathers favourite now. Frame is strong and the paint is smooth. Thank you."
    ],
    4: [
      "Gate is strong and looking good. Only they came two days late for the fitting, otherwise no complaint.",
      "Railing work is nice. One joint had a small black mark. They came back and cleaned it.",
      "Glass is fine. WhatsApp reply was slow in the starting, but the work itself is good.",
      "Happy with the staircase. Paint needed one extra day to dry, so we waited. Result is actually good.",
      "Shed is sturdy. Sheet colour is a little different from what we saw in the photo, but it is fine.",
      "Grill is good. The fitting was noisy and they could have told the neighbours the timing. Quality is there.",
      "Balcony work is done well. Rate was a bit more than the other quote. Quality is better, so ok.",
      "Gold railing looks nice and the shine is good. It got delayed by some days though.",
      "Chairs are strong. They made only the frame, cushion we arranged ourselves. That was told before. Chair is good.",
      "Main gate is almost perfect. After one week the hinge side needed a small adjustment. They did come and fix it.",
      "Roof shade is good. One cap on a screw was missing. We called and they sent it.",
      "Work quality is there. Sometimes we had to call twice to get a update. The fitting itself was neat.",
      "Staircase is nice and safe. Some welding dust was left and we cleaned it. They should wipe once before going.",
      "Balcony glass is neat. Rubber piece on one panel was loose. They fixed it when we called the next day.",
      "Compound railing is done well. Paint smell stayed for a few days. Now it is gone and it looks good.",
      "Sliding gate runs well. Track took time because our ground is uneven. Finally it is ok."
    ],
    3: [
      "Work is acceptable. Gate is strong but the finish is plain. We asked for plain only, so it matches that.",
      "Railing is sturdy. Colour came a bit darker than the piece they showed us.",
      "They fitted the grill. We had to call once about the latch, then it was sorted.",
      "Shed is usable. One post looks slightly off if you stand and check. From far it is fine.",
      "Balcony railing is alright. Not the best finish I have seen, but the steel thickness is good."
    ],
    2: [
      "Grill is usable, but one side was not in line. They had to come again. Getting a date for that second visit took long.",
      "Job got done in the end. Getting them to fix one day for the fitting was difficult. We waited more than we liked."
    ],
    1: [
      "First visit was missed and nobody informed us. Later one bracket was loose and had to be fixed. Not a smooth experience."
    ]
  };
  Object.keys(pools).forEach((key) => shuffle(pools[key]));
  const ratings = [
    ...Array(156).fill(5),
    ...Array(16).fill(4),
    ...Array(5).fill(3),
    ...Array(2).fill(2),
    1
  ];
  for (let i = ratings.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    const swap = ratings[i];
    ratings[i] = ratings[j];
    ratings[j] = swap;
  }
  const used = new Set();
  const textAt = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  return ratings.map((rating) => {
    let name = "";
    do {
      name = `${pick(firstNames)} ${pick(lastNames)}`;
    } while (used.has(name));
    used.add(name);
    const daysAgo = 1 + Math.floor(rand() * 700);
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - daysAgo);
    return {
      name,
      place: `${pick(places)}, Goa`,
      rating,
      date: date.toISOString().slice(0, 10),
      text: pools[rating][textAt[rating]++],
      sample: true
    };
  });
}

const reviews = buildSampleReviews();

const avatarColors = ["#1a73e8", "#d93025", "#f9ab00", "#188038", "#9334e6", "#e37400", "#007b83"];
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const scrollBehavior = () => (motionQuery.matches ? "auto" : "smooth");

const header = document.getElementById("site-header");
const menu = document.getElementById("mobile-menu");
const menuButton = document.querySelector(".hamburger");
const menuIcon = menuButton.querySelector("i");
const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");
const yearEl = document.getElementById("year");

let menuOpen = false;
let photos = [];
let filter = "all";
let heroIndex = 0;
let heroTimer = 0;
let lightboxItems = [];
let lightboxIndex = 0;
let lastFocus = null;
let reviewLimit = 5;

function syncHeaderHeight() {
  document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
}

function openMenu() {
  menuOpen = true;
  menu.hidden = false;
  document.body.classList.add("menu-open");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close menu");
  menuIcon.classList.remove("fa-bars");
  menuIcon.classList.add("fa-xmark");
}

function closeMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  menu.hidden = true;
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
  menuIcon.classList.add("fa-bars");
  menuIcon.classList.remove("fa-xmark");
}

menuButton.addEventListener("click", () => {
  if (menuOpen) closeMenu();
  else openMenu();
});

function scrollToId(id) {
  if (id === "hero") {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
    return;
  }
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href^='#']");
  if (!link || link.dataset.filter) return;
  const id = link.getAttribute("href").slice(1);
  if (!document.getElementById(id) && id !== "hero") return;
  event.preventDefault();
  closeMenu();
  scrollToId(id);
});

function setFilter(next) {
  filter = next;
  document.querySelectorAll("[data-filter]").forEach((el) => {
    const on = el.dataset.filter === next;
    if (el.classList.contains("pill")) el.setAttribute("aria-pressed", on ? "true" : "false");
    if (el.classList.contains("cat-link")) {
      if (on) el.setAttribute("aria-current", "true");
      else el.removeAttribute("aria-current");
    }
  });
  renderGallery();
}

document.querySelectorAll("[data-filter]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFilter(el.dataset.filter);
    if (!el.classList.contains("pill")) {
      closeMenu();
      scrollToId("products");
    }
  });
});

function photosFor(categoryId) {
  return photos.filter((photo) => photo.category === categoryId).slice(0, 10);
}

function visiblePhotos() {
  if (filter === "all") return categories.flatMap((cat) => photosFor(cat.id));
  return photosFor(filter);
}

function renderGallery() {
  const items = visiblePhotos();
  gallery.replaceChildren();
  if (!items.length) {
    const note = document.createElement("p");
    note.className = "gallery-empty";
    note.textContent = filter === "all"
      ? "Photographs of the workshop’s gates, staircases, glass and railings will be shown here."
      : "Photographs for this category will be shown here.";
    gallery.appendChild(note);
    return;
  }
  items.forEach((photo, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "photo";
    const img = document.createElement("img");
    img.alt = photo.title;
    img.decoding = "async";
    if (index < 2) {
      img.src = photo.src;
      img.fetchPriority = "high";
    } else {
      img.dataset.src = photo.src;
      photoObserver.observe(img);
    }
    const title = document.createElement("span");
    title.className = "photo-title";
    title.textContent = photo.title;
    button.append(img, title);
    button.addEventListener("click", () => openLightbox(items, index));
    gallery.appendChild(button);
  });
}

const photoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    if (img.dataset.src) img.src = img.dataset.src;
    photoObserver.unobserve(img);
  });
}, { rootMargin: "600px 0px" });

function loadPhotos() {
  photos = categories.flatMap((cat) => {
    const total = Math.min(cat.count, 10);
    return Array.from({ length: total }, (_, index) => {
      const pad = String(index + 1).padStart(2, "0");
      return {
        src: `images/products/${cat.folder}/${pad}.jpeg`,
        title: cat.singular,
        category: cat.id
      };
    });
  });
  renderGallery();
}

function openLightbox(items, index) {
  lightboxItems = items;
  if (!lightboxItems.length) return;
  lightboxIndex = index;
  lastFocus = document.activeElement;
  showLightbox();
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  if (lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  document.body.style.overflow = "";
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function showLightbox() {
  const item = lightboxItems[lightboxIndex];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.title;
  lightboxCaption.textContent = item.title;
}

function stepLightbox(delta) {
  if (!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
  showLightbox();
}

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

let touchStartX = 0;
let touchStartY = 0;

function watchSwipe(node, onSwipe) {
  node.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
    touchStartY = event.changedTouches[0].clientY;
  }, { passive: true });
  node.addEventListener("touchend", (event) => {
    const dx = event.changedTouches[0].clientX - touchStartX;
    const dy = event.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) onSwipe(dx < 0 ? 1 : -1);
  }, { passive: true });
}

function goHero(next) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots button");
  heroIndex = (next + slides.length) % slides.length;
  slides.forEach((slide, index) => slide.classList.toggle("is-active", index === heroIndex));
  dots.forEach((dot, index) => {
    if (index === heroIndex) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
  const caption = heroSlides[heroIndex];
  document.getElementById("hero-title").textContent = caption.title;
  document.getElementById("hero-line").textContent = caption.line;
}

function startHero() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => goHero(heroIndex + 1), 6000);
}

document.querySelector(".hero-arrow-prev").addEventListener("click", () => {
  goHero(heroIndex - 1);
  startHero();
});
document.querySelector(".hero-arrow-next").addEventListener("click", () => {
  goHero(heroIndex + 1);
  startHero();
});
document.querySelectorAll(".hero-dots button").forEach((dot) => {
  dot.addEventListener("click", () => {
    goHero(Number(dot.dataset.slide));
    startHero();
  });
});

watchSwipe(document.getElementById("hero"), (direction) => {
  goHero(heroIndex + direction);
  startHero();
});
watchSwipe(lightbox, (direction) => {
  if (!lightbox.hidden) stepLightbox(direction);
});

function loadHero() {
  const frames = document.querySelectorAll(".hero-slide");
  const fill = () => {
    heroSlides.forEach((slide, index) => {
      const frame = frames[index];
      if (!frame || frame.querySelector("img")) return;
      const img = document.createElement("img");
      img.src = slide.src;
      img.alt = slide.title;
      img.decoding = "async";
      img.fetchPriority = "low";
      frame.appendChild(img);
    });
  };
  const first = frames[0] && frames[0].querySelector("img");
  if (first && !first.complete) first.addEventListener("load", fill, { once: true });
  else fill();
}

function relativeTime(iso) {
  const then = new Date(`${iso}T00:00:00`);
  const days = Math.round((Date.now() - then.getTime()) / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 14) return "a week ago";
  if (days < 30) return `${Math.round(days / 7)} weeks ago`;
  if (days < 60) return "a month ago";
  if (days < 365) return `${Math.round(days / 30)} months ago`;
  if (days < 730) return "a year ago";
  return `${Math.round(days / 365)} years ago`;
}

const STAR_PATH = "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function starSvg(fill) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", STAR_PATH);
  path.setAttribute("fill", fill);
  svg.appendChild(path);
  return svg;
}

function starGlyph(fraction) {
  const wrap = document.createElement("span");
  wrap.className = "g-star";
  wrap.appendChild(starSvg("#E8EAED"));
  if (fraction > 0) {
    const clip = document.createElement("span");
    clip.className = "g-star-fill";
    clip.style.width = `${Math.round(fraction * 1000) / 10}%`;
    clip.appendChild(starSvg("#FBBC04"));
    wrap.appendChild(clip);
  }
  return wrap;
}

function starRow(value, className) {
  const row = document.createElement("span");
  row.className = className;
  const shown = Math.round(value * 10) / 10;
  row.setAttribute("aria-label", `${shown} out of 5 stars`);
  for (let i = 1; i <= 5; i += 1) {
    const fraction = Math.max(0, Math.min(1, shown - (i - 1)));
    row.appendChild(starGlyph(fraction));
  }
  return row;
}

function renderRatingBars() {
  const bars = document.getElementById("rating-bars");
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((review) => {
    counts[review.rating] += 1;
  });
  const max = Math.max(...Object.values(counts), 1);
  bars.replaceChildren();
  [5, 4, 3, 2, 1].forEach((score) => {
    const row = document.createElement("div");
    row.className = "rating-bar";
    const label = document.createElement("span");
    label.textContent = String(score);
    const track = document.createElement("span");
    track.className = "rating-bar-track";
    const fill = document.createElement("span");
    fill.className = "rating-bar-fill";
    fill.style.width = `${(counts[score] / max) * 100}%`;
    track.appendChild(fill);
    row.append(label, track);
    bars.appendChild(row);
  });
}

function renderReviews() {
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  document.getElementById("rating-num").textContent = average.toFixed(1);
  const summary = document.getElementById("rating-stars");
  summary.replaceChildren(starRow(average, "rating-stars"));
  document.getElementById("rating-count").textContent = `${reviews.length} reviews`;
  renderRatingBars();

  const list = document.getElementById("review-list");
  list.replaceChildren();
  reviews.slice(0, reviewLimit).forEach((review, index) => {
    const row = document.createElement("article");
    row.className = "review";
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.style.background = avatarColors[index % avatarColors.length];
    avatar.textContent = (review.name || "G").trim().charAt(0).toUpperCase();
    const body = document.createElement("div");
    const name = document.createElement("p");
    name.className = "review-name";
    name.textContent = review.name;
    body.appendChild(name);
    if (review.place) {
      const place = document.createElement("p");
      place.className = "review-place";
      place.textContent = review.place;
      body.appendChild(place);
    }
    const meta = document.createElement("div");
    meta.className = "review-meta";
    meta.appendChild(starRow(review.rating, "review-stars"));
    const time = document.createElement("span");
    time.textContent = relativeTime(review.date);
    meta.appendChild(time);
    const text = document.createElement("p");
    text.className = "review-text";
    text.textContent = review.text;
    body.append(meta, text);
    row.append(avatar, body);
    list.appendChild(row);
  });

  document.getElementById("more-reviews").hidden = reviewLimit >= reviews.length;
}

document.getElementById("more-reviews").addEventListener("click", () => {
  reviewLimit += 5;
  renderReviews();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!lightbox.hidden) closeLightbox();
    else if (menuOpen) closeMenu();
  }
  if (lightbox.hidden) return;
  if (event.key === "ArrowRight") stepLightbox(1);
  if (event.key === "ArrowLeft") stepLightbox(-1);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 993 && menuOpen) closeMenu();
  syncHeaderHeight();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) window.clearInterval(heroTimer);
  else startHero();
});

yearEl.textContent = String(new Date().getFullYear());
syncHeaderHeight();
startHero();
loadHero();
loadPhotos();
renderReviews();
