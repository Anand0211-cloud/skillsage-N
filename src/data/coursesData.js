const coursesData = {
  'aws-solutions-architect': {
    title: 'AWS Certified Solutions Architect – Associate',
    badge: 'Cloud Architecture',
    category: 'aws',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    description: 'Master the design of high-performing, resilient, and secure architectures on AWS.',
    duration: '40 Hours',
    level: 'Intermediate',
    language: 'English',
    price: '$699',
    enrolled: '1,200',
    instructor: {
      name: 'Sarah Jenkins',
      title: 'Senior Cloud Consultant',
      bio: 'AWS Certified Solutions Architect with 8+ years of hands-on cloud experience.',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      students: '15k',
      courses: '12',
      rating: '4.9'
    },
    learningOutcomes: ['Design scalable architectures', 'Manage data storage', 'Security & Compliance', 'Cost Optimization'],
    prerequisites: ['Basic IT knowledge', 'Familiarity with cloud concepts'],
    curriculum: [
      { title: 'Identity & Access Management', modules: 3, hours: 5, active: true, content: ['IAM Users', 'Roles', 'Policies'] },
      { title: 'Compute & Storage', modules: 5, hours: 10, content: ['EC2', 'S3', 'EBS'] }
    ]
  },
  'kubernetes-admin': {
    title: 'Certified Kubernetes Administrator (CKA)',
    badge: 'DevOps & SRE',
    category: 'devops',
    image: 'https://images.unsplash.com/photo-1667372333374-9d4458f627a6?auto=format&fit=crop&q=80&w=800',
    description: 'Learn to deploy, manage, and scale containerized applications using Kubernetes.',
    duration: '45 Hours',
    level: 'Advanced',
    language: 'English',
    price: '$899',
    enrolled: '850',
    instructor: {
      name: 'David Chen',
      title: 'DevOps Engineer',
      bio: 'Kubernetes specialist with extensive experience in cloud-native deployments.',
      avatar: 'https://i.pravatar.cc/150?u=david',
      students: '5k',
      courses: '4',
      rating: '4.8'
    },
    learningOutcomes: ['Cluster installation', 'Troubleshooting', 'Security & Networking', 'Storage management'],
    prerequisites: ['Linux administration', 'Container basics (Docker)'],
    curriculum: [
      { title: 'Core Concepts', modules: 3, hours: 6, active: true, content: ['Pods', 'Nodes', 'Architecture'] },
      { title: 'Scheduling', modules: 4, hours: 8, content: ['Selectors', 'Affinity', 'Taints'] }
    ]
  },
  'databricks-lakehouse': {
    title: 'Databricks Lakehouse Platform',
    badge: 'Data Engineering',
    category: 'databricks',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    description: 'Build enterprise-grade data engineering and ML solutions on the Databricks Lakehouse.',
    duration: '35 Hours',
    level: 'Intermediate',
    language: 'English',
    price: '$750',
    enrolled: '450',
    instructor: {
      name: 'Michael Ross',
      title: 'Data Architect',
      bio: 'Specialist in big data pipelines and unified analytics.',
      avatar: 'https://i.pravatar.cc/150?u=michael',
      students: '3k',
      courses: '2',
      rating: '4.7'
    },
    learningOutcomes: ['Delta Lake fundamentals', 'Data engineering pipelines', 'SQL on the Lakehouse', 'Unity Catalog'],
    prerequisites: ['SQL knowledge', 'Python basics'],
    curriculum: [
      { title: 'Introduction to Databricks', modules: 2, hours: 4, active: true, content: ['Workspace', 'Clusters', 'Notebooks'] }
    ]
  },
  'ceh-v12': {
    title: 'Certified Ethical Hacker (CEH v12)',
    badge: 'Security',
    category: 'ec-council',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    description: 'Master the latest ethical hacking tools and techniques to defend your organization.',
    duration: '50 Hours',
    level: 'Advanced',
    language: 'English',
    price: '$1200',
    enrolled: '900',
    instructor: {
      name: 'Alex Rivera',
      title: 'Cybersecurity Expert',
      bio: 'Certified Ethical Hacker and security researcher.',
      avatar: 'https://i.pravatar.cc/150?u=alex',
      students: '10k',
      courses: '5',
      rating: '4.9'
    },
    learningOutcomes: ['Network scanning', 'System hacking', 'Malware threats', 'Cloud security vulnerabilities'],
    prerequisites: ['Networking fundamentals', 'OS security knowledge'],
    curriculum: [
      { title: 'Footprinting & Reconnaissance', modules: 4, hours: 8, active: true, content: ['OSINT', 'Search Engines'] }
    ]
  },
  'gcp-professional-architect': {
    title: 'GCP Professional Cloud Architect',
    badge: 'GCP Cloud',
    category: 'google-cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    description: 'Design and plan cloud solution architectures on Google Cloud Platform.',
    duration: '45 Hours',
    level: 'Advanced',
    language: 'English',
    price: '$799',
    enrolled: '600',
    instructor: {
      name: 'Li Wei',
      title: 'Cloud Solutions Lead',
      bio: 'Expert in GCP multi-tier application architectures.',
      avatar: 'https://i.pravatar.cc/150?u=li',
      students: '7k',
      courses: '3',
      rating: '4.8'
    },
    learningOutcomes: ['Cloud infrastructure design', 'App development & deployment', 'Security & Compliance', 'Operations & Management'],
    prerequisites: ['Cloud experience', 'Application architecture knowledge'],
    curriculum: [
      { title: 'Designing for Scale', modules: 3, hours: 6, active: true, content: ['Compute Options', 'Networking'] }
    ]
  },
  'itil-4-foundation': {
    title: 'ITIL 4 Foundation',
    badge: 'ITSM',
    category: 'itil',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Get certified in the most widely used framework for IT service management.',
    duration: '20 Hours',
    level: 'Beginner',
    language: 'English',
    price: '$450',
    enrolled: '2,500',
    instructor: {
      name: 'James Wilson',
      title: 'ITSM Consultant',
      bio: 'Managing complex service environments for over 15 years.',
      avatar: 'https://i.pravatar.cc/150?u=james',
      students: '20k',
      courses: '6',
      rating: '4.6'
    },
    learningOutcomes: ['Service management concepts', 'ITIL guiding principles', 'Service value system', 'ITIL practices'],
    prerequisites: ['None'],
    curriculum: [
      { title: 'Key Concepts', modules: 2, hours: 4, active: true, content: ['Value', 'Services', 'Outcomes'] }
    ]
  },
  'confluent-kafka': {
    title: 'Confluent Certified Administrator for Apache Kafka',
    badge: 'Data Streaming',
    category: 'confluent',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    description: 'Learn to build and manage a real-time event streaming platform with Confluent and Apache Kafka.',
    duration: '32 Hours',
    level: 'Intermediate',
    language: 'English',
    price: '$950',
    enrolled: '320',
    instructor: {
      name: 'Tom Harris',
      title: 'Data Systems Engineer',
      bio: 'Specialist in distributed systems and real-time data architectures.',
      avatar: 'https://i.pravatar.cc/150?u=tom',
      students: '4k',
      courses: '3',
      rating: '4.8'
    },
    learningOutcomes: ['Kafka architecture', 'Producer & Consumer configuration', 'Troubleshooting & Monitoring', 'Security & ACLs'],
    prerequisites: ['Java knowledge', 'Basic distributed systems understanding'],
    curriculum: []
  },
  'azure-administrator': {
    title: 'Microsoft Azure Administrator (AZ-104)',
    badge: 'Microsoft Cloud',
    category: 'microsoft',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    description: 'Implement, manage, and monitor identity, governance, storage, compute, and virtual networks in Azure.',
    duration: '40 Hours',
    level: 'Intermediate',
    language: 'English',
    price: '$599',
    enrolled: '1,800',
    instructor: {
      name: 'Emily Davis',
      title: 'Azure MVP',
      bio: 'Expert in Microsoft cloud ecosystem and hybrid deployments.',
      avatar: 'https://i.pravatar.cc/150?u=emily',
      students: '25k',
      courses: '8',
      rating: '4.9'
    },
    learningOutcomes: ['Manage Azure identities', 'Configure virtual networking', 'Manage storage', 'Monitor resources'],
    prerequisites: ['Understanding of virtualization', 'Cloud basics'],
    curriculum: []
  },
  'ccna-networking': {
    title: 'Cisco Certified Network Associate (CCNA 200-301)',
    badge: 'Networking',
    category: 'cisco',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    description: 'Foundational certification for networking professionals in a digital world.',
    duration: '60 Hours',
    level: 'Beginner',
    language: 'English',
    price: '$850',
    enrolled: '3,000',
    instructor: {
      name: 'Robert King',
      title: 'Network Architect',
      bio: 'CCIE certified professional with over 20 years in global enterprise networking.',
      avatar: 'https://i.pravatar.cc/150?u=robert',
      students: '50k',
      courses: '15',
      rating: '4.7'
    },
    learningOutcomes: ['Network fundamentals', 'IP connectivity', 'Security fundamentals', 'Automation & Programmability'],
    prerequisites: ['None'],
    curriculum: []
  },
  'comptia-security-plus': {
    title: 'CompTIA Security+',
    badge: 'Security',
    category: 'comptia',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    description: 'The global standard for validating foundational, vendor-neutral IT security skills.',
    duration: '40 Hours',
    level: 'Beginner',
    language: 'English',
    price: '$550',
    enrolled: '5,000',
    instructor: {
      name: 'Alice Cooper',
      title: 'Security Consultant',
      bio: 'Passionate educator in foundational cybersecurity.',
      avatar: 'https://i.pravatar.cc/150?u=alice',
      students: '100k',
      courses: '10',
      rating: '4.8'
    },
    learningOutcomes: ['Threats, Attacks & Vulnerabilities', 'Risk Management', 'Architecture & Design', 'Cryptography & PKI'],
    prerequisites: ['CompTIA Network+ recommended'],
    curriculum: []
  },
  'ml-mastery': {
    title: 'Machine Learning Mastery',
    badge: 'AI & ML',
    category: 'artificial-intelligence',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800',
    description: 'Deep dive into supervised and unsupervised learning, neural networks, and computer vision.',
    duration: '55 Hours',
    level: 'Intermediate',
    language: 'English',
    price: '$899',
    enrolled: '1,500',
    instructor: {
      name: 'Dr. Leo Grant',
      title: 'AI Researcher',
      bio: 'Expert in deep learning and automated reasoning systems.',
      avatar: 'https://i.pravatar.cc/150?u=leo',
      students: '12k',
      courses: '3',
      rating: '4.95'
    },
    learningOutcomes: ['Regression & Classification', 'Neural Network architectures', 'Model evaluation', 'Deployment to Production'],
    prerequisites: ['Python proficiency', 'Linear Algebra & Calculus basics'],
    curriculum: []
  },
  'vmware-vsphere': {
    title: 'VMware vSphere: Install, Configure, Manage',
    badge: 'Virtualization',
    category: 'vmware',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
    description: 'Master the industry-leading virtualization platform for data center infrastructure.',
    duration: '40 Hours',
    level: 'Intermediate',
    language: 'English',
    price: '$1100',
    enrolled: '400',
    instructor: {
      name: 'Kevin Smith',
      title: 'Virtualization Specialist',
      bio: 'VCP certified professional specializing in hybrid cloud architectures.',
      avatar: 'https://i.pravatar.cc/150?u=kevin',
      students: '6k',
      courses: '4',
      rating: '4.7'
    },
    learningOutcomes: ['ESXi & vCenter installation', 'Managing virtual machines', 'Configuring storage & networking', 'Monitoring & Troubleshooting'],
    prerequisites: ['System administration experience'],
    curriculum: []
  },
  'advanced-cyber-def': {
    title: 'Advanced Defensive Security',
    badge: 'Security',
    category: 'security-trainings',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    description: 'Master threat hunting, incident response, and advanced security operations.',
    duration: '48 Hours',
    level: 'Advanced',
    language: 'English',
    price: '$999',
    enrolled: '250',
    instructor: {
      name: 'John Wick',
      title: 'Security Operator',
      bio: 'Ex-intelligence agency security specialist.',
      avatar: 'https://i.pravatar.cc/150?u=john',
      students: '1k',
      courses: '2',
      rating: '5.0'
    },
    learningOutcomes: ['Threat hunting methodologies', 'Digital forensics', 'SOC operations', 'Malware analysis'],
    prerequisites: ['Security fundamentals', 'Networking experience'],
    curriculum: []
  },
  'soft-skills-it': {
    title: 'Soft Skills for IT Professionals',
    badge: 'Professional Dev',
    category: 'miscellaneous',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    description: 'Enhance your communication, leadership, and project management skills specifically for tech environments.',
    duration: '15 Hours',
    level: 'Beginner',
    language: 'English',
    price: '$299',
    enrolled: '1,100',
    instructor: {
      name: 'Karen Lee',
      title: 'Leadership Coach',
      bio: 'Helping engineers transition into leadership roles for over a decade.',
      avatar: 'https://i.pravatar.cc/150?u=karen',
      students: '30k',
      courses: '5',
      rating: '4.9'
    },
    learningOutcomes: ['Technical communication', 'Team leadership', 'Agile project management', 'Conflict resolution'],
    prerequisites: ['None'],
    curriculum: []
  }
};

export default coursesData;
