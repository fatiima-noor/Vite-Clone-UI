import React, { useState } from 'react';
import { ChevronRight, Search, Zap, Lock, BarChart2, Edit3, Layers, MessageCircle, X } from 'lucide-react';

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    {
      icon: <Zap size={16} />,
      title: "Getting Started",
      questions: [
        {
          question: "How do I upload my content?",
          answer: "You can upload your content through the central dashboard. We support PDFs, DOCXs, images, audio, and video files. Simply drag and drop files or use the file browser to select your materials."
        },
        {
          question: "What content formats are supported?",
          answer: "Our platform supports a wide range of formats including text documents (PDF, DOCX, TXT), images (PNG, JPG), audio (MP3, WAV), and video files (MP4, MOV). We automatically process each format appropriately."
        }
      ]
    },
    {
      icon: <Lock size={16} />,
      title: "Privacy & Security",
      questions: [
        {
          question: "Is my content kept private?",
          answer: "Yes! All uploaded content remains private by default. You have complete control over visibility settings and can choose to share content with specific users or make it public if desired."
        },
        {
          question: "How is my data protected?",
          answer: "We employ industry-leading security measures including end-to-end encryption, secure cloud storage, and regular security audits to ensure your information remains protected at all times."
        }
      ]
    },
    {
      icon: <BarChart2 size={16} />,
      title: "AI Features",
      questions: [
        {
          question: "What AI tools can I generate from my content?",
          answer: "Our platform converts your content into summaries, transcriptions, interactive chatbots, flashcards, presentations, quizzes, study guides, and knowledge maps - all with a single upload."
        },
        {
          question: "How accurate are the AI-generated summaries?",
          answer: "Our AI summaries typically capture 90%+ of key information. Quality varies based on content clarity and structure. You can always edit and refine any AI-generated output."
        }
      ]
    },
    {
      icon: <Edit3 size={16} />,
      title: "Customization",
      questions: [
        {
          question: "Can I customize the generated flashcards?",
          answer: "Absolutely! After generation, you can edit questions/answers, add images, reorder cards, adjust styling, and even create custom templates for consistent branding."
        },
        {
          question: "How can I modify generated presentations?",
          answer: "Our editor allows you to change layouts, update content, add multimedia elements, apply themes, and restructure slides to perfectly match your requirements."
        }
      ]
    },
    {
      icon: <Layers size={16} />,
      title: "Content Management",
      questions: [
        {
          question: "How do I organize multiple content pieces?",
          answer: "You can create collections, apply tags, set up custom folders, and use our smart search to keep everything organized. Our AI also suggests organization systems based on your content."
        },
        {
          question: "Can I collaborate with others on content?",
          answer: "Yes, our collaboration tools allow real-time editing, commenting, and sharing permissions that you can customize for each team member or external collaborator."
        }
      ]
    },
    {
      icon: <MessageCircle size={16} />,
      title: "Chatbots",
      questions: [
        {
          question: "How does the chatbot generation work?",
          answer: "Our system analyzes your content and creates a specialized chatbot that can answer questions based specifically on your material. You can further refine the chatbot's knowledge and responses."
        },
        {
          question: "Can I embed the chatbot on my website?",
          answer: "Yes! We provide simple embed codes that allow you to place your content-specific chatbot on any website, with customizable appearance to match your brand."
        }
      ]
    }
  ];

  // Filter questions based on search query
  const filteredFaqs = searchQuery.trim() 
    ? faqCategories.flatMap(category => 
        category.questions
          .filter(q => 
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(q => ({
            category: category.title,
            icon: category.icon,
            ...q
          }))
      )
    : [];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-6">
      <div className="mb-6">
        {/* Main Heading with Very Subtle Gradient */}
        <h2 className="font-manrope text-4xl font-semibold tracking-tight leading-tight mt-6 mb-2 text-center relative w-auto mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Your </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Questions </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Answered</span>
        </h2>

        <p className="text-sm text-gray-400 mt-2 text-center">
          Explore the most common questions and their answers below
        </p>
        
        {/* Compact Search Bar */}
        <div className="relative max-w-md mx-auto mt-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for answers..."
            className="w-full py-2 pl-9 pr-9 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X size={14} className="text-gray-400 hover:text-white transition-colors" />
            </button>
          )}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto">
        {/* Search Results */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-sm text-blue-400 mb-4">{filteredFaqs.length} results found</p>
            
            {filteredFaqs.map((item, index) => (
              <div key={index} className="mb-3 bg-gray-900/30 rounded-lg overflow-hidden border border-gray-800">
                <div className="flex items-center p-3">
                  <div className="p-1 bg-blue-900/30 rounded mr-2">
                    {item.icon}
                  </div>
                  <span className="text-xs text-blue-300">{item.category}</span>
                </div>
                <div className="px-4 pb-4">
                  <h4 className="font-medium text-gray-200 mb-2">{item.question}</h4>
                  <p className="text-sm text-gray-400">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Categories and Questions */}
        {!searchQuery && (
          <div className="space-y-4">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-gray-900/30 rounded-lg border border-gray-800">
                {/* Category Header */}
                <div className="p-3 flex items-center justify-between border-b border-gray-800">
                  <div className="flex items-center">
                    <div className="p-1.5 rounded bg-blue-900/30 mr-2 text-blue-300">
                      {category.icon}
                    </div>
                    <h3 className="text-sm font-medium text-blue-200">{category.title}</h3>
                  </div>
                  <span className="text-xs text-gray-500">{category.questions.length} questions</span>
                </div>
                
                {/* Questions List */}
                <div className="divide-y divide-gray-800/50">
                  {category.questions.map((item, qIndex) => {
                    const index = `${catIndex}-${qIndex}`;
                    const isActive = activeIndex === index;
                    
                    return (
                      <div key={qIndex} className="relative">
                        <button
                          onClick={() => toggleQuestion(index)}
                          className="w-full text-left p-3 flex items-center justify-between"
                        >
                          <h4 className="text-sm font-medium text-gray-300 pr-6">{item.question}</h4>
                          <ChevronRight
                            size={16}
                            className={`text-gray-500 absolute right-3 top-3.5 transition-transform duration-300 ${isActive ? 'rotate-90 text-blue-400' : ''}`}
                          />
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40' : 'max-h-0'}`}>
                          <div className="p-3 pt-0 text-xs text-gray-400 bg-gray-900/50">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQs;