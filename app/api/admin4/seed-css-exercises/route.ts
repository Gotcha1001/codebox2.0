import { db } from "@/config/db";
import { ExerciseTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const CSS_EXERCISES = [
      {
        courseId: 3,
        exerciseId: "color-quest",
        exerciseName: "Color Quest",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Welcome to the world of CSS colors! Colors bring life and emotion to your web pages.</p><p style="margin-bottom:8px;">CSS offers multiple ways to define colors: named colors, hexadecimal, RGB, and HSL.</p><p style="margin-bottom:8px;">Named colors like "red", "blue", and "green" are simple but limited.</p><p style="margin-bottom:8px;">Hexadecimal colors (#FF0000) give you millions of color options.</p><p style="margin-bottom:8px;">RGB (Red, Green, Blue) allows you to mix colors with rgb(255, 0, 0).</p><p style="margin-bottom:8px;">RGBA adds an alpha channel for transparency: rgba(255, 0, 0, 0.5).</p><p style="margin-bottom:8px;">This exercise will help you master color application in CSS.</p><p style="margin-bottom:8px;">Colors can be applied to text (color) and backgrounds (background-color).</p><p style="margin-bottom:8px;">Understanding colors is fundamental to creating visually appealing websites!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a CSS rule for an element with class <code>.colorful</code> that has a blue text color and a light gray background.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>.colorful { color: blue; background-color: lightgray; }</code></p></body>',
          starterCode: {
            "/style.css": `.colorful {
  /* Add your color styles here */
  
}`,
          },
          regex: "(?i)color:\\s*blue|color:\\s*#0000FF",
          output: ".colorful { color: blue; background-color: lightgray; }",
          hintXp: 30,
        },
      },
      {
        courseId: 3,
        exerciseId: "selector-challenge",
        exerciseName: "Selector Challenge",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">CSS selectors are the targeting system that connects your styles to HTML elements.</p><p style="margin-bottom:8px;">Element selectors target by tag name: <code>p { }</code> targets all paragraphs.</p><p style="margin-bottom:8px;">Class selectors use a dot: <code>.highlight { }</code> targets elements with class="highlight".</p><p style="margin-bottom:8px;">ID selectors use a hash: <code>#header { }</code> targets the element with id="header".</p><p style="margin-bottom:8px;">You can combine selectors for more specific targeting.</p><p style="margin-bottom:8px;">Understanding selectors is crucial for applying styles precisely where you want them.</p><p style="margin-bottom:8px;">This exercise will sharpen your selector skills.</p><p style="margin-bottom:8px;">Master selectors and you control the entire visual appearance of your site!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create CSS rules to make all <code>&lt;h1&gt;</code> elements red and all elements with class <code>.important</code> bold.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>h1 { color: red; }</code> and <code>.important { font-weight: bold; }</code></p></body>',
          starterCode: {
            "/style.css": `/* Add your selectors here */


`,
          },
          regex: "(?i)h1\\s*{[^}]*color:\\s*red",
          output: "h1 { color: red; } .important { font-weight: bold; }",
          hintXp: 35,
        },
      },
      {
        courseId: 3,
        exerciseId: "box-model-basics",
        exerciseName: "Box Model Basics",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">The CSS box model is the foundation of layout in web design.</p><p style="margin-bottom:8px;">Every element is a box with four parts: content, padding, border, and margin.</p><p style="margin-bottom:8px;">Content is the actual text or image inside the element.</p><p style="margin-bottom:8px;">Padding is the space between content and border (inside the box).</p><p style="margin-bottom:8px;">Border wraps around the padding and content.</p><p style="margin-bottom:8px;">Margin is the space outside the border, separating elements.</p><p style="margin-bottom:8px;">Understanding the box model helps you control spacing and layout precisely.</p><p style="margin-bottom:8px;">This exercise will teach you to manipulate these properties.</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a CSS rule for class <code>.box</code> with 20px padding, a 2px solid black border, and 10px margin.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>.box { padding: 20px; border: 2px solid black; margin: 10px; }</code></p></body>',
          starterCode: {
            "/style.css": `.box {
  /* Add box model properties here */
  
}`,
          },
          regex: "(?i)padding:\\s*20px",
          output:
            ".box { padding: 20px; border: 2px solid black; margin: 10px; }",
          hintXp: 40,
        },
      },
      {
        courseId: 3,
        exerciseId: "flexbox-intro",
        exerciseName: "Flexbox Introduction",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Flexbox is a powerful layout system that makes it easy to design flexible responsive layouts.</p><p style="margin-bottom:8px;">Apply <code>display: flex</code> to a container to make its children flexible items.</p><p style="margin-bottom:8px;">Use <code>justify-content</code> to align items along the main axis (horizontal by default).</p><p style="margin-bottom:8px;">Use <code>align-items</code> to align items along the cross axis (vertical by default).</p><p style="margin-bottom:8px;">Flexbox eliminates the need for floats and complex positioning.</p><p style="margin-bottom:8px;">This exercise introduces you to modern CSS layout techniques.</p><p style="margin-bottom:8px;">Master flexbox and you\'ll build responsive layouts with ease!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a CSS rule for class <code>.container</code> that uses flexbox to center its children both horizontally and vertically.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>.container { display: flex; justify-content: center; align-items: center; }</code></p></body>',
          starterCode: {
            "/style.css": `.container {
  /* Add flexbox properties here */
  
}`,
          },
          regex: "(?i)display:\\s*flex",
          output:
            ".container { display: flex; justify-content: center; align-items: center; }",
          hintXp: 45,
        },
      },
    ];

    await db.insert(ExerciseTable).values(CSS_EXERCISES);

    return NextResponse.json({
      message: "Successfully inserted CSS exercises!",
      count: CSS_EXERCISES.length,
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json(
      { error: "Failed to insert CSS exercises", details: error },
      { status: 500 }
    );
  }
}
