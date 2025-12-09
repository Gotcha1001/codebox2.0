// // app/api/seed-exercises/route.ts  (or wherever your file is)

// import { db } from "@/config/db";
// import { ExerciseTable } from "@/config/schema";
// import { NextResponse } from "next/server";
// import { sql } from "drizzle-orm";

// const DATA = [
//   {
//     courseId: 2,
//     chapterId: 1,
//     exerciseId: "explore-web-skeleton", // ← You need this! It's a string in your schema
//     exerciseName: "Explore the Web Skeleton",
//     exercisesContent: {
//       height: 1.6,
//       "background-color": "#0f0f0f",
//       padding: "20px",
//       style: "margin-bottom:8px;",
//       content:
//         '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Welcome, brave explorer! Your journey begins by discovering the HTML <strong>Web Skeleton</strong>. Every web page is built on the foundation of HTML. <strong>HTML</strong> (HyperText Markup Language) gives you a structure to display content. It’s the browser what type of document it is and prepares the page for modern rendering.</p><p style="margin-bottom:8px;">The outer wrapper <code>&lt;!DOCTYPE html&gt;</code> contains everything on the page — think of it as the walls of your fortress.</p><p style="margin-bottom:8px;">The <code>&lt;html&gt;</code> tag is the root, <code>&lt;head&gt;</code> stores your tools: the <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code> tags, and other hidden helpers.</p><p style="margin-bottom:8px;">The <code>&lt;body&gt;</code> holds everything the visitor sees — headings, paragraphs, images, and links all appear here.</p><p style="margin-bottom:8px;">If the skeleton is wrong, your page may look broken or confusing. Correct structure means a reliable page across browsers and devices.</p><p style="margin-bottom:8px;">Your first step to mastering web crafting is to build a proper HTML skeleton. Observe, build, and defend your web skeleton — then move on to more advanced quests with confidence!</p><p style="margin-bottom:8px;">Ready your quill:</p><code>&lt;!DOCTYPE html&gt;</code><br><code>&lt;html&gt;</code><br><code>&lt;head&gt;</code><br>&nbsp;&nbsp;<code>&lt;title&gt;Web Skeleton Adventure&lt;/title&gt;</code><br><code>&lt;/head&gt;</code><br><code>&lt;body&gt;</code><br>&nbsp;&nbsp;<code>&lt;h1&gt;Web Skeleton Adventure&lt;/h1&gt;</code><br>&nbsp;&nbsp;<code>&lt;p&gt;Start with strong foundations...&lt;/p&gt;</code><br><code>&lt;/body&gt;</code><br><code>&lt;/html&gt;</code>',
//       hintXp: 5,
//     },
//   },
//   {
//     courseId: 2,
//     chapterId: 1,
//     exerciseId: "build-base-camp",
//     exerciseName: "Build Your Base Camp",
//     exercisesContent: {
//       height: 1.6,
//       "background-color": "#0f0f0f",
//       padding: "20px",
//       style: "margin-bottom:8px;",
//       content:
//         '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Every adventurer needs a base camp — a safe place to plan and rest. In HTML, your base camp is built with headings, paragraphs, and sections.</p><p style="margin-bottom:8px;">A main heading <code>&lt;h1&gt;</code> is like a flag planted at the camp’s center, marking its purpose.</p><p style="margin-bottom:8px;">Paragraphs <code>&lt;p&gt;</code> are the camp logs where you record instructions, stories, and NPC dialogues.</p><p style="margin-bottom:8px;">Sections <code>&lt;section&gt;</code> divide your camp into zones — training grounds, supply tents, and the map room.</p><p style="margin-bottom:8px;">Proper spacing and layout make your camp organized, accessible, and friendly to both players and browsers.</p><p style="margin-bottom:8px;">Your quest: build a base camp structure and put clear headings, paragraphs, and sections in place.</p><p style="margin-bottom:8px;">Start building your fortress of HTML elements!</p>',
//       hintXp: 35,
//     },
//   },
//   {
//     courseId: 2,
//     chapterId: 1,
//     exerciseId: "break-and-repair",
//     exerciseName: "Break & Repair",
//     exercisesContent: {
//       height: 1.6,
//       "background-color": "#0f0f0f",
//       padding: "20px",
//       style: "margin-bottom:8px;",
//       content:
//         '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Even the best fortresses can develop cracks. In HTML, broken or unclosed tags are the cracks that cause rendering issues.</p><p style="margin-bottom:8px;">Your role is the repair hero: identify missing closing tags, mismatched nesting, and misplaced elements.</p><p style="margin-bottom:8px;">Begin the repair now and claim the title of ‘Master Fixer’!</p>',
//       hintXp: 40,
//     },
//   },
//   {
//     courseId: 2,
//     chapterId: 1,
//     exerciseId: "html-detective",
//     exerciseName: "HTML Detective",
//     exercisesContent: {
//       height: 1.6,
//       "background-color": "#0f0f0f",
//       padding: "20px",
//       style: "margin-bottom:8px;",
//       content:
//         '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Don your detective hat — it’s time to hunt down HTML mistakes. A skilled detective finds missing tags, wrong nesting, etc.</p><p style="margin-bottom:8px;">Fix typos and ensure proper nesting.</p><p style="margin-bottom:8px;">All HTML errors are found!</p>',
//       hintXp: 45,
//     },
//   },
//   {
//     courseId: 2,
//     chapterId: 1,
//     exerciseId: "element-collector",
//     exerciseName: "Element Collector",
//     exercisesContent: {
//       height: 1.6,
//       "background-color": "#0f0f0f",
//       padding: "20px",
//       style: "margin-bottom:8px;",
//       content:
//         '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Begin the element collection now — three artifacts await!</p><p style="margin-bottom:8px;">Use <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, and <code>&lt;mark&gt;</code> with strong element treasures!</p><p style="margin-bottom:8px;">Gather all HTML treasures!!</p>',
//       hintXp: 50,
//     },
//   },
// ];

// export async function GET() {
//   try {
//     // Insert all exercises
//     await db.insert(ExerciseTable).values(DATA);

//     return NextResponse.json({ message: "Successfully inserted 5 exercises!" });
//   } catch (error) {
//     console.error("Insert failed:", error);
//     return NextResponse.json(
//       { error: "Failed to insert exercises", details: error },
//       { status: 500 }
//     );
//   }
// }
// app/api/seed-exercises/route.ts
// import { db } from "@/config/db";
// import { ExerciseTable } from "@/config/schema";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const DATA = [
//       {
//         courseId: 2,
//         exerciseId: "explore-the-web-skeleton",
//         exerciseName: "Explore the Web Skeleton",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Welcome, brave explorer! Your journey begins by discovering the <strong>Web Skeleton</strong>. Every web page is built on the foundation of HTML.</p><p style="margin-bottom:8px;">The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser what type of document it is and prepares the page for modern rendering.</p><p style="margin-bottom:8px;">The outer wrapper <code>&lt;html&gt;</code> contains everything on the page — think of it as the walls of your fortress.</p><p style="margin-bottom:8px;">Inside the fortress, the <code>&lt;head&gt;</code> stores your tools: the <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code> tags, and other hidden helpers.</p><p style="margin-bottom:8px;">The <code>&lt;body&gt;</code> is the open field where your story unfolds — headings, paragraphs, images, and links all appear here.</p><p style="margin-bottom:8px;">Headings act like banners guiding visitors; paragraphs are your story logs; lists are inventories of items or tasks.</p><p style="margin-bottom:8px;">If the skeleton is wrong, your page may look broken or confusing. Correct structure means a reliable page across browsers and devices.</p><p style="margin-bottom:8px;">This exercise trains you to recognize the essential tags that every HTML page needs. It is the first step to mastering web crafting.</p><p style="margin-bottom:8px;">Observe, build, and defend your web skeleton — then move on to more advanced quests with confidence!</p><p style="margin-bottom:8px;">Ready your quill: identify the DOCTYPE, the <code>&lt;html&gt;</code> wrapper, a proper <code>&lt;head&gt;</code> and the <code>&lt;body&gt;</code> to claim your victory.</p><p style="margin-bottom:8px;">Completing this will unlock basic HTML understanding and set you up for the rest of the course.</p><p style="margin-bottom:8px;">Good luck — the web awaits!</p><code><body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a complete HTML skeleton including <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. Inside <code>&lt;head&gt;</code> add a <code>&lt;title&gt;</code> with the text <strong>"hint":</strong> <code>&lt;body style="font-family:Arial,sans-serif;padding:10px;"><p>Start with <code>&lt;!DOCTYPE html&gt;</code>, then create <code>&lt;html lang="en"&gt;</code>. Inside head add <code>&lt;title&gt;Web Skeleton Adventure&lt;/title&gt;</code>. Finally add an empty <code>&lt;body&gt;</code>.</p></body>',
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title></title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex: "(?i)<title>\\s*Web Skeleton Adventure\\s*</title>",
//           output: "<title>Web Skeleton Adventure</title>",
//           hintXp: 30,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "build-your-base-camp",
//         exerciseName: "Build Your Base Camp",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Every adventurer needs a base camp — a safe place to plan and rest. In HTML, your base camp is built with headings, paragraphs, and sections.</p><p style="margin-bottom:8px;">A main heading <code>&lt;h1&gt;</code> is like a flag planted at the camp\'s center, marking its purpose.</p><p style="margin-bottom:8px;">Paragraphs <code>&lt;p&gt;</code> are the camp logs where you record instructions, stories, and NPC dialogues.</p><p style="margin-bottom:8px;">Sections <code>&lt;section&gt;</code> divide your camp into zones—training grounds, supply tents, and the map room.</p><p style="margin-bottom:8px;">Proper spacing and layout make your camp organized, accessible, and friendly to both players and browsers.</p><p style="margin-bottom:8px;">Headings provide hierarchy; paragraphs provide content; sections add structure and descriptive paragraphs to organize your base better and clarify your objectives will be easier to implement and navigate.</p><p style="margin-bottom:8px;">This exercise focuses on placing a strong heading and a descriptive paragraph in the body.</p><p style="margin-bottom:8px;">Think of HTML elements as camp equipment—each has a specific role and must be used conveniently.</p><p style="margin-bottom:8px;">If your base camp is solid, you can explore the rest of the web world without worry.</p><p style="margin-bottom:8px;">Fix the hangup; set up your flag and write your first log to start the adventure!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the <code>&lt;body&gt;</code> add a heading <code>&lt;h1&gt;</code> with the text <strong>"Welcome to Base Camp"</strong>, then add a paragraph <code>&lt;p&gt;</code> with the text <strong>"Prepare yourself for the HTML adventure!"</strong>.</p></body>',
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Base Camp</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Welcome to Base Camp\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Prepare yourself for the HTML adventure!\\s*</p>",
//           output:
//             "<h1>Welcome to Base Camp</h1><p>Prepare yourself for the HTML adventure!</p>",
//           hintXp: 35,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "name-your-world",
//         exerciseName: "Name Your World",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Every hero needs a place — a clear identity so explorers can find and recognize it. In HTML, the world is named with the <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code>.</p><p style="margin-bottom:8px;">The title appears on the browser tab and in search results, serving as your world\'s calling card.</p><p style="margin-bottom:8px;">A good title helps visitors quickly identify what your page is about. A descriptive, unique world well increases discoverability and gives your site a professional feel.</p><p style="margin-bottom:8px;">This exercise encourages you to place the correct title in the head and choose a clear name for your HTML world.</p><p style="margin-bottom:8px;">Think of the title as a sign that names every corner\'s map — make it meaningful and memorable.</p><p style="margin-bottom:8px;">Even small pages benefit from a thoughtful title — it is all web browsers\' first navigation point.</p><p style="margin-bottom:8px;">Proper title tags help your page appear properly in tabs and bookmarks.</p><p style="margin-bottom:8px;">This task is simple but crucial — do it correctly to move toward in the questline.</p><p style="margin-bottom:8px;">Add your world name inside the head and prepare for the next chapter of adventures.</p><p style="margin-bottom:8px;">Your title borderless is the identity of your entire page — one you built earlier.</p><p style="margin-bottom:8px;">Name well — your kingdom\'s reputation depends on it!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the HTML page <code>&lt;title&gt;</code> to <strong>My Adventure World</strong> inside the <code>&lt;head&gt;</code>.</p><p style="margin-bottom:8px;">Your <code>&lt;title&gt;</code> must be inside head, not body.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Open the <code>&lt;head&gt;</code> and add <code>&lt;title&gt;My Adventure World&lt;/title&gt;</code> there.</p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex: "(?i)<title>\\s*My Adventure World\\s*</title>",
//           output: "<title>My Adventure World</title>",
//           hintXp: 38,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "break-and-repair",
//         exerciseName: "Break & Repair",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Even the best fortresses can develop cracks. In HTML, broken or unclosed tags are the cracks that cause rendering issues.</p><p style="margin-bottom:8px;">Your role is the repair hero: identify missing closing tags, mismatched nesting, and misplaced elements.</p><p style="margin-bottom:8px;">Properly nested tags ensure structure maintains correct rendering. An opening tag (example <code>&lt;h1&gt;</code>) should have a matching closing tag (<code>&lt;/h1&gt;</code>) unless it is self-closing. A style="margin-bottom:8px;">Wrong nesting (for example placing a block-level tag inside an inline tag) can also break layouts and semantics.</p><p style="margin-bottom:8px;">For example, every time you add a broken snippet to inspect and fix — a practical detective mission.</p><p style="margin-bottom:8px;">Fixing HTML strengthens your structure skills. Debug future failures and interactable.</p><p style="margin-bottom:8px;">Common mistakes include missing closing tags or wrong order of closing tags when repairing code.</p><p style="margin-bottom:8px;">Once repaired, the page should display as the correct heading and paragraph texts as intended.</p><p style="margin-bottom:8px;">Good repair work increases your reliability as a web craftsman and prepares you for future complete challenges.</p><p style="margin-bottom:8px;">This mission hones attention to detail — a vital skill for all web developers.</p><p style="margin-bottom:8px;">Fix the cracks and your fortress will stand tall.</p><p style="margin-bottom:8px;">Begin the repair now and claim the title of Master Fixer.</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inspect and fix the broken HTML so all tags are properly opened and closed. After repair, the body should show a heading <code>&lt;h1&gt;</code> with <strong>Fortress Repaired</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>Your castle is strong again!</strong></p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Look for missing <code>&lt;/title&gt;</code>, missing <code>&lt;/h1&gt;</code> or <code>&lt;/p&gt;</code>. Ensure tags are nested correctly: <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code> must be complete.</p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Fortress Repair\\n\\n <h1>Fortress Repair\\n\\n <p>Your castle is strong again!\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Fortress Repair\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Your castle is strong again!\\s*</p>",
//           output: "<h1>Fortress Repair</h1><p>Your castle is strong again!</p>",
//           hintXp: 40,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "html-detective",
//         exerciseName: "HTML Detective",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Don your detective hat — it\'s time to hunt down HTML mistakes. A skilled detective finds missing tags, typos, and wrong nesting.</p><p style="margin-bottom:8px;">Start by examining the tags systematically: are any missing (for example, no closing <code>&lt;/head&gt;</code> instead of <code>&lt;head&gt;</code>).</p><p style="margin-bottom:8px;">Check that each element sits where the examiner: headings in <code>&lt;body&gt;</code> — never in <code>&lt;head&gt;</code>.</p><p style="margin-bottom:8px;">Missing quotes on attributes or stray characters can also break parsing: be vigilant.</p><p style="margin-bottom:8px;">A thorough code exercise helps you tackle a nearly-correct file with subtle issues; your job is to correct them so the expected texts appear.</p><p style="margin-bottom:8px;">Keeping a checklist helps: DOCTYPE, HTML lang, head with title, body with content, and matching closing tags.</p><p style="margin-bottom:8px;">A methodical approach will help you become faster at spotting typical coding errors.</p><p style="margin-bottom:8px;">Once all the errors are found and fixed, the page should show the heading and paragraph exactly as specified. A saving margin-bottom:8px;">Inspect detective training is essential. It saves time and prevents frustrating bugs later.</p><p style="margin-bottom:8px;">Inspect, correct, instance and log your level up your debugging skills.</p><p style="margin-bottom:8px;">Complete this case and wear the badge of HTML Detective with pride.</p><p style="margin-bottom:8px;">Begin the investigation!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inspect the faulty HTML and correct any missing or broken tags. After fixing, the page must contain a heading <code>&lt;h1&gt;</code> with <strong>Detective Mode</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>HTML errors are found</strong>.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Search for title missing <code>&lt;/title&gt;</code> without or typos and ensure proper nesting.</p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Detective Base</title>\\n</head>\\n<body>\\n\\n  <h1 Detective Mode\\n <p>HTML errors are found!\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Detective Mode\\s*</h1>[\\s\\S]*<p>[\\s\\S]*HTML errors are found!\\s*</p>",
//           output: "<h1>Detective Mode</h1><p>All HTML errors are found!</p>",
//           hintXp: 45,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "element-collector",
//         exerciseName: "Element Collector",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Become the element collector — gather headings, paragraphs, and lists to build a rich page. Each heading represents an artifact that gives meaning and structure.</p><p style="margin-bottom:8px;">A well-structured page is organized, clear, and easy to navigate.</p><p style="margin-bottom:8px;">Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) give hierarchy; paragraphs (<code>&lt;p&gt;</code>) provide content; lists (<code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>) organize items.</p><p style="margin-bottom:8px;">Links (<code>&lt;a&gt;</code>) guide explorers to new realms, and images (<code>&lt;img&gt;</code>) paint your world.</p><p style="margin-bottom:8px;">Collecting more unique elements expands your toolbox; your pages become scannable, accessible, and enjoyable to read.</p><p style="margin-bottom:8px;">This exercise will ask you to produce multiple elements and use them in the body.</p><p style="margin-bottom:8px;">Think of each <code>&lt;li&gt;</code> as a treasure chest — list them cleanly for retrieval.</p><p style="margin-bottom:8px;">Collecting and arranging elements teaches you how to present information cleanly and logically.</p><p style="margin-bottom:8px;">A well-structured page is easy to scan and navigate in browsers.</p><p style="margin-bottom:8px;">Practice makes perfect: the more elements you use, the more confident you become.</p><p style="margin-bottom:8px;">Collect enough elements and your inventory will be complete.</p><p style="margin-bottom:8px;">Complex pages by mastering small, reusable parts.</p><p style="margin-bottom:8px;">Collect all your inventory elements and be complete.</p><p style="margin-bottom:8px;">Start collecting now — three artifacts await!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the Collection</strong>, a paragraph <code>&lt;p&gt;</code> with <strong>Gather all HTML treasures!</strong>, and an unordered list <code>&lt;ul&gt;</code> with three list items: <strong>Headings</strong>, <strong>Paragraphs</strong>, and <strong>Links</strong>.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>&lt;h1&gt;</code> for the heading, <code>&lt;p&gt;</code> for the paragraph, and a <code>&lt;ul&gt;</code> with three <code>&lt;li&gt;</code> items. Example: <code>&lt;li&gt;Headings&lt;/li&gt;</code></p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Element Collector</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Element Collection\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Gather all HTML treasures!\\s*</p>[\\s\\S]*<li>[\\s\\S]*<li>[\\s\\S]*Headings\\s*</li>[\\s\\S]*<li>[\\s\\S]*Paragraphs\\s*</li>[\\s\\S]*<li>[\\s\\S]*Links\\s*</li>",
//           output:
//             "<h1>Element Collection</h1><p>Gather all HTML treasures!</p><ul><li>Headings</li><li>Paragraphs</li><li>Links</li></ul>",
//           hintXp: 35,
//         },
//       },
//     ];

//     await db.insert(ExerciseTable).values(DATA);

//     return NextResponse.json({
//       message: "Successfully inserted exercises!",
//     });
//   } catch (error) {
//     console.error("Insert failed:", error);
//     return NextResponse.json(
//       { error: "Failed to insert exercises", details: error },
//       { status: 500 }
//     );
//   }
// }
// import { db } from "@/config/db";
// import { ExerciseTable } from "@/config/schema";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const DATA = [
//       {
//         courseId: 2,
//         exerciseId: "explore-the-web-skeleton",
//         exerciseName: "Explore the Web Skeleton",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Welcome, brave explorer! Your journey begins by discovering the <strong>Web Skeleton</strong>. Every web page is built on the foundation of HTML.</p><p style="margin-bottom:8px;">The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser what type of document it is and prepares the page for modern rendering.</p><p style="margin-bottom:8px;">The outer wrapper <code>&lt;html&gt;</code> contains everything on the page — think of it as the walls of your fortress.</p><p style="margin-bottom:8px;">Inside the fortress, the <code>&lt;head&gt;</code> stores your tools: the <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code> tags, and other hidden helpers.</p><p style="margin-bottom:8px;">The <code>&lt;body&gt;</code> is the open field where your story unfolds — headings, paragraphs, images, and links all appear here.</p><p style="margin-bottom:8px;">Headings act like banners guiding visitors; paragraphs are your story logs; lists are inventories of items or tasks.</p><p style="margin-bottom:8px;">If the skeleton is wrong, your page may look broken or confusing. Correct structure means a reliable page across browsers and devices.</p><p style="margin-bottom:8px;">This exercise trains you to recognize the essential tags that every HTML page needs. It is the first step to mastering web crafting.</p><p style="margin-bottom:8px;">Observe, build, and defend your web skeleton — then move on to more advanced quests with confidence!</p><p style="margin-bottom:8px;">Ready your quill: identify the DOCTYPE, the <code>&lt;html&gt;</code> wrapper, a proper <code>&lt;head&gt;</code> and the <code>&lt;body&gt;</code> to claim your victory.</p><p style="margin-bottom:8px;">Completing this will unlock basic HTML understanding and set you up for the rest of the course.</p><p style="margin-bottom:8px;">Good luck — the web awaits!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a complete HTML skeleton including <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. Inside <code>&lt;head&gt;</code> add a <code>&lt;title&gt;</code> with the text <strong>"Web Skeleton Adventure"</strong>.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Start with <code>&lt;!DOCTYPE html&gt;</code>, then create <code>&lt;html lang="en"&gt;</code>. Inside head add <code>&lt;title&gt;Web Skeleton Adventure&lt;/title&gt;</code>. Finally add an empty <code>&lt;body&gt;</code>.</p></body>',
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title></title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex: "(?i)<title>\\s*Web Skeleton Adventure\\s*</title>",
//           output: "<title>Web Skeleton Adventure</title>",
//           hintXp: 30,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "build-your-base-camp",
//         exerciseName: "Build Your Base Camp",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Every adventurer needs a base camp — a safe place to plan and rest. In HTML, your base camp is built with headings, paragraphs, and sections.</p><p style="margin-bottom:8px;">A main heading <code>&lt;h1&gt;</code> is like a flag planted at the camp\'s center, marking its purpose.</p><p style="margin-bottom:8px;">Paragraphs <code>&lt;p&gt;</code> are the camp logs where you record instructions, stories, and NPC dialogues.</p><p style="margin-bottom:8px;">Sections <code>&lt;section&gt;</code> divide your camp into zones—training grounds, supply tents, and the map room.</p><p style="margin-bottom:8px;">Proper spacing and layout make your camp organized, accessible, and friendly to both players and browsers.</p><p style="margin-bottom:8px;">Headings provide hierarchy; paragraphs provide content; sections add structure and descriptive paragraphs to organize your base better and clarify your objectives will be easier to implement and navigate.</p><p style="margin-bottom:8px;">This exercise focuses on placing a strong heading and a descriptive paragraph in the body.</p><p style="margin-bottom:8px;">Think of HTML elements as camp equipment—each has a specific role and must be used conveniently.</p><p style="margin-bottom:8px;">If your base camp is solid, you can explore the rest of the web world without worry.</p><p style="margin-bottom:8px;">Fix the hangup; set up your flag and write your first log to start the adventure!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the <code>&lt;body&gt;</code> add a heading <code>&lt;h1&gt;</code> with the text <strong>"Welcome to Base Camp"</strong>, then add a paragraph <code>&lt;p&gt;</code> with the text <strong>"Prepare yourself for the HTML adventure!"</strong>.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Add <code>&lt;h1&gt;Welcome to Base Camp&lt;/h1&gt;</code> followed by <code>&lt;p&gt;Prepare yourself for the HTML adventure!&lt;/p&gt;</code> inside the body tags.</p></body>',
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Base Camp</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Welcome to Base Camp\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Prepare yourself for the HTML adventure!\\s*</p>",
//           output:
//             "<h1>Welcome to Base Camp</h1><p>Prepare yourself for the HTML adventure!</p>",
//           hintXp: 35,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "name-your-world",
//         exerciseName: "Name Your World",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Every hero needs a place — a clear identity so explorers can find and recognize it. In HTML, the world is named with the <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code>.</p><p style="margin-bottom:8px;">The title appears on the browser tab and in search results, serving as your world\'s calling card.</p><p style="margin-bottom:8px;">A good title helps visitors quickly identify what your page is about. A descriptive, unique world well increases discoverability and gives your site a professional feel.</p><p style="margin-bottom:8px;">This exercise encourages you to place the correct title in the head and choose a clear name for your HTML world.</p><p style="margin-bottom:8px;">Think of the title as a sign that names every corner\'s map — make it meaningful and memorable.</p><p style="margin-bottom:8px;">Even small pages benefit from a thoughtful title — it is all web browsers\' first navigation point.</p><p style="margin-bottom:8px;">Proper title tags help your page appear properly in tabs and bookmarks.</p><p style="margin-bottom:8px;">This task is simple but crucial — do it correctly to move toward in the questline.</p><p style="margin-bottom:8px;">Add your world name inside the head and prepare for the next chapter of adventures.</p><p style="margin-bottom:8px;">Your title borderless is the identity of your entire page — one you built earlier.</p><p style="margin-bottom:8px;">Name well — your kingdom\'s reputation depends on it!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the <code>&lt;head&gt;</code> section, add a <code>&lt;title&gt;</code> tag with the text <strong>"My Adventure World"</strong>.</p><p style="margin-bottom:8px;">Note: Your <code>&lt;title&gt;</code> must be inside head, not body.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Open the <code>&lt;head&gt;</code> and add <code>&lt;title&gt;My Adventure World&lt;/title&gt;</code> there.</p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex: "(?i)<title>\\s*My Adventure World\\s*</title>",
//           output: "<title>My Adventure World</title>",
//           hintXp: 38,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "break-and-repair",
//         exerciseName: "Break & Repair",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Even the best fortresses can develop cracks. In HTML, broken or unclosed tags are the cracks that cause rendering issues.</p><p style="margin-bottom:8px;">Your role is the repair hero: identify missing closing tags, mismatched nesting, and misplaced elements.</p><p style="margin-bottom:8px;">Properly nested tags ensure structure maintains correct rendering. An opening tag (example <code>&lt;h1&gt;</code>) should have a matching closing tag (<code>&lt;/h1&gt;</code>) unless it is self-closing. A style="margin-bottom:8px;">Wrong nesting (for example placing a block-level tag inside an inline tag) can also break layouts and semantics.</p><p style="margin-bottom:8px;">For example, every time you add a broken snippet to inspect and fix — a practical detective mission.</p><p style="margin-bottom:8px;">Fixing HTML strengthens your structure skills. Debug future failures and interactable.</p><p style="margin-bottom:8px;">Common mistakes include missing closing tags or wrong order of closing tags when repairing code.</p><p style="margin-bottom:8px;">Once repaired, the page should display as the correct heading and paragraph texts as intended.</p><p style="margin-bottom:8px;">Good repair work increases your reliability as a web craftsman and prepares you for future complete challenges.</p><p style="margin-bottom:8px;">This mission hones attention to detail — a vital skill for all web developers.</p><p style="margin-bottom:8px;">Fix the cracks and your fortress will stand tall.</p><p style="margin-bottom:8px;">Begin the repair now and claim the title of Master Fixer.</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inspect and fix the broken HTML so all tags are properly opened and closed. After repair, the body should show a heading <code>&lt;h1&gt;</code> with <strong>"Fortress Repaired"</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>"Your castle is strong again!"</strong>.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Look for missing <code>&lt;/title&gt;</code>, missing <code>&lt;/h1&gt;</code> or <code>&lt;/p&gt;</code>. Ensure tags are nested correctly: <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code> must be complete.</p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Fortress Repair\\n\\n <h1>Fortress Repair\\n\\n <p>Your castle is strong again!\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Fortress Repair\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Your castle is strong again!\\s*</p>",
//           output: "<h1>Fortress Repair</h1><p>Your castle is strong again!</p>",
//           hintXp: 40,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "html-detective",
//         exerciseName: "HTML Detective",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Don your detective hat — it\'s time to hunt down HTML mistakes. A skilled detective finds missing tags, typos, and wrong nesting.</p><p style="margin-bottom:8px;">Start by examining the tags systematically: are any missing (for example, no closing <code>&lt;/head&gt;</code> instead of <code>&lt;head&gt;</code>).</p><p style="margin-bottom:8px;">Check that each element sits where the examiner: headings in <code>&lt;body&gt;</code> — never in <code>&lt;head&gt;</code>.</p><p style="margin-bottom:8px;">Missing quotes on attributes or stray characters can also break parsing: be vigilant.</p><p style="margin-bottom:8px;">A thorough code exercise helps you tackle a nearly-correct file with subtle issues; your job is to correct them so the expected texts appear.</p><p style="margin-bottom:8px;">Keeping a checklist helps: DOCTYPE, HTML lang, head with title, body with content, and matching closing tags.</p><p style="margin-bottom:8px;">A methodical approach will help you become faster at spotting typical coding errors.</p><p style="margin-bottom:8px;">Once all the errors are found and fixed, the page should show the heading and paragraph exactly as specified. A saving margin-bottom:8px;">Inspect detective training is essential. It saves time and prevents frustrating bugs later.</p><p style="margin-bottom:8px;">Inspect, correct, instance and log your level up your debugging skills.</p><p style="margin-bottom:8px;">Complete this case and wear the badge of HTML Detective with pride.</p><p style="margin-bottom:8px;">Begin the investigation!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inspect the faulty HTML and correct any missing or broken tags. After fixing, the page must contain a heading <code>&lt;h1&gt;</code> with <strong>"Detective Mode"</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>"All HTML errors are found!"</strong>.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Search for missing closing tags like <code>&lt;/title&gt;</code>, check for missing <code>&gt;</code> on the <code>&lt;h1&gt;</code> tag, and ensure proper nesting with closing <code>&lt;/p&gt;</code>.</p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Detective Base</title>\\n</head>\\n<body>\\n\\n  <h1 Detective Mode\\n <p>HTML errors are found!\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Detective Mode\\s*</h1>[\\s\\S]*<p>[\\s\\S]*HTML errors are found!\\s*</p>",
//           output: "<h1>Detective Mode</h1><p>All HTML errors are found!</p>",
//           hintXp: 45,
//         },
//       },
//       {
//         courseId: 2,
//         exerciseId: "element-collector",
//         exerciseName: "Element Collector",
//         chapterId: 1,
//         exercisesContent: {
//           content:
//             '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Become the element collector — gather headings, paragraphs, and lists to build a rich page. Each heading represents an artifact that gives meaning and structure.</p><p style="margin-bottom:8px;">A well-structured page is organized, clear, and easy to navigate.</p><p style="margin-bottom:8px;">Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) give hierarchy; paragraphs (<code>&lt;p&gt;</code>) provide content; lists (<code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>) organize items.</p><p style="margin-bottom:8px;">Links (<code>&lt;a&gt;</code>) guide explorers to new realms, and images (<code>&lt;img&gt;</code>) paint your world.</p><p style="margin-bottom:8px;">Collecting more unique elements expands your toolbox; your pages become scannable, accessible, and enjoyable to read.</p><p style="margin-bottom:8px;">This exercise will ask you to produce multiple elements and use them in the body.</p><p style="margin-bottom:8px;">Think of each <code>&lt;li&gt;</code> as a treasure chest — list them cleanly for retrieval.</p><p style="margin-bottom:8px;">Collecting and arranging elements teaches you how to present information cleanly and logically.</p><p style="margin-bottom:8px;">A well-structured page is easy to scan and navigate in browsers.</p><p style="margin-bottom:8px;">Practice makes perfect: the more elements you use, the more confident you become.</p><p style="margin-bottom:8px;">Collect enough elements and your inventory will be complete.</p><p style="margin-bottom:8px;">Complex pages by mastering small, reusable parts.</p><p style="margin-bottom:8px;">Collect all your inventory elements and be complete.</p><p style="margin-bottom:8px;">Start collecting now — three artifacts await!</p></body>',
//           task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the <code>&lt;body&gt;</code>, add a heading <code>&lt;h1&gt;</code> with <strong>"Element Collection"</strong>, a paragraph <code>&lt;p&gt;</code> with <strong>"Gather all HTML treasures!"</strong>, and an unordered list <code>&lt;ul&gt;</code> with three list items: <strong>"Headings"</strong>, <strong>"Paragraphs"</strong>, and <strong>"Links"</strong>.</p></body>',
//           hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>&lt;h1&gt;</code> for the heading, <code>&lt;p&gt;</code> for the paragraph, and a <code>&lt;ul&gt;</code> with three <code>&lt;li&gt;</code> items. Example: <code>&lt;li&gt;Headings&lt;/li&gt;</code></p></body>',
//           starterCode: "",
//           "index.html":
//             '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Element Collector</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
//           regex:
//             "(?i)<h1>\\s*Element Collection\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Gather all HTML treasures!\\s*</p>[\\s\\S]*<li>[\\s\\S]*<li>[\\s\\S]*Headings\\s*</li>[\\s\\S]*<li>[\\s\\S]*Paragraphs\\s*</li>[\\s\\S]*<li>[\\s\\S]*Links\\s*</li>",
//           output:
//             "<h1>Element Collection</h1><p>Gather all HTML treasures!</p><ul><li>Headings</li><li>Paragraphs</li><li>Links</li></ul>",
//           hintXp: 35,
//         },
//       },
//     ];

//     await db.insert(ExerciseTable).values(DATA);

//     return NextResponse.json({
//       message: "Successfully inserted exercises!",
//     });
//   } catch (error) {
//     console.error("Insert failed:", error);
//     return NextResponse.json(
//       { error: "Failed to insert exercises", details: error },
//       { status: 500 }
//     );
//   }
// }
import { db } from "@/config/db";
import { ExerciseTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const DATA = [
      {
        courseId: 2,
        exerciseId: "explore-the-web-skeleton",
        exerciseName: "Explore the Web Skeleton",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Welcome, brave explorer! Your journey begins by discovering the <strong>Web Skeleton</strong>. Every web page is built on the foundation of HTML.</p><p style="margin-bottom:8px;">The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser what type of document it is and prepares the page for modern rendering.</p><p style="margin-bottom:8px;">The outer wrapper <code>&lt;html&gt;</code> contains everything on the page — think of it as the walls of your fortress.</p><p style="margin-bottom:8px;">Inside the fortress, the <code>&lt;head&gt;</code> stores your tools: the <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code> tags, and other hidden helpers.</p><p style="margin-bottom:8px;">The <code>&lt;body&gt;</code> is the open field where your story unfolds — headings, paragraphs, images, and links all appear here.</p><p style="margin-bottom:8px;">Headings act like banners guiding visitors; paragraphs are your story logs; lists are inventories of items or tasks.</p><p style="margin-bottom:8px;">If the skeleton is wrong, your page may look broken or confusing. Correct structure means a reliable page across browsers and devices.</p><p style="margin-bottom:8px;">This exercise trains you to recognize the essential tags that every HTML page needs. It is the first step to mastering web crafting.</p><p style="margin-bottom:8px;">Observe, build, and defend your web skeleton — then move on to more advanced quests with confidence!</p><p style="margin-bottom:8px;">Ready your quill: identify the DOCTYPE, the <code>&lt;html&gt;</code> wrapper, a proper <code>&lt;head&gt;</code> and the <code>&lt;body&gt;</code> to claim your victory.</p><p style="margin-bottom:8px;">Completing this will unlock basic HTML understanding and set you up for the rest of the course.</p><p style="margin-bottom:8px;">Good luck — the web awaits!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a complete HTML skeleton including <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang="en"&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. Inside <code>&lt;head&gt;</code> add a <code>&lt;title&gt;</code> with the text <strong>"Web Skeleton Adventure"</strong>.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Start with <code>&lt;!DOCTYPE html&gt;</code>, then create <code>&lt;html lang="en"&gt;</code>. Inside head add <code>&lt;title&gt;Web Skeleton Adventure&lt;/title&gt;</code>. Finally add an empty <code>&lt;body&gt;</code>.</p></body>',
          starterCode: {
            "/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<h1></h1>
<body>

</body>
</html>`,
          },
          "index.html":
            '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title></title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
          regex: "(?i)<title>\\s*Web Skeleton Adventure\\s*</title>",
          output: "<title>Web Skeleton Adventure</title>",
          hintXp: 30,
        },
      },
      {
        courseId: 2,
        exerciseId: "build-your-base-camp",
        exerciseName: "Build Your Base Camp",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Every adventurer needs a base camp — a safe place to plan and rest. In HTML, your base camp is built with headings, paragraphs, and sections.</p><p style="margin-bottom:8px;">A main heading <code>&lt;h1&gt;</code> is like a flag planted at the camp\'s center, marking its purpose.</p><p style="margin-bottom:8px;">Paragraphs <code>&lt;p&gt;</code> are the camp logs where you record instructions, stories, and NPC dialogues.</p><p style="margin-bottom:8px;">Sections <code>&lt;section&gt;</code> divide your camp into zones—training grounds, supply tents, and the map room.</p><p style="margin-bottom:8px;">Proper spacing and layout make your camp organized, accessible, and friendly to both players and browsers.</p><p style="margin-bottom:8px;">Headings provide hierarchy; paragraphs provide content; sections add structure and descriptive paragraphs to organize your base better and clarify your objectives will be easier to implement and navigate.</p><p style="margin-bottom:8px;">This exercise focuses on placing a strong heading and a descriptive paragraph in the body.</p><p style="margin-bottom:8px;">Think of HTML elements as camp equipment—each has a specific role and must be used conveniently.</p><p style="margin-bottom:8px;">If your base camp is solid, you can explore the rest of the web world without worry.</p><p style="margin-bottom:8px;">Fix the hangup; set up your flag and write your first log to start the adventure!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the <code>&lt;body&gt;</code> add a heading <code>&lt;h1&gt;</code> with the text <strong>"Welcome to Base Camp"</strong>, then add a paragraph <code>&lt;p&gt;</code> with the text <strong>"Prepare yourself for the HTML adventure!"</strong>.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Add <code>&lt;h1&gt;Welcome to Base Camp&lt;/h1&gt;</code> followed by <code>&lt;p&gt;Prepare yourself for the HTML adventure!&lt;/p&gt;</code> inside the body tags.</p></body>',
          starterCode: {
            "/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Base Camp</title>
</head>
<body>

</body>
</html>`,
          },
          "index.html":
            '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Base Camp</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
          regex:
            "(?i)<h1>\\s*Welcome to Base Camp\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Prepare yourself for the HTML adventure!\\s*</p>",
          output:
            "<h1>Welcome to Base Camp</h1><p>Prepare yourself for the HTML adventure!</p>",
          hintXp: 35,
        },
      },
      {
        courseId: 2,
        exerciseId: "name-your-world",
        exerciseName: "Name Your World",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Every hero needs a place — a clear identity so explorers can find and recognize it. In HTML, the world is named with the <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code>.</p><p style="margin-bottom:8px;">The title appears on the browser tab and in search results, serving as your world\'s calling card.</p><p style="margin-bottom:8px;">A good title helps visitors quickly identify what your page is about. A descriptive, unique world well increases discoverability and gives your site a professional feel.</p><p style="margin-bottom:8px;">This exercise encourages you to place the correct title in the head and choose a clear name for your HTML world.</p><p style="margin-bottom:8px;">Think of the title as a sign that names every corner\'s map — make it meaningful and memorable.</p><p style="margin-bottom:8px;">Even small pages benefit from a thoughtful title — it is all web browsers\' first navigation point.</p><p style="margin-bottom:8px;">Proper title tags help your page appear properly in tabs and bookmarks.</p><p style="margin-bottom:8px;">This task is simple but crucial — do it correctly to move toward in the questline.</p><p style="margin-bottom:8px;">Add your world name inside the head and prepare for the next chapter of adventures.</p><p style="margin-bottom:8px;">Your title borderless is the identity of your entire page — one you built earlier.</p><p style="margin-bottom:8px;">Name well — your kingdom\'s reputation depends on it!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the <code>&lt;head&gt;</code> section, add a <code>&lt;title&gt;</code> tag with the text <strong>"My Adventure World"</strong>.</p><p style="margin-bottom:8px;">Note: Your <code>&lt;title&gt;</code> must be inside head, not body.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Open the <code>&lt;head&gt;</code> and add <code>&lt;title&gt;My Adventure World&lt;/title&gt;</code> there.</p></body>',
          starterCode: {
            "/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>
<body>

</body>
</html>`,
          },
          "index.html":
            '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n</head>\\n<body>\\n\\n</body>\\n</html>',
          regex: "(?i)<title>\\s*My Adventure World\\s*</title>",
          output: "<title>My Adventure World</title>",
          hintXp: 38,
        },
      },
      {
        courseId: 2,
        exerciseId: "break-and-repair",
        exerciseName: "Break & Repair",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Even the best fortresses can develop cracks. In HTML, broken or unclosed tags are the cracks that cause rendering issues.</p><p style="margin-bottom:8px;">Your role is the repair hero: identify missing closing tags, mismatched nesting, and misplaced elements.</p><p style="margin-bottom:8px;">Properly nested tags ensure structure maintains correct rendering. An opening tag (example <code>&lt;h1&gt;</code>) should have a matching closing tag (<code>&lt;/h1&gt;</code>) unless it is self-closing. A style="margin-bottom:8px;">Wrong nesting (for example placing a block-level tag inside an inline tag) can also break layouts and semantics.</p><p style="margin-bottom:8px;">For example, every time you add a broken snippet to inspect and fix — a practical detective mission.</p><p style="margin-bottom:8px;">Fixing HTML strengthens your structure skills. Debug future failures and interactable.</p><p style="margin-bottom:8px;">Common mistakes include missing closing tags or wrong order of closing tags when repairing code.</p><p style="margin-bottom:8px;">Once repaired, the page should display as the correct heading and paragraph texts as intended.</p><p style="margin-bottom:8px;">Good repair work increases your reliability as a web craftsman and prepares you for future complete challenges.</p><p style="margin-bottom:8px;">This mission hones attention to detail — a vital skill for all web developers.</p><p style="margin-bottom:8px;">Fix the cracks and your fortress will stand tall.</p><p style="margin-bottom:8px;">Begin the repair now and claim the title of Master Fixer.</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inspect and fix the broken HTML so all tags are properly opened and closed. After repair, the body should show a heading <code>&lt;h1&gt;</code> with <strong>"Fortress Repaired"</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>"Your castle is strong again!"</strong>.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Look for missing <code>&lt;/title&gt;</code>, missing <code>&lt;/h1&gt;</code> or <code>&lt;/p&gt;</code>. Ensure tags are nested correctly: <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code> must be complete.</p></body>',
          starterCode: {
            "/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fortress Repair
</head>
<body>
  <h1>Fortress Repaired
  <p>Your castle is strong again!
</body>
</html>`,
          },
          "index.html":
            '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Fortress Repair\\n\\n <h1>Fortress Repair\\n\\n <p>Your castle is strong again!\\n</body>\\n</html>',
          regex:
            "(?i)<h1>\\s*Fortress Repair\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Your castle is strong again!\\s*</p>",
          output: "<h1>Fortress Repair</h1><p>Your castle is strong again!</p>",
          hintXp: 40,
        },
      },
      {
        courseId: 2,
        exerciseId: "html-detective",
        exerciseName: "HTML Detective",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Don your detective hat — it\'s time to hunt down HTML mistakes. A skilled detective finds missing tags, typos, and wrong nesting.</p><p style="margin-bottom:8px;">Start by examining the tags systematically: are any missing (for example, no closing <code>&lt;/head&gt;</code> instead of <code>&lt;head&gt;</code>).</p><p style="margin-bottom:8px;">Check that each element sits where the examiner: headings in <code>&lt;body&gt;</code> — never in <code>&lt;head&gt;</code>.</p><p style="margin-bottom:8px;">Missing quotes on attributes or stray characters can also break parsing: be vigilant.</p><p style="margin-bottom:8px;">A thorough code exercise helps you tackle a nearly-correct file with subtle issues; your job is to correct them so the expected texts appear.</p><p style="margin-bottom:8px;">Keeping a checklist helps: DOCTYPE, HTML lang, head with title, body with content, and matching closing tags.</p><p style="margin-bottom:8px;">A methodical approach will help you become faster at spotting typical coding errors.</p><p style="margin-bottom:8px;">Once all the errors are found and fixed, the page should show the heading and paragraph exactly as specified. A saving margin-bottom:8px;">Inspect detective training is essential. It saves time and prevents frustrating bugs later.</p><p style="margin-bottom:8px;">Inspect, correct, instance and log your level up your debugging skills.</p><p style="margin-bottom:8px;">Complete this case and wear the badge of HTML Detective with pride.</p><p style="margin-bottom:8px;">Begin the investigation!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inspect the faulty HTML and correct any missing or broken tags. After fixing, the page must contain a heading <code>&lt;h1&gt;</code> with <strong>"Detective Mode"</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>"All HTML errors are found!"</strong>.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Search for missing closing tags like <code>&lt;/title&gt;</code>, check for missing <code>&gt;</code> on the <code>&lt;h1&gt;</code> tag, and ensure proper nesting with closing <code>&lt;/p&gt;</code>.</p></body>',
          starterCode: {
            "/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detective Base</title>
</head>
<body>
  <h1 Detective Mode
  <p>All HTML errors are found!
</body>
</html>`,
          },
          "index.html":
            '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Detective Base</title>\\n</head>\\n<body>\\n\\n  <h1 Detective Mode\\n <p>HTML errors are found!\\n</body>\\n</html>',
          regex:
            "(?i)<h1>\\s*Detective Mode\\s*</h1>[\\s\\S]*<p>[\\s\\S]*HTML errors are found!\\s*</p>",
          output: "<h1>Detective Mode</h1><p>All HTML errors are found!</p>",
          hintXp: 45,
        },
      },
      {
        courseId: 2,
        exerciseId: "element-collector",
        exerciseName: "Element Collector",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Become the element collector — gather headings, paragraphs, and lists to build a rich page. Each heading represents an artifact that gives meaning and structure.</p><p style="margin-bottom:8px;">A well-structured page is organized, clear, and easy to navigate.</p><p style="margin-bottom:8px;">Headings (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>) give hierarchy; paragraphs (<code>&lt;p&gt;</code>) provide content; lists (<code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>) organize items.</p><p style="margin-bottom:8px;">Links (<code>&lt;a&gt;</code>) guide explorers to new realms, and images (<code>&lt;img&gt;</code>) paint your world.</p><p style="margin-bottom:8px;">Collecting more unique elements expands your toolbox; your pages become scannable, accessible, and enjoyable to read.</p><p style="margin-bottom:8px;">This exercise will ask you to produce multiple elements and use them in the body.</p><p style="margin-bottom:8px;">Think of each <code>&lt;li&gt;</code> as a treasure chest — list them cleanly for retrieval.</p><p style="margin-bottom:8px;">Collecting and arranging elements teaches you how to present information cleanly and logically.</p><p style="margin-bottom:8px;">A well-structured page is easy to scan and navigate in browsers.</p><p style="margin-bottom:8px;">Practice makes perfect: the more elements you use, the more confident you become.</p><p style="margin-bottom:8px;">Collect enough elements and your inventory will be complete.</p><p style="margin-bottom:8px;">Complex pages by mastering small, reusable parts.</p><p style="margin-bottom:8px;">Collect all your inventory elements and be complete.</p><p style="margin-bottom:8px;">Start collecting now — three artifacts await!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Inside the <code>&lt;body&gt;</code>, add a heading <code>&lt;h1&gt;</code> with <strong>"Element Collection"</strong>, a paragraph <code>&lt;p&gt;</code> with <strong>"Gather all HTML treasures!"</strong>, and an unordered list <code>&lt;ul&gt;</code> with three list items: <strong>"Headings"</strong>, <strong>"Paragraphs"</strong>, and <strong>"Links"</strong>.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>&lt;h1&gt;</code> for the heading, <code>&lt;p&gt;</code> for the paragraph, and a <code>&lt;ul&gt;</code> with three <code>&lt;li&gt;</code> items. Example: <code>&lt;li&gt;Headings&lt;/li&gt;</code></p></body>',
          starterCode: {
            "/index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Element Collector</title>
</head>
<body>

</body>
</html>`,
          },
          "index.html":
            '<!DOCTYPE html>\\n<html lang="en">\\n<head>\\n  <meta charset="UTF-8">\\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\\n  <title>Element Collector</title>\\n</head>\\n<body>\\n\\n</body>\\n</html>',
          regex:
            "(?i)<h1>\\s*Element Collection\\s*</h1>[\\s\\S]*<p>[\\s\\S]*Gather all HTML treasures!\\s*</p>[\\s\\S]*<li>[\\s\\S]*<li>[\\s\\S]*Headings\\s*</li>[\\s\\S]*<li>[\\s\\S]*Paragraphs\\s*</li>[\\s\\S]*<li>[\\s\\S]*Links\\s*</li>",
          output:
            "<h1>Element Collection</h1><p>Gather all HTML treasures!</p><ul><li>Headings</li><li>Paragraphs</li><li>Links</li></ul>",
          hintXp: 35,
        },
      },
    ];

    await db.insert(ExerciseTable).values(DATA);

    return NextResponse.json({
      message: "Successfully inserted exercises!",
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json(
      { error: "Failed to insert exercises", details: error },
      { status: 500 }
    );
  }
}
