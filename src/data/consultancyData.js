const consultancyData = {
  'ai-in-enterprises': {
    title: 'AI in Enterprises',
    tagline: 'Intelligence at Scale',
    heroDescription: 'We embed intelligent automation, predictive analytics, and generative AI across your enterprise stack — from NLP-powered workflows to computer vision pipelines. Our architects design AI systems that deliver measurable ROI from day one.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    icon: 'psychology',
    color: 'brand-electric',
    stats: [
      { value: '3x', label: 'Avg. Efficiency Gain' },
      { value: '87%', label: 'Automation Rate' },
      { value: '$4.2M', label: 'Avg. Cost Savings' }
    ],
    features: [
      { title: 'Predictive Analytics', desc: 'Forecast demand, churn, and revenue with ML models trained on your historical data.', icon: 'trending_up' },
      { title: 'NLP & Document AI', desc: 'Automate contract review, support tickets, and content classification at scale.', icon: 'description' },
      { title: 'Computer Vision', desc: 'Quality inspection, inventory counting, and security monitoring through visual AI.', icon: 'visibility' },
      { title: 'Generative AI Integration', desc: 'Deploy GPT-powered assistants, content generators, and code copilots securely.', icon: 'auto_awesome' },
      { title: 'MLOps & Model Governance', desc: 'End-to-end pipelines for training, versioning, monitoring, and retraining models.', icon: 'model_training' },
      { title: 'AI Ethics & Compliance', desc: 'Bias auditing, explainability frameworks, and regulatory compliance for responsible AI.', icon: 'policy' }
    ],
    processSteps: [
      { title: 'AI Readiness Audit', desc: 'Assess your data maturity, infrastructure, and organizational readiness for AI adoption.' },
      { title: 'Use Case Prioritization', desc: 'Identify and rank high-impact AI opportunities by ROI potential and feasibility.' },
      { title: 'Proof of Concept', desc: 'Build rapid prototypes to validate model accuracy and business value before scaling.' },
      { title: 'Production Deployment', desc: 'Scale validated models with monitoring, A/B testing, and continuous improvement loops.' }
    ],
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'HuggingFace', 'AWS SageMaker', 'MLflow', 'LangChain'],
    useCases: [
      'Intelligent customer support chatbots with context memory',
      'Automated invoice processing and data extraction',
      'Predictive maintenance for manufacturing equipment',
      'Personalized product recommendations at scale',
      'Fraud detection and anomaly monitoring systems'
    ]
  },

  'cloud-management': {
    title: 'Cloud Management',
    tagline: 'Multi-Cloud Mastery',
    heroDescription: 'End-to-end multi-cloud orchestration across AWS, Azure, and GCP. We optimize workloads, automate provisioning, enforce governance, and ensure 99.99% uptime while reducing your cloud spend by up to 40%.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    icon: 'cloud_sync',
    color: 'brand-accent',
    stats: [
      { value: '40%', label: 'Cost Reduction' },
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '200+', label: 'Migrations Done' }
    ],
    features: [
      { title: 'Cloud Migration', desc: 'Seamless lift-and-shift, re-platform, or cloud-native re-architecture strategies.', icon: 'cloud_upload' },
      { title: 'Cost Optimization', desc: 'Right-sizing instances, reserved capacity planning, and spot instance orchestration.', icon: 'savings' },
      { title: 'Multi-Cloud Strategy', desc: 'Avoid vendor lock-in with portable architectures across AWS, Azure, and GCP.', icon: 'cloud_circle' },
      { title: 'Serverless Architecture', desc: 'Event-driven compute with Lambda, Cloud Functions, and Azure Functions.', icon: 'bolt' },
      { title: 'Container Orchestration', desc: 'Kubernetes cluster management, Helm charts, and service mesh configuration.', icon: 'widgets' },
      { title: 'Cloud Security Posture', desc: 'CSPM tools, IAM policy auditing, and network segmentation enforcement.', icon: 'shield' }
    ],
    processSteps: [
      { title: 'Cloud Assessment', desc: 'Evaluate current infrastructure, dependencies, and migration readiness factors.' },
      { title: 'Architecture Design', desc: 'Blueprint a scalable, secure, and cost-efficient cloud architecture.' },
      { title: 'Migration Execution', desc: 'Zero-downtime migration with rollback capabilities and data validation.' },
      { title: 'Managed Operations', desc: '24/7 monitoring, patching, scaling, and incident response management.' }
    ],
    techStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'CloudFormation', 'Datadog'],
    useCases: [
      'Legacy datacenter to cloud migration for financial services',
      'Multi-region disaster recovery and failover setup',
      'Auto-scaling infrastructure for e-commerce peak traffic',
      'Hybrid cloud architecture for regulated industries',
      'FinOps implementation for cloud cost transparency'
    ]
  },

  'infrastructure-consulting': {
    title: 'Infrastructure Consulting',
    tagline: 'Resilient Foundations',
    heroDescription: 'Design, deploy, and manage resilient IT infrastructure — from zero-trust networks and hybrid-cloud environments to edge computing and disaster recovery frameworks. We build the foundation that never fails.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    icon: 'dns',
    color: 'brand-highlight',
    stats: [
      { value: '99.99%', label: 'Uptime Delivered' },
      { value: '500+', label: 'Systems Deployed' },
      { value: '0', label: 'Critical Breaches' }
    ],
    features: [
      { title: 'Network Architecture', desc: 'Enterprise-grade LAN/WAN design, SD-WAN, and global load balancing.', icon: 'hub' },
      { title: 'Zero-Trust Security', desc: 'Identity-centric access control, micro-segmentation, and continuous verification.', icon: 'security' },
      { title: 'Disaster Recovery', desc: 'RPO/RTO-aligned backup strategies with automated failover and geo-redundancy.', icon: 'restore' },
      { title: 'Edge Computing', desc: 'Deploy low-latency processing nodes closer to your users and IoT devices.', icon: 'cell_tower' },
      { title: 'Virtualization', desc: 'VMware, Hyper-V, and KVM environments optimized for performance and density.', icon: 'developer_board' },
      { title: 'Capacity Planning', desc: 'Predictive modeling for compute, storage, and bandwidth growth requirements.', icon: 'data_usage' }
    ],
    processSteps: [
      { title: 'Infrastructure Audit', desc: 'Comprehensive assessment of existing hardware, networks, and security postures.' },
      { title: 'Design & Blueprint', desc: 'Create detailed architecture diagrams with redundancy and growth planning.' },
      { title: 'Build & Deploy', desc: 'Implement infrastructure with automated configuration management and IaC.' },
      { title: 'Monitor & Optimize', desc: 'Proactive monitoring dashboards, alerting, and continuous performance tuning.' }
    ],
    techStack: ['VMware', 'Cisco', 'Palo Alto', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Splunk'],
    useCases: [
      'Data center consolidation for a healthcare enterprise',
      'Zero-trust network migration for a global bank',
      'Edge computing deployment for retail IoT sensors',
      'DR/BC planning for mission-critical government systems',
      'SD-WAN rollout across 200+ branch offices'
    ]
  },

  'enterprise-resource-planning': {
    title: 'Enterprise Resource Planning',
    tagline: 'Unified Operations',
    heroDescription: 'Strategic ERP implementation and migration — SAP, Oracle, Microsoft Dynamics. We streamline operations, unify data silos, and accelerate digital transformation at scale, delivering 60% faster processing across your business.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    icon: 'account_tree',
    color: 'purple-400',
    stats: [
      { value: '60%', label: 'Process Optimization' },
      { value: '45+', label: 'ERP Deployments' },
      { value: '99.5%', label: 'Data Accuracy' }
    ],
    features: [
      { title: 'ERP Selection & Strategy', desc: 'Vendor-agnostic evaluation of SAP, Oracle, Dynamics, and cloud-native ERPs.', icon: 'compare' },
      { title: 'Data Migration', desc: 'Secure, validated transfer of historical data with integrity checks and reconciliation.', icon: 'swap_horiz' },
      { title: 'Custom Module Development', desc: 'Build industry-specific modules and workflows tailored to your operations.', icon: 'extension' },
      { title: 'Integration Hub', desc: 'Connect ERP with CRM, HCM, SCM, and third-party APIs through middleware.', icon: 'settings_input_component' },
      { title: 'Change Management', desc: 'Structured training programs, documentation, and adoption tracking for teams.', icon: 'groups' },
      { title: 'Post-Go-Live Support', desc: 'Hypercare support, bug fixes, performance tuning, and iterative enhancements.', icon: 'support_agent' }
    ],
    processSteps: [
      { title: 'Business Process Mapping', desc: 'Document every workflow, approval chain, and data dependency across departments.' },
      { title: 'System Configuration', desc: 'Configure ERP modules, roles, dashboards, and reporting structures.' },
      { title: 'Parallel Testing', desc: 'Run old and new systems simultaneously to validate data and process accuracy.' },
      { title: 'Go-Live & Hypercare', desc: 'Cutover to production with dedicated support teams for rapid issue resolution.' }
    ],
    techStack: ['SAP S/4HANA', 'Oracle ERP Cloud', 'Microsoft Dynamics 365', 'MuleSoft', 'Power BI', 'ABAP', 'Fiori', 'Azure'],
    useCases: [
      'SAP S/4HANA migration for a manufacturing conglomerate',
      'Dynamics 365 implementation for multi-location retail',
      'Custom ERP for a logistics company with 1000+ daily orders',
      'Oracle Cloud ERP for higher education financial management',
      'ERP-CRM integration for a B2B SaaS enterprise'
    ]
  },

  'ai-strategic-planning': {
    title: 'AI-Driven Strategic Planning',
    tagline: 'Plan Smarter. Execute Faster.',
    heroDescription: 'Leverage machine learning models and predictive intelligence for data-driven corporate strategy. From market forecasting to resource allocation — we replace gut-feel decisions with algorithmic precision.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    icon: 'smart_toy',
    color: 'emerald-400',
    stats: [
      { value: '85%', label: 'Forecast Accuracy' },
      { value: '2.5x', label: 'Planning Speed' },
      { value: '30%', label: 'Better Allocation' }
    ],
    features: [
      { title: 'Market Intelligence', desc: 'AI-powered competitor analysis, trend detection, and market sizing models.', icon: 'monitoring' },
      { title: 'Demand Forecasting', desc: 'Time-series and ensemble models for accurate demand and revenue prediction.', icon: 'show_chart' },
      { title: 'Resource Optimization', desc: 'Algorithmic workforce planning, budget allocation, and capacity modeling.', icon: 'tune' },
      { title: 'Scenario Simulation', desc: 'Monte Carlo simulations and what-if analysis for strategic decision support.', icon: 'science' },
      { title: 'KPI Dashboards', desc: 'Real-time executive dashboards with AI-generated insights and anomaly alerts.', icon: 'dashboard' },
      { title: 'Strategic Roadmapping', desc: 'AI-assisted prioritization frameworks for product and technology roadmaps.', icon: 'map' }
    ],
    processSteps: [
      { title: 'Strategic Discovery', desc: 'Understand your business model, competitive landscape, and decision-making gaps.' },
      { title: 'Data Foundation', desc: 'Connect, clean, and enrich data sources required for predictive modeling.' },
      { title: 'Model Development', desc: 'Build and validate forecasting, optimization, and recommendation models.' },
      { title: 'Decision Integration', desc: 'Embed AI insights into executive workflows, board reporting, and planning cycles.' }
    ],
    techStack: ['Python', 'R', 'Tableau', 'Power BI', 'Snowflake', 'dbt', 'Apache Spark', 'Jupyter'],
    useCases: [
      'Revenue forecasting for a SaaS company with 50K+ customers',
      'Workforce planning optimization for a consulting firm',
      'Supply chain demand prediction for seasonal retail',
      'Investment portfolio risk modeling for a wealth manager',
      'Market entry analysis for a tech startup expanding to APAC'
    ]
  },

  'cybersecurity-advisory': {
    title: 'Cybersecurity Advisory',
    tagline: 'Fortify Your Perimeter',
    heroDescription: 'Comprehensive threat assessments, penetration testing, and zero-trust architecture design to fortify your digital perimeter. We protect what matters most — your data, reputation, and business continuity.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    icon: 'shield_lock',
    color: 'red-400',
    stats: [
      { value: '0', label: 'Breaches on Watch' },
      { value: '24/7', label: 'Threat Monitoring' },
      { value: '150+', label: 'Audits Completed' }
    ],
    features: [
      { title: 'Penetration Testing', desc: 'Red team exercises, vulnerability scanning, and exploit validation across your stack.', icon: 'bug_report' },
      { title: 'Zero-Trust Architecture', desc: 'Design and implement identity-centric security with continuous verification.', icon: 'verified_user' },
      { title: 'Incident Response', desc: 'Rapid containment, forensic analysis, and recovery protocols for security events.', icon: 'emergency' },
      { title: 'SOC-as-a-Service', desc: 'Managed Security Operations Center with 24/7 threat detection and alerting.', icon: 'monitor_heart' },
      { title: 'Compliance Readiness', desc: 'SOC 2, ISO 27001, HIPAA, and PCI-DSS audit preparation and gap analysis.', icon: 'fact_check' },
      { title: 'Security Training', desc: 'Organization-wide phishing simulations and security awareness programs.', icon: 'school' }
    ],
    processSteps: [
      { title: 'Threat Assessment', desc: 'Identify attack surfaces, vulnerabilities, and threat vectors across your organization.' },
      { title: 'Security Blueprint', desc: 'Design a layered defense strategy with zero-trust principles and defense-in-depth.' },
      { title: 'Implementation', desc: 'Deploy security controls, SIEM/SOAR platforms, and endpoint protection.' },
      { title: 'Continuous Defense', desc: 'Ongoing threat hunting, vulnerability management, and incident response readiness.' }
    ],
    techStack: ['CrowdStrike', 'Splunk', 'Palo Alto', 'Okta', 'Snyk', 'Burp Suite', 'Nessus', 'MITRE ATT&CK'],
    useCases: [
      'Enterprise-wide zero-trust migration for a financial services firm',
      'PCI-DSS compliance program for an e-commerce platform',
      'Incident response retainer for a healthcare organization',
      'Red team assessment for a government contractor',
      'Cloud security posture review for a SaaS startup'
    ]
  },

  'data-analytics-bi': {
    title: 'Data Analytics & BI',
    tagline: 'Insights That Drive Action',
    heroDescription: 'Transform raw data into strategic insights with custom dashboards, ETL pipelines, and real-time business intelligence platforms. We make your data work as hard as your team.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    icon: 'bar_chart',
    color: 'violet-400',
    stats: [
      { value: '10x', label: 'Faster Reports' },
      { value: '95%', label: 'Data Accuracy' },
      { value: '200+', label: 'Dashboards Built' }
    ],
    features: [
      { title: 'Data Warehousing', desc: 'Centralized, optimized data stores using Snowflake, BigQuery, or Redshift.', icon: 'warehouse' },
      { title: 'ETL/ELT Pipelines', desc: 'Automated data ingestion, transformation, and loading with dbt, Airflow, or Fivetran.', icon: 'sync_alt' },
      { title: 'Executive Dashboards', desc: 'Interactive Tableau, Power BI, or Looker dashboards for real-time decision making.', icon: 'dashboard' },
      { title: 'Self-Service Analytics', desc: 'Empower business users with governed, self-service data access and exploration.', icon: 'person_search' },
      { title: 'Data Quality', desc: 'Automated profiling, validation, and monitoring to ensure trustworthy data.', icon: 'verified' },
      { title: 'Advanced Analytics', desc: 'Cohort analysis, attribution modeling, and customer lifetime value calculations.', icon: 'analytics' }
    ],
    processSteps: [
      { title: 'Data Audit', desc: 'Inventory existing data sources, assess quality, and identify gaps in coverage.' },
      { title: 'Architecture Design', desc: 'Design a modern data stack with proper governance, lineage, and access controls.' },
      { title: 'Pipeline Development', desc: 'Build automated, tested, and monitored data pipelines for reliable delivery.' },
      { title: 'Insight Delivery', desc: 'Deploy dashboards, set up alerts, and train teams on data-driven decision making.' }
    ],
    techStack: ['Snowflake', 'dbt', 'Tableau', 'Power BI', 'Apache Airflow', 'Fivetran', 'Looker', 'BigQuery'],
    useCases: [
      'Enterprise data warehouse consolidation for a retail chain',
      'Real-time sales dashboard for a D2C e-commerce brand',
      'Customer 360 analytics platform for a telecom provider',
      'Financial reporting automation for a PE portfolio company',
      'Marketing attribution modeling for a digital agency'
    ]
  },

  'digital-transformation': {
    title: 'Digital Transformation',
    tagline: 'Modernize. Digitize. Dominate.',
    heroDescription: 'Modernize legacy systems, digitize workflows, and build a culture of innovation with our end-to-end transformation roadmaps. We don\'t just upgrade technology — we rewire how your organization operates.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    icon: 'change_circle',
    color: 'brand-accent',
    stats: [
      { value: '70%', label: 'Process Digitized' },
      { value: '45%', label: 'Efficiency Gains' },
      { value: '100+', label: 'Transformations' }
    ],
    features: [
      { title: 'Legacy Modernization', desc: 'Migrate monolithic applications to microservices, APIs, and cloud-native platforms.', icon: 'upgrade' },
      { title: 'Process Automation', desc: 'RPA, workflow engines, and intelligent automation for repetitive business processes.', icon: 'precision_manufacturing' },
      { title: 'Digital Workplace', desc: 'Collaboration tools, knowledge management, and productivity platform implementation.', icon: 'devices' },
      { title: 'Customer Experience', desc: 'Omnichannel digital journeys, self-service portals, and personalization engines.', icon: 'sentiment_satisfied' },
      { title: 'API Economy', desc: 'API-first architecture, developer portals, and monetization strategies.', icon: 'api' },
      { title: 'Innovation Lab', desc: 'Rapid prototyping, design thinking workshops, and MVP development sprints.', icon: 'lightbulb' }
    ],
    processSteps: [
      { title: 'Maturity Assessment', desc: 'Evaluate digital maturity across technology, processes, people, and culture.' },
      { title: 'Transformation Roadmap', desc: 'Prioritized, phased plan with quick wins and long-term strategic initiatives.' },
      { title: 'Agile Delivery', desc: 'Iterative implementation with cross-functional teams and continuous stakeholder feedback.' },
      { title: 'Adoption & Scale', desc: 'Change management, training, and measurement frameworks to ensure lasting impact.' }
    ],
    techStack: ['React', 'Node.js', 'Kubernetes', 'Salesforce', 'ServiceNow', 'UiPath', 'Jira', 'Confluence'],
    useCases: [
      'Full digital transformation for a 50-year-old manufacturing company',
      'Customer portal modernization for an insurance provider',
      'Paperless operations for a government agency',
      'API-first re-architecture for a banking core system',
      'Digital workplace rollout for a 10,000+ employee organization'
    ]
  },

  'devops-cicd': {
    title: 'DevOps & CI/CD',
    tagline: 'Ship Faster. Break Nothing.',
    heroDescription: 'Accelerate delivery with automated pipelines, containerized deployments, and infrastructure-as-code best practices. We transform your engineering culture from release anxiety to deployment confidence.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200',
    icon: 'hub',
    color: 'cyan-400',
    stats: [
      { value: '50x', label: 'Deploy Frequency' },
      { value: '96%', label: 'Change Success' },
      { value: '<1hr', label: 'Recovery Time' }
    ],
    features: [
      { title: 'CI/CD Pipelines', desc: 'GitHub Actions, GitLab CI, Jenkins, or Azure DevOps pipelines with quality gates.', icon: 'route' },
      { title: 'Infrastructure as Code', desc: 'Terraform, Pulumi, and CloudFormation for repeatable, version-controlled infrastructure.', icon: 'code' },
      { title: 'Container Platform', desc: 'Docker image optimization, Kubernetes deployments, and Helm chart management.', icon: 'inventory_2' },
      { title: 'GitOps Workflows', desc: 'ArgoCD and Flux-based declarative deployments with automatic drift detection.', icon: 'commit' },
      { title: 'Observability Stack', desc: 'Metrics, logs, and traces with Prometheus, Grafana, Jaeger, and OpenTelemetry.', icon: 'monitoring' },
      { title: 'Platform Engineering', desc: 'Internal developer platforms with self-service environments and golden paths.', icon: 'developer_mode' }
    ],
    processSteps: [
      { title: 'DORA Metrics Baseline', desc: 'Measure current deployment frequency, lead time, MTTR, and change failure rate.' },
      { title: 'Pipeline Architecture', desc: 'Design automated build, test, security scan, and deployment workflows.' },
      { title: 'Platform Implementation', desc: 'Deploy container orchestration, IaC, and observability infrastructure.' },
      { title: 'Culture Enablement', desc: 'Train teams on DevOps practices, blameless postmortems, and SRE principles.' }
    ],
    techStack: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana', 'Helm'],
    useCases: [
      'CI/CD pipeline modernization for a fintech releasing daily',
      'Kubernetes migration for a media streaming platform',
      'Platform engineering for a 200-developer organization',
      'GitOps implementation for a regulated healthcare SaaS',
      'Observability overhaul for a distributed e-commerce system'
    ]
  },

  'compliance-governance': {
    title: 'Compliance & Governance',
    tagline: 'Navigate Complexity with Confidence',
    heroDescription: 'Navigate complex regulatory landscapes — GDPR, HIPAA, SOC 2, ISO 27001 — with expert compliance consulting and audit preparation. We turn regulatory burden into competitive advantage.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    icon: 'verified_user',
    color: 'amber-400',
    stats: [
      { value: '100%', label: 'Audit Pass Rate' },
      { value: '80+', label: 'Audits Facilitated' },
      { value: '12', label: 'Frameworks Covered' }
    ],
    features: [
      { title: 'SOC 2 Readiness', desc: 'End-to-end Type I and Type II audit preparation with evidence automation.', icon: 'task_alt' },
      { title: 'GDPR Compliance', desc: 'Data mapping, DPIA assessments, consent management, and DPO advisory.', icon: 'privacy_tip' },
      { title: 'ISO 27001', desc: 'Information security management system design, implementation, and certification support.', icon: 'workspace_premium' },
      { title: 'HIPAA Program', desc: 'Healthcare data protection policies, BAA management, and PHI safeguarding.', icon: 'local_hospital' },
      { title: 'GRC Platform', desc: 'Implement governance, risk, and compliance platforms like Vanta, Drata, or OneTrust.', icon: 'admin_panel_settings' },
      { title: 'Policy Framework', desc: 'Comprehensive security policies, procedures, and employee handbook documentation.', icon: 'menu_book' }
    ],
    processSteps: [
      { title: 'Gap Analysis', desc: 'Assess current compliance posture against target framework requirements.' },
      { title: 'Remediation Plan', desc: 'Prioritized action items with timelines, owners, and resource requirements.' },
      { title: 'Evidence Collection', desc: 'Automate evidence gathering, policy documentation, and control testing.' },
      { title: 'Audit Support', desc: 'Direct liaison with auditors, evidence presentation, and finding remediation.' }
    ],
    techStack: ['Vanta', 'Drata', 'OneTrust', 'Jira', 'Confluence', 'AWS Config', 'Azure Policy', 'Qualys'],
    useCases: [
      'SOC 2 Type II certification for a B2B SaaS startup',
      'GDPR compliance program for a European e-commerce company',
      'HIPAA readiness for a health-tech startup entering US market',
      'ISO 27001 certification for a managed services provider',
      'Multi-framework compliance automation for a fintech scale-up'
    ]
  },

  'it-staff-augmentation': {
    title: 'IT Staff Augmentation',
    tagline: 'Elite Talent On Demand',
    heroDescription: 'Scale your technical teams on-demand with pre-vetted engineers, architects, and specialists matched to your exact requirements. From embedded squads to fractional CTOs — we deliver the talent that ships.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    icon: 'groups',
    color: 'pink-400',
    stats: [
      { value: '48hr', label: 'Time to Match' },
      { value: '500+', label: 'Engineers on Bench' },
      { value: '97%', label: 'Client Retention' }
    ],
    features: [
      { title: 'Embedded Engineers', desc: 'Full-time dedicated developers who integrate seamlessly with your existing team.', icon: 'person_add' },
      { title: 'Squad-as-a-Service', desc: 'Complete cross-functional teams: PM, designers, frontend, backend, and QA.', icon: 'diversity_3' },
      { title: 'Fractional CTO', desc: 'Senior technical leadership on a part-time basis for startups and growing companies.', icon: 'supervisor_account' },
      { title: 'Specialized Talent', desc: 'Niche expertise: AI/ML, blockchain, cybersecurity, DevOps, and data engineering.', icon: 'star' },
      { title: 'Flexible Engagement', desc: 'Choose from hourly, monthly, or project-based engagement models.', icon: 'event_available' },
      { title: 'Quality Guarantee', desc: '2-week risk-free trial with replacement guarantee if expectations aren\'t met.', icon: 'thumb_up' }
    ],
    processSteps: [
      { title: 'Requirements Brief', desc: 'Define role specifications, tech stack, team dynamics, and engagement model.' },
      { title: 'Talent Matching', desc: 'Our AI-assisted matching engine identifies top candidates within 48 hours.' },
      { title: 'Interview & Selection', desc: 'You interview shortlisted candidates and select the perfect fit for your team.' },
      { title: 'Onboarding & Delivery', desc: 'Seamless onboarding with ongoing performance tracking and account management.' }
    ],
    techStack: ['React', 'Node.js', 'Python', 'Java', 'Go', 'AWS', 'Kubernetes', 'Terraform'],
    useCases: [
      'Engineering team scale-up for a Series B startup pre-launch',
      'Fractional CTO engagement for a non-technical founder',
      'DevOps squad deployment for a legacy modernization project',
      'AI/ML specialist placement for a pharmaceutical R&D team',
      'Full product squad for a corporate innovation lab'
    ]
  }
};

export default consultancyData;
