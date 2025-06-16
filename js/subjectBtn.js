const titles = {
english: [
  'How to analyze the themes of a novel',
  'How to identify poetic devices',
  'How to structure a persuasive essay',
  'How to compare two characters',
  'How to write effective introductions',
  'How to craft a strong conclusion',
  'How to interpret Shakespearean language',
  'How to annotate a passage for revision',
  'How to use contextual evidence',
  'How to plan a literature essay',
  'How to improve your creative writing',
  'How to summarize a non-fiction text',
  'How to proofread for grammar and style',
  'How to develop a clear thesis statement',
  'How to analyze narrative perspective',
  'How to evaluate an argument',
  'How to explore symbolism in prose',
  'How to compare poetic forms',
  'How to write a critical review',
  'How to expand your academic vocabulary'
],

maths: [
  'How to calculate the area of a circle',
  'How to solve linear equations',
  'How to work with quadratic formula',
  'How to plot graphs of functions',
  'How to calculate gradients',
  'How to use Pythagoras’ theorem',
  'How to find the mean, median, and mode',
  'How to simplify algebraic expressions',
  'How to factorise quadratics',
  'How to calculate perimeter and area',
  'How to understand trigonometric ratios',
  'How to convert fractions to decimals',
  'How to calculate compound interest',
  'How to use simultaneous equations',
  'How to interpret statistical diagrams',
  'How to calculate volume of solids',
  'How to work with percentages',
  'How to draw geometric constructions',
  'How to solve inequalities',
  'How to apply probability rules'
],

science: [
  'How to balance chemical equations',
  'How to explain photosynthesis',
  'How to describe the structure of an atom',
  'How to differentiate between mitosis and meiosis',
  'How to identify Newton’s laws of motion',
  'How to interpret the periodic table',
  'How to calculate acceleration',
  'How to explain the water cycle',
  'How to design a fair experiment',
  'How to analyse data graphs',
  'How to describe cell organelles',
  'How to understand energy transfers',
  'How to explain evolution by natural selection',
  'How to calculate force and pressure',
  'How to discuss ecological relationships',
  'How to identify types of chemical bonds',
  'How to explain the greenhouse effect',
  'How to measure pH values',
  'How to describe the digestive system',
  'How to understand electromagnetic waves'
],

computing: [
  'How to write a basic Python program',
  'How to understand algorithms',
  'How to use variables and data types',
  'How to write conditional statements',
  'How to create loops in code',
  'How to debug your program',
  'How to use functions and modules',
  'How to understand data structures',
  'How to read and write files',
  'How to design a simple database',
  'How to use version control with Git',
  'How to understand object-oriented programming',
  'How to build a basic web page',
  'How to understand binary and hexadecimal',
  'How to work with APIs',
  'How to implement sorting algorithms',
  'How to understand computational thinking',
  'How to write efficient code',
  'How to test your software',
  'How to secure your application'
],

economics: [
  'How to calculate price elasticity of demand',
  'How to interpret supply and demand curves',
  'How to compare market structures',
  'How to analyse consumer choice theory',
  'How to understand opportunity cost',
  'How to evaluate fiscal policy',
  'How to explain GDP and economic growth',
  'How to assess inflation measures',
  'How to use cost-benefit analysis',
  'How to understand comparative advantage',
  'How to explain monetary policy tools',
  'How to analyse unemployment types',
  'How to interpret the circular flow model',
  'How to understand market failure',
  'How to assess the impact of taxation',
  'How to evaluate exchange rate systems',
  'How to explain economic development',
  'How to use the Keynesian cross',
  'How to compare short-run and long-run costs',
  'How to analyse game theory basics'
],

geography: [
  'How to read topographic maps',
  'How to explain plate tectonics',
  'How to analyse coastal processes',
  'How to understand urbanisation patterns',
  'How to interpret climate graphs',
  'How to evaluate river landforms',
  'How to compare biomes',
  'How to assess population pyramids',
  'How to describe weathering and erosion',
  'How to use GIS in geography',
  'How to explain the water balance equation',
  'How to discuss sustainable development',
  'How to analyse migration trends',
  'How to interpret aerial photographs',
  'How to understand natural hazards',
  'How to compare rural and urban land use',
  'How to explain the carbon cycle',
  'How to assess tourism impacts',
  'How to understand ocean currents',
  'How to evaluate renewable energy sources'
],

history: [
  'How to assess the causes of World War I',
  'How to analyse the impact of the Industrial Revolution',
  'How to compare political ideologies',
  'How to evaluate the Treaty of Versailles',
  'How to understand the Cold War dynamics',
  'How to interpret historical sources',
  'How to write a history essay plan',
  'How to assess social reforms in Victorian Britain',
  'How to explain the causes of the French Revolution',
  'How to analyse the American Civil Rights movement',
  'How to compare ancient civilizations',
  'How to discuss the fall of the Roman Empire',
  'How to evaluate the Russian Revolution',
  'How to understand decolonization processes',
  'How to interpret propaganda posters',
  'How to assess the impact of the printing press',
  'How to evaluate the Holocaust',
  'How to compare European explorations',
  'How to analyse the Renaissance period',
  'How to write for source-based questions'
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