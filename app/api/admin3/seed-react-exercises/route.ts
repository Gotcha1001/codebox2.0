import { db } from "@/config/db";
import { ExerciseTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const REACT_EXERCISES = [
      {
        courseId: 1,
        exerciseId: "hello-react",
        exerciseName: "Hello React",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Welcome to the React universe! React is a powerful JavaScript library for building user interfaces.</p><p style="margin-bottom:8px;">Components are the building blocks of React applications. Think of them as reusable pieces of UI.</p><p style="margin-bottom:8px;">Your first mission is to create a simple React component that displays "Hello React".</p><p style="margin-bottom:8px;">Components can be written as functions (functional components) or classes (class components).</p><p style="margin-bottom:8px;">Modern React favors functional components with hooks for cleaner, more maintainable code.</p><p style="margin-bottom:8px;">Every React component returns JSX - a syntax that looks like HTML but is actually JavaScript.</p><p style="margin-bottom:8px;">JSX allows you to write HTML-like code in your JavaScript, making UI development intuitive.</p><p style="margin-bottom:8px;">Components must return a single parent element, though it can contain many children.</p><p style="margin-bottom:8px;">This exercise introduces you to the fundamental concept of React components.</p><p style="margin-bottom:8px;">Master this and you\'ll be ready to build complex, interactive UIs!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a functional component called <code>HelloReact</code> that returns a <code>&lt;div&gt;</code> containing an <code>&lt;h1&gt;</code> with the text <strong>"Hello React"</strong>.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>function HelloReact() { return &lt;div&gt;&lt;h1&gt;Hello React&lt;/h1&gt;&lt;/div&gt; }</code></p></body>',
          starterCode: {
            "/App.js": `function HelloReact() {
  // Your code here
  
}

export default HelloReact;`,
          },
          regex: "(?i)Hello\\s+React",
          output: "<h1>Hello React</h1>",
          hintXp: 30,
        },
      },
      {
        courseId: 1,
        exerciseId: "jsx-basics",
        exerciseName: "JSX Basics",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">JSX is the secret sauce that makes React so powerful and intuitive.</p><p style="margin-bottom:8px;">It looks like HTML, but it\'s actually JavaScript that gets transformed into React elements.</p><p style="margin-bottom:8px;">You can embed JavaScript expressions in JSX using curly braces { }.</p><p style="margin-bottom:8px;">JSX attributes use camelCase instead of HTML\'s kebab-case (className instead of class).</p><p style="margin-bottom:8px;">You can create dynamic content by evaluating expressions within JSX.</p><p style="margin-bottom:8px;">JSX makes your components readable and declarative - you describe what you want, not how to build it.</p><p style="margin-bottom:8px;">This exercise will help you understand how to mix HTML-like syntax with JavaScript logic.</p><p style="margin-bottom:8px;">Practice embedding variables and expressions to create dynamic content.</p><p style="margin-bottom:8px;">Understanding JSX is crucial for mastering React development.</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a component that displays a heading with the text <strong>"Welcome to JSX"</strong> and a paragraph showing the current year using JavaScript.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>{new Date().getFullYear()}</code> to get the current year inside JSX curly braces.</p></body>',
          starterCode: {
            "/App.js": `function JsxBasics() {
  return (
    <div>
      {/* Add your heading and paragraph here */}
    </div>
  );
}

export default JsxBasics;`,
          },
          regex: "(?i)Welcome\\s+to\\s+JSX",
          output: "<h1>Welcome to JSX</h1>",
          hintXp: 35,
        },
      },
      {
        courseId: 1,
        exerciseId: "component-props",
        exerciseName: "Component Props",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Props (properties) are how components talk to each other in React.</p><p style="margin-bottom:8px;">Think of props as function arguments - they allow you to pass data into components.</p><p style="margin-bottom:8px;">Props make components reusable by allowing them to render different data.</p><p style="margin-bottom:8px;">Props flow down from parent to child components (one-way data flow).</p><p style="margin-bottom:8px;">Props are read-only - components should never modify their own props.</p><p style="margin-bottom:8px;">You can pass any JavaScript value as a prop: strings, numbers, objects, arrays, even functions!</p><p style="margin-bottom:8px;">Destructuring props in function parameters makes your code cleaner and more readable.</p><p style="margin-bottom:8px;">This exercise teaches you how to create flexible, reusable components.</p><p style="margin-bottom:8px;">Master props and you\'ll be able to build complex component hierarchies.</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a <code>Greeting</code> component that accepts a <code>name</code> prop and displays <strong>"Hello, [name]!"</strong></p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>function Greeting({name}) { return &lt;h1&gt;Hello, {name}!&lt;/h1&gt; }</code></p></body>',
          starterCode: {
            "/App.js": `function Greeting(props) {
  // Your code here
  
}

export default Greeting;`,
          },
          regex: "(?i)Hello,\\s*\\{?name\\}?!",
          output: "<h1>Hello, {name}!</h1>",
          hintXp: 40,
        },
      },
      {
        courseId: 1,
        exerciseId: "state-basics",
        exerciseName: "State Basics",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">State is what makes React components interactive and dynamic!</p><p style="margin-bottom:8px;">Unlike props, state is managed within the component itself.</p><p style="margin-bottom:8px;">When state changes, React automatically re-renders the component.</p><p style="margin-bottom:8px;">The useState hook is your gateway to adding state to functional components.</p><p style="margin-bottom:8px;">useState returns an array with two elements: the current state value and a function to update it.</p><p style="margin-bottom:8px;">State updates are asynchronous and may be batched for performance.</p><p style="margin-bottom:8px;">This exercise introduces you to interactive React components.</p><p style="margin-bottom:8px;">Understanding state is essential for building dynamic applications.</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Import useState and create a counter component that displays a count and has a button to increment it.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>const [count, setCount] = useState(0)</code> and <code>onClick={() => setCount(count + 1)}</code></p></body>',
          starterCode: {
            "/App.js": `import { useState } from 'react';

function Counter() {
  // Add state here
  
  return (
    <div>
      {/* Add your counter UI here */}
    </div>
  );
}

export default Counter;`,
          },
          regex: "(?i)useState",
          output: "useState implementation",
          hintXp: 45,
        },
      },
    ];

    await db.insert(ExerciseTable).values(REACT_EXERCISES);

    return NextResponse.json({
      message: "Successfully inserted React exercises!",
      count: REACT_EXERCISES.length,
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json(
      { error: "Failed to insert React exercises", details: error },
      { status: 500 }
    );
  }
}
