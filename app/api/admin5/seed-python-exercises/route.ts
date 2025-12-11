import { db } from "@/config/db";
import { ExerciseTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const PYTHON_EXERCISES = [
      {
        courseId: 4,
        exerciseId: "hello-python",
        exerciseName: "Hello Python",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Welcome to Python! Python is one of the most popular programming languages in the world.</p><p style="margin-bottom:8px;">It\'s known for its clean, readable syntax that looks almost like English.</p><p style="margin-bottom:8px;">Your first task is to print "Hello Python" to the console.</p><p style="margin-bottom:8px;">The <code>print()</code> function is your primary tool for displaying output.</p><p style="margin-bottom:8px;">Python uses indentation to define code blocks, making it naturally organized.</p><p style="margin-bottom:8px;">Unlike many languages, Python doesn\'t require semicolons at the end of lines.</p><p style="margin-bottom:8px;">This simplicity makes Python perfect for beginners and experts alike.</p><p style="margin-bottom:8px;">Complete this exercise to begin your Python journey!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Write a Python program that prints <strong>"Hello Python"</strong> to the console using the print function.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>print("Hello Python")</code></p></body>',
          starterCode: {
            "/main.py": `# Write your code here

`,
          },
          regex: "(?i)print\\s*\\(\\s*[\"']Hello\\s+Python[\"']\\s*\\)",
          output: 'print("Hello Python")',
          hintXp: 25,
        },
      },
      {
        courseId: 4,
        exerciseId: "variables-quest",
        exerciseName: "Variables Quest",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Variables are containers that store data values in Python.</p><p style="margin-bottom:8px;">Unlike some languages, Python doesn\'t require you to declare variable types explicitly.</p><p style="margin-bottom:8px;">Python automatically determines the type based on the value you assign.</p><p style="margin-bottom:8px;">Variable names should be descriptive and follow snake_case convention.</p><p style="margin-bottom:8px;">You can assign values using the equals sign (=).</p><p style="margin-bottom:8px;">Variables can store numbers, text (strings), lists, and more.</p><p style="margin-bottom:8px;">Understanding variables is fundamental to all programming.</p><p style="margin-bottom:8px;">Master variables and you\'ll be ready to build more complex programs!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a variable called <code>name</code> with the value <strong>"Python"</strong>, then print it using the print function.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>name = "Python"</code> then <code>print(name)</code></p></body>',
          starterCode: {
            "/main.py": `# Create your variable here


# Print it here

`,
          },
          regex: "(?i)name\\s*=\\s*[\"']Python[\"']",
          output: 'name = "Python"',
          hintXp: 30,
        },
      },
      {
        courseId: 4,
        exerciseId: "data-types-adventure",
        exerciseName: "Data Types Adventure",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Python has several built-in data types for different kinds of values.</p><p style="margin-bottom:8px;">Integers (int) are whole numbers: 1, 42, -17.</p><p style="margin-bottom:8px;">Floats are decimal numbers: 3.14, -0.5, 2.0.</p><p style="margin-bottom:8px;">Strings (str) are text wrapped in quotes: "hello", \'world\'.</p><p style="margin-bottom:8px;">Booleans (bool) are True or False values.</p><p style="margin-bottom:8px;">You can check a variable\'s type using the <code>type()</code> function.</p><p style="margin-bottom:8px;">Python automatically handles type conversions in many cases.</p><p style="margin-bottom:8px;">Understanding data types helps you work with data effectively.</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create three variables: <code>age</code> (integer: 25), <code>price</code> (float: 19.99), and <code>message</code> (string: "Learning Python"). Print all three.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>age = 25</code>, <code>price = 19.99</code>, <code>message = "Learning Python"</code>, then print each one.</p></body>',
          starterCode: {
            "/main.py": `# Create your variables here



# Print them

`,
          },
          regex: "(?i)age\\s*=\\s*25",
          output: "age = 25",
          hintXp: 35,
        },
      },
      {
        courseId: 4,
        exerciseId: "arithmetic-operations",
        exerciseName: "Arithmetic Operations",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Python supports all standard arithmetic operations.</p><p style="margin-bottom:8px;">Addition (+), subtraction (-), multiplication (*), and division (/).</p><p style="margin-bottom:8px;">Floor division (//) gives you the quotient without decimals.</p><p style="margin-bottom:8px;">The modulo operator (%) returns the remainder of division.</p><p style="margin-bottom:8px;">Exponentiation (**) raises a number to a power.</p><p style="margin-bottom:8px;">You can combine operators in expressions following standard order of operations.</p><p style="margin-bottom:8px;">Parentheses can change the order of operations.</p><p style="margin-bottom:8px;">Master arithmetic and you can build calculators and math-based programs!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create two variables <code>x = 10</code> and <code>y = 3</code>. Calculate and print their sum, product, and the result of x divided by y.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>print(x + y)</code>, <code>print(x * y)</code>, and <code>print(x / y)</code></p></body>',
          starterCode: {
            "/main.py": `x = 10
y = 3

# Calculate and print sum, product, and division

`,
          },
          regex: "(?i)x\\s*\\+\\s*y|y\\s*\\+\\s*x",
          output: "x + y",
          hintXp: 35,
        },
      },
      {
        courseId: 4,
        exerciseId: "string-formatting",
        exerciseName: "String Formatting",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Python offers multiple ways to format strings with variables.</p><p style="margin-bottom:8px;">F-strings (formatted string literals) are the modern, recommended approach.</p><p style="margin-bottom:8px;">Place an f before the opening quote and use curly braces {} to insert variables.</p><p style="margin-bottom:8px;">Example: <code>f"Hello {name}!"</code> inserts the value of name variable.</p><p style="margin-bottom:8px;">F-strings are faster and more readable than older formatting methods.</p><p style="margin-bottom:8px;">You can even put expressions inside the curly braces.</p><p style="margin-bottom:8px;">String formatting is essential for creating dynamic output.</p><p style="margin-bottom:8px;">Master this to create user-friendly programs!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create variables <code>name = "Alice"</code> and <code>age = 30</code>. Use an f-string to print: <strong>"My name is Alice and I am 30 years old"</strong></p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>print(f"My name is {name} and I am {age} years old")</code></p></body>',
          starterCode: {
            "/main.py": `name = "Alice"
age = 30

# Create and print your f-string here

`,
          },
          regex: "(?i)f[\"'].*\\{name\\}.*\\{age\\}",
          output: 'f"My name is {name} and I am {age} years old"',
          hintXp: 40,
        },
      },
      {
        courseId: 4,
        exerciseId: "lists-basics",
        exerciseName: "Lists Basics",
        chapterId: 1,
        exercisesContent: {
          content:
            '<body style="font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;"><p style="margin-bottom:8px;">Lists are Python\'s most versatile data structure for storing collections.</p><p style="margin-bottom:8px;">Lists can contain items of any type and are defined with square brackets [].</p><p style="margin-bottom:8px;">Items are separated by commas: <code>[1, 2, 3, "hello"]</code></p><p style="margin-bottom:8px;">Lists are ordered and changeable (mutable).</p><p style="margin-bottom:8px;">You can access items by their index, starting from 0.</p><p style="margin-bottom:8px;">Lists have many useful methods like append(), remove(), and sort().</p><p style="margin-bottom:8px;">Understanding lists is crucial for managing collections of data.</p><p style="margin-bottom:8px;">Master lists and you unlock powerful data manipulation capabilities!</p></body>',
          task: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Create a list called <code>fruits</code> containing three items: <strong>"apple"</strong>, <strong>"banana"</strong>, and <strong>"orange"</strong>. Print the list.</p></body>',
          hint: '<body style="font-family:Arial,sans-serif;padding:10px;"><p>Use <code>fruits = ["apple", "banana", "orange"]</code> then <code>print(fruits)</code></p></body>',
          starterCode: {
            "/main.py": `# Create your list here


# Print it

`,
          },
          regex: "(?i)fruits\\s*=\\s*\\[.*apple.*banana.*orange.*\\]",
          output: 'fruits = ["apple", "banana", "orange"]',
          hintXp: 35,
        },
      },
    ];

    await db.insert(ExerciseTable).values(PYTHON_EXERCISES);

    return NextResponse.json({
      message: "Successfully inserted Python exercises!",
      count: PYTHON_EXERCISES.length,
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json(
      { error: "Failed to insert Python exercises", details: error },
      { status: 500 }
    );
  }
}
