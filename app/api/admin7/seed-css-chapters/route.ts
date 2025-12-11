import { db } from "@/config/db";
import { CourseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const CSS_CHAPTERS = [
  {
    id: 1,
    name: "CSS Fundamentals",
    desc: "Learn the basics of styling web pages with Cascading Style Sheets.",
    exercises: [
      {
        name: "Color Quest",
        slug: "color-quest",
        xp: 30,
        difficulty: "easy",
      },
      {
        name: "Selector Challenge",
        slug: "selector-challenge",
        xp: 35,
        difficulty: "easy",
      },
      {
        name: "Box Model Basics",
        slug: "box-model-basics",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Flexbox Introduction",
        slug: "flexbox-intro",
        xp: 45,
        difficulty: "medium",
      },
    ],
  },
  {
    id: 2,
    name: "Typography & Text",
    desc: "Master font styling, text alignment, and typography properties.",
    exercises: [
      {
        name: "Font Family",
        slug: "font-family",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Text Alignment",
        slug: "text-alignment",
        xp: 20,
        difficulty: "easy",
      },
      {
        name: "Font Weights",
        slug: "font-weights",
        xp: 25,
        difficulty: "easy",
      },
      {
        name: "Text Decoration",
        slug: "text-decoration",
        xp: 30,
        difficulty: "easy",
      },
    ],
  },
  {
    id: 3,
    name: "Layout Techniques",
    desc: "Create responsive layouts using modern CSS techniques.",
    exercises: [
      {
        name: "Flexbox Layout",
        slug: "flexbox-layout",
        xp: 45,
        difficulty: "medium",
      },
      {
        name: "Grid Basics",
        slug: "grid-basics",
        xp: 50,
        difficulty: "hard",
      },
      {
        name: "Positioning",
        slug: "positioning",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Float Layout",
        slug: "float-layout",
        xp: 35,
        difficulty: "medium",
      },
    ],
  },
  {
    id: 4,
    name: "Responsive Design",
    desc: "Build websites that look great on all screen sizes.",
    exercises: [
      {
        name: "Media Queries",
        slug: "media-queries",
        xp: 45,
        difficulty: "medium",
      },
      {
        name: "Mobile First",
        slug: "mobile-first",
        xp: 40,
        difficulty: "medium",
      },
      {
        name: "Breakpoints",
        slug: "breakpoints",
        xp: 35,
        difficulty: "medium",
      },
      {
        name: "Responsive Images",
        slug: "responsive-images",
        xp: 40,
        difficulty: "medium",
      },
    ],
  },
];

export async function GET(req: NextRequest) {
  try {
    for (const item of CSS_CHAPTERS) {
      await db.insert(CourseChaptersTable).values({
        courseId: 3, // CSS course
        desc: item?.desc,
        exercises: item.exercises,
        name: item?.name,
        chapterId: item?.id,
      });
    }
    return NextResponse.json({
      message: "Successfully inserted CSS chapters!",
      count: CSS_CHAPTERS.length,
    });
  } catch (error) {
    console.error("Insert failed:", error);
    return NextResponse.json(
      { error: "Failed to insert chapters", details: error },
      { status: 500 }
    );
  }
}
