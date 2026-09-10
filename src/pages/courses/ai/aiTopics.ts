import type { QuizQuestion } from '../../../components/practice/Quiz';

export interface TopicSection {
  heading: string;
  body: string[];
  /** Key of an illustrative diagram component to render for this section, if any. */
  visual?:
    | 'turing-test'
    | 'si-vs-ai'
    | 'ml-vs-dl'
    | 'attention'
    | 'search-vs-generation'
    | 'base-model-stack'
    | 'training-vs-inference'
    | 'tokenization-flow'
    | 'context-window'
    | 'timeline'
    | 'rule-based-flow'
    | 'word-ambiguity'
    | 'hallucination'
    | 'rag-flow';
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
        visual: 'rule-based-flow',
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
        visual: 'word-ambiguity',
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
        visual: 'timeline',
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
  {
    slug: 'chatgpt-know-or-guess',
    title: 'Does ChatGPT Know or Does It Guess?',
    intro:
      'Where does ChatGPT actually get its answers from - does it search live, does it "know" things, or is it just guessing? And how is that fundamentally different from Google Search?',
    sections: [
      {
        heading: 'Google Search vs ChatGPT: Two Different Jobs',
        body: [
          'People are increasingly reaching for ChatGPT instead of Google, mostly because it hands back a direct answer instead of a page of links to click through - no more juggling ten open tabs (RIP, classic Stack Overflow browsing sessions).',
          'But there is a real difference in what is happening underneath. You can ask ChatGPT almost anything, and if the answer genuinely exists in what it learned, it will give you something close to correct. If the answer does not exist at all, it may still confidently simulate one anyway - with no way for you to tell the difference from the response alone. Google, by contrast, is fundamentally a filter over real documents that already exist somewhere.',
        ],
      },
      {
        heading: 'How Google Search Actually Works',
        body: [
          'Google takes your query, searches its index, ranks the most relevant documents, and returns them. An index is nothing mysterious - think of it as a book\'s table of contents: instead of reading every page to find something, you jump straight to the reference.',
          'Google keeps that index fresh using crawlers (also called spiders) that continuously scan the web and feed new or updated pages back in - which is how something posted a minute ago can already show up in results. Not every page gets to rank well, though: crawlers weigh things like domain authority, page speed, keyword relevance, average time spent on a page, backlinks from other sites, meta tags, publish date, and general SEO health. Google\'s exact ranking algorithm is not open source, so what we have are industry best practices, not a published formula.',
          'None of this guarantees truth. Rankings can be imperfect, outdated, or put an irrelevant result above a better one four spots down. The upside: you can always see which website an answer came from, and decide for yourself whether to trust that source.',
        ],
      },
      {
        heading: 'Retrieval vs Generation',
        body: [
          'ChatGPT works completely differently. It does not retrieve a stored answer - it generates one, built from patterns it learned during training, similar to how you might answer "why did Katappa kill Bahubali?" from memory of watching the movie: you would give your own retelling, not a word-for-word transcript. That is the core distinction: Google retrieves, ChatGPT generates.',
          'One practical consequence: Google can honestly say "I don\'t have this," because it is just searching an index. A raw language model is far less likely to say that - it is built to produce a plausible-sounding answer whether or not one truly exists, and by default you get no source to check.',
        ],
        visual: 'search-vs-generation',
      },
      {
        heading: 'How LLMs Actually Generate Words',
        body: [
          'LLMs work by predicting and generating, one likely word at a time. Give it "The sun rises in..." and it predicts "the east" because that pattern showed up constantly in training. Give it "Roses are ___" and "red" or "beautiful" surface as high-probability completions.',
          'It is autocomplete, just a dramatically smarter version - the model is constantly estimating which next word is statistically most likely to fit, based on everything (languages, grammar, reasoning patterns, stories, and associations between places, events, and ideas) it absorbed during training.',
        ],
      },
      {
        heading: 'What Knowledge Does an LLM Actually Contain?',
        body: [
          'An LLM is a neural network holding an enormous collection of numbers called parameters (or weights), shaped by scraping and reading vast amounts of internet text. Those weights encode patterns, not stored facts in the way a database stores rows - ask about "rose" and words like "beautiful," "red," or "fragrant" surface because of learned probability, not lookup.',
          'That training is not a daily or even weekly event - it is expensive enough that every model ships with a fixed knowledge cutoff date, documented by whoever built it. That naturally raises a question worth sitting with: if training stopped on a fixed date, how does a model seem to know about recent events at all? (Short answer: context and tools, not raw memory - something worth exploring in more depth later.)',
        ],
      },
      {
        heading: 'Base Model vs Instruction-Tuned Assistant',
        body: [
          'A base model is the raw, unfiltered core of an LLM: it has read a massive amount of text and its only actual job is to guess the next token. Think of it as an extremely advanced autocomplete engine - not yet shaped into a helpful, safe chat assistant.',
          'What you actually use - ChatGPT, Claude, Gemini, Grok - is a base model with several layers built on top: tool access, human feedback (RLHF), security and auth, web search, guardrails, content filters, system instructions, and conversation management. Companies rarely expose the raw base model directly, precisely because it has no built-in filters and will attempt to answer anything. A simple way to hold the idea: the base model is the engine, and the assistant you chat with is the whole car built around it.',
          'Every major lab ships its own base models under different names: OpenAI (GPT-5, GPT-4o, o1, o3), Anthropic (Claude 4, Claude Sonnet 4.6, Opus), Google (Gemini 3, Gemini 2.5 Pro, and the open-weight Gemma 3), Meta (Llama 4, Llama 3.1, open-weight), DeepSeek (DeepSeek-R1, DeepSeek-V4, open-weight), xAI (Grok 3, Grok 4.3), Alibaba (Qwen 3.5, Qwen 3), and Amazon (the Nova family).',
        ],
        visual: 'base-model-stack',
      },
      {
        heading: 'Training vs Inference',
        body: [
          'Training is the school phase - the model studies an enormous amount of data to learn rules and patterns, and it is slow and expensive. Inference is the working phase - using everything it already learned to answer a real prompt, right now. Every time you send a message to an LLM, you are triggering inference, not training.',
        ],
        visual: 'training-vs-inference',
      },
      {
        heading: 'Why Models Sound So Confident: Hallucination',
        body: [
          'Fake fluency is not the same thing as truthfulness. An LLM can state something confidently and still be completely wrong - that gap is called hallucination: the model presenting made-up information as a hard fact. It is not lying on purpose; it is guessing the next plausible word, and that guess can come out sounding extremely sure of itself even when it is wrong.',
          'Hallucination tends to show up because of insufficient knowledge, ambiguous phrasing, data that simply is not new enough, false assumptions baked into the prompt, unreliable patterns in training, or the model simply being optimized to always produce an answer rather than admit uncertainty - which is how you get confidently wrong answers instead of a shrug.',
          'This is also why base models are noticeably worse at things like precise math than an instruction-tuned assistant built on top of them - and why it genuinely matters that an assistant is sometimes willing to say "I don\'t have reliable information about this" instead of inventing something plausible-sounding.',
        ],
        visual: 'hallucination',
      },
      {
        heading: 'Confidence Isn\'t Proof',
        body: [
          'Humans often treat a confident tone as evidence on its own - if someone states something firmly enough, we tend to assume they must be right. LLMs can fall into the same trap with themselves: if the model feels very sure about an answer, it can treat that internal certainty as if it were proof, even though certainty and correctness are two completely different things.',
          'You can push back on this directly: ask for a source, ask it to only answer if it is actually confident, or explicitly ask what it is uncertain about. None of that guarantees a correct answer, but it does surface overconfidence. Grounding the model with real, current information - like allowing it to search the web - gives it external evidence to check itself against, instead of relying purely on its own internal confidence.',
        ],
      },
      {
        heading: 'Tools: Giving the Model Superpowers',
        body: [
          'On its own, a language model cannot see your files, your calendar, your email, your location, or your database - it only has whatever was in its training data and whatever you type into the prompt. Tools close that gap: calling an API, running code, checking the weather, querying a database, reading internal documents, and more.',
          'Combine web search with an LLM and you get something meaningfully more useful: retrieval supplies real, current, external evidence, and generation turns that evidence into a clear, natural-language answer. That combination has a name - RAG, Retrieval-Augmented Generation - and it is one of the most practically important patterns in real-world AI applications.',
        ],
        visual: 'rag-flow',
      },
      {
        heading: 'Does the Model Know Itself?',
        body: [
          'An LLM can usually tell you things like how many parameters it has, its knowledge cutoff date, who built it, and where it is deployed - that is documented, factual information it was trained to be able to state. That is not the same as full self-awareness, though.',
          'Whatever an LLM tells you ultimately comes from one of four sources: its training data (what it learned before the cutoff), the context of the current conversation, its system prompt (instructions about how it should behave), or the tools it has been given access to. Those four sources are exactly what separate a bare base model from a genuinely useful, instruction-tuned assistant.',
        ],
      },
    ],
    quiz: [
      {
        question: 'What is the core difference between how Google Search and ChatGPT produce an answer?',
        options: [
          'Google is faster, ChatGPT is slower',
          'Google retrieves existing documents from an index; ChatGPT generates new text from learned patterns',
          'They both search the live internet in real time',
          'ChatGPT only works offline',
        ],
        correctIndex: 1,
      },
      {
        question: 'What is a "base model"?',
        options: [
          'A fully safety-filtered chat assistant',
          'The raw, unfiltered model whose only job is to predict the next word',
          'A search engine index',
          'A tool used only for image generation',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does "hallucination" mean in the context of an LLM?',
        options: [
          'The model refuses to answer',
          'The model presents made-up information confidently, as if it were a verified fact',
          'The model crashes and stops responding',
          'The model only works with images',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does RAG (Retrieval-Augmented Generation) combine?',
        options: [
          'Two different language models',
          'Training and inference',
          'Real-time retrieval (like web search) with an LLM\'s generation ability',
          'Base models from two companies',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    slug: 'secret-language-of-llms',
    title: 'The Secret Language of LLMs',
    intro:
      'An LLM responds fluently in English, Hindi, code, even emojis - but it does not understand words the way we do. What does it actually see, and how does that shape everything from cost to memory?',
    sections: [
      {
        heading: 'Computers Don\'t Understand Words - They Understand Numbers',
        body: [
          'Programming languages like C and C++ exist because computers cannot understand plain English directly. The same is true for LLMs: a sentence like "These notes are awesome" cannot be handed to a model as-is. What an LLM understands is numbers.',
          'The sentence first gets broken into pieces - These, notes, are, awesome - and each piece is converted into a number, producing an array like [78, 12, 23, 433] that is what actually gets passed to the model.',
        ],
      },
      {
        heading: 'Tokens, Token IDs, and Tokenizers',
        body: [
          'When a sentence is broken into words or word-pieces, each piece is called a token, and the number assigned to a token is its token ID. The sequence of token IDs is what the LLM actually reads and processes.',
          'This also flips how prediction works: an LLM is not really predicting the next word directly - it is predicting the next token ID, which is then mapped back to a token for you to read. The tool that does this splitting is called a tokenizer, and there are multiple tokenizer types in use across the industry, chosen per model and per task - this is a core part of both training and inference.',
          'One word is not guaranteed to become exactly one token. "Awesome" might stay as one token, or it might split into two, like "awe" + "some" - it depends entirely on the tokenizer\'s vocabulary.',
        ],
        visual: 'tokenization-flow',
      },
      {
        heading: 'Subword Tokenization',
        body: [
          'You can see this live on tools like the OpenAI tokenizer or tiktokenizer. Feed in a word like "untrustable" and it may split into three tokens - "un", "trust", "able" - because those pieces are common and reusable across many other words. This is subword tokenization: breaking uncommon or longer words into smaller, reusable chunks instead of storing every possible word as its own token.',
          'Confusingly, this is not always predictable from meaning or grammar. A word like "undone" might stay as a single token even though "un" + "done" seems like the obvious split - simply because "undone" already exists as one entry in that tokenizer\'s vocabulary. The same word can be split completely differently by a different tokenizer. Tokenization follows the vocabulary the tokenizer was trained on, not the grammatical structure of a word.',
        ],
      },
      {
        heading: 'Vocabulary: The Fixed List Behind Every Token ID',
        body: [
          'A tokenizer\'s vocabulary is the fixed list of every unique word, subword, or character it recognizes and can convert into a number. Every token ID comes from a lookup against this vocabulary mapping.',
          'Different companies use different tokenizer families entirely: OpenAI models use variants of Byte Pair Encoding (BPE), categorized by vocabulary size, while Meta\'s Llama models use SentencePiece-BPE. A larger, better-trained vocabulary generally makes tokenization more efficient - which matters a lot once you start thinking about cost and multilingual support.',
        ],
      },
      {
        heading: 'Byte Pair Encoding (BPE)',
        body: [
          'BPE is the tokenizer family behind OpenAI\'s models. The idea: a word like "low" might get its own token ID, and that same token can be reused as part of "lower" and "lowest". The same pattern applies to prefixes like "un" showing up across "unbreakable", "untrustable", "unmanageable", and more.',
          'Since every token can ultimately be represented as bytes (combinations of 0s and 1s), a BPE tokenizer starts from small byte-level units and learns which neighboring pairs occur together often enough to be worth merging into a single new token - growing the vocabulary over time. Other tokenizer families like WordPiece and Unigram take a similar spirit but with different merging rules; the common goal across all of them is a vocabulary that makes tokenization efficient.',
        ],
      },
      {
        heading: 'English vs Other Languages',
        body: [
          'Tokenization is purely about text patterns - there is no meaning or emotion baked in, so different languages routinely produce very different token counts for what is functionally the same sentence. Writing something in Hinglish (mixed Hindi-English, like "Mai Artificial Intelligence seekh raha hu") does not tokenize the same way as writing the equivalent pure-English sentence, even though the meaning is identical to a human reader.',
          'In practice, English tends to be the most token-efficient language for most current tokenizers, while languages like Hindi or mixed Hinglish can cost noticeably more tokens for the same idea. Vocabulary size and training coverage are the main levers that determine how efficiently a model handles a given language - newer tokenizer versions have gotten meaningfully better at this than older ones.',
        ],
      },
      {
        heading: 'Tokenization Fertility',
        body: [
          'Tokenization fertility is the average number of tokens an AI produces per word. Lower fertility means fewer tokens per word - faster, cheaper, and able to fit more text into a single context window. Higher fertility means a word gets chopped into many tiny fragments, which increases cost and fills up the context window faster - something that shows up disproportionately in some non-English languages.',
          'Emojis, code, special characters, capitalization, and even plain spaces all affect tokenization too - adding or removing a single space, or changing a dash, can change the token count. Every distinct text pattern maps to its own token ID.',
        ],
      },
      {
        heading: 'System Instructions vs User Instructions',
        body: [
          'Beyond the words you type, models also work with special tokens tied to system instructions - a kind of hidden rulebook that tells the AI how to behave, separate from what you actually ask. A user instruction, by contrast, is simply the specific question or task you type in.',
          'How exactly system and user prompts get combined and passed to the model differs from one LLM and company to another.',
        ],
      },
      {
        heading: 'The Context Window',
        body: [
          'A context window is the amount of tokenized information a model can process within a single request or generation - in plain terms, the short-term working memory of an AI: the maximum text it can "see" and remember at any one moment.',
          'That window is shared between everything you send and everything the model generates in return - and crucially, it includes far more than just your typed message: system instructions, attached documents, prior text, and tool outputs all count against the same limit.',
          'When a context window threatens to overflow, the practical fixes are to truncate input, summarize earlier messages instead of replaying everything, and split unrelated work across separate chats rather than cramming every task into one long conversation. It is also worth remembering that a model does not perfectly remember an old conversation forever - it works from a summary of it, and only while that context stays live.',
        ],
        visual: 'context-window',
      },
      {
        heading: 'Common Misconceptions About Tokens',
        body: [
          'A short list worth keeping in mind: one token is not always one word. Not every company or model uses the same tokenizer. A token ID does not represent meaning on its own. A single visible emoji is not guaranteed to be one token. A larger vocabulary is not automatically better. A larger context window does not guarantee perfect memory. And more tokens in a prompt do not automatically produce a better result - a longer prompt is not the same thing as a better prompt, and every extra token has a real, direct effect on API cost.',
        ],
      },
    ],
    quiz: [
      {
        question: 'What does an LLM actually receive as input, underneath the words you type?',
        options: [
          'The raw English sentence, unchanged',
          'An array of numbers (token IDs) produced by a tokenizer',
          'An audio waveform',
          'A list of matching web pages',
        ],
        correctIndex: 1,
      },
      {
        question: 'Why can the same word be tokenized differently by two different tokenizers?',
        options: [
          'Tokenization is random and changes every time',
          'It depends on that tokenizer\'s specific vocabulary and how it was trained, not on grammar or meaning',
          'Only English words can be tokenized consistently',
          'Every tokenizer always splits words into exactly two pieces',
        ],
        correctIndex: 1,
      },
      {
        question: 'What is "tokenization fertility"?',
        options: [
          'How many parameters a model has',
          'The average number of tokens produced per word - lower is cheaper and faster, higher costs more',
          'The number of languages a tokenizer supports',
          'How quickly a model was trained',
        ],
        correctIndex: 1,
      },
      {
        question: 'What does a model\'s context window actually include?',
        options: [
          'Only the exact words you type in your current message',
          'Only the model\'s own past replies',
          'Everything sharing that request: system instructions, documents, tool outputs, and the conversation text, both in and out',
          'A permanent, unlimited record of every past conversation',
        ],
        correctIndex: 2,
      },
    ],
  },
];
