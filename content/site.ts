import type { Collection, Project } from "@/types/content";

export const collections: Collection[] = [
  { slug: "furniture", title: "Furniture", description: "Sculptural tables, desks, seating and storage made for residential and professional interiors.", examples: ["Dining tables", "Executive desks", "Coffee tables", "Chairs", "Shelving"] },
  { slug: "hospitality-commercial", title: "Hospitality & Commercial", description: "Coordinated, durable collections for hotels, restaurants, offices, retail and public-facing environments.", examples: ["Reception desks", "Restaurant furniture", "Hotel collections", "Retail fixtures"] },
  { slug: "architectural-metalwork", title: "Architectural Metalwork", description: "Entry systems and architectural elements engineered for security, permanence and visual identity.", examples: ["Gates", "Fences", "Doors", "Railings", "Screens"] },
  { slug: "objects-accessories", title: "Objects & Accessories", description: "Functional artistic objects produced with the same rigor as large architectural commissions.", examples: ["Wine racks", "Log holders", "Hangers", "Planters", "Decorative objects"] }
];

export const flagshipProducts = [
  { slug: "atlas-dining-table", code: "AM-F01", title: "Atlas Dining Table", category: "Dining", statement: "A monolithic steel base carrying a warm timber or stone top.", materials: ["Blackened steel", "Solid wood / stone"], availability: "Made to order" },
  { slug: "apollo-executive-desk", code: "AM-O01", title: "Apollo Executive Desk", category: "Office", statement: "An architectural workstation with concealed cable management and tailored storage.", materials: ["Powder-coated steel", "Wood veneer", "Leather"], availability: "Custom dimensions" },
  { slug: "aurelius-coffee-table", code: "AM-L01", title: "Aurelius Coffee Table", category: "Living", statement: "A low sculptural composition balancing polished metal, glass and stone.", materials: ["Brass / bronze", "Glass", "Natural stone"], availability: "Limited series" },
  { slug: "olympus-entry-gate", code: "AM-A01", title: "Olympus Entry Gate", category: "Architectural", statement: "A complete gate and fence language developed as the first architectural gesture of a property.", materials: ["Galvanized steel", "Exterior powder coat"], availability: "Site-specific commission" },
  { slug: "dionysus-wine-display", code: "AM-D01", title: "Dionysus Wine Display", category: "Objects", statement: "A modular bottle display designed as functional metal sculpture.", materials: ["Steel", "Brass accents"], availability: "Custom capacity" },
  { slug: "hearth-log-rack", code: "AM-D02", title: "Hearth Log Rack", category: "Objects", statement: "A refined firewood holder with clean geometry, durable finish and balanced proportions.", materials: ["Black steel", "Leather option"], availability: "Made to order" }
] as const;

export const featuredProjects: Project[] = [
  { slug: "private-residence-collection", title: "Private Residence Collection", sector: "Residential", summary: "A coordinated family of dining, living and entry pieces developed around one material language.", materials: ["Blackened steel", "Walnut", "Bronze"] },
  { slug: "boutique-hotel-collection", title: "Boutique Hotel Collection", sector: "Hospitality", summary: "Reception, console, table and decorative elements engineered for repeated use and unified brand presence.", materials: ["Powder-coated steel", "Brass accents", "Stone"] },
  { slug: "custom-entry-system", title: "Custom Entry System", sector: "Architectural", summary: "A gate, fence, pedestrian door and address feature composed as one visual and structural system.", materials: ["Galvanized steel", "Exterior coating", "Integrated lighting"] }
];

export const materials = [
  "Mild steel",
  "Stainless steel",
  "Brass and bronze",
  "Aluminum",
  "Wood",
  "Natural stone",
  "Glass",
  "Leather"
] as const;
