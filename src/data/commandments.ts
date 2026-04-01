export interface ToolReference {
  name: string;
  color: string;
  description: string;
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface Commandment {
  number: number;
  romanNumeral: string;
  title: string;
  subtitle: string;
  iconName: string;
  level: 2 | 3 | 4;
  status: "complete" | "placeholder";
  tools: ToolReference[];
  sections: ContentSection[];
}

export const commandments: Commandment[] = [
  {
    number: 1,
    romanNumeral: "I",
    title: "Utilise Your Current Stack",
    subtitle: "Five categories. One tool wins each one.",
    iconName: "layers",
    level: 2,
    status: "complete",
    tools: [
      {
        name: "Perplexity",
        color: "#20B2AA",
        description: "Research",
      },
      {
        name: "Claude Sonnet 4.6",
        color: "#C9A84C",
        description: "Drafting",
      },
      {
        name: "Grok",
        color: "#1DA1F2",
        description: "Image & creative",
      },
      {
        name: "Make",
        color: "#9B59B6",
        description: "Automation",
      },
      {
        name: "Claude Code",
        color: "#E5C97E",
        description: "Value creation",
      },
      {
        name: "Lovable",
        color: "#FF6B6B",
        description: "Value creation",
      },
      {
        name: "OpenClaw",
        color: "#FF4500",
        description: "Agentic work (Anthropic)",
      },
    ],
    sections: [
      {
        heading: "The Platform Principle",
        body: "Not all AI platforms are equal. Each one has a superpower — a specific domain where it outperforms everything else. The professionals don't use one tool for everything. They map their tasks to the right platform and move between them fluidly. Here are the five categories you need to own.",
      },
      {
        heading: "Research → Perplexity",
        body: "For research: always Perplexity. Use Sonar Pro with Deep Research mode switched on. Think brand reports, competitive analysis, deep research, fact-finding. It searches the web in real-time and synthesises findings rather than hallucinating answers. This is your intelligence engine.",
      },
      {
        heading: "Drafting → Claude Sonnet 4.6",
        body: "Claude Sonnet 4.6 is by far the most natural language model available. It writes like a human, reasons clearly, and handles everything from drafting emails to analysing documents. For any written output — copy, strategy, replies, reports — default to Claude.",
      },
      {
        heading: "Image → Grok",
        body: "For image generation, Grok is preferred. It has significantly less regulatory restriction on the content it can produce — giving you more creative freedom, bolder visuals, and fewer refusals compared to other platforms. When other models say no, Grok says yes.",
      },
      {
        heading: "Automation → Make",
        body: "Make (formerly Integromat) is preferred over Zapier for automation. Fewer tokens consumed, a cleaner interface, and more powerful multi-step branching logic. Build your workflows in Make. Use Zapier only for the simplest direct app-to-app connections.",
      },
      {
        heading: "Value Creation → Claude Code · Lovable · OpenClaw",
        body: "This is where AI becomes a builder, not just a talker. Claude Code lets you ship real software in a single session. Lovable builds full web apps from a description. OpenClaw — Anthropic's agentic product — is the next frontier: AI that works autonomously across your tools. Anthropic is leading this category and it is where the biggest leverage lives.",
      },
    ],
  },
  {
    number: 2,
    romanNumeral: "II",
    title: "Choose the Right Model",
    subtitle: "Model selection changes everything",
    iconName: "cpu",
    level: 2,
    status: "complete",
    tools: [
      {
        name: "Opus 4.6",
        color: "#C9A84C",
        description: "Long & technical tasks",
      },
      {
        name: "Sonnet 4.6",
        color: "#E5C97E",
        description: "Everyday tasks",
      },
      {
        name: "Haiku 4.5",
        color: "#A89F8C",
        description: "Quick responses",
      },
      {
        name: "Gemini 2.5 Pro",
        color: "#4285F4",
        description: "Deep reasoning tasks",
      },
    ],
    sections: [
      {
        heading: "Why Models Matter",
        body: "Every LLM has a selection of models to use. The way you use that model is super important for the output. The output will change per model and the cost will fluctuate. You need to think about the output before you ask the question — this will determine the role. The decision framework is simple: define the output first, then pick the model.",
      },
      {
        heading: "Quick Response → Haiku 4.5  ·  $",
        body: "Brief, sharp, fast. Lowest cost. Use for simple questions, quick lookups, snappy replies, and anything where speed matters more than depth. Example prompt: 'What does API stand for?' Don't reach for a sledgehammer when a tap will do.",
      },
      {
        heading: "Everyday Task → Sonnet 4.6 · Gemini 2.5 · GPT-4o  ·  $$",
        body: "Draft, reply, brainstorm. Balanced cost and quality. This is your daily workhorse for the vast majority of tasks — emails, copy, summaries, ideation, research synthesis. Claude Sonnet 4.6 leads this tier. Example prompt: 'Draft my follow-up email to the client.'",
      },
      {
        heading: "Long / Technical → Opus 4.6 · o3  ·  $$$",
        body: "Code, build, analyse. Highest quality, highest cost. Use for complex multi-step reasoning, strategy documents, code architecture, deep technical analysis, or anything where getting it exactly right matters. Example prompt: 'Build the full dashboard with data connected.' Think output first — then pick the model.",
      },
      {
        heading: "The Decision Rule",
        body: "Cost and power scale with complexity. Start by asking: what do I actually need from this? Quick and simple → Haiku. Everyday work → Sonnet. Deep and technical → Opus or o3. This single habit — thinking before prompting — will save you money and dramatically improve your outputs.",
      },
    ],
  },
  {
    number: 3,
    romanNumeral: "III",
    title: "How You Prompt Matters",
    subtitle: "Don't type. Speak. Guide. Steer.",
    iconName: "mic",
    level: 2,
    status: "complete",
    tools: [
      {
        name: "Flow",
        color: "#C084FC",
        description: "Voice-to-text dictation for prompting",
      },
    ],
    sections: [
      {
        heading: "Move Away From This",
        body: "Most people open a new session every time, type out a short vague prompt, and wonder why the output is average. 'Claude, automate my job. Make no mistakes.' That's not a prompt — that's a wish. The way you communicate with AI is the single biggest lever on the quality of what you get back.",
      },
      {
        heading: "The Context Window Opportunity",
        body: "Context windows are getting bigger. LLMs can now understand more about the conversation and process vastly more information in a single session. Most of us are barely using 1% of that capacity — typing short, thoughtless prompts in a new session every time.",
      },
      {
        heading: "Stop Typing. Start Speaking.",
        body: "Everyone should be using dictation to speak and prompt. Naturally, we miss out 20–30% of context when typing versus speaking. Your voice carries nuance, tone, and detail your fingers simply don't. The tool: use Flow — a voice-to-text AI that turns speech into clear, polished writing in every app. Available on Mac, Windows, iPhone and Android. Don't type, just speak.",
      },
      {
        heading: "Give a Goal, Not Just a Task",
        body: "You have to give a goal and steer it forward. Don't just describe the task — describe the outcome. Who is this for? What does success look like? What should it avoid? Direction is everything. Steering produces results; typing one-liners produces mediocrity.",
      },
      {
        heading: "The Prompt Formula",
        body: "Role → Task → Context → Format → Constraints. Give the AI a role ('You are a senior sports marketing strategist'), define the task clearly, provide context, specify format (bullet points, email, 200 words), and state constraints (no jargon, formal tone). Speak this out loud rather than typing it. This structure alone will transform your outputs.",
      },
    ],
  },
  {
    number: 4,
    romanNumeral: "IV",
    title: "Give Your AI a Soul",
    subtitle: "Name it. Shape it. Own it.",
    iconName: "sparkles",
    level: 3,
    status: "complete",
    tools: [],
    sections: [
      {
        heading: "Beyond Default Settings",
        body: "Every major AI model has areas of customisation where you can permanently tailor how it thinks, responds, and prioritises. Don't use defaults — define your AI's identity before you use it. This is the difference between a generic assistant and a tool that works the way you think.",
      },
      {
        heading: "Give It a Name and Identity",
        body: "Give your AI assistant a name. Define its personality, its expertise, its tone of voice. Tell it what it cares about and how it behaves under pressure. The more specific you are, the more it becomes an extension of your thinking rather than a generic language model.",
      },
      {
        heading: "Use .md System Prompts",
        body: "Write a persistent system prompt — a CLAUDE.md file, a custom instructions block, or equivalent — that defines everything about how your AI should behave across every conversation. This becomes its personality, its memory of your preferences, and its operating manual.",
      },
      {
        heading: "What to Include",
        body: "Your role. Your industry. Your tone of voice. Your writing style. What you never want it to say. How you want information formatted. What you care about most. The more you put in, the more you get back. Think of it as writing the perfect job description for your most important hire.",
      },
      {
        heading: "The Result",
        body: "An AI with a soul responds differently. It stays in character. It mirrors your communication style. It produces outputs that sound like someone you'd actually want to work with — not a generic machine trying to please everyone at once.",
      },
    ],
  },
  {
    number: 5,
    romanNumeral: "V",
    title: "Plan Before You Send",
    subtitle: "Think first. Then send.",
    iconName: "map",
    level: 3,
    status: "complete",
    tools: [],
    sections: [
      {
        heading: "The ADHD Problem",
        body: "AI is like the smartest person in the room — but with excessive ADHD and extraordinary intelligence. Without clear direction, it goes off on its own plan, fills in the blanks with assumptions, and delivers something that's technically impressive but not quite what you needed.",
      },
      {
        heading: "Complex Tasks Need Plans",
        body: "Expanding into complex tasks — strategy documents, multi-step campaigns, detailed analyses — always requires more thought upfront. Don't one-shot important work. Write out what you want to achieve before you start prompting.",
      },
      {
        heading: "The One-Shot Trap",
        body: "Pressing go without context means the AI interprets your intent, invents the missing details, and delivers about 80% of what you wanted. The other 20% — the most important part — is based on assumptions you'd never have made. That 20% will cost you an hour of corrections.",
      },
      {
        heading: "The Planning Habit",
        body: "Before any major AI task: write a brief plan. What's the goal? What format should the output take? What should it absolutely not do? Who is it for? What does success look like? Five minutes of planning consistently saves thirty minutes of iteration.",
      },
      {
        heading: "Iterative Beats One-Shot",
        body: "For complex tasks, build in stages. Let the AI complete step one, review it, then move to step two. Guide it forward at each stage rather than asking for everything at once. This mirrors how a skilled professional actually works — step by step, not all at once.",
      },
    ],
  },
  {
    number: 6,
    romanNumeral: "VI",
    title: "Create Project Masters",
    subtitle: "Build hyper-focused AI workspaces for every client",
    iconName: "folder-open",
    level: 3,
    status: "complete",
    tools: [
      {
        name: "Claude Projects",
        color: "#C9A84C",
        description: "Persistent client contexts",
      },
      {
        name: "CustomGPTs",
        color: "#10A37F",
        description: "OpenAI trained assistants",
      },
      {
        name: "Gems",
        color: "#4285F4",
        description: "Google Gemini workspaces",
      },
      {
        name: "Spaces",
        color: "#20B2AA",
        description: "Perplexity knowledge hubs",
      },
    ],
    sections: [
      {
        heading: "From CustomGPTs to Projects",
        body: "It started with CustomGPTs — private file systems that upload everything you know about a client, a brand, or a topic, training the LLM to be hyper-focused on that one area. That concept has now expanded across every major platform.",
      },
      {
        heading: "Projects Across Every Platform",
        body: "Claude Projects, Gemini Gems, GPT CustomGPTs, Perplexity Spaces. Each platform has its own version of the same idea: a persistent, private workspace where AI knows exactly who it's working for. Use them for every key client and project area — don't work from a blank slate every time.",
      },
      {
        heading: "What to Upload",
        body: "Brand guidelines. Past work examples. Tone-of-voice documents. Strategy decks. Meeting notes. Key contacts and their preferences. The more it knows about the context, the better every single output becomes. Treat it like onboarding a new team member — give them everything.",
      },
      {
        heading: "One Project Per Client",
        body: "Create a dedicated project master for every major client or area of work. Name it. Give it a custom identity (see Commandment IV). Upload all relevant context. This becomes your AI coworker who knows everything about that client — and never forgets, never needs re-briefing.",
      },
      {
        heading: "The Compound Effect",
        body: "The longer you maintain a well-built project, the more powerful it becomes. Every conversation adds context. Every corrected output teaches it your preferences. Over weeks and months, your project masters become extraordinarily accurate — a genuine competitive advantage.",
      },
    ],
  },
  {
    number: 7,
    romanNumeral: "VII",
    title: "Agents & Cowork",
    subtitle: "Your AI coworkers are ready. Deploy them.",
    iconName: "users",
    level: 3,
    status: "complete",
    tools: [
      {
        name: "Claude Cowork",
        color: "#C9A84C",
        description: "Multi-agent AI workplace",
      },
      {
        name: "OpenAI Assistants",
        color: "#10A37F",
        description: "Configured AI agents",
      },
    ],
    sections: [
      {
        heading: "The Next Frontier",
        body: "Anthropic is leading the way for innovation across AI. Their Cowork product — codenamed OpenClaw internally — is their most ambitious bet. Multi-agent collaboration. AI coworkers who operate in parallel, each with a defined role, each executing tasks simultaneously.",
      },
      {
        heading: "What is Cowork?",
        body: "Claude Cowork is a multi-agent environment where multiple AI agents work together like a team of specialists. One researches. One writes. One reviews. One edits. They collaborate on tasks the way a high-performing team would — except they work at machine speed.",
      },
      {
        heading: "Agents vs. Chat",
        body: "A chat model answers questions. An agent executes tasks. It has tools — the ability to search, browse, write files, call APIs, trigger automations. When you move from chatting with AI to deploying agents, you move from asking for help to delegating work entirely.",
      },
      {
        heading: "Skills and Specialisations",
        body: "Every agent can be given a defined skill set. A research agent. A copywriting agent. A data analysis agent. A client communications agent. Build a team of specialised AI coworkers, each with their own identity (Commandment IV) and their own project context (Commandment VI).",
      },
      {
        heading: "Start Here",
        body: "If there is one thing to take from this entire guide: download Claude. Start using Cowork. This is the product that will define the next era of knowledge work. The people who are using it now are building an advantage that will compound for years.",
      },
    ],
  },
  {
    number: 8,
    romanNumeral: "VIII",
    title: "Controlled Automation",
    subtitle: "This is where the magic happens",
    iconName: "zap",
    level: 3,
    status: "complete",
    tools: [
      {
        name: "Make",
        color: "#9B59B6",
        description: "Complex workflow automation",
      },
      {
        name: "Zapier",
        color: "#FF4A00",
        description: "Simple app integrations",
      },
    ],
    sections: [
      {
        heading: "This Is Where the Magic Happens",
        body: "Controlled automation is AI-triggered workflows that run without you — structured, reliable, and repeatable. Not just chatting with AI. Not just generating content. Building systems that work while you sleep.",
      },
      {
        heading: "Make vs Zapier",
        body: "Make is preferred over Zapier — fewer tokens, cleaner interface, and more powerful multi-step logic with better error handling. Use Make for complex, multi-branch automations. Zapier for simpler, direct app-to-app integrations where speed of setup matters most.",
      },
      {
        heading: "What to Automate First",
        body: "Start with what wastes the most of your time. Repetitive reporting. Follow-up emails. Data entry between systems. Content distribution across channels. Meeting notes to action items. Social monitoring to inbox. If you do it repeatedly, automate it.",
      },
      {
        heading: "AI in the Loop",
        body: "The real power comes when you put AI inside your automation. Not just moving data — but having an AI transform, summarise, classify, or generate content as part of the workflow. A Make scenario that pulls data, runs it through Claude, and delivers a polished briefing to your inbox every morning.",
      },
      {
        heading: "Level 3 Thinking",
        body: "This is Level 3 behaviour: using multiple platforms, knowing exactly what tool to use for each task, automating the repetitive, driving efficiency, and always asking: 'What else can I automate?' When this becomes your default mindset, you are genuinely ahead.",
      },
    ],
  },
  {
    number: 9,
    romanNumeral: "IX",
    title: "Build Without Code",
    subtitle: "Ideas into products — no developer required",
    iconName: "wand-2",
    level: 4,
    status: "placeholder",
    tools: [
      {
        name: "Lovable",
        color: "#FF6B6B",
        description: "AI-powered app builder",
      },
      {
        name: "Bolt",
        color: "#6C63FF",
        description: "Full-stack AI builder",
      },
      {
        name: "v0",
        color: "#000000",
        description: "UI component generation",
      },
    ],
    sections: [
      {
        heading: "Coming Soon",
        body: "This commandment is being written. Content and detail will be added shortly. The focus: how to build real products, tools, and internal apps using AI-powered builders — without writing a single line of code.",
      },
    ],
  },
  {
    number: 10,
    romanNumeral: "X",
    title: "Build With Code",
    subtitle: "Level 4: where ideas become reality",
    iconName: "code-2",
    level: 4,
    status: "placeholder",
    tools: [
      {
        name: "Claude Code",
        color: "#C9A84C",
        description: "AI-powered CLI coding",
      },
      {
        name: "Cursor",
        color: "#4FC3F7",
        description: "AI-powered IDE",
      },
    ],
    sections: [
      {
        heading: "Coming Soon",
        body: "This commandment is being written. Content and detail will be added shortly. The focus: Claude Code, Cursor, and the tools that let anyone — regardless of coding background — build and ship real software using AI as their engineering partner.",
      },
    ],
  },
];

export const levels = [
  {
    level: 1,
    title: "Basic Explorer",
    description:
      "Uses AI briefly, questions its output, one platform for everything, short prompts, minimal results.",
  },
  {
    level: 2,
    title: "Curious Builder",
    description:
      "Multiple platforms, more detailed prompts, tries new services, uses different models, wants to explore more.",
  },
  {
    level: 3,
    title: "Efficiency Driver",
    description:
      "Multiple platforms mastered, knows which tool to use when, automating tasks, driving efficiency, always thinking of more to automate.",
  },
  {
    level: 4,
    title: "Creator",
    description:
      "Builds ideas through code, experiments with automation, creates products from scratch using AI as a development partner.",
  },
];
