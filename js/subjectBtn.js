const titles = {
english: [
  'Exploring themes in novels',
  'Poetic techniques you need to know',
  'Structuring persuasive writing',
  'Comparing characters effectively',
  'Writing introductions with impact',
  'Perfecting your conclusion',
  'Understanding Shakespeare’s language',
  'Annotating texts for analysis',
  'Using context in literature essays',
  'Planning a top-grade literature response',
  'Creative writing tips for GCSE',
  'Summarising non-fiction texts',
  'Proofreading for grammar and style',
  'What makes a strong thesis statement?',
  'Narrative perspective explained',
  'Evaluating arguments in writing',
  'Symbolism in modern fiction',
  'Comparing different poetic forms',
  'How to write a critical review',
  'Vocabulary boosters for English success'
],

maths: [
  'Area and circumference of circles',
  'Solving linear equations step-by-step',
  'Quadratic formula in action',
  'Graphing straight-line functions',
  'Gradient and intercepts explained',
  'Pythagoras’ theorem made simple',
  'Mean, median, mode & range',
  'Simplifying algebraic expressions',
  'Factoring quadratic expressions',
  'Perimeter and compound shapes',
  'Sine, cosine and tangent',
  'Converting fractions, decimals and percentages',
  'Working out compound interest',
  'Solving simultaneous equations',
  'Interpreting bar and pie charts',
  'Volume of prisms and cylinders',
  'Percentage change and error intervals',
  'Geometric constructions explained',
  'Solving inequalities on a number line',
  'Basic probability and tree diagrams'
],

science: [
  'Balancing chemical equations',
  'The process of photosynthesis',
  'Structure and parts of the atom',
  'Mitosis vs meiosis: key differences',
  'Newton’s three laws of motion',
  'Periodic table trends and groups',
  'Calculating speed, velocity, and acceleration',
  'The water cycle explained',
  'Designing fair and accurate experiments',
  'Analysing scientific data',
  'Functions of cell organelles',
  'Energy transfer in systems',
  'Theory of natural selection',
  'Calculating force and pressure',
  'Ecological interactions and food webs',
  'Ionic, covalent and metallic bonding',
  'Causes and effects of the greenhouse effect',
  'Using the pH scale in chemistry',
  'The human digestive system',
  'Electromagnetic spectrum overview'
],

computing: [
  'Writing your first Python script',
  'Understanding algorithms and flowcharts',
  'Variables and data types explained',
  'Using if-statements and logic',
  'Creating loops: while and for',
  'Finding and fixing bugs',
  'Defining and using functions',
  'Working with lists and dictionaries',
  'File input/output in Python',
  'Creating a basic database structure',
  'Using Git and version control',
  'Intro to object-oriented programming',
  'Building a simple HTML web page',
  'Binary, denary and hexadecimal',
  'Connecting to APIs and JSON',
  'Bubble and merge sort methods',
  'What is computational thinking?',
  'Tips for writing efficient code',
  'How to test your programs',
  'Keeping applications secure'
],

economics: [
  'Price elasticity of demand explained',
  'Drawing supply and demand curves',
  'Perfect vs imperfect competition',
  'Introduction to consumer behaviour',
  'Opportunity cost in daily decisions',
  'Fiscal policy: government spending and tax',
  'What GDP really means',
  'Measuring inflation and price indexes',
  'How cost-benefit analysis works',
  'Comparative advantage in trade',
  'Monetary policy and interest rates',
  'Types of unemployment explained',
  'Understanding the circular flow of income',
  'Causes of market failure',
  'Taxation and government revenue',
  'How exchange rates affect imports',
  'Economic growth vs development',
  'Using the Keynesian model',
  'Short-run vs long-run production costs',
  'Game theory: basics and examples'
],

geography: [
  'Reading contour lines and map symbols',
  'The theory of plate tectonics',
  'Erosion, transportation, and deposition',
  'Why cities grow: urbanisation explained',
  'Analysing temperature and rainfall graphs',
  'Key river landforms: meanders to deltas',
  'Tropical rainforests vs hot deserts',
  'Population pyramids and what they show',
  'Mechanical, chemical, and biological weathering',
  'Introduction to GIS tools',
  'The water balance and its components',
  'What makes development sustainable?',
  'Push and pull factors in migration',
  'Interpreting satellite and aerial images',
  'Natural hazards and disaster response',
  'Comparing rural and urban landscapes',
  'Steps of the carbon cycle',
  'Tourism: pros and cons',
  'Ocean currents and global climate',
  'Sources of renewable energy'
],

history: [
  'The causes of World War I',
  'Industrial Revolution: key inventions and impact',
  'Capitalism vs communism',
  'The Treaty of Versailles and its effects',
  'Key events in the Cold War',
  'How to analyse historical sources',
  'Planning a history essay',
  'Victorian Britain’s major reforms',
  'French Revolution causes and outcomes',
  'Civil Rights Movement in the USA',
  'Ancient Greece vs Ancient Rome',
  'The fall of the Roman Empire',
  'Events of the Russian Revolution',
  'Decolonisation after WWII',
  'Propaganda in wartime posters',
  'The printing press and historical change',
  'Understanding the Holocaust',
  'European explorers and their discoveries',
  'The Renaissance: art, science and change',
  'Tackling source-based questions'
]

};

// Get stored subject or default to english
let subject = localStorage.getItem('subject') || 'english';

// Highlight the active button
function highlightActive() {
  document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subject === subject);
  });
}

// Set up button click handlers
document.querySelectorAll('.subject-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    subject = btn.dataset.subject;
    localStorage.setItem('subject', subject);
    highlightActive();
    setRandomTitle();
  });
});

// Set a random title from the current subject
function setRandomTitle() {
  const list = titles[subject] || titles['english'];
  const randomTitle = list[Math.floor(Math.random() * list.length)];
  document.title = randomTitle;
}

// Initialize on load
highlightActive();
setRandomTitle();
