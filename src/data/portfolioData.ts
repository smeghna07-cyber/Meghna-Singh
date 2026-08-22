import {
  ExpertiseItem,
  EducationItem,
  PublicationItem,
  ConferencePresentation,
  AwardItem,
  FdpCertification,
  ExperienceItem,
} from '../types';

export const personalInfo = {
  name: 'Dr. Meghna Singh',
  title: 'Assistant Professor, Physiotherapy',
  institution: 'JECRC University, Jaipur',
  department: 'Faculty of Allied Health Sciences / Physiotherapy',
  location: 'Jaipur, Rajasthan, India',
  email: 'smeghna07@gmail.com',
  tagline: 'Empowering Movement, Restoring Lives — Physiotherapy Rooted in Neurology',
  experienceYears: '3+ Years in Clinical Practice & Academia',
  aboutParagraph:
    'Dr. Meghna Singh is a dedicated neuro-physiotherapist and Assistant Professor with 3 years of experience in clinical practice and academia. Her work centers on neurological rehabilitation, blending patient-focused therapy with a strong foundation in neurology and psychosomatic disorders. She is equally passionate about teaching the next generation of physiotherapists and providing compassionate, effective care to her patients, believing that recovery is both a science and a deeply human process.',
  academicPillars: [
    {
      title: 'Clinical Neurology',
      description: 'Evidence-based neurological rehabilitation targeting neuroplasticity, gait training, and sensory-motor coordination.',
    },
    {
      title: 'Academic Pedagogy',
      description: 'Mentoring undergraduate and postgraduate physiotherapy scholars, modernizing curriculum with digital pedagogy and outcome-based education.',
    },
    {
      title: 'Psychosomatic Synergy',
      description: 'Holistic care protocols addressing the intricate connection between psychological well-being and physical functional recovery.',
    },
  ],
};

export const expertiseList: ExpertiseItem[] = [
  {
    id: 'neuro-rehab',
    title: 'Neurological Rehabilitation',
    description:
      'Comprehensive rehabilitation strategies for stroke, spinal cord injuries, diabetic peripheral neuropathy, and central nervous system conditions aimed at maximizing motor recovery and neuroplastic adaptation.',
    iconName: 'Brain',
    tags: ['Stroke Rehab', 'Neuroplasticity', 'Motor Re-learning', 'Spinal Injury'],
  },
  {
    id: 'psychosomatic',
    title: 'Psychosomatic Disorders',
    description:
      'Integrative physical therapy methodologies managing somatic symptom disorders, stress-induced somatic pain, fibromyalgia, and the complex mind-body interplay in chronic physical disability.',
    iconName: 'BrainCircuit',
    tags: ['Mind-Body Health', 'Somatic Therapy', 'Pain Modulation', 'Stress Syndromes'],
  },
  {
    id: 'patient-focused',
    title: 'Patient-Focused Therapy',
    description:
      'Individualized, compassionate therapeutic protocols tailored to specific functional goals, quality of life parameters, ergonomic lifestyles, and holistic caregiver engagement.',
    iconName: 'HeartHandshake',
    tags: ['Empathetic Care', 'Goal-Oriented Plans', 'ADL Independence', 'Ergonomics'],
  },
  {
    id: 'diagnostics-prognostics',
    title: 'Diagnostics & Prognostics',
    description:
      'In-depth clinical assessments, neuro-musculoskeletal examinations, functional movement analysis, nerve conduction study interpretations, and evidence-driven recovery forecasting.',
    iconName: 'Stethoscope',
    tags: ['Clinical Evaluation', 'Nerve Conduction', 'Functional Scoring', 'Prognostic Models'],
  },
  {
    id: 'pnf-technique',
    title: 'Proprioceptive Neuromuscular Facilitation (PNF)',
    description:
      'Advanced facilitation patterns, spiral-diagonal movement techniques, rhythmic stabilization, and sensory-motor integration to enhance muscular response, neuromuscular efficiency, and mobility.',
    iconName: 'Zap',
    tags: ['Diagonal Patterns', 'Sensory-Motor', 'Neuromuscular Timing', 'Dynamic Balance'],
  },
  {
    id: 'pulmonary-balance',
    title: 'Pulmonary & Balance Rehabilitation',
    description:
      'Targeted breathing retraining, functional aerobic capacity enhancement, vestibular stabilization, and static-dynamic balance conditioning for interstitial lung disease and fall prevention.',
    iconName: 'Wind',
    tags: ['ILD Rehabilitation', 'Vestibular Balance', 'Aerobic Capacity', 'Fall Prevention'],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'mpt',
    degree: 'Master of Physiotherapy (MPT)',
    specialization: 'Neurology and Psychosomatic Disorders',
    institution: 'Jaipur National University',
    location: 'Jaipur, Rajasthan',
    period: '2021 – 2023',
    description:
      'Advanced postgraduate specialization in neurological pathologies, neuro-electrophysiology, psychosomatic evaluation, and experimental research methodologies.',
    highlights: [
      'In-depth research on PNF & sensory motor protocols in Diabetic Peripheral Neuropathy',
      'Clinical postings in acute neuro-ICUs, stroke units, and psychosomatic wellness clinics',
      'Mastered advanced electrodiagnosis, gait lab kinematics, and neuro-rehab robotics',
    ],
  },
  {
    id: 'bpt',
    degree: 'Bachelor of Physiotherapy (BPT)',
    specialization: 'Physiotherapy & Allied Health Sciences',
    institution: 'Bundelkhand University',
    location: 'Jhansi, Uttar Pradesh',
    period: '2016 – 2020',
    description:
      'Rigorous 4.5-year foundational training covering anatomy, physiology, biomechanics, exercise therapy, electrotherapy, pharmacology, orthopaedics, and general medicine.',
    highlights: [
      'Comprehensive clinical rotations across multispecialty government and private medical centres',
      'Hands-on training in manual therapy, cardiopulmonary resuscitation, and trauma care',
      'Graduated with stellar academic standing and active participation in clinical seminars',
    ],
  },
];

export const publicationsList: PublicationItem[] = [
  {
    id: 'pub-1',
    title:
      'Effect of Proprioceptive Neuromuscular Facilitation (PNF) and Sensory Motor Training on balance measures and nerve conduction studies in individuals suffering from Diabetic Peripheral Neuropathy: A Cross-sectional Study',
    type: 'cross_sectional',
    year: '2023',
    journalOrContext: 'Clinical Neuro-Physiotherapy Research',
    authors: 'Dr. Meghna Singh, et al.',
    tags: ['PNF', 'Diabetic Peripheral Neuropathy', 'Nerve Conduction', 'Balance Measures'],
    abstractSnippet:
      'Evaluates the efficacy of integrating Proprioceptive Neuromuscular Facilitation (PNF) with structured sensory motor training protocols to enhance postural stability and peripheral nerve conduction velocity in DPN cohorts.',
  },
  {
    id: 'pub-2',
    title:
      'Effect of Pulmonary Rehabilitation with Balance Training on Balance, Functional Capacity and Quality of Life in ILD Population',
    type: 'journal',
    year: '2023',
    journalOrContext: 'Cardiopulmonary & Respiratory Rehabilitation',
    authors: 'Dr. Meghna Singh, et al.',
    tags: ['Pulmonary Rehab', 'Interstitial Lung Disease (ILD)', 'Functional Capacity', 'Quality of Life'],
    abstractSnippet:
      'Investigates the synergic impact of concurrent pulmonary rehabilitation and balance training on Six-Minute Walk Distance (6MWD), Berg Balance Scale, and St. George’s Respiratory Questionnaire scores in interstitial lung disease patients.',
  },
  {
    id: 'pub-3',
    title:
      'Dynamic Exercise Programs for Osteoarthritis: From Pain Management to Performance on Pain and Function – A Case Study',
    type: 'case_study',
    year: '2024',
    journalOrContext: 'Orthopaedic & Sports Physical Therapy Reports',
    authors: 'Dr. Meghna Singh',
    tags: ['Osteoarthritis', 'Dynamic Exercise', 'Pain Modulation', 'Functional Recovery'],
    abstractSnippet:
      'A structured clinical case study documenting functional restoration, WOMAC index improvements, and kinetic alignment through personalized dynamic resistance and kinetic chain conditioning in degenerative joint disease.',
  },
  {
    id: 'pub-4',
    title:
      'Assessment of Knowledge and Awareness Regarding Infection Control Practices Among Allied Health Professionals',
    type: 'cross_sectional',
    year: '2023',
    journalOrContext: 'Healthcare Quality & Clinical Safety Journal',
    authors: 'Dr. Meghna Singh, et al.',
    tags: ['Infection Control', 'Allied Health', 'Clinical Safety', 'Hospital Protocol'],
    abstractSnippet:
      'Assesses baseline institutional compliance, barrier methods, sterilization standards, and nosocomial infection awareness among practicing physiotherapists and allied medical staff across tertiary care centres.',
  },
  {
    id: 'pub-5',
    title:
      'Mental Imagery as a Neurocognitive Adjunct in Sports Injury Rehabilitation: Implications for Motor Learning and Return-to-Sport',
    type: 'journal',
    year: '2024',
    journalOrContext: 'Neuroscience & Sports Rehabilitation Perspectives',
    authors: 'Dr. Meghna Singh',
    tags: ['Mental Imagery', 'Motor Learning', 'Neurocognition', 'Sports Injury'],
    abstractSnippet:
      'Explores the neurological substrates of motor imagery (MI) and cognitive rehearsal in activating cortical motor networks, preventing arthrogenic muscle inhibition and accelerating safe return-to-play timelines.',
  },
];

export const conferencePresentations: ConferencePresentation[] = [
  {
    id: 'conf-1',
    title:
      'Effectiveness of platform-based robotics assisted rehabilitation for neurological injuries: A Systemic Review',
    conference: '4th International Physiotherapy Conference',
    location: 'Udaipur, Rajasthan',
    year: '2022',
    type: 'International Conference Paper Presentation',
    note: 'Systematic review presenting empirical evidence on robotic exoskeletons and end-effector devices in neurotrauma rehabilitation.',
  },
  {
    id: 'conf-2',
    title:
      'Effect of PNF and Sensory Motor Training on Balance in Individuals Suffering with DPN: A Systemic Review',
    conference: 'MG Physiocon National Physiotherapy Conference',
    location: 'Jaipur, Rajasthan',
    year: '2022',
    type: 'National Conference Paper Presentation',
    note: 'Evaluated quantitative functional balance outcomes following structured neuromuscular facilitation protocols.',
  },
  {
    id: 'conf-3',
    title:
      'Scientific Paper Presentation & Academic Deliberation on Neurological Rehabilitation Advances',
    conference: 'NEURAXIS 2022 — 10th International Conference on Neurological Rehabilitation',
    location: 'Constitution Club of India, New Delhi',
    year: '2022',
    type: 'International Conference Presentation',
    note: 'Engaged with leading international neurologists and neuro-physiotherapists on cutting-edge clinical translational research.',
  },
];

export const awardsList: AwardItem[] = [
  {
    id: 'award-2025',
    year: '2025',
    title: 'Excellence in Physiotherapy Practice',
    organization: 'Female Physio Summit (FEMCON-4), Jaipur Physiotherapy Network',
    category: 'Clinical & Professional Leadership',
    description:
      'Awarded in recognition of outstanding clinical acumen, compassionate neurological care delivery, and leadership in elevating women in physical therapy.',
  },
  {
    id: 'award-2024-rising',
    year: '2024',
    title: 'Rising Physio Award',
    organization: '7th Relife Ortho Physiocon',
    category: 'Emerging Professional Excellence',
    description:
      'Conferred for promising professional contributions to physiotherapy practice, clinical innovation, and dedication to allied health education.',
  },
  {
    id: 'award-2024-academic',
    year: '2024',
    title: 'Academic Excellence Award',
    organization: '7th Relife Ortho Physiocon',
    category: 'Scholarly & Pedagogical Distinction',
    description:
      'Recognized for exceptional commitment to academic teaching, university curriculum administration, and research dissemination.',
  },
];

export const fdpCertifications: FdpCertification[] = [
  {
    id: 'fdp-1',
    title: 'Narratives of Reproductive Health, Choices, Justice, and Motherhood',
    issuer: 'Interdisciplinary Academic Initiative',
    category: 'Public Health & Bioethics',
  },
  {
    id: 'fdp-2',
    title: 'NEP-2020 Orientation and Sensitization Programme',
    issuer: 'Malaviya Mission Teacher Training Programme, UGC (Govt. of India)',
    category: 'National Education Policy Implementation',
  },
  {
    id: 'fdp-3',
    title: 'Innovation & Technology in Digital Pedagogy',
    issuer: 'Centre for Pedagogical Advancement',
    category: 'E-Learning & Digital Classroom Tools',
  },
  {
    id: 'fdp-4',
    title: 'Empowering Higher Education Institutions in Technology-enabled Learning and Education',
    issuer: 'National Academic Development Cell',
    category: 'Higher Education Digital Transformation',
  },
  {
    id: 'fdp-5',
    title: 'AI Faculty Development Program (AI in Modern Healthcare & Education)',
    issuer: 'Advanced Faculty Training Institute',
    category: 'Artificial Intelligence & Health Informatics',
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'exp-jecrc',
    role: 'Assistant Professor',
    institution: 'JECRC University',
    location: 'Jaipur, Rajasthan',
    period: 'August 2023 – Present',
    current: true,
    type: 'academic',
    summary:
      'Serving as full-time academician and administrative leader, spearheading university-level examination governance, admission counselling, student mentorship, and physiotherapy curriculum delivery.',
    responsibilities: [
      'Academician & Lecturer: Conducting core didactic and practical laboratory courses in Neurological Physiotherapy, Psychosomatic Disorders, and Clinical Kinesiology for BPT and MPT cohorts.',
      'Director Controller of Examination (DCoE) Coordinator: Orchestrating university-wide examination schedules, confidential evaluation cycles, and grading integrity systems.',
      'Admission Counselling: Advising incoming allied health candidates on career trajectories, clinical scopes, and university academic pathways.',
      'ERP Working & Administration: Managing academic modules, student attendance matrices, continuous internal assessments, and institutional compliance via university ERP software.',
    ],
  },
  {
    id: 'exp-gmc',
    role: 'Clinical Intern (Rotatory)',
    institution: 'Physiotherapy School and Centre, Government Medical College (GMC)',
    location: 'Nagpur, Maharashtra',
    period: 'January 2021 – July 2021',
    current: false,
    type: 'clinical_internship',
    summary:
      'Intensive 6-month rotatory clinical internship in one of Central India’s premier tertiary medical colleges, treating acute, subacute, and chronic patient caseloads across multidisciplinary critical care wards.',
    responsibilities: [
      'Burn ICU & Critical Care: Managing acute contracture prevention, gentle positioning, graft mobilization, and respiratory clearance.',
      'Neurological & Neurosurgery Wards: Administering acute stroke rehabilitation, spinal trauma gait training, and coma arousal techniques.',
      'Cardio-respiratory & Medicine Wards: Chest physiotherapy, post-operative bronchial hygiene, ventilator weaning support, and early ambulation.',
      'Orthopaedic & Surgery Wards: Post-arthroplasty mobilization, fracture rehabilitation, and musculoskeletal functional restoration.',
      'Paediatric, Obstetrics & Gynecology Wards: Developmental milestone stimulation in cerebral palsy, antenatal and postnatal conditioning.',
    ],
    departments: [
      'Burn ICU',
      'Orthopaedic Ward',
      'Cardio-respiratory Unit',
      'Surgical ICU',
      'Paediatric Ward',
      'Neurological Care Unit',
      'General Medicine',
      'Obstetrics & Gynecology',
    ],
  },
  {
    id: 'exp-chiranjeev',
    role: 'Clinical Intern',
    institution: 'Chiranjeev I.C.U and Dialysis Unit',
    location: 'Jhansi, Uttar Pradesh',
    period: 'July 2018 – January 2019',
    current: false,
    type: 'clinical_internship',
    summary:
      'Hands-on clinical internship managing intensive care physiotherapy and renal dialysis inpatient rehabilitation.',
    responsibilities: [
      'Monitored hemodynamically unstable patients undergoing dialysis, providing gentle bed-side mobility and breathing exercises.',
      'Assisted in airway clearance therapies and positioning protocols for critical ICU patients to avert secondary pulmonary complications.',
      'Gained deep clinical appreciation for vital sign monitoring and multi-organ patient care.',
    ],
    departments: ['Intensive Care Unit (ICU)', 'Renal Dialysis Unit', 'Emergency Observation'],
  },
];
