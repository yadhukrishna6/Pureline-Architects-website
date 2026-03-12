export interface Project {
  id: number;
  type: string;
  category: string;
  title: string;
  image: string;
  description: string;
  client: string;
  location: string;
  period: string;
  area: string;
  scope: string;
  architect: string;
  gallery: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    type: 'Residential',
    category: 'Residential Spaces',
    title: 'Solstice Point Villa',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'The Solstice Point Villa represents a pinnacle of contemporary coastal architecture. Nestled securely upon a dramatic cliff face, this residence was conceived with a profound respect for its rugged surroundings. The primary design objective was to forge an uninterrupted dialogue between the built environment and the vast expanse of the ocean. By employing expansive floor-to-ceiling fenestration and minimizing structural visual barriers, the boundaries between the interior living spaces and the exterior landscape are deliberately blurred. \n\nMateriality plays a crucial role in grounding the structure; board-formed concrete provides a robust, textured base that echoes the surrounding stone, while sustainably sourced warm cedar cladding softens the upper volumes and integrates the home into the coastal ecosystem. The interior spatial arrangement is highly fluid, prioritizing open-plan living and passive ventilation techniques that harness the natural sea breezes. A dramatic cantilevered infinity pool extends daringly toward the horizon, serving not just as a luxurious amenity, but as a reflective architectural element that visually connects the sky with the sea.',
    client: 'Private Client',
    location: 'Malibu, CA',
    period: 'Jan 2022 – Oct 2023',
    area: '4,850 sqft',
    scope: 'Architecture & Interior Design',
    architect: 'Pureline Studio',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    type: 'Residential',
    category: 'Residential Spaces',
    title: 'Ecohaus Residence',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Ecohaus Residence is an ambitious exploration of sustainable urban living without compromising on sophisticated design. Situated in a dense neighborhood, the architectural strategy focused on creating an inward-looking sanctuary that simultaneously generates its own energy. The structural envelope utilizes state-of-the-art passive house principles, featuring triple-glazed windows and super-insulated airtight walls that drastically reduce the building’s thermal footprint and energy requirements.\n\nThe exterior facade is clad in Shou Sugi Ban (charred timber), providing a low-maintenance, highly durable finish with a striking, monolithic appearance that contrasts beautifully with the lush, integrated vertical gardens. Internally, a central lightwell acts as the lungs of the house, drawing natural daylight deep into the living zones while facilitating a stack-effect natural ventilation system during warmer months. The roof is entirely dedicated to a photovoltaic array and an intensive green roof system that manages stormwater runoff and provides a private biodiversity haven.',
    client: 'The Harrison Family',
    location: 'Austin, TX',
    period: 'Mar 2021 – Dec 2022',
    area: '3,200 sqft',
    scope: 'Architecture & Landscaping',
    architect: 'Pureline Studio',
    gallery: [
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    type: 'Residential',
    category: 'Residential Spaces',
    title: 'House on Rocky Island',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Designing the House on Rocky Island presented unparalleled logistical and environmental challenges. Anchored to a remote outcrop subjected to severe gale-force winds and corrosive salt spray, the architecture had to be intrinsically resilient. We conceived the dwelling as a geometric erosion; a rugged, angular corten steel shell designed to deflect aggressive weather patterns rather than simply resist them. Over time, the pre-rusted steel facade will oxidize further, blending the structure seamlessly into the lichen-covered basalt rock upon which it sits.\n\nThe interior is a stark, intentional contrast to the harsh exterior—a warm, protective "cave" lined entirely in pale birch ply and locally sourced slate. The fenestration was carefully curated to frame specific, dramatic views of the turbulent ocean while providing a sense of enclosure and security. Living areas are sunken to create intimate gathering zones around a central suspended hearth. The project is entirely off-grid, utilizing a sophisticated deep-cycle battery system charged by wind turbines and a backup diesel generator, alongside extensive rainwater harvesting capabilities.',
    client: 'Private Client',
    location: 'Isle of Skye, UK',
    period: 'Feb 2020 – Jul 2021',
    area: '2,100 sqft',
    scope: 'Architecture',
    architect: 'Pureline Studio (Lead)',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 4,
    type: 'Commercial',
    category: 'Commercial Interiors',
    title: 'Urban Oasis Café',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    description: 'Conceived as a therapeutic retreat within a bustling metropolis, the Urban Oasis Café relies heavily on biophilic design principles to enhance customer wellbeing and prolong dwell times. The spatial planning intentionally disrupts the typical linear cafe layout by introducing meandering pathways constructed from reclaimed cobblestones, forcing patrons to slow their pace upon entry. \n\nThe central architectural feature is a massive, custom-fabricated corten steel and glass atrium that houses a mature, three-story Ficus tree, visible from all seating zones. The acoustical environment was a major consideration; dense, hanging acoustic baffles disguised as hanging planters absorb the cacophony of espresso machines and urban traffic. Seating arrangements vary from intimate, cocoon-like booths upholstered in deep green velvet to large, communal tables constructed from single slabs of live-edge walnut. The lighting design is fully automated, adjusting color temperature dynamically throughout the day to mimic natural circadian rhythms, shifting from crisp, energizing daylight tones in the morning to warm, intimate amber hues in the evening.',
    client: 'Green Bean Corp.',
    location: 'London, UK',
    period: 'Nov 2023 – Present',
    area: '1,500 sqft',
    scope: 'Interior Design',
    architect: 'Pureline Interiors',
    gallery: [
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  }
];
