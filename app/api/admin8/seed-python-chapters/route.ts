import { db } from "@/config/db";
import { CourseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const PYTHON_CHAPTERS = [
  {
    id: 1,
    name: "Python Basics",
    desc: "Start your Python journey with variables, data types, and basic operations.",
    exercises: [
      {
        name: "Hello Python",
        slug: "hello-python",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Variables Quest",
        slug: "variables-quest",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Data Types Adventure",
        slug: "data-types-adventure",
        xp: 35,
        difficulty: "easy",
      },
      {
        name: "Arithmetic Operations",
        slug: "arithmetic-operations",
        xp: 35,
        difficulty: "easy",
      },
      {
        name: "String Formatting",
        slug: "string-formatting",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Lists Basics",
        slug: "lists-basics",
        xp: 35,
        difficulty: "easy",
      },
    ],
  },
  {
    id: 2,
    name: "Control Flow",
    desc: "Learn to make decisions and create loops in your Python programs.",
    exercises: [
      {
        name: "If Statements",
        slug: "if-statements",
        xp: 35,
        difficulty: "easy",
      },
      {
        name: "Else and Elif",
        slug: "else-and-elif",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "For Loops",
        slug: "for-loops",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "While Loops",
        slug: "while-loops",
        xp: 40,
        difficulty: "medium",
      },
    ],
  },
  {
    id: 3,
    name: "Functions",
    desc: "Create reusable code blocks with functions and parameters.",
    exercises: [
      {
        name: "Define Functions",
        slug: "define-functions",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Function Parameters",
        slug: "function-parameters",
        xp: 45,
        difficulty: "medium",
      },
      {
        name: "Return Values",
        slug: "return-values",
        xp: 45,
        difficulty: "medium",
      },
      {
        name: "Default Arguments",
        slug: "default-arguments",
        xp: 50,
        difficulty: "hard",
      },
    ],
  },
  {
    id: 4,
    name: "Data Structures",
    desc: "Work with lists, dictionaries, tuples, and sets in Python.",
    exercises: [
      {
        name: "List Operations",
        slug: "list-operations",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Dictionary Basics",
        slug: "dictionary-basics",
        xp: 45,
        difficulty: "medium",
      },
      {
        name: "Tuples and Sets",
        slug: "tuples-and-sets",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "List Comprehension",
        slug: "list-comprehension",
        xp: 50,
        difficulty: "hard",
      },
    ],
  },
];

export async function GET(req: NextRequest) {
  try {
    for (const item of PYTHON_CHAPTERS) {
      await db.insert(CourseChaptersTable).values({
        courseId: 4, // Python course
        desc: item?.desc,
        exercises: item.exercises,
        name: item?.name,
        chapterId: item?.id,
      });
    }
    return NextResponse.json({
      message: "Successfully inserted Python chapters!",
      count: PYTHON_CHAPTERS.length,
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json(
      { error: "Failed to insert chapters", details: error },
      { status: 500 }
    );
  }
}
