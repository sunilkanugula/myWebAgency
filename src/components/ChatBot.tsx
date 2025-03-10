import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const getBotResponse = (message: string) => {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
    return "Hello! How can I assist you today?";
  } else if (lowerMsg.includes('pricing') || lowerMsg.includes('cost')) {
    return "Our pricing varies based on project requirements. For a custom quote, please provide more details about your project.";
  } else if (lowerMsg.includes('website') || lowerMsg.includes('web')) {
    return "We offer full-stack web development services including custom websites, e-commerce solutions, and web applications. Would you like to know more about any specific service?";
  } else if (lowerMsg.includes('contact') || lowerMsg.includes('reach')) {
    return "You can reach us via email at contact@webagency.com or call us at +1-234-567-8900. Would you like me to schedule a call for you?";
  } else if (lowerMsg.includes('service')) {
    return "We offer various services including web development, UI/UX design, digital marketing, and more. Which service are you interested in?";
  } else if (lowerMsg.includes('portfolio') || lowerMsg.includes('work')) {
    return "Our portfolio includes projects across various industries like e-commerce, healthcare, education, and real estate. Would you like to see specific examples?";
  } else if (lowerMsg.includes('time') || lowerMsg.includes('long')) {
    return "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications might take 2-3 months. Would you like a specific estimate for your project?";
  } else {
    return "I understand you're interested in our services. Could you please provide more specific details about what you're looking for?";
  }
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! How can I help you today? Feel free to ask about our services, pricing, or portfolio!", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setInput('');

    // Get contextual response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 500);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 p-3 rounded-full shadow-lg cursor-pointer"
      >
        <ChatBubbleLeftIcon className="h-6 w-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-600 to-black rounded-t-lg">
              <h3 className="text-white font-semibold">Chat with us</h3>
              <button onClick={() => setIsOpen(false)} className="cursor-pointer">
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isUser
                        ? 'bg-gradient-to-r from-red-600 to-black text-white'
                        : 'bg-white shadow-md text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-black text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-gray-900 cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}