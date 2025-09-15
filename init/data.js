// init/data.js

const categories = [
  "Hackathons",
  "CodingContests",
  "Workshops",
  "AI/MLSummits",
  "Music",
  "Dance",
  "Drama",
  "FashionShows",
  "Football",
  "Cricket",
  "Esports",
  "Marathons",
  "Guest Lectures",
  "ResearchTalks",
  "StartupMeets",
  "CollegeFests",
  "DepartmentDays"
];

const sampleListings = [
  {
    title: "SPECTRA ’24",
    description: "SPECTRA ’24 is the flagship cultural festival of Gokaraju Rangaraju Institute of Engineering and Technology. Join us on June 1st for an electrifying evening of music, dance, drama and fashion—showcasing the very best of student talent and campus creativity.",
    image: { filename: "img8", url: "/images/img8.jpg" },
    price: 0,
    location: "GRIET Campus Grounds",
    country: "India",
    category: categories[15],   // CollegeFests
    startDate: "2024-06-01",
    endDate:   "2024-06-01"
  },
  {
    title: "International Yoga Day Celebration",
    description: "Celebrate International Yoga Day with the NSS team at GRIET! Join us on June 21st in Hall‑1 for a rejuvenating morning of guided yoga sessions suitable for all levels. Bring your own mat and white attire.",
    image: { filename: "img9", url: "/images/img9.jpg" },
    price: 0,
    location: "Hall‑1, GRIET",
    country: "India",
    category: categories[2],    // Workshops
    startDate: "2025-06-21",
    endDate:   "2025-06-21"
  },
  {
    title: "Epitome ’23: 24‑Hour Hackathon",
    description: "Hosted by the Skill Development Cell at GRIET, Epitome ’23 invites innovators to turn ideas into impact in a 24‑hour hackathon across Healthcare, Agrotech, Smart Education and Road Safety.",
    image: { filename: "img3", url: "/images/img3.jpg" },
    price: 400,
    location: "Innovation Lab, GRIET",
    country: "India",
    category: categories[0],    // Hackathons
    startDate: "2023-01-27",
    endDate:   "2023-01-28"
  },
  {
    title: "Vivitsu ’24: 24‑Hour Hackathon",
    description: "Vivitsu ’24, powered by the Free Software Wing at GRIET, is an open‑source sprint where teams of 2–4 members collaborate to build socially impactful solutions over 24 hours.",
    image: { filename: "img4", url: "/images/img4.jpg" },
    price: 2000,
    location: "Hall 1, GRIET",
    country: "India",
    category: categories[0],    // Hackathons
    startDate: "2024-04-19",
    endDate:   "2024-04-20"
  },
  {
    title: "Ruedo ’24: Battlegrounds Mobile India Tournament",
    description: "Assemble your squad and compete in Ruedo ’24’s Battlegrounds Mobile India tournament. Three days of live commentary, leaderboards, and a ₹1,000 prize pool.",
    image: { filename: "img5", url: "/images/img5.jpg" },
    price: 200,
    location: "Gaming Arena, GRIET",
    country: "India",
    category: categories[10],   // Esports
    startDate: "2024-03-12",
    endDate:   "2024-03-14"
  },
  {
    title: "E‑Summit ’24: IPL Auction Experience",
    description: "Part of GRIET’s E‑Summit, this IPL Auction simulation on April 5–6, 2024 lets you draft your dream roster and learn auction tactics from sports economists.",
    image: { filename: "img6", url: "/images/img6.jpg" },
    price: 0,
    location: "Campus Auditorium, GRIET",
    country: "India",
    category: categories[14],   // StartupMeets
    startDate: "2024-04-05",
    endDate:   "2024-04-06"
  },
  {
    title: "Workshop on Cyber Security & Ethical Hacking",
    description: "The CSI Student Branch at GRIET invites you to a two‑day Workshop on Cyber Security and Ethical Hacking led by a guest expert.",
    image: { filename: "img7", url: "/images/img7.jpg" },
    price: 350,
    location: "CSE Block, GRIET",
    country: "India",
    category: categories[2],    // Workshops
    startDate: "2022-06-04",
    endDate:   "2022-06-06"
  },
  {
    title: "Invictus ’24: Annual Sports Meet Awards Ceremony",
    description: "Invictus ’24 honors champions across track, field and team events. Join us on May 2, 2024 for an inspiring awards ceremony.",
    image: { filename: "img1", url: "/images/img1.jpg" },
    price: 0,
    location: "Hall 1, GRIET",
    country: "India",
    category: categories[15],   // CollegeFests
    startDate: "2024-05-02",
    endDate:   "2024-05-02"
  },
  {
    title: "Pragnya ’16: National Technical Symposium",
    description: "Pragnya ’16, IEEE GRIET SB’s flagship technical symposium, featured keynote addresses, hands‑on workshops and coding events.",
    image: { filename: "img2", url: "/images/img2.jpg" },
    price: 150,
    location: "GRIET Campus",
    country: "India",
    category: categories[13],   // ResearchTalks
    startDate: "2016-08-13",
    endDate:   "2016-08-13"
  }
];

module.exports = { data: sampleListings };
