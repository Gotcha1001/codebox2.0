import { db } from "@/config/db";
import { CourseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const REACT_CHAPTERS = [
  {
    id: 1,
    name: "Introduction to React",
    desc: "Learn the fundamentals of React and component-based architecture.",
    exercises: [
      {
        name: "Hello React",
        slug: "hello-react",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "JSX Basics",
        slug: "jsx-basics",
        xp: 35,
        difficulty: "easy",
      },
      {
        name: "Component Props",
        slug: "component-props",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "State Basics",
        slug: "state-basics",
        xp: 45,
        difficulty: "medium",
      },
    ],
  },
  {
    id: 2,
    name: "Components & Props",
    desc: "Master the art of creating reusable components and passing data through props.",
    exercises: [
      {
        name: "Functional Components",
        slug: "functional-components",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Props Drilling",
        slug: "props-drilling",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Default Props",
        slug: "default-props",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Children Props",
        slug: "children-props",
        xp: 35,
        difficulty: "medium",
      },
    ],
  },
  {
    id: 3,
    name: "State Management",
    desc: "Handle component state and make your React apps interactive.",
    exercises: [
      {
        name: "useState Hook",
        slug: "usestate-hook",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Multiple States",
        slug: "multiple-states",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "State Updates",
        slug: "state-updates",
        xp: 45,
        difficulty: "medium",
      },
      {
        name: "Counter App",
        slug: "counter-app",
        xp: 50,
        difficulty: "hard",
      },
    ],
  },
  {
    id: 4,
    name: "Event Handling",
    desc: "Respond to user interactions with event handlers in React.",
    exercises: [
      {
        name: "Click Events",
        slug: "click-events",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Form Inputs",
        slug: "form-inputs",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Event Object",
        slug: "event-object",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Form Submission",
        slug: "form-submission",
        xp: 45,
        difficulty: "medium",
      },
    ],
  },
];

export async function GET(req: NextRequest) {
  try {
    for (const item of REACT_CHAPTERS) {
      await db.insert(CourseChaptersTable).values({
        courseId: 1, // React course
        desc: item?.desc,
        exercises: item.exercises,
        name: item?.name,
        chapterId: item?.id,
      });
    }
    return NextResponse.json({
      message: "Successfully inserted React chapters!",
      count: REACT_CHAPTERS.length,
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json(
      { error: "Failed to insert chapters", details: error },
      { status: 500 }
    );
  }
}
