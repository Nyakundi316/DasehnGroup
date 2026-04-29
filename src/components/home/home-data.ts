import { Boxes, ClipboardCheck, Clock3, ShieldCheck, Shovel, Truck } from "lucide-react";

export const metrics = [
  { value: "2020", label: "Established" },
  { value: "24h", label: "Response target" },
  { value: "3", label: "Core business lines" },
];

export const services = [
  {
    eyebrow: "Fleet operations",
    title: "Transport and logistics",
    description:
      "Road freight, dispatch planning and site support for construction programs that need dependable movement and responsive coordination.",
    image: "/images/services/transport.jpg",
    icon: Truck,
    points: ["Road freight", "Dispatch scheduling", "Route planning", "Field support"],
  },
  {
    eyebrow: "Aggregates supply",
    title: "Construction materials",
    description:
      "Quality quarry materials supplied for road works, ready mix concrete, precast operations and general site preparation.",
    image: "/images/services/materials.jpg",
    icon: Boxes,
    points: ["Quarry sand", "River sand", "Ballast", "Asphalt concrete"],
  },
  {
    eyebrow: "Plant hire",
    title: "Equipment leasing",
    description:
      "Modern machinery and support equipment arranged for excavation, grading, hauling, compaction and general infrastructure works.",
    image: "/images/services/equipment.jpg",
    icon: Shovel,
    points: ["Excavators", "Bulldozers", "Tipper trucks", "Pavers"],
  },
];

export const projects = [
  {
    name: "Dagoretti Corner Road",
    location: "Nairobi, Kenya",
    image: "/images/projects/dagoretti.jpg",
    summary:
      "Supply and logistics support for the corridor running from Dagoretti Corner toward Karen Shopping Centre.",
  },
  {
    name: "Dongo Kundu Bypass",
    location: "Mombasa, Kenya",
    image: "/images/projects/dongo-kundu.jpg",
    summary:
      "Materials and transport coordination for the highway linking mainland routes without passing through the island.",
  },
  {
    name: "Eastern Bypass",
    location: "Nairobi, Kenya",
    image: "/images/projects/eastern-bypass.jpg",
    summary:
      "Construction logistics for a key route helping regional traffic move around Nairobi&apos;s central business district.",
  },
  {
    name: "Kwa Jomvu A109",
    location: "Mombasa, Kenya",
    image: "/images/projects/kwa-jomvu.jpg",
    summary:
      "Fleet and site support for the Mombasa to Mariakani A109 road works around the Kwa Jomvu section.",
  },
];

export const partnerLogos = [
  { name: "STECOL", image: "/images/partners/stecol.jpg" },
  { name: "AVIC", image: "/images/partners/avic.jpg" },
  { name: "CCC", image: "/images/partners/ccc.jpg" },
  { name: "Premier", image: "/images/partners/premier.jpg" },
  { name: "Aerospace", image: "/images/partners/aerospace.jpg" },
];

export const principles = [
  {
    title: "Scope",
    description: "Confirm the required fleet, materials and site timing before dispatch starts.",
    icon: ClipboardCheck,
  },
  {
    title: "Plan",
    description: "Coordinate access, quantities and movement so teams stay aligned in the field.",
    icon: Clock3,
  },
  {
    title: "Deliver",
    description: "Execute with accountable communication and practical support during site operations.",
    icon: ShieldCheck,
  },
];

export const supportModels = [
  {
    label: "Mobilization support",
    title: "Project mobilization",
    description:
      "Start a new site with haulage, material supply and equipment aligned from the beginning.",
    points: [
      "Initial scope review",
      "Material matching",
      "Equipment planning",
      "Delivery coordination",
    ],
  },
  {
    label: "Ongoing support",
    title: "Ongoing site support",
    description:
      "Keep active infrastructure programs supplied without breaking the operating rhythm.",
    points: [
      "Recurring haulage",
      "Flexible scheduling",
      "Continuous field support",
      "Responsive communication",
    ],
  },
];

export const permitRequirements = [
  "Color scan of the logbook copy",
  "Valid insurance sticker",
  "NTSA inspection report",
  "Truck photos from the front, side and rear with the number plate clearly visible",
];

export const faqs = [
  {
    question: "What does Dasehn Group support?",
    answer:
      "The company supports transport and logistics, construction materials, equipment leasing and permit-readiness guidance for truck operators.",
  },
  {
    question: "Where do you operate?",
    answer:
      "Dasehn supports infrastructure projects across key Kenyan corridors including Nairobi and Mombasa road works.",
  },
  {
    question: "How quickly can the team respond?",
    answer:
      "The operating target is a response within 24 hours so site teams can move into planning quickly.",
  },
  {
    question: "Can multiple services be coordinated together?",
    answer:
      "Yes. Dasehn can support transport, material supply and equipment needs under one operating partner.",
  },
];

export const companyValues = [
  "Customer commitment",
  "Professional standards",
  "Health and safety",
  "Accountability",
  "Long-term business relationships",
];
