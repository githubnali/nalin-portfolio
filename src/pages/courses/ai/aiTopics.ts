import type { QuizQuestion } from '../../../components/practice/Quiz';

export interface TopicSection {
  heading: string;
  body: string[];
  example?: {
    caption?: string;
    starterCode: string;
  };
  /** Key of an illustrative diagram component to render for this section, if any. */
  visual?: 'turing-test' | 'si-vs-ai' | 'ml-vs-dl' | 'attention';
}

export interface AiTopic {
  slug: string;
  title: string;
  intro: string;
  sections: TopicSection[];
  quiz: QuizQuestion[];
  /** Matching category name in aiInterviewQuestions.ts, once that content exists. */
  interviewCategory?: string;
}

export const aiTopics: AiTopic[] = [
  {
    slug: 'evolution-of-ai',
    title: 'The Evolution of AI',
    intro:
      'Before diving into models and code, it helps to know where AI actually came from - the seed before it grew into the vast forest it is today.',
    sections: [
      {
        heading: 'What Is Artificial Intelligence?',
        body: [
          'When we talk about making machines intelligent - recommending a movie, driving a car, writing a poem, generating an image - we are describing work that normally requires human intelligence. When a machine, computer, or algorithm does that work instead of a person, we call it Artificial Intelligence. Nothing about it happens "artificially" in a magical sense; a machine has simply become capable of doing it.',
          'A simple working definition: AI is the science of making machines perform tasks that normally require human intelligence.',
        ],
      },
      {
        heading: 'The Turing Test & the Birth of "AI" (1950-1956)',
        body: [
          'Computers already existed by the 1950s, but a deeper question was just beginning to be asked: can a machine actually think? In 1950, mathematician Alan Turing proposed a way to answer it, now known as the Turing Test.',
          'Picture three rooms: Room 1 and Room 2, each holding either a human or a machine, and a separate Judge room. The judge asks the same questions to both rooms and receives an answer from each, then has to decide which room holds the human and which holds the machine. If the judge cannot reliably tell them apart, the machine has passed the Turing Test.',
          'The term "Artificial Intelligence" itself did not exist yet in 1950. It was coined in 1956 by computer scientist John McCarthy, around the time a group of researchers gathered with a bold, founding ambition: that every aspect of learning and intelligence could, in principle, be described precisely enough for a machine to simulate it.',
        ],
        visual: 'turing-test',
      },
      {
        heading: 'Synthetic Intelligence: An Alternative Lens',
        body: [
          'The history of AI has had its share of rebranding and roller-coaster moments - including an "AI winter" from roughly 1987-1993, when funding and attention dried up. Around 1986 and again in 1997, some researchers pushed a different framing entirely: synthetic intelligence, focused on machines learning from themselves and generating genuinely new forms of cognition, rather than just imitating human behavior.',
          'The distinction is subtle but worth sitting with: "artificial" often implies something fake or limited, while "synthetic" implies something deliberately engineered - potentially even superior in narrow ways. Today\'s systems like ChatGPT blur this line: we still call it "artificial" intelligence, but what it does is real, not a fake imitation of intelligence.',
        ],
        visual: 'si-vs-ai',
      },
      {
        heading: 'Rule-Based Systems (1950s-1980s)',
        body: [
          'Early AI worked by encoding intelligence as a giant collection of rules - hundreds of if-else conditions that told a machine what to decide. A spam filter, for example, might flag a message simply because it contains words like "lottery", "dollar", or "FREE". Systems built this way became known as Expert Systems.',
          'The problem: rules do not scale. Anyone can phrase the same idea a slightly different way, and a purely rule-based system breaks. It is simply not possible to write a condition for every case - one of the reasons the field cooled off during the AI winter mentioned above.',
          'One famous milestone from this rule-based era: in 1997, IBM\'s Deep Blue defeated world chess champion Garry Kasparov. Despite the headlines, Deep Blue was not really "intelligent" in the modern sense - it was a system built on permutations and combinations, evaluating possible chess moves rather than learning from experience.',
        ],
        example: {
          caption: 'A rule-based "spam filter" - the pre-machine-learning way to decide',
          starterCode:
            '<div id="result" style="font-family: sans-serif; font-size: 18px;"></div>\n<script>\n  function checkSpam(text) {\n    const spamWords = [\'lottery\', \'free\', \'winner\'];\n    return spamWords.some((word) => text.toLowerCase().includes(word));\n  }\n\n  const message = "You won a FREE lottery prize!";\n  const isSpam = checkSpam(message);\n  document.getElementById(\'result\').textContent =\n    (isSpam ? \'Flagged as spam: \' : \'Not spam: \') + message;\n</script>',
        },
      },
      {
        heading: 'The Rise of Machine Learning',
        body: [
          'Rule-based systems eventually hit a wall - you cannot hand-write a rule for every possible way to say something. Machine Learning took a different approach: instead of programming rules directly, you train a model on examples and let it find the patterns itself.',
          'Take telling a dog apart from a cat. A model trained on a large set of labeled dog and cat photos learns to recognize the visual patterns that distinguish them, and can then make a prediction on a photo it has never seen. This was a real step forward, but it still depended heavily on human-curated training data and feature design - machine learning alone was not enough to handle every kind of problem.',
        ],
      },
      {
        heading: 'Deep Learning & Neural Networks',
        body: [
          'Deep Learning asked a more ambitious question: could a machine learn the way a human brain does? Researchers studied biological neurons and built artificial neural networks loosely inspired by them - layers of connected "neurons" passing information forward.',
          'This unlocked breakthroughs like face recognition, speech recognition, and phone face-unlock. Deep learning is best understood as a subset of machine learning focused on teaching computers to learn and make decisions by processing data through a neural network inspired by the human brain.',
          'None of this would have been practical without two other trends arriving at the same time: the GPU revolution, which supplied the raw compute power neural networks need, and the explosive growth of the internet, which supplied enough data to actually train on. A shortage of both compute and data was a major reason the earlier AI winter happened in the first place.',
        ],
        visual: 'ml-vs-dl',
      },
      {
        heading: 'The Computer Vision Revolution',
        body: [
          'In parallel, computer vision was taking shape around a dataset called ImageNet - more than 14 million high-resolution images across over 20,000 categories. In 2012, Alex Krizhevsky and team trained a deep neural network called AlexNet on ImageNet, and it dramatically outperformed prior approaches at recognizing what was in an image.',
          'That single result rippled outward into things we now take for granted: face unlock, self-driving car vision, X-ray analysis, and shopping apps that recognize products from a photo. Machines had genuinely learned to "see".',
        ],
      },
      {
        heading: 'Natural Language Processing (NLP)',
        body: [
          'Text turned out to be deceptively hard for machines, precisely because language is so ambiguous. Take the sentence "I saw a man with a telescope" - did I use the telescope to see him, or does he own the telescope? Or take a single word like "bank": a river bank and the Bank of India share a word but mean something completely different. Humans resolve this from context instantly; machines had to be painstakingly trained to do the same.',
          'Techniques like Bag of Words, n-grams, RNNs (Recurrent Neural Networks), and LSTMs (Long Short-Term Memory networks) were the tools of this era. RNNs were the first real breakthrough at helping machines understand longer sentences, and LSTMs pushed that further to roughly page-length text - but connecting ideas across hundreds of pages was still out of reach.',
        ],
      },
      {
        heading: 'Transformers: "Attention Is All You Need" (2017)',
        body: [
          'Transformers are arguably one of the most consequential inventions in the history of computing. Everything from ChatGPT to DeepSeek exists because of this one architecture, introduced by Google researchers in a 2017 paper titled "Attention Is All You Need".',
          'The breakthrough was context: take the sentence "The lion did not cross the river because it cannot swim." A transformer can figure out that "it" refers to the lion, connecting the dots across a whole sentence (and eventually much more) the way earlier architectures never reliably could. Large Language Models exist because this problem finally got solved.',
        ],
        visual: 'attention',
      },
      {
        heading: 'Large Language Models & Generative AI',
        body: [
          'An LLM (Large Language Model) is, at its core, a transformer trained on an enormous - hundreds of times larger than before - amount of data, which is what lets it understand and respond to open-ended queries. That scale only became possible with equally large datasets and GPU compute; both data and compute remain the two big bottlenecks, which is also why building a competitive LLM is so resource-intensive that few countries or companies can do it.',
          'Older AI systems were narrow: one model classified things, another predicted a number, another made a recommendation. Generative AI is different - it produces new things outright: poems, songs, images that never existed, even working code from a plain-language idea. A multimodal model can generate across several of these at once (text, image, audio, video), which is the essence of what "Generative AI" means.',
        ],
      },
      {
        heading: 'The ChatGPT Moment (November 2022) & AI Today',
        body: [
          'In November 2022, OpenAI (led by Sam Altman) released ChatGPT, and the public conversation about AI changed almost overnight. It went on to become the fastest-growing consumer application in history, and it kicked off a race that is still running today - Gemini, Grok, DeepSeek, and Claude all followed.',
          'What AI can do today would have sounded like science fiction a decade earlier: think through a problem, call an API, plan multi-step work, write code, understand and remember context across a conversation, search the web, and act with real autonomy - using tools, completing tasks, writing and debugging code, even deploying and testing it.',
        ],
      },
      {
        heading: 'Agentic AI (2025) & What Comes Next',
        body: [
          'The current chapter of this story is Agentic AI - systems that do not just answer a question but autonomously plan and carry out multi-step work on their own. It is being applied across essentially every industry, and it is very much still being written; later chapters will dig into how this actually works.',
        ],
      },
      {
        heading: 'Quick Recap Timeline',
        body: [
          '1950 - Alan Turing proposes the Turing Test. 1956 - John McCarthy coins the term "Artificial Intelligence". 1950s-1980s - Rule-Based AI and Expert Systems. 1997 - Deep Blue defeats Garry Kasparov. 1990s - Machine Learning gains traction. 2000s - Deep Learning breakthroughs. 2012 - AlexNet wins on ImageNet. 2016 - AlphaGo defeats Lee Sedol. 2017 - Transformers ("Attention Is All You Need"). 2022 - ChatGPT is released. 2025+ - Agentic AI.',
        ],
      },
    ],
    quiz: [
      {
        question: 'What does passing the Turing Test actually demonstrate?',
        options: [
          'A machine can solve any math problem',
          'A human judge cannot reliably tell the machine\'s answers apart from a human\'s',
          'A machine has beaten a human at chess',
          'A machine can generate an image',
        ],
        correctIndex: 1,
      },
      {
        question: 'Who coined the term "Artificial Intelligence", and when?',
        options: [
          'Alan Turing, in 1950',
          'Sam Altman, in 2022',
          'John McCarthy, in 1956',
          'Alex Krizhevsky, in 2012',
        ],
        correctIndex: 2,
      },
      {
        question: 'Why did purely rule-based (if-else) AI systems eventually fail to scale?',
        options: [
          'They required too much GPU power',
          'You cannot write an explicit rule for every possible way something can be phrased',
          'They were too fast to be useful',
          'They only worked on images, never on text',
        ],
        correctIndex: 1,
      },
      {
        question: 'What made the 2017 "Attention Is All You Need" paper so significant?',
        options: [
          'It introduced the Turing Test',
          'It introduced the Transformer architecture, letting models track context across a sentence (and beyond)',
          'It released the first version of ChatGPT',
          'It trained the first neural network on ImageNet',
        ],
        correctIndex: 1,
      },
    ],
  },
];
