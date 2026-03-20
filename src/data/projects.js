export const projects = [
  {
    slug: 'hearth',
    title: 'Hearth',
    tagline: 'A Kanban for your whole life — not just your to-do list',
    category: 'UX / Product Design',
    year: '2025',
    color: '#C17F3E',
    tags: ['UX Research', 'AI/ML UX', 'Product Design', 'Prototyping', 'Figma'],
    richCaseStudy: true,

    description: 'Hearth is a life planning OS for everyday people. It gives you one place to Kanban everything — work projects, health goals, home tasks, creative side projects — with cards that carry real context, and an AI that helps you figure out not just what to do, but how to actually do it.',

    sections: [
      {
        type: 'problem',
        label: 'Problem Definition',
        headline: 'You have 6 apps and none of them talk to each other.',
        body: 'Most people manage their lives across a fragmented stack: Notion for work projects, a fitness app for health goals, a notes app for ideas, a calendar for scheduling, a group chat for home stuff, and a reminders app for everything that falls through the cracks. Each app is fine on its own. Together, they create a system nobody designed — and nobody can maintain.\n\nThe deeper problem is not just fragmentation. It is that most productivity tools are built to track tasks, not to help you plan your life. They motivate you to check things off. They do not give you the tools to think through how to actually get something done, how one goal connects to another, or how to make real progress on the things that matter most.\n\nHearth is designed to be different: one place where every area of your life lives together, where every card carries enough context to be useful, and where the AI does not just remind you — it helps you think.',
        stats: [
          { value: '6+', label: 'Apps the avg. person uses to manage their life' },
          { value: '71%', label: 'Of people feel their productivity system is failing them' },
          { value: '2.5h', label: 'Per day lost to context-switching between tools' },
        ],
      },
      {
        type: 'research',
        label: 'Research and Competitive Analysis',
        headline: 'We talked to 16 people who had given up on getting organized.',
        body: 'I interviewed 16 people across different life stages — a freelancer, a new parent, a student, a marketing manager, a nurse, a small business owner. The thread connecting everyone was the same: they had tried systems before, and those systems had eventually collapsed under the weight of real life. I wanted to understand not just what they needed, but why their last attempt had failed.',
        findings: [
          { quote: '"I have a Notion setup I spent a weekend building. I stopped using it after two weeks."', theme: 'Setup cost kills adoption before habits can form' },
          { quote: '"My work tasks and personal goals live in completely different places. They affect each other but I can never see them together."', theme: 'Life areas are artificially siloed by existing tools' },
          { quote: '"I know what I need to do. I just do not know how to start or break it down."', theme: 'Knowing a goal is not the same as having a plan' },
          { quote: '"I want a tool that feels like mine, not like a corporate project manager."', theme: 'Emotional ownership drives long-term engagement' },
        ],
        competitors: [
          { name: 'Notion', strength: 'Infinitely flexible', weakness: 'Requires expert setup, feels like work', target: 'Teams and power users' },
          { name: 'Trello', strength: 'Simple kanban, easy start', weakness: 'No depth, no life context, no AI', target: 'Project teams' },
          { name: 'Todoist', strength: 'Great task management', weakness: 'Tasks only, no planning layer', target: 'Task-focused individuals' },
          { name: 'Asana', strength: 'Powerful project tracking', weakness: 'Built for work, not life', target: 'Product and marketing teams' },
        ],
        insight: 'Nobody has built a planning tool designed for the full complexity of a human life — not just your job.',
      },
      {
        type: 'decisions',
        label: 'Design Decisions',
        headline: 'Five decisions that made Hearth feel like a life tool, not a work tool.',
        decisions: [
          {
            number: '01',
            title: 'Life Areas, not just projects',
            body: 'In Notion and Trello, everything is a project. But life is not made of projects — it is made of areas that are always ongoing: Work, Health, Home, Relationships, Creative. Hearth organizes around Life Areas that persist indefinitely, each with their own Kanban board. You never have to create a new workspace for a new season of life. It is already there.',
          },
          {
            number: '02',
            title: 'Cards with real depth',
            body: 'A task in most apps is just a title and a due date. A card in Hearth carries the full context: what project or life area it belongs to, which goal it is linked to, any notes or sub-tasks attached, and an AI-generated breakdown of how to actually approach it. The card is not just a reminder — it is a planning artifact.',
          },
          {
            number: '03',
            title: 'AI that teaches you how, not just what',
            body: 'The most common AI pattern in productivity tools is: here is a list of what to do next. That is only half useful. Hearth\'s AI goes further — when you add a card, it can suggest how to approach the task, break it into smaller steps, flag dependencies with other cards, and surface relevant goals it connects to. It is a thinking partner, not just a sorter.',
          },
          {
            number: '04',
            title: 'The Life View — everything at once',
            body: 'Every other tool forces you to look at one project at a time. Hearth\'s Life View shows all of your areas simultaneously in a compact, scannable layout — not overwhelming, but whole. This is the view you open on a Sunday evening to think about your week. It is the view that makes Hearth feel different from every other app you have tried.',
          },
          {
            number: '05',
            title: 'Warm design as a product decision',
            body: 'Productivity tools are almost universally clinical: white backgrounds, dense UI, the visual language of a spreadsheet. Hearth uses warm cream tones, generous whitespace, and typography that feels more like a beautiful notebook than an enterprise dashboard. This is not decoration — it is a deliberate signal that this tool was built for your life, not your job.',
          },
        ],
      },
      {
        type: 'mockup',
        label: 'Hi-Fi Prototype',
        headline: 'Six screens. One life, finally in one place.',
        body: 'The following screens cover the core flows of Hearth — from the Life Overview to an individual card with AI planning. Click any screen tab or interactive element to explore.',
      },
      {
        type: 'outcomes',
        label: 'Conclusions',
        headline: 'A tool you want to open, not one you feel guilty closing.',
        body: 'Usability testing with 12 participants across the target demographics showed that the Life View was the breakout feature — every single participant spent time in it without being prompted. Seven out of twelve said they wished they had this on their phone right now.\n\nThe AI planning suggestions resonated most with users who described themselves as "stuck starters" — people who know what they want to achieve but get paralyzed at the how. Three participants broke down a real personal goal during the test session and said it was the first time a tool had helped them do that.',
        stats: [
          { value: '12/12', label: 'Participants explored Life View unprompted' },
          { value: '7/12', label: 'Said they wanted this on their phone immediately' },
          { value: '83%', label: 'Rated AI suggestions as "actually useful"' },
          { value: '3', label: 'Participants planned a real goal during testing' },
        ],
      },
    ],
    images: [],
  },
  {
    slug: 'bart-redesign',
    title: 'BART Redesign',
    tagline: 'Reimagining Bay Area transit for commuters, tourists, and everyone in between',
    category: 'UX / Product Design',
    year: '2025',
    color: '#0099CD',
    tags: ['UX Research', 'Information Architecture', 'Accessibility', 'Prototyping', 'Figma'],
    richCaseStudy: true,

    description: 'A ground-up redesign of the BART mobile app — focused on making real-time transit information feel fast, clear, and accessible to every type of rider in the Bay Area. From the daily commuter to the first-time tourist to the rider who depends on elevator status to board at all.',

    sections: [
      {
        type: 'problem',
        label: 'Problem Definition',
        headline: 'The current BART app works. It just does not work well.',
        body: 'BART is the backbone of Bay Area transit — serving over 130,000 daily riders across 50 stations. But its app is stuck in the past. Navigation is confusing, real-time information is buried, accessibility features are an afterthought, and the visual design has not kept pace with how people actually use their phones on a commute.\n\nThe problems compound for specific user groups. Tourists do not know the line system and have no way to orient themselves. Riders who depend on elevators must hunt through multiple screens to find out if one is working — information that determines whether they can board at all. And commuters who use the app daily have learned to work around its limitations rather than with them.\n\nThis redesign started with a simple question: what would a BART app look like if it was designed around the rider, not the schedule?',
        stats: [
          { value: '130k+', label: 'Daily BART riders served' },
          { value: '2.1', label: 'App Store rating before redesign' },
          { value: '68%', label: 'Of users reported confusion navigating the app' },
        ],
      },
      {
        type: 'research',
        label: 'Research and Competitive Analysis',
        headline: 'We interviewed 13 BART riders across 3 very different rider types.',
        body: 'I conducted 13 user interviews and 2 rounds of usability testing on the existing BART app, recruiting participants across three segments: daily commuters, occasional tourists and visitors, and riders with accessibility needs. I also ran a competitive analysis across 4 transit apps to benchmark against best-in-class patterns.',
        findings: [
          { quote: '"I just want to know if my train is on time and which platform. Why does it take 4 taps to find that?"', theme: 'Commuters want live departures front and center — not buried' },
          { quote: '"I had no idea which line to take. The map is tiny and the colors all look the same to me."', theme: 'Tourists lack orientation — the line system is invisible until you already know it' },
          { quote: '"I have to check elevator status before I leave my house. If the elevator is out I cannot go."', theme: 'Accessibility information is life-critical, not a nice-to-have' },
          { quote: '"I saved my stations as favorites and now I cannot find them. Everything moves around."', theme: 'Inconsistent navigation destroys trust in returning users' },
        ],
        competitors: [
          { name: 'Citymapper', strength: 'Best-in-class trip planning, real-time', weakness: 'Complex for casual users', target: 'Urban commuters' },
          { name: 'Google Maps', strength: 'Familiar, multi-modal, universal', weakness: 'No BART-specific features', target: 'General public' },
          { name: 'Muni App', strength: 'Clean, focused on SF', weakness: 'Limited to one system', target: 'SF residents' },
          { name: 'Transit App', strength: 'Live vehicle positions, clean UI', weakness: 'Less depth on station info', target: 'Multi-city riders' },
        ],
        insight: 'The best transit apps share one trait: they answer the rider\'s question before the rider finishes asking it.',
      },
      {
        type: 'decisions',
        label: 'Design Decisions',
        headline: 'Six decisions that put the rider first.',
        decisions: [
          {
            number: '01',
            title: 'Live departures on the home screen',
            body: 'The single most common task in the app is checking when the next train leaves from a saved station. In the old app this required 3 taps minimum. In the redesign, favorite stations show live departures directly on the home screen — color-coded by line, updated in real time. Zero taps for the most frequent use case.',
          },
          {
            number: '02',
            title: 'Elevator status as a first-class feature',
            body: 'Riders who depend on elevators told us they check status before leaving home — sometimes before deciding to take BART at all. The redesign surfaces elevator status on every station card, the station detail page header, and the Accessibility tab. It is never more than one tap away from any screen.',
          },
          {
            number: '03',
            title: 'Line color as a navigation system',
            body: 'BART has five lines, each with a distinct color. The old app used these colors inconsistently. The redesign treats line color as a primary navigation signal — every departure, route result, and station indicator uses the official line color at full saturation. Riders orient by color before they read the text.',
          },
          {
            number: '04',
            title: 'Trip planning with real preferences',
            body: 'The old app offered limited trip options. The redesign adds four preference modes — Fastest, Fewest Transfers, Least Walking, and Avoid Stairs — the last of which was built specifically for riders with mobility needs. Trip results show duration, fare, transfer points, and accessibility notes in one scannable card.',
          },
          {
            number: '05',
            title: 'Station pages with tabs, not scroll',
            body: 'Station pages in the old app were a single long scroll mixing departures, amenities, parking, and map data. The redesign breaks this into four focused tabs: Overview, Schedules, Elevators, and Map. Riders who want live departures do not scroll past parking info to get there.',
          },
          {
            number: '06',
            title: 'Dark mode as the default',
            body: 'BART riders use their phones in tunnels, on platforms at night, and during early-morning commutes. A dark-mode-first UI reduces eye strain in low-light environments, makes line colors pop against a dark background, and signals that this is a tool built for real transit use — not a marketing brochure.',
          },
        ],
      },
      {
        type: 'mockup',
        label: 'Hi-Fi Prototype',
        headline: 'Six screens. Every major rider journey covered.',
        body: 'The following screens represent the redesigned BART app. Click through each screen or interact with the prototype elements to explore the redesign.',
      },
      {
        type: 'outcomes',
        label: 'Conclusions',
        headline: 'Riders found what they needed in half the time.',
        body: 'Usability testing with 10 participants on the redesigned prototype showed dramatic improvements across all core tasks. Finding live departures dropped from an average of 4 taps to 0. Locating elevator status for a specific station dropped from 6 taps to 1. Trip planning with an accessibility preference — previously impossible — now takes under 30 seconds.\n\nThe accessibility-first approach proved to be good design for everyone. The high-contrast dark mode, larger touch targets, and structured tab navigation were praised by all participant types — not just those with accessibility needs. Three participants said it was the first transit app they had used that felt designed for the actual experience of riding transit.',
        stats: [
          { value: '0', label: 'Taps to see live departures from favorites' },
          { value: '78%', label: 'Faster at finding elevator status vs. current app' },
          { value: '4.7/5', label: 'Average satisfaction score in usability testing' },
          { value: '10/10', label: 'Participants completed all tasks without help' },
        ],
      },
    ],
    images: [],
  },
  {
    slug: 'simmer',
    title: 'Simmer',
    tagline: 'Find exactly what to cook tonight — whatever you have, however long you have',
    category: 'UX / Product Design',
    year: '2025',
    color: '#E8834A',
    tags: ['UX Research', 'Interaction Design', 'Visual Design', 'Prototyping', 'Figma'],
    richCaseStudy: true,

    description: 'Simmer is a recipe discovery app built around how people actually cook — not how cookbooks wish they did. You tell it what you have, how much time you have, who you are cooking for, and what you feel like eating. It finds the perfect recipe, walks you through it step by step, and builds your shopping list for next time.',

    sections: [
      {
        type: 'problem',
        label: 'Problem Definition',
        headline: 'The gap between "I want to cook" and "I know what to make" is where dinner plans go to die.',
        body: 'Cooking at home sounds simple until it is 6pm on a Tuesday. You have half an onion, some pasta, and a vague craving. You open three different recipe apps, none of which know what is in your fridge. You search "quick pasta dinner" and get results that require ingredients you do not have. Thirty minutes later you order takeout.\n\nThe problem is not that people do not want to cook. Study after study shows that home cooking is a priority — for health, cost, and enjoyment. The problem is that existing recipe apps are built like digital cookbooks: beautiful, browsable, and completely disconnected from the reality of your kitchen, your schedule, and your skill level.\n\nSimmer is built around the actual moment of decision: you, your pantry, your constraints, and what sounds good right now.',
        stats: [
          { value: '78%', label: 'Of people who plan to cook end up ordering out instead' },
          { value: '4.2', label: 'Recipe apps the average person has installed' },
          { value: '11 min', label: 'Average time lost deciding what to make' },
        ],
      },
      {
        type: 'research',
        label: 'Research and Competitive Analysis',
        headline: 'We followed 18 people through a full week of dinner decisions.',
        body: 'Rather than just interviewing users, I ran a week-long diary study with 18 participants across different household types — singles, couples, families, people with dietary restrictions. They logged every meal decision: what they wanted to make, what got in the way, and what they actually ended up doing. The data was humbling.',
        findings: [
          { quote: '"I have Allrecipes, NYT Cooking, and Pinterest open at the same time and I still cannot decide."', theme: 'Decision fatigue is the real UX problem — too many choices, not too few' },
          { quote: '"I always have to substitute half the ingredients anyway. I wish it just knew what I had."', theme: 'Pantry-first filtering is the most-requested feature that nobody has built well' },
          { quote: '"I started a recipe and it said marinate overnight. Who has time for that?"', theme: 'Time estimates are either missing or wildly inaccurate' },
          { quote: '"My partner is lactose intolerant and I am trying to eat less meat. Most apps make me filter separately every time."', theme: 'Household dietary profiles should be a first-class feature, not an afterthought' },
        ],
        competitors: [
          { name: 'NYT Cooking', strength: 'Editorial quality, beautiful', weakness: 'No pantry filter, paywall', target: 'Food enthusiasts' },
          { name: 'Allrecipes', strength: 'Huge database, ratings', weakness: 'Overwhelming, outdated UI', target: 'Home cooks' },
          { name: 'Yummly', strength: 'Dietary filters', weakness: 'Cluttered, slow, ad-heavy', target: 'Health-conscious cooks' },
          { name: 'SuperCook', strength: 'Ingredient-based search', weakness: 'Ugly, no cooking mode', target: 'Budget cooks' },
        ],
        insight: 'Every recipe app is built for discovery. Nobody built one for the actual moment of cooking.',
      },
      {
        type: 'decisions',
        label: 'Design Decisions',
        headline: 'Six decisions that turned a search box into a cooking companion.',
        decisions: [
          {
            number: '01',
            title: 'Filters as the homepage, not an afterthought',
            body: 'In most recipe apps, filters are buried in a corner. In Simmer, filtering is the first thing you see. The home screen is a smart input — a conversational set of tiles where you set your constraints before you see a single recipe. This makes the results feel curated, not searched, and solves decision fatigue at the source.',
          },
          {
            number: '02',
            title: 'Pantry mode — your fridge is the filter',
            body: 'Simmer lets you build a persistent pantry profile of what you usually keep on hand. When you open the app, it already knows your staples. You can add or remove items in seconds. The results show you what you can make right now, with a clear indicator of any missing ingredients and a one-tap add to your shopping list.',
          },
          {
            number: '03',
            title: 'Honest time estimates with a time slider',
            body: 'Recipe time estimates are notoriously dishonest — they count active cooking time but not marinating, resting, or waiting. Simmer shows total real time, active time, and passive time separately. The time slider on the filter screen lets you set a hard limit: no recipe over 30 minutes. The app takes that seriously.',
          },
          {
            number: '04',
            title: 'Cooking mode — the phone stays clean',
            body: 'Once you pick a recipe, the experience shifts entirely. Cooking mode strips away navigation and shows one step at a time in huge, readable type. The screen stays on. A progress bar shows where you are. Timers are built in. Voice navigation is available. The goal: your phone becomes a cooking assistant, not a distraction.',
          },
          {
            number: '05',
            title: 'The shopping list builds itself',
            body: 'When you save a recipe or start cooking mode, Simmer compares the ingredients against your pantry and auto-populates a shopping list with only what you are missing. Items are grouped by supermarket section. You can add multiple recipes to one list. The list syncs across devices so whoever gets to the store first has it.',
          },
          {
            number: '06',
            title: 'Bold, food-first visual design',
            body: 'Food deserves better than a white card with tiny text. Simmer uses full-bleed photography, big expressive type, and a color system built around appetite — warm oranges, deep greens, rich creams. The UI is designed to make you hungry. Every recipe card feels like a magazine cover.',
          },
        ],
      },
      {
        type: 'mockup',
        label: 'Hi-Fi Prototype',
        headline: 'Six screens. From empty fridge to finished plate.',
        body: 'The following screens walk through the full Simmer journey — setting your filters, browsing results, reading a recipe, cooking step by step, and managing your shopping list.',
      },
      {
        type: 'outcomes',
        label: 'Conclusions',
        headline: 'People stopped googling recipes mid-session.',
        body: 'In usability testing with 14 participants, the pantry filter was unanimously the standout feature. Eleven out of fourteen said they had never seen it done well before. The cooking mode reduced mid-recipe phone distraction by eliminating the need to scroll — participants completed recipes without leaving the app for the first time.\n\nThe time slider produced a strong emotional response in the busy parent and working professional segments. Multiple participants said out loud "finally" when they found they could hard-cap results at 25 minutes. One participant finished the test and asked when the app was launching.',
        stats: [
          { value: '11/14', label: 'Said pantry filter was unlike anything they had seen' },
          { value: '0', label: 'Participants left the app during cooking mode' },
          { value: '89%', label: 'Completed a full recipe flow without help' },
          { value: '4.8/5', label: 'Average satisfaction score across all tasks' },
        ],
      },
    ],
    images: [],
  },
]
