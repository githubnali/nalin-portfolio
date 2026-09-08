export interface EstimatableTopic {
  intro: string;
  sections: { heading: string; body: string[]; example?: unknown }[];
  challenge: { prompt: string };
  quiz: unknown[];
}

const WORDS_PER_MINUTE = 180;
const MINUTES_PER_EXAMPLE = 1.5; // time to read + try a code snippet
const MINUTES_PER_CHALLENGE = 3; // time to attempt the coding challenge
const MINUTES_PER_QUIZ_QUESTION = 0.5;
const MIN_MINUTES = 4;

const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

/** Rough estimated time to read through and complete a topic, based on its actual content. */
export function estimateTopicMinutes(topic: EstimatableTopic): number {
  let words = wordCount(topic.intro);
  let exampleCount = 0;

  for (const section of topic.sections) {
    words += wordCount(section.heading);
    for (const paragraph of section.body) {
      words += wordCount(paragraph);
    }
    if (section.example) exampleCount += 1;
  }

  words += wordCount(topic.challenge.prompt);

  const readingMinutes = words / WORDS_PER_MINUTE;
  const exampleMinutes = exampleCount * MINUTES_PER_EXAMPLE;
  const quizMinutes = topic.quiz.length * MINUTES_PER_QUIZ_QUESTION;

  const total = readingMinutes + exampleMinutes + quizMinutes + MINUTES_PER_CHALLENGE;

  return Math.max(MIN_MINUTES, Math.round(total));
}
