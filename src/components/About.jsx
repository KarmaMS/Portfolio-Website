import { BriefcaseBusiness, Cloud, GraduationCap, LucideBriefcase, ShieldCheck } from "lucide-react"

export const About = () => {
    const experience = [
        {
            icon: <BriefcaseBusiness className="h-6 w-6" />,
            title: "Technical Consultant @ Johri Technologies",
            meta: "Feb 2026 - Present",
            points: [
                "Support CNAPP, AVS, Cohesity, and Wiz consulting engagements through runbooks, controls matrices, LOE estimates, and client-facing technical deliverables.",
                "Translate cloud-security requirements into architecture notes and deployment plans for enterprise environments.",
            ],
        },
        {
            icon: <Cloud className="h-6 w-6" />,
            title: "Cloud Development Teaching Assistant @ LUMS",
            meta: "Jan 2026 - Present",
            points: [
                "Manage Azure subscriptions, student roles, resource groups, and cloud access for the course's lab environment.",
                "Help students debug secure deployments, hub-spoke VPN setups, and storage pipelines while reviewing assignments.",
            ],
        },
        {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Cloud Security + SaaS Audit @ Johri Technologies",
            meta: "Oct 2023 - Aug 2024",
            points: [
                "Developed and validated 80+ AWS RQL policies, built Azure CSPM detections, and created onboarding docs that cut ramp-up time.",
                "Led SaaS security audits covering identity, encryption, incident response, and compliance, documenting 40+ control gaps and remediation plans.",
            ],
        },
    ];

    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span>About Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="flex justify-center space-x-4">
                    <GraduationCap size={35} className="text-primary" />
                    </span>
                    <h3 className="text-2xl font-semibold flex justify-center mb-0.5">  
                        <span>Lahore University of Management and Sciences</span>   
                    </h3>
                    <p className="text-center italic text-muted-foreground mb-3">
                        Expected Graduation - June 2027
                    </p>

                    <p className="text-muted-foreground siz"> 
                        Computer Science
                    </p>

                    <p className="text-muted-foreground">
                        I'm a computer science student focused on cloud security, systems, and software engineering. My work spans cloud policy automation, SaaS audits, technical consulting, secure infrastructure, and human-centered product design.
                    </p>    

                    <div className="flex flex-col sm:flex-row gap-4 pt4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a 
                            href="/Maaz Shahid - Resume.pdf" 
                            download="Maaz Shahid - Resume.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>
                
            

                <div className="grid grid-cols-1 gap-6">

                    

                    

                    <span className="flex justify-center space-x-4">
                    <LucideBriefcase size={35} className="text-primary" />
                    </span>
                    <h1>Experience</h1>
                    {experience.map((role) => (
                        <div key={role.title} className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    {role.icon}
                                </div>

                                <div>
                                    <div className="flex flex-col gap-1 text-left">
                                        <h1 className="font-semibold">{role.title}</h1>
                                        <p className="text-sm text-muted-foreground">{role.meta}</p>
                                    </div>
                                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 text-left">
                                        {role.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
    
    )
}
