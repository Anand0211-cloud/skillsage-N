const servicesData = {
  'web-app-dev': {
    title: 'Web App Development',
    description: 'We build highly interactive, scalable web applications using the latest JavaScript frameworks and cloud-native backends to handle heavy user traffic securely and efficiently.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
    icon: 'apps',
    features: ['Single Page Applications (SPAs)', 'Progressive Web Apps (PWAs)', 'Cloud-Native Architecture', 'Real-time Data Sync'],
    processSteps: [
      { title: 'Discovery & Architecture', desc: 'Mapping user journeys and technical requirements.' },
      { title: 'Frontend Engineering', desc: 'Crafting responsive, immediate UI experiences with React.' },
      { title: 'Backend Integration', desc: 'Connecting APIs, databases, and third-party services securely.' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS']
  },
  'software-development': {
    title: 'Custom Software Development',
    description: 'We engineer bespoke software solutions designed to solve specific enterprise challenges, focusing on performance, maintainability, and security.',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200',
    icon: 'terminal',
    features: ['Agile Development', 'Unit & Integration Testing', 'CI/CD Pipeline Integration', 'Long-term Maintenance'],
    processSteps: [
      { title: 'Needs Analysis', desc: 'Deep dive into your business logic and user requirements.' },
      { title: 'Full-Stack Engineering', desc: 'Building robust frontend and backend architectures.' },
      { title: 'QA & Testing', desc: 'Rigorous automated and manual testing to ensure total reliability.' },
    ],
    techStack: ['Python', 'Java', 'Docker', 'Kubernetes']
  },
  'erp-solutions': {
    title: 'Custom ERP Solutions',
    description: 'Unify your business logic, inventory, HR, and financials into one centralized system tailored specifically to your organization\'s unique operational flow.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200',
    icon: 'domain',
    features: ['Workflow Automation', 'Centralized Dashboarding', 'Role-based Access Control', 'Seamless API Integrations'],
    processSteps: [
      { title: 'Process Auditing', desc: 'We analyze your current operations to discover bottlenecks.' },
      { title: 'System Architecture', desc: 'Designing a modular ERP system that scales with your business.' },
      { title: 'Deployment & Training', desc: 'Rolling out the system and ensuring your team knows how to use it.' },
    ],
    techStack: ['Java', 'Spring Boot', 'Oracle', 'React']
  },
  'e-commerce': {
    title: 'E-commerce Architecture',
    description: 'We develop high-performance eCommerce platforms that maximize conversion rates through superior user experience, fast load times, and secure payment integrations.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
    icon: 'shopping_cart',
    features: ['Headless Commerce', 'Omnichannel Sales Integration', 'Secure Checkout Flows', 'Inventory Management'],
    processSteps: [
      { title: 'Store Strategy', desc: 'Planning catalog structure, categories, and user flow.' },
      { title: 'Platform Development', desc: 'Building custom storefronts integrated directly with your logistics.' },
      { title: 'Conversion Optimization', desc: 'A/B testing and refining the checkout pipeline.' },
    ],
    techStack: ['Next.js', 'Shopify Plus', 'Stripe', 'Redis']
  },
  'ai-integration': {
    title: 'AI Product Integration',
    description: 'Supercharge your existing tools by integrating powerful Machine Learning models and Artificial Intelligence APIs into your daily operations and customer-facing apps.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    icon: 'memory',
    features: ['LLM API Wrappers', 'Predictive Analysis', 'Algorithmic Optimization', 'Natural Language Querying'],
    processSteps: [
      { title: 'Capability Assessment', desc: 'Identifying areas where AI provides maximum ROI.' },
      { title: 'Model Selection', desc: 'Choosing between open-source models and proprietary APIs.' },
      { title: 'Implementation', desc: 'Seamlessly weaving AI capabilities into your current stack.' },
    ],
    techStack: ['Python', 'OpenAI API', 'HuggingFace', 'FastAPI']
  },
  'ai-agents': {
    title: 'Autonomous AI Agents',
    description: 'Deploy 24/7 intelligent agents that resolve support tickets, orchestrate sales outreach, or conduct complex research operations without human intervention.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    icon: 'smart_toy',
    features: ['Multi-agent Orchestration', 'Memory & Context Retention', 'Tool & API Usage', 'Self-Correction Protocols'],
    processSteps: [
      { title: 'Agent Persona Design', desc: 'Defining the role, tone, and operational boundaries of the agent.' },
      { title: 'Logic Frameworking', desc: 'Using orchestrators like LangChain to build multi-step reasoning capabilities.' },
      { title: 'Supervised Launch', desc: 'Testing the agent\'s edge cases in a secure sandbox before production.' },
    ],
    techStack: ['LangChain', 'Python', 'Pinecone', 'GPT-4']
  },
  'automation': {
    title: 'Workflow Automation',
    description: 'Eliminate manual data entry and repetitive tasks across your organization with sophisticated trigger-based automation logic.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200',
    icon: 'published_with_changes',
    features: ['Cross-platform Sync', 'Trigger Logic & Webhooks', 'Error Handling', 'Audit Logging'],
    processSteps: [
      { title: 'Workflow Mapping', desc: 'Tracing data as it moves through your sales and operations.' },
      { title: 'Scripting', desc: 'Building secure, specialized scripts to connect disparate software.' },
      { title: 'Monitoring', desc: 'Deploying observability tools to ensure automations never fail silently.' },
    ],
    techStack: ['Node.js', 'Zapier/Make', 'AWS Lambda', 'Webhooks']
  },
  'digital-marketing': {
    title: 'Strategic Digital Marketing',
    description: 'Comprehensive digital strategies bridging Paid Ads, SEO, and Content to capture your exact target audience and drive qualified pipelines.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    icon: 'campaign',
    features: ['Omnichannel Strategy', 'Marketing Automation', 'Performance Analytics', 'A/B Variant Testing'],
    processSteps: [
      { title: 'Market Research', desc: 'Analyzing competitors and pinpointing customer profiles.' },
      { title: 'Campaign Architecture', desc: 'Structuring funnels, landing pages, and lead-magnets.' },
      { title: 'Continuous Scaling', desc: 'Reinvesting profitable ad spend to capture greater market share.' },
    ],
    techStack: ['HubSpot', 'Google Analytics', 'Figma', 'Amplitude']
  },
  'seo-optimization': {
    title: 'SEO & Organic Growth',
    description: 'Dominate search rankings through technical audits, deeply researched content architecture, and authoritative link acquisition.',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=1200',
    icon: 'query_stats',
    features: ['Technical SEO Fixes', 'Keyword Gap Analysis', 'Content Clustering', 'Core Web Vitals Optimization'],
    processSteps: [
      { title: 'Technical Audit', desc: 'Fixing canonical errors, site speed, and structured data.' },
      { title: 'Content Outline', desc: 'Creating an editorial calendar aimed at high-intent commercial terms.' },
      { title: 'Authority Building', desc: 'Acquiring high-quality backlinks in industry tier-1 publications.' },
    ],
    techStack: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Next.js (for SSR)']
  },
  'meta-ads': {
    title: 'Social & Meta Ads',
    description: 'Laser-targeted advertising across Instagram, Facebook, and LinkedIn designed to intercept buyers and retarget high-intent visitors.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200',
    icon: 'ads_click',
    features: ['Lookalike Audiences', 'Dynamic Creative Optimization', 'Retargeting Pixels', 'Conversion API setup'],
    processSteps: [
      { title: 'Audience Sandbox', desc: 'Testing different core, custom, and lookalike audiences.' },
      { title: 'Creative Production', desc: 'Designing scroll-stopping static and video banner assets.' },
      { title: 'Bid Management', desc: 'Using advanced machine-learning bidding strategies to lower CPA.' },
    ],
    techStack: ['Meta Business Manager', 'LinkedIn Campaign Manager', 'CapCut', 'Figma']
  },
  'brand-visibility': {
    title: 'Brand Visibility & PR',
    description: 'Elevate your corporate profile and build deep industry trust through targeted digital PR, thought leadership, and digital footprint expansion.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
    icon: 'visibility',
    features: ['Media Placements', 'Press Release Distribution', 'Thought Leadership Planning', 'Reputation Management'],
    processSteps: [
      { title: 'Narrative Design', desc: 'Formulating your core brand story and key differentiator.' },
      { title: 'Media Outreach', desc: 'Pitching journalists, podcasters, and niche industry blogs.' },
      { title: 'Authority Sculpting', desc: 'Ensuring search results for your brand name reflect peak authority.' },
    ],
    techStack: ['MuckRack', 'PR Newswire', 'Brand24', 'Google Trends']
  },
  'full-branding': {
    title: 'Complete Corporate Branding',
    description: 'Design systems, tone of voice, visual identity, and brand positioning that transforms commodities into premium market necessities.',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    icon: 'brush',
    features: ['Logo Typography', 'Brand Guidelines', 'Component Libraries', 'Voice & Tone Playbooks'],
    processSteps: [
      { title: 'Brand Archetyping', desc: 'Discovering the personality your brand projects to the market.' },
      { title: 'Visual Concepting', desc: 'Iterating through color palettes, fonts, and logomarks.' },
      { title: 'Asset Rollout', desc: 'Packaging all assets into an accessible organizational portal.' },
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Frontify', 'Webflow']
  },
  'ad-campaigns': {
    title: 'Performance Ad Campaigns',
    description: 'End-to-end management of paid acquisition funnels, focusing strictly on verifiable ROI, tracking attribution perfectly across platforms.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    icon: 'trending_up',
    features: ['Multi-Touch Attribution', 'Media Mix Modeling', 'Programmatic Display', 'Video Advertising'],
    processSteps: [
      { title: 'Goal Frameworking', desc: 'Establishing Target CPA and Target ROAS metrics.' },
      { title: 'Cross-channel Deployment', desc: 'Launching synchronized ads across Google, Meta, and Display.' },
      { title: 'Attribution Tuning', desc: 'Refining data tracking to ensure accurate crediting of sales.' },
    ],
    techStack: ['Google Tag Manager', 'Google Ads', 'Triple Whale', 'Looker Studio']
  }
};

export default servicesData;
