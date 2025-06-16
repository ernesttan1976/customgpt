import './style.css';

// Replace the gpts array with this apps array
const apps = [
  {
    id: "music",
    name: "AI Music Generator",
    icon: "🎵",
    category: "entertainment",
    description: "Amazing AI music generator",
    url: "https://music.techdad.work",
    status: "active" // active, maintenance, beta
  },
  {
    id: "customgpt",
    name: "CustomGPT Portal", 
    icon: "🤖",
    category: "ai",
    description: "Collection of custom AI assistants and chatbots",
    url: "https://customgpt.techdad.work"
  },
  {
    id: "photos",
    name: "Immich Photo Gallery",
    icon: "📷", 
    category: "media",
    description: "Immich, a Google Photos clone",
    url: "https://photos.techdad.work"
  },
  {
    id: "blog",
    name: "My Blog",
    icon: "📝",
    category: "content", 
    description: "Fun posts and insights",
    url: "https://blog.techdad.work"
  },
  {
    id: "n8n",
    name: "Nodemation Automation Hub",
    icon: "🔄",
    category: "productivity",
    description: "Workflow automation and integration platform - Automate Anything", 
    url: "https://n8n.techdad.work"
  },
  {
    id: "ai",
    name: "RTFM QnA Chatbot",
    icon: "🧠",
    category: "ai",
    description: "Vision RAG using Colpali model",
    url: "https://ai.techdad.work"
  },
  {
    id: "videoai", 
    name: "Photo to Video AI",
    icon: "🎬",
    category: "ai",
    description: "Generate short video from a photo",
    url: "https://videoai.techdad.work"
  },
  {
    id: "qr",
    name: "Artistic QR Generator",
    icon: "📱", 
    category: "tools",
    description: "Generate artistic QR code",
    url: "https://qr.techdad.work"
  },
  {
    id: "pdf",
    name: "PDF Editing Tools",
    icon: "📄",
    category: "tools", 
    description: "Convert, merge, split and edit PDF documents",
    url: "https://pdf.techdad.work"
  },
  {
    id: "affine",
    name: "AFFiNE Whiteboarding",
    icon: "📚",
    category: "productivity",
    description: "Notion + Miro => planning and presentation",
    url: "https://affine.techdad.work"
  },
  {
    id: "pptconvert",
    name: "PPT to AFFiNE Converter", 
    icon: "📊",
    category: "tools",
    description: "Convert powerpoint files to AFFiNE Markdown(with images)",
    url: "https://pptconvert.techdad.work"
  }
];

// GPT data
const gpts = [
  {
    id: "g-67ad28c1468c8191b8cba04a0bc79225",
    name: "Thinking in Bets",
    icon: "🎲",
    category: "productivity",
    description: "Decision making and probability thinking assistant",
    url: "https://chatgpt.com/g/g-67ad28c1468c8191b8cba04a0bc79225-thinking-in-bets"
  },
  {
    id: "g-67395c4c5c648191987aed6fd190a142",
    name: "Chinese Simplified Tutor",
    icon: "汉",
    category: "education",
    description: "Learn Chinese with your personal study buddy",
    url: "https://chatgpt.com/g/g-67395c4c5c648191987aed6fd190a142-chinese-simplified-tutor-my-study-buddy"
  },
  {
    id: "g-673945fc19448191bb1f6a192628490e",
    name: "English Tutor",
    icon: "📝",
    category: "education",
    description: "Improve your English with personalized guidance",
    url: "https://chatgpt.com/g/g-673945fc19448191bb1f6a192628490e-english-tutor-my-study-buddy"
  },
  {
    id: "g-67397a53972c819187260413e040af67",
    name: "Mathematics Tutor",
    icon: "🔢",
    category: "education",
    description: "Get help with math problems and concepts",
    url: "https://chatgpt.com/g/g-67397a53972c819187260413e040af67-mathematics-tutor-my-study-buddy"
  },
  {
    id: "g-67397c2704648191bee931752145c843",
    name: "Science Tutor",
    icon: "🔬",
    category: "education",
    description: "Your personal science learning assistant",
    url: "https://chatgpt.com/g/g-67397c2704648191bee931752145c843-science-tutor-my-study-buddy"
  },
  {
    id: "g-kDx8VEbpn",
    name: "Docker Linux Bash Tutor",
    icon: "🐳",
    category: "tech",
    description: "Learn Docker, Linux, and Bash commands",
    url: "https://chatgpt.com/g/g-kDx8VEbpn-docker-linux-bash-tutor"
  },
  {
    id: "g-675b859d26748191acc000bfe117628b",
    name: "n8n Tutor",
    icon: "🔄",
    category: "tech",
    description: "Guidance for n8n automation workflows",
    url: "https://chatgpt.com/g/g-675b859d26748191acc000bfe117628b-n8n-tutor"
  },
  {
    id: "g-676214420184819181ba8c551aff3bc2",
    name: "Callsign Bot",
    icon: "📡",
    category: "special",
    description: "Assistant for amateur radio callsigns",
    url: "https://chatgpt.com/g/g-676214420184819181ba8c551aff3bc2-callsign-bot"
  },
  {
    id: "g-BnbKEHLdX",
    name: "Flutter Tutor",
    icon: "📱",
    category: "tech",
    description: "Learn and troubleshoot Flutter development",
    url: "https://chatgpt.com/g/g-BnbKEHLdX-flutter-tutor"
  },
  {
    id: "g-676e22a8083c81918be548bd69ff38d1",
    name: "Flutter Book Bot",
    icon: "📚",
    category: "tech",
    description: "Flutter development guide and reference",
    url: "https://chatgpt.com/g/g-676e22a8083c81918be548bd69ff38d1-flutter-book-bot"
  },
  {
    id: "g-678207d2b52881918e96df49681f2571",
    name: "Thrustmaster Bot",
    icon: "🎮",
    category: "special",
    description: "Support for Thrustmaster gaming peripherals",
    url: "https://chatgpt.com/g/g-678207d2b52881918e96df49681f2571-thrustmaster-bot"
  },
  {
    id: "g-fvQXBCTp5",
    name: "AWS Developer Associate Tutor",
    icon: "☁️",
    category: "tech",
    description: "Prepare for AWS certification exams",
    url: "https://chatgpt.com/g/g-fvQXBCTp5-avvs-developer-associate-tutor"
  },
  {
    id: "g-67be333263388191aa458c261241cf17",
    name: "Witty Comeback",
    icon: "😏",
    category: "productivity",
    description: "Generate clever and witty responses",
    url: "https://chatgpt.com/g/g-67be333263388191aa458c261241cf17-witty-comeback"
  },
  {
    id: "g-6758d5e6ce58819198c220e791f8c24f",
    name: "Power Apps",
    icon: "⚡",
    category: "tech",
    description: "Microsoft Power Apps development assistant",
    url: "https://chatgpt.com/g/g-6758d5e6ce58819198c220e791f8c24f-power-apps"
  }
];

// Add type: "gpt" to all your existing GPT objects, then combine:
const allItems = [...gpts.map(gpt => ({...gpt, type: "gpt"})), ...apps.map(app => ({...app, type: "app"}))];

// Function to generate GPT cards
function generateGPTCards(filteredItems) {
  const container = document.getElementById('gpt-container');
  container.innerHTML = '';

  if (container.classList.contains('gpt-grid')) {
    filteredItems.forEach(item => {
      const typeIndicator = item.type === 'gpt' ? '<span class="type-badge gpt">GPT</span>' : '<span class="type-badge app">App</span>';
      container.innerHTML += `
        <div class="gpt-card" data-category="${item.category}">
          <div class="header">
            <div class="icon">${item.icon}</div>
            <div>
              <h3 class="name">${item.name}</h3>
              <div class="tags">
                <span class="category-tag">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                ${typeIndicator}
              </div>
            </div>
          </div>
          <div class="body">
            <p class="description">${item.description}</p>
            <a href="${item.url}" target="_blank" class="action-btn">Open ${item.type === 'gpt' ? 'GPT' : 'App'}</a>
          </div>
        </div>
      `;
    });
  } else {
    // List view
    filteredItems.forEach(item => {
      container.innerHTML += `
        <div class="gpt-list-item" data-category="${item.category}">
          <div class="icon">${item.icon}</div>
          <div class="content">
            <h3 class="name">${item.name}</h3>
            <span class="category-tag">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
          </div>
          <a href="${item.url}" target="_blank" class="action-btn">Open</a>
        </div>
      `;
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Generate initial cards
  generateGPTCards(allItems);

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Save theme preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  });

  // Check for saved theme preference
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark-mode');
  }

  // View toggle
  const gridView = document.getElementById('grid-view');
  const listView = document.getElementById('list-view');
  const container = document.getElementById('gpt-container');

  gridView.addEventListener('click', function() {
    gridView.classList.add('active');
    listView.classList.remove('active');
    container.classList.add('gpt-grid');
    container.classList.remove('gpt-list');
    generateGPTCards(getFilteredItems());
    localStorage.setItem('viewMode', 'grid');
  });

  listView.addEventListener('click', function() {
    listView.classList.add('active');
    gridView.classList.remove('active');
    container.classList.add('gpt-list');
    container.classList.remove('gpt-grid');
    generateGPTCards(getFilteredItems());
    localStorage.setItem('viewMode', 'list');
  });

  // Check for saved view preference
  const savedViewMode = localStorage.getItem('viewMode');
  if (savedViewMode === 'list') {
    listView.click();
  }

  // Category filtering
  const categoryButtons = document.querySelectorAll('.category');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      generateGPTCards(getFilteredItems());
      localStorage.setItem('activeCategory', this.dataset.category);
    });
  });

  // Check for saved category preference
  const savedCategory = localStorage.getItem('activeCategory');
  if (savedCategory) {
    const categoryButton = document.querySelector(`.category[data-category="${savedCategory}"]`);
    if (categoryButton) {
      categoryButton.click();
    }
  }

  // Search functionality
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', function() {
    generateGPTCards(getFilteredItems());
  });

  // Helper function to get filtered GPTs
  function getFilteredItems() {
    const activeCategory = document.querySelector('.category.active')?.dataset.category || 'all';
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    return allItems.filter(item => {
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory;
      const searchMatch = !searchTerm || 
                        item.name.toLowerCase().includes(searchTerm) || 
                        item.description.toLowerCase().includes(searchTerm);
      return categoryMatch && searchMatch;
    });
  }
});

// Add this after DOMContentLoaded
const container = document.getElementById('gpt-container');
// Set default view mode
container.classList.add('gpt-grid');