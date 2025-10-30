export type Project = {
        slug: string;
        title: string;
        summary: string;
        description: string;
        outcome: string;
        tags: string[];
        year: number;
        link?: string;
        repo?: string;
};

export const projects: Project[] = [
        {
                slug: 'orbital-fleet-ops-platform',
                title: 'Orbital Fleet Ops Platform',
                summary:
                        'Mission control interface for monitoring satellites and automating anomaly response across a growing LEO fleet.',
                description:
                        'Led a cross-functional tiger team to build a telemetry pipeline, alerting engine, and operator console on top of a serverless event architecture.',
                outcome: 'Reduced incident response time by 58% and enabled 24/7 autonomous monitoring.',
                tags: ['TypeScript', 'WebGL', 'Event-Driven'],
                year: 2024,
                link: '/blog/atlas-dashboard-modernization/',
                repo: 'https://github.com/ahmed-engineer/orbital-fleet-ops',
        },
        {
                slug: 'adaptive-navigation-stack',
                title: 'Adaptive Navigation Stack',
                summary:
                        'Autonomous quadcopter stack featuring SLAM, adaptive path planning, and a React-based field dashboard.',
                description:
                        'Implemented GPU-accelerated mapping, telemetry compression, and a reactive command center that let pilots rehearse missions in the browser.',
                outcome: 'Cut pre-flight planning from 4 hours to 30 minutes with live mission rehearsal.',
                tags: ['Rust', 'React', 'Robotics'],
                year: 2023,
                repo: 'https://github.com/ahmed-engineer/adaptive-nav-stack',
        },
        {
                slug: 'relay-cloud-migration',
                title: 'Relay Cloud Migration',
                summary:
                        'Lifted and shifted a legacy analytics suite into containerized microservices with observability baked in from day one.',
                description:
                        'Decomposed a decade-old monolith into gRPC services, introduced IaC, and rolled out blue/green deployments with zero downtime.',
                outcome: 'Saved $1.2M annually in infrastructure costs and dropped deploy time from hours to minutes.',
                tags: ['Go', 'Kubernetes', 'DevOps'],
                year: 2022,
                repo: 'https://github.com/ahmed-engineer/relay-cloud',
        },
        {
                slug: 'signal-lab-platform',
                title: 'Signal Lab Platform',
                summary:
                        'Browser-based DSP playground for RF engineers to visualize and iterate on signal chains in real time.',
                description:
                        'Shipped WASM-powered audio processing modules, collaborative editing, and a plug-in marketplace using Astro Islands.',
                outcome: 'Enabled 5 teams to prototype waveforms 3x faster than desktop tooling.',
                tags: ['WebAssembly', 'Astro', 'DSP'],
                year: 2021,
                repo: 'https://github.com/ahmed-engineer/signal-lab',
        },
        {
                slug: 'flux-insight-engine',
                title: 'Flux Insight Engine',
                summary:
                        'Anomaly detection engine built on streaming ETL and graph analytics for an industrial IoT network.',
                description:
                        'Designed the processing graph, authored custom operators in Rust, and exposed the insights through a headless GraphQL API.',
                outcome: 'Surfaced production issues 72 hours sooner on average and unlocked predictive maintenance.',
                tags: ['Rust', 'GraphQL', 'IoT'],
                year: 2020,
        },
        {
                slug: 'lattice-ci-orchestrator',
                title: 'Lattice CI Orchestrator',
                summary:
                        'Self-serve CI/CD orchestration with ephemeral build runners and baked-in security gates.',
                description:
                        'Rebuilt pipeline definitions around reusable actions, introduced policy-as-code, and wired up progressive delivery metrics.',
                outcome: 'Release cadence jumped from monthly to daily with zero security waivers.',
                tags: ['TypeScript', 'Platform Engineering', 'Security'],
                year: 2019,
        },
];
