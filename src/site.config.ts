export const SITE = {
    name: "Ryan Soroka",
    initials: "RS",
    domain: "ryansoroka.dev",
    email: "sorokar050@gmail.com",
    resume: "/soroka_resume.pdf",
    socials: {
        github: "https://github.com/r-soroka",
        linkedin: "https://www.linkedin.com/in/ryan-soroka",
    },
} as const;

/** Hero: the first thing visitors see. Your name comes from SITE.name. */
export const HERO = {
    role: "Computer Science Student & SOC Analyst",
    school: "The University of Tampa",
    location: "Tampa, FL",
} as const;

/**
 * About: your bio and the skills grid.
 * A skill is either plain text, "SQL", or a name with an icon,
 * { name: "Python", icon: "devicon:python" }. Icons come from:
 *   devicon:       full-color tech logos  https://icon-sets.iconify.design/devicon/
 *   simple-icons:  one-color brand logos  https://icon-sets.iconify.design/simple-icons/
 *   mdi:           general symbols        https://icon-sets.iconify.design/mdi/
 * Skills with a devicon logo also scroll in the bar under the hero.
 */
export const ABOUT = {
    /** One strong sentence about who you are and what you care about building. */
    headline: "CS student, SOC analyst, and pilot",
    /** A short paragraph: what you're studying, how you got here, what's next. */
    /**
     * Quick facts in the left column, under the heading. Add, remove or
     * reorder freely. `dot: true` adds the small orange status dot.
     */
    facts: [
        { label: "STATUS", value: "Open to work", dot: true },
        { label: "CURRENTLY", value: "SOC Level 1 Analyst, UTampa" },
        { label: "PREVIOUSLY", value: "Sys Admin, Edwards AFB · AFIT ICE Intern" },
        { label: "STUDYING", value: "B.S. Computer Science · May 2027" },
        { label: "BASED", value: HERO.location },
    ],
    bio: "I’m a Computer Science student at the University of Tampa. I spend my days as a SOC analyst and my evenings building things like a rideshare app for my campus and database-driven websites. My research tests how real cryptography implementations leak secrets through timing. I’m drawn to work where reliable engineering and security meet.",
    skills: [
        {
            label: "LANGUAGES",
            items: [
                { name: "Java", icon: "devicon:java" },
                { name: "Python", icon: "devicon:python" },
                { name: "C", icon: "devicon:c" },
                { name: "C++", icon: "devicon:cplusplus" },
                { name: "C#", icon: "devicon:csharp" },
                { name: "SQL", icon: "mdi:database" },
                { name: "SWQL", icon: "mdi:database-search" },
                { name: "R", icon: "devicon:r" },
                { name: "TypeScript", icon: "devicon:typescript" },
                { name: "JavaScript", icon: "devicon:javascript" },
            ],
        },
        {
            label: "SOFTWARE DEVELOPMENT",
            items: [
                { name: "OOP", icon: "mdi:cube-outline" },
                { name: "Git", icon: "devicon:git" },
                { name: "RESTful APIs", icon: "mdi:api" },
                { name: "Databases", icon: "mdi:database-outline" },
                { name: "Data Structures & Algorithms", icon: "mdi:file-tree-outline" },
                { name: "React", icon: "devicon:react" },
                { name: "Node.js", icon: "devicon:nodejs" },
                { name: "Astro", icon: "devicon:astro" },
                { name: "Tailwind", icon: "devicon:tailwindcss" },
            ],
        },
        {
            label: "SYSTEMS & SECURITY",
            items: [
                { name: "Linux", icon: "devicon:linux" },
                { name: "Windows", icon: "devicon:windows11" },
                { name: "Server Management", icon: "mdi:server" },
                { name: "Network Security", icon: "mdi:shield-lock-outline" },
            ],
        },
        {
            label: "TOOLS",
            items: [
                { name: "SolarWinds", icon: "mdi:monitor-dashboard" },
                { name: "Nmap", icon: "mdi:radar" },
                { name: "Wireshark", icon: "simple-icons:wireshark" },
                { name: "Bash", icon: "simple-icons:gnubash" },
                { name: "SSH", icon: "mdi:ssh" },
                { name: "VMs", icon: "mdi:layers-outline" },
                { name: "Active Directory", icon: "mdi:account-group-outline" },
                { name: "Microsoft Sentinel/Defender", icon: "mdi:shield-search" },
                { name: "SIEM/XDR", icon: "mdi:shield-alert-outline" },
            ],
        },
    ],
} as const;


export const NAV_SECTIONS = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "research", label: "Research" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];
