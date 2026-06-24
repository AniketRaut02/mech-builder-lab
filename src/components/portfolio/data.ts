import customBtAsset from "@/assets/custom-bt.png.asset.json";
import customPhysicsAsset from "@/assets/custom-physics.png.asset.json";
import blindspotThumb from "@/assets/blindspot-thumb.png.asset.json";
import horror2dThumb from "@/assets/horror2d-thumb.png.asset.json";
import survivalHorrorThumb from "@/assets/survival-horror-thumb.png.asset.json";
import re4Thumb from "@/assets/re4-thumb.png.asset.json";

export type Project = {
  slug: string;
  title: string;
  kind: "Game" | "Framework" | "System";
  year: string;
  role: string;
  tags: string[];
  summary: string;
  thumbnail: string; // gradient placeholder id
  thumbnailImage?: string;
  media?: { type: "video" | "diagram"; src?: string };
  hoverVideo?: string;
  span?: "wide" | "tall" | "default";
  externalLink?: string;
};


export const projects: Project[] = [
  {
    slug: "behaviour-tree",
    title: "Custom Behaviour Tree Framework",
    kind: "Framework",
    year: "2025",
    role: "Architecture · Tooling",
    tags: ["Unity", "C#", "GraphView", "ScriptableObjects"],
    summary:
      "Editor-integrated behaviour tree authoring with blackboards, conditional aborts and runtime debugging.",
    thumbnail: "btree",
    thumbnailImage: customBtAsset.url,
    media: { type: "diagram" },
    span: "wide",
    externalLink: "https://assetstore.unity.com/packages/tools/behavior-ai/simple-behavior-tree-372442",
  },
  {
    slug: "re4-camera",
    title: "RE4 Camera + QTE Framework",
    kind: "System",
    year: "2025",
    role: "Gameplay · Cinematics",
    tags: ["Unity", "Cinemachine", "Timeline", "Input System"],
    summary:
      "Shoulder camera state machine with timeline-driven QTE sequences, input buffering and failure recovery.",
    thumbnail: "re4",
    thumbnailImage: re4Thumb.url,
    media: { type: "video" },
    span: "tall",
    externalLink: "https://github.com/AniketRaut02/Blindshot-Unity-Project",
  },
  {
    slug: "physics-system",
    title: "Custom Physics System",
    kind: "System",
    year: "2024",
    role: "Engine · Simulation",
    tags: ["C#", "Math", "Collisions", "Forces"],
    summary:
      "Lightweight semi-implicit Euler physics with broadphase, impulse resolution and configurable solver budgets.",
    thumbnail: "physics",
    thumbnailImage: customPhysicsAsset.url,
    media: { type: "diagram" },
    externalLink: "https://github.com/AniketRaut02/CutsomPhysics",
  },
  {
    slug: "survival-horror",
    title: "Survival Horror Prototype",
    kind: "Game",
    year: "2024",
    role: "Solo Gameplay Programmer",
    tags: ["Unity", "AI", "Stealth", "Inventory"],
    summary:
      "Zombie survival vertical slice with sensory AI, ammo scarcity loop and modular interaction framework.",
    thumbnail: "horror",
    thumbnailImage: survivalHorrorThumb.url,
    media: { type: "video" },
    externalLink: "https://drive.google.com/file/d/1tkBeTaaC3mae27XCaX_qJW-4QbcsjA1K/view?usp=drive_link",
  },
  {
    slug: "blindspot",
    title: "Blindspot- Breach & Escape",
    kind: "Game",
    year: "2024",
    role: "Gameplay · Systems",
    tags: ["Unity", "Narrative", "Mechanics"],
    summary:
      "A short 3D game based in a Sci-Fi facility, where you have to steal a secretly secured laptop and escape the security laser system without getting hit. ",
    thumbnail: "discharge",
    thumbnailImage: blindspotThumb.url,
    media: { type: "video" },
    hoverVideo: "/__l5e/assets-v1/0a4d316a-33c5-4fd6-97f6-267cec828474/blindspot.mp4",
    externalLink: "https://aniketraut.itch.io/blindspot",
  },
  {
    slug: "2d-horror",
    title: "Atmospheric 2D Horror Prototype",
    kind: "Game",
    year: "2023",
    role: "Gameplay · Lighting",
    tags: ["Unity 2D", "URP Lights", "AI"],
    summary:
      "Top-down 2D horror with dynamic light occlusion, patrol AI and procedural ambience.",
    thumbnail: "horror2d",
    thumbnailImage: horror2dThumb.url,
    media: { type: "video" },
    externalLink: "https://aniketraut.itch.io/link-shift",
  },
];

export type CaseStudy = {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  architecture: string[];
  challenges: string;
  solutions: string;
  performance: string;
  stack: string[];
  github?: string;
  snippet: { language: string; code: string };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "btree",
    title: "Behaviour Tree Framework",
    tagline: "Authoring · Blackboards · Conditional aborts · Runtime debugger",
    overview:
      "A production-style behaviour tree authoring stack built on Unity's GraphView. Designers compose trees visually; programmers extend nodes through small, testable ScriptableObject contracts.",
    problem:
      "Off-the-shelf packages were either too heavy or hostile to iteration. We needed a small core with first-class debugging and predictable execution semantics across many agent archetypes.",
    architecture: [
      "Node base types: Action, Composite, Decorator, Service — each a ScriptableObject asset.",
      "Blackboard with typed keys and observers for conditional aborts.",
      "Tree runner driven by tick budgets; per-agent instance state cloned from authored assets.",
      "GraphView editor with inspector binding, asset wiring and live status tinting.",
    ],
    challenges:
      "Reconciling editor-time graph state with runtime execution without serialization drift, and exposing aborts without coupling decorators to their parents.",
    solutions:
      "Introduced an abort registry on the blackboard. Each decorator subscribes to keys; composites query the registry between children. Editor uses a thin runtime adapter that streams node status into the GraphView via an event bus.",
    performance:
      "Cold tick of a 60-node agent: ~0.08 ms. Pooled node instances avoid allocations during reparenting; blackboard observers use a dense int-keyed map.",
    stack: ["Unity 2022 LTS", "C# 10", "GraphView", "UI Toolkit", "ScriptableObjects"],
    github: "https://assetstore.unity.com/packages/tools/behavior-ai/simple-behavior-tree-372442",
    snippet: {
      language: "csharp",
      code: `public sealed class Selector : Composite
{
    public override NodeStatus Tick(Agent a)
    {
        for (int i = _cursor; i < Children.Count; i++)
        {
            var s = Children[i].Tick(a);
            if (s == NodeStatus.Running) { _cursor = i; return s; }
            if (s == NodeStatus.Success) { Reset(); return s; }
        }
        Reset();
        return NodeStatus.Failure;
    }
}`,
    },
  },
  {
    id: "re4-camera",
    title: "RE4 Camera + QTE Framework",
    tagline: "Camera state machine · Timeline QTEs · Input buffering",
    overview:
      "An over-the-shoulder camera and QTE pipeline modelled on classic survival horror — readable, responsive, and authored in Timeline so designers own the cadence.",
    problem:
      "Cinematic events needed to interrupt gameplay, accept buffered input within tight windows, and degrade gracefully on failure without dumping the player out of context.",
    architecture: [
      "Camera FSM: Exploration, Aim, Cinematic, QTE — explicit transitions with priorities.",
      "Timeline track type emits QTE markers with window, input glyph and on-fail branch.",
      "Input layer normalises device buttons to abstract verbs; buffer absorbs early presses.",
      "Failure system routes to a recovery sub-state instead of hard fail when configured.",
    ],
    challenges:
      "Avoiding input loss on state transitions and keeping camera blends from fighting Cinemachine's brain.",
    solutions:
      "A single input arbiter owns the frame; states consume verbs explicitly. Camera blends route through a custom mixer that suspends Cinemachine during scripted shots.",
    performance:
      "QTE evaluation is allocation-free; Timeline markers are pre-baked. Camera blend cost stable at ~0.05 ms per frame.",
    stack: ["Unity", "Cinemachine", "Timeline", "Input System"],
    github: "https://github.com/AniketRaut02/Blindshot-Unity-Project",
    snippet: {
      language: "csharp",
      code: `public bool TryConsume(InputVerb verb, float window)
{
    if (!_buffer.TryPeek(out var e)) return false;
    if (e.verb != verb) return false;
    if (Time.unscaledTime - e.time > window) { _buffer.Pop(); return false; }
    _buffer.Pop();
    return true;
}`,
    },
  },
  {
    id: "physics",
    title: "Custom Physics System",
    tagline: "Motion · Collisions · Forces · Solver budgets",
    overview:
      "A compact rigid-body simulator used for prototyping gameplay where Unity's physics felt overpowered. Built to be readable and to fail visibly.",
    problem:
      "Prototype mechanics needed deterministic, tweakable response without the surface area of a general-purpose physics engine.",
    architecture: [
      "Semi-implicit Euler integrator with substep control.",
      "Broadphase: uniform grid + AABB sweep. Narrowphase: SAT for convex shapes.",
      "Impulse-based contact resolution with Baumgarte stabilisation.",
      "Force accumulators per body; deterministic ordering for replay.",
    ],
    challenges:
      "Keeping stacks stable without burning the frame on solver iterations.",
    solutions:
      "Warm-started contacts and a configurable iteration budget per island. Sleeping bodies skip integration entirely.",
    performance:
      "~400 dynamic bodies at 60 Hz on a mid-range laptop with 8 solver iterations.",
    stack: ["C# 10", "Unity Jobs (optional)", "Burst-friendly math"],
    github: "https://github.com/AniketRaut02/CutsomPhysics",
    snippet: {
      language: "csharp",
      code: `void Integrate(Body b, float dt)
    {
        b.velocity += (b.force * b.invMass + gravity) * dt;
        b.position += b.velocity * dt;
        b.force = Vector3.zero;
    }`,
    },
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Gameplay Programming Intern",
    org: "Studio (placeholder)",
    period: "2024 — 2025",
    bullets: [
      "Built a reusable interaction framework adopted across three prototype projects.",
      "Shipped AI behaviours using a shared blackboard contract, halving agent authoring time.",
      "Profiled and optimised hot gameplay paths, reclaiming ~3 ms/frame on target hardware.",
    ],
  },
  {
    role: "Gameplay Programming Intern",
    org: "Studio (placeholder)",
    period: "2023 — 2024",
    bullets: [
      "Owned camera and input layer for a third-person prototype.",
      "Authored Timeline tooling that let design iterate on cinematic beats without engineering.",
      "Collaborated with art and design on a modular damage and reaction system.",
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Gameplay Programming",
    items: ["Mechanics design", "Character control", "Combat systems", "Camera systems", "Interaction frameworks"],
  },
  {
    title: "AI Systems",
    items: ["Behaviour trees", "Blackboards", "Utility AI", "Sensors & perception", "Pathfinding"],
  },
  {
    title: "Tools & Architecture",
    items: ["Editor tooling", "GraphView", "UI Toolkit", "ScriptableObjects", "Event systems"],
  },
  {
    title: "Languages",
    items: ["C#", "C++", "Python", "Java basic"],
  },
  {
    title: "Engines",
    items: ["Unity (URP / HDRP)", "Unreal (basics)", "Custom prototypes"],
  },
  {
    title: "Version Control",
    items: ["Git", "Perforce", "Git LFS", "Branching strategies"],
  },
  {
    title: "Optimization",
    items: ["Unity Profiler", "Memory profiling", "Allocation reduction", "Job system", "Burst-friendly code"],
  },
];
