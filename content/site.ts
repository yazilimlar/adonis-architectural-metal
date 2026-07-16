import type { Collection, Project } from "@/types/content";

export const collections: Collection[] = [
  { slug: "furniture", title: "Furniture", description: "Custom metal furniture designed for refined residential and commercial interiors.", examples: ["Dining tables", "Desks", "Coffee tables", "Chairs", "Shelving"] },
  { slug: "hospitality-commercial", title: "Hospitality & Commercial", description: "Durable, repeatable and brand-specific pieces for hotels, restaurants and offices.", examples: ["Reception desks", "Restaurant furniture", "Hotel collections", "Retail fixtures"] },
  { slug: "architectural-metalwork", title: "Architectural Metalwork", description: "Architectural elements engineered for permanence, security and visual identity.", examples: ["Gates", "Fences", "Doors", "Railings", "Screens"] },
  { slug: "objects-accessories", title: "Objects & Accessories", description: "Functional artistic objects crafted with the same rigor as architectural work.", examples: ["Wine racks", "Log holders", "Hangers", "Planters", "Decorative objects"] }
];

export const featuredProjects: Project[] = [
  { slug: "sculptural-dining-table", title: "Sculptural Dining Table", sector: "Residential", summary: "A made-to-order steel and hardwood centerpiece with an architectural base.", materials: ["Blackened steel", "Solid wood"] },
  { slug: "boutique-hotel-collection", title: "Boutique Hotel Collection", sector: "Hospitality", summary: "A coordinated family of tables, consoles and decorative metal elements.", materials: ["Powder-coated steel", "Brass accents"] },
  { slug: "custom-entry-system", title: "Custom Entry System", sector: "Architectural", summary: "A gate, fence and entry-door composition developed as one visual system.", materials: ["Galvanized steel", "Exterior coating"] }
];
