// AI Tool Database
const aiTools = [
    {
        id: 1,
        name: "Remove.bg",
        category: "Image Editing",
        description: "AI-powered tool that automatically removes backgrounds from images in seconds with high accuracy.",
        url: "https://www.remove.bg/",
        icon: "🖼️",
        keywords: ["remove background", "transparent background", "image editing", "background removal", "photo editing"]
    },
    {
        id: 2,
        name: "Midjourney",
        category: "Image Generation",
        description: "Advanced AI that generates detailed images from text descriptions.",
        url: "https://www.midjourney.com/",
        icon: "🎨",
        keywords: ["generate images", "ai art", "illustration", "image creation", "text to image"]
    },
    {
        id: 3,
        name: "DALL-E",
        category: "Image Generation",
        description: "Creates realistic images and art from natural language descriptions.",
        url: "https://openai.com/dall-e-3",
        icon: "🎨",
        keywords: ["generate images", "ai art", "illustration", "image creation", "text to image"]
    },
    {
        id: 4,
        name: "ChatGPT",
        category: "AI Assistant",
        description: "Versatile AI assistant that can help with writing, answering questions, and generating ideas.",
        url: "https://chat.openai.com/",
        icon: "💬",
        keywords: ["text generation", "writing assistant", "answer questions", "summarize", "content creation", "summarize article", "chatbot", "conversation"]
    },
    {
        id: 5,
        name: "Claude",
        category: "AI Assistant",
        description: "Advanced AI assistant that excels at thoughtful dialogue and complex reasoning tasks.",
        url: "https://claude.ai/",
        icon: "💬",
        keywords: ["text generation", "writing assistant", "answer questions", "summarize", "content creation", "summarize text", "summarize article", "conversation", "reasoning"]
    },
    {
        id: 6,
        name: "Jasper",
        category: "Content Creation",
        description: "AI content platform that helps create marketing copy, blog posts, and social media content.",
        url: "https://www.jasper.ai/",
        icon: "📝",
        keywords: ["content writing", "marketing copy", "blog posts", "social media content", "content generation"]
    },
    {
        id: 7,
        name: "Otter.ai",
        category: "Transcription",
        description: "Automatically transcribes audio and video recordings with high accuracy.",
        url: "https://otter.ai/",
        icon: "🎤",
        keywords: ["transcribe", "audio to text", "transcription", "voice recording", "speech to text", "meeting notes"]
    },
    {
        id: 8,
        name: "Descript",
        category: "Audio/Video Editing",
        description: "All-in-one audio/video editor that allows text-based editing of audio and video content.",
        url: "https://www.descript.com/",
        icon: "🎬",
        keywords: ["transcribe", "audio editing", "video editing", "podcast editing", "text-based editing"]
    },
    {
        id: 9,
        name: "Looka",
        category: "Logo Design",
        description: "AI-powered logo maker that creates professional logos based on your preferences.",
        url: "https://looka.com/",
        icon: "📝",
        keywords: ["logo design", "create logos", "brand identity", "logo generator", "design logo"]
    },
    {
        id: 10,
        name: "GitHub Copilot",
        category: "Code Generation",
        description: "AI pair programmer that helps you write code faster by suggesting lines and functions.",
        url: "https://github.com/features/copilot",
        icon: "💻",
        keywords: ["code generation", "programming assistant", "code suggestions", "development aid", "generate code", "write code", "coding help"]
    },
    {
        id: 11,
        name: "Grammarly",
        category: "Writing Assistant",
        description: "AI writing assistant that helps with grammar, clarity, and style improvements.",
        url: "https://www.grammarly.com/",
        icon: "✏️",
        keywords: ["grammar check", "writing assistance", "proofreading", "spelling check", "correct grammar"]
    },
    {
        id: 12,
        name: "Beautiful.ai",
        category: "Presentation",
        description: "AI-powered presentation software that helps design professional slides automatically.",
        url: "https://www.beautiful.ai/",
        icon: "📊",
        keywords: ["presentation", "slides", "powerpoint alternative", "slide design", "create presentation"]
    },
    {
        id: 13,
        name: "Krisp",
        category: "Audio Enhancement",
        description: "AI-powered noise cancellation app that removes background noise from calls.",
        url: "https://krisp.ai/",
        icon: "🔊",
        keywords: ["noise cancellation", "audio enhancement", "video calls", "meetings", "remove background noise"]
    },
    {
        id: 14,
        name: "Notion AI",
        category: "Productivity",
        description: "AI writing assistant integrated with Notion for summarizing, brainstorming, and content creation.",
        url: "https://www.notion.so/product/ai",
        icon: "📋",
        keywords: ["summarize", "note-taking", "brainstorming", "content creation", "summarize long article", "productivity"]
    },
    {
        id: 15,
        name: "Lumen5",
        category: "Video Creation",
        description: "AI video maker that transforms text content into engaging videos automatically.",
        url: "https://lumen5.com/",
        icon: "🎥",
        keywords: ["video creation", "text to video", "marketing videos", "social media videos", "create video"]
    },
    {
        id: 16,
        name: "Canva",
        category: "Graphic Design",
        description: "Design platform with AI-powered features for creating graphics, presentations, and visual content.",
        url: "https://www.canva.com/",
        icon: "🎭",
        keywords: ["graphic design", "create graphics", "design tool", "social media graphics", "poster design", "flyer design"]
    },
    {
        id: 17,
        name: "Soundraw",
        category: "Music Generation",
        description: "AI music generator that creates original royalty-free music based on your preferences.",
        url: "https://soundraw.io/",
        icon: "🎵",
        keywords: ["music generation", "create music", "ai composer", "background music", "soundtrack", "generate music"]
    },
    {
        id: 18,
        name: "Copy.ai",
        category: "Copywriting",
        description: "AI copywriting tool that generates marketing copy, product descriptions, and more.",
        url: "https://www.copy.ai/",
        icon: "📄",
        keywords: ["copywriting", "marketing copy", "product descriptions", "email copy", "ad copy", "write copy"]
    },
    {
        id: 19,
        name: "Runway",
        category: "Video Editing",
        description: "AI-powered video editing platform with features like object removal and video generation.",
        url: "https://runwayml.com/",
        icon: "🎞️",
        keywords: ["video editing", "remove objects from video", "video generation", "video effects", "edit video"]
    },
    {
        id: 20,
        name: "Synthesia",
        category: "AI Video",
        description: "Create AI videos with virtual presenters speaking your script in various languages.",
        url: "https://www.synthesia.io/",
        icon: "👤",
        keywords: ["ai presenter", "virtual spokesperson", "video creation", "explainer video", "ai avatar"]
    },
    {
        id: 21,
        name: "Eleven Labs",
        category: "Voice Synthesis",
        description: "AI voice generator that creates natural-sounding voice overs and narration.",
        url: "https://elevenlabs.io/",
        icon: "🗣️",
        keywords: ["voice synthesis", "text to speech", "voice over", "narration", "ai voice", "generate voice"]
    },
    {
        id: 22,
        name: "DeepL",
        category: "Translation",
        description: "AI-powered translation service that offers more natural-sounding translations than competitors.",
        url: "https://www.deepl.com/",
        icon: "🌐",
        keywords: ["translation", "language translation", "translate text", "multilingual", "document translation"]
    },
    {
        id: 23,
        name: "Adobe Firefly",
        category: "Image Generation",
        description: "AI image generation and editing tools integrated with Adobe Creative Cloud.",
        url: "https://www.adobe.com/products/firefly.html",
        icon: "✨",
        keywords: ["image generation", "text to image", "creative ai", "photo editing", "generate images"]
    },
    {
        id: 24,
        name: "Pictory",
        category: "Video Creation",
        description: "Automatically turns your text into engaging videos with AI-selected visuals.",
        url: "https://pictory.ai/",
        icon: "🎬",
        keywords: ["video creation", "text to video", "automated video", "content repurposing", "video from text"]
    },
    {
        id: 25,
        name: "Tome",
        category: "Presentation",
        description: "AI-powered storytelling tool that generates entire presentations from a simple prompt.",
        url: "https://tome.app/",
        icon: "📖",
        keywords: ["presentation", "storytelling", "slide deck", "generate presentation", "ai presentation"]
    },
    {
        id: 26,
        name: "QuillBot",
        category: "Writing Assistant",
        description: "AI writing tool for paraphrasing, summarizing, and improving your writing.",
        url: "https://quillbot.com/",
        icon: "✏️",
        keywords: ["paraphrasing", "summarizing", "writing tool", "rewrite", "grammar check", "summarize text"]
    },
    {
        id: 27,
        name: "Speechify",
        category: "Text to Speech",
        description: "Converts text to natural-sounding speech so you can listen to articles, books, and documents.",
        url: "https://speechify.com/",
        icon: "🔊",
        keywords: ["text to speech", "audio reading", "listen to articles", "voice narration", "read aloud"]
    },
    {
        id: 28,
        name: "Simplified",
        category: "Marketing",
        description: "All-in-one AI marketing platform for content creation, social media management, and design.",
        url: "https://simplified.com/",
        icon: "📱",
        keywords: ["marketing tool", "social media", "content creation", "design", "all-in-one", "marketing automation"]
    },
    {
        id: 29,
        name: "D-ID",
        category: "Digital Humans",
        description: "Create and animate digital humans with AI-generated speech and facial expressions.",
        url: "https://www.d-id.com/",
        icon: "👤",
        keywords: ["digital humans", "talking avatars", "ai avatars", "facial animation", "virtual presenter"]
    },
    {
        id: 30,
        name: "Murf",
        category: "Voice AI",
        description: "AI voice generator with studio-quality voices for voiceovers and narration.",
        url: "https://murf.ai/",
        icon: "🎙️",
        keywords: ["ai voice", "voice over", "text to speech", "voice generator", "narration", "voice synthesis"]
    },
    {
        id: 31,
        name: "Replit",
        category: "Coding",
        description: "AI-powered coding platform with features to help you code faster and learn programming.",
        url: "https://replit.com/",
        icon: "💻",
        keywords: ["coding", "programming", "development", "code assistant", "learn to code", "code generation"]
    },
    {
        id: 32,
        name: "Upscale.media",
        category: "Image Enhancement",
        description: "AI tool to enhance and upscale low-resolution images to high resolution.",
        url: "https://www.upscale.media/",
        icon: "🔍",
        keywords: ["image upscaling", "enhance photos", "increase resolution", "improve image quality", "upscale images"]
    },
    {
        id: 33,
        name: "Recraft.ai",
        category: "Icon Generation",
        description: "AI-powered icon and illustration generator for designers and developers.",
        url: "https://www.recraft.ai/",
        icon: "🏷️",
        keywords: ["icon generation", "create icons", "illustrations", "design assets", "icon set"]
    },
    {
        id: 34,
        name: "Stockimg.ai",
        category: "Stock Image",
        description: "Generate custom stock photos, illustrations, and design assets using AI.",
        url: "https://stockimg.ai/",
        icon: "📸",
        keywords: ["stock images", "generate photos", "ai images", "stock photos", "design assets"]
    },
    {
        id: 35,
        name: "BlackBox AI",
        category: "Code Generation",
        description: "AI-powered code generation tool for developers that helps write and debug code.",
        url: "https://www.useblackbox.io/",
        icon: "⬛",
        keywords: ["code generation", "programming", "code assistant", "developer tool", "coding help", "ai coding"]
    },
    {
        id: 36,
        name: "Cursor AI",
        category: "Code Editor",
        description: "AI-powered code editor that helps you write, edit, and understand code more efficiently.",
        url: "https://cursor.sh/",
        icon: "📝",
        keywords: ["code editor", "programming assistant", "development tool", "code generation", "ai coding"]
    },
    {
        id: 37,
        name: "Stable Diffusion",
        category: "Image Generation",
        description: "Open-source AI image generation model that creates detailed images from text descriptions.",
        url: "https://stability.ai/",
        icon: "🖌️",
        keywords: ["image generation", "ai art", "text to image", "create images", "illustration"]
    },
    {
        id: 38,
        name: "Gamma",
        category: "Presentation",
        description: "AI-powered presentation tool that turns your ideas into professional presentations in seconds.",
        url: "https://gamma.app/",
        icon: "📊",
        keywords: ["presentation", "slides", "create presentation", "slide deck", "powerpoint alternative"]
    },
    {
        id: 39,
        name: "Perplexity AI",
        category: "Research Assistant",
        description: "AI-powered search engine that answers questions with cited sources and clear explanations.",
        url: "https://www.perplexity.ai/",
        icon: "🔍",
        keywords: ["search engine", "research assistant", "answer questions", "find information", "citations"]
    },
    {
        id: 40,
        name: "Whisper",
        category: "Speech Recognition",
        description: "OpenAI's speech recognition system that can transcribe audio in multiple languages.",
        url: "https://openai.com/research/whisper",
        icon: "👂",
        keywords: ["speech recognition", "transcription", "audio to text", "voice recognition", "multilingual"]
    },
    {
        id: 41,
        name: "Hugging Face",
        category: "AI Development",
        description: "Platform with thousands of AI models for various tasks that developers can use in applications.",
        url: "https://huggingface.co/",
        icon: "🤗",
        keywords: ["ai models", "machine learning", "nlp", "development", "ai platform", "transformers"]
    },
    {
        id: 42,
        name: "Replicate",
        category: "AI Infrastructure",
        description: "Run open-source AI models with a simple API, including Stable Diffusion and more.",
        url: "https://replicate.com/",
        icon: "🔄",
        keywords: ["ai models", "api", "stable diffusion", "machine learning", "ai platform"]
    },
    {
        id: 43,
        name: "Writesonic",
        category: "Content Creation",
        description: "AI writing assistant that generates blog posts, ads, emails, and more in seconds.",
        url: "https://writesonic.com/",
        icon: "📝",
        keywords: ["content writing", "blog writing", "copywriting", "marketing copy", "article generator"]
    },
    {
        id: 44,
        name: "Bard",
        category: "AI Assistant",
        description: "Google's conversational AI assistant that can help with writing, information, and creative tasks.",
        url: "https://bard.google.com/",
        icon: "🎭",
        keywords: ["ai assistant", "google ai", "conversation", "writing assistant", "answer questions"]
    },
    {
        id: 45,
        name: "Microsoft Copilot",
        category: "AI Assistant",
        description: "Microsoft's AI companion integrated with Office apps and Windows operating system.",
        url: "https://copilot.microsoft.com/",
        icon: "🚀",
        keywords: ["ai assistant", "microsoft ai", "office assistant", "windows ai", "productivity"]
    },
    {
        id: 46,
        name: "Caktus AI",
        category: "Education",
        description: "AI tool designed to help students learn more efficiently with summaries and explanations.",
        url: "https://www.caktus.ai/",
        icon: "🌵",
        keywords: ["education", "study assistant", "learning", "student tool", "summarize content"]
    },
    {
        id: 47,
        name: "Fliki",
        category: "Video Creation",
        description: "Turn text into videos with AI-generated voiceovers and visuals in minutes.",
        url: "https://fliki.ai/",
        icon: "🎬",
        keywords: ["text to video", "ai video", "voiceover", "video creation", "content marketing"]
    },
    {
        id: 48,
        name: "Leonardo.ai",
        category: "Image Generation",
        description: "AI image generator specifically designed for creating game assets and illustrations.",
        url: "https://leonardo.ai/",
        icon: "🎮",
        keywords: ["game assets", "illustrations", "image generation", "game design", "ai art"]
    },
    {
        id: 49,
        name: "Anthropic Claude",
        category: "AI Assistant",
        description: "Conversational AI assistant designed to be helpful, harmless, and honest.",
        url: "https://www.anthropic.com/claude",
        icon: "🤖",
        keywords: ["ai assistant", "conversation", "text generation", "writing help", "question answering"]
    },
    {
        id: 50,
        name: "Gemini",
        category: "AI Model",
        description: "Google's multimodal AI system that can understand and combine text, images, video, and code.",
        url: "https://gemini.google.com/",
        icon: "♊",
        keywords: ["multimodal ai", "google ai", "language model", "image understanding", "ai assistant"]
    }
];

// DOM elements
const taskInput = document.getElementById('task-input');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');
const popularTasks = document.querySelectorAll('.task-item');

// Calculate match percentage between user input and tool keywords
function calculateMatchPercentage(userInput, tool) {
    const userWords = userInput.toLowerCase().split(/\s+/);
    let matchCount = 0;
    
    // Check tool name match
    if (tool.name.toLowerCase().includes(userInput.toLowerCase())) {
        matchCount += 5;
    }
    
    // Check category match
    if (tool.category.toLowerCase().includes(userInput.toLowerCase())) {
        matchCount += 3;
    }
    
    // Check tool keywords match
    tool.keywords.forEach(keyword => {
        userWords.forEach(word => {
            if (keyword.includes(word) && word.length > 2) {
                matchCount++;
            }
            
            if (keyword === userInput.toLowerCase()) {
                matchCount += 5;
            }
        });
    });
    
    // Calculate percentage based on keyword matches
    const maxPossibleMatches = Math.max(userWords.length * 2 + 5, 10);
    return Math.min(Math.round((matchCount / maxPossibleMatches) * 100), 100);
}

// Find and display relevant tools
function findRelevantTools(taskDescription) {
    resultsContainer.innerHTML = '';
    
    if (!taskDescription.trim()) {
        return;
    }
    
    // Calculate match percentage for each tool
    const toolMatches = aiTools.map(tool => {
        const matchPercentage = calculateMatchPercentage(taskDescription, tool);
        return { tool, matchPercentage };
    });
    
    // Sort tools by match percentage (highest first)
    const sortedTools = toolMatches
        .filter(item => item.matchPercentage > 20)
        .sort((a, b) => b.matchPercentage - a.matchPercentage);
    
    // Display results
    if (sortedTools.length === 0) {
        displayNoResults();
    } else {
        sortedTools.forEach(({ tool, matchPercentage }) => {
            displayToolCard(tool, matchPercentage);
        });
    }
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Display tool card
function displayToolCard(tool, matchPercentage) {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card';
    
    toolCard.innerHTML = `
        <div class="tool-header">
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-title">
                <h3>${tool.name}</h3>
                <p>${tool.category}</p>
            </div>
            <span class="match-percentage">${matchPercentage}% match</span>
        </div>
        <div class="tool-description">
            ${tool.description}
        </div>
        <div class="tool-actions">
            <a href="${tool.url}" target="_blank" class="btn-primary">Visit Website</a>
            <a href="#" class="btn-secondary more-info-btn" data-id="${tool.id}">More Info</a>
        </div>
    `;
    
    resultsContainer.appendChild(toolCard);
}

// Display no results message
function displayNoResults() {
    resultsContainer.innerHTML = `
        <div class="no-results">
            <h3>No matching AI tools found</h3>
            <p>Try a different description or browse our popular tools below</p>
        </div>
    `;
}

// Event listeners
searchBtn.addEventListener('click', () => {
    findRelevantTools(taskInput.value);
});

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        findRelevantTools(taskInput.value);
    }
});

// Popular tasks click handler
popularTasks.forEach(task => {
    task.addEventListener('click', () => {
        const taskDescription = task.getAttribute('data-task');
        taskInput.value = taskDescription;
        findRelevantTools(taskDescription);
    });
});

// More info button handler (delegated)
resultsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('more-info-btn')) {
        e.preventDefault();
        const toolId = parseInt(e.target.getAttribute('data-id'));
        const tool = aiTools.find(t => t.id === toolId);
        
        alert(`
            ${tool.name}
            
            Category: ${tool.category}
            
            ${tool.description}
            
            Visit their website for more information and to try it out!
        `);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});