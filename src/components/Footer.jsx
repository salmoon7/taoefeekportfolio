import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const [emailMsg, setEmailMsg] = useState("");

  const handleGmailClick = () => {
    const subject = encodeURIComponent("Message from Portfolio");
    const body = encodeURIComponent(emailMsg);
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=taofeekabdussalam07@gmail.com&su=${subject}&body=${body}`;
    window.open(url, "_blank");
  };

  return (
    <footer
      id="contact"
      className="bg-white text-gray-800 px-6 md:px-24 py-16 border-t border-gray-200"
    >
      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-accent pl-3">
            Taofeek Abdussalam
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            A frontend & mobile developer passionate about building beautiful,
            functional experiences with React, Next.js, React Native and more.
          </p>
        </div>

        {/* Email Me */}
        {/* Email Me - Dark Themed Style */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-accent pl-3">
            Say Hello
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Want to work together or say something nice? Just drop a message.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Your message here..."
              value={emailMsg}
              onChange={(e) => setEmailMsg(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 rounded-md border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <button
              onClick={handleGmailClick}
              disabled={!emailMsg.trim()}
              className={`flex items-center gap-2 px-5 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition ${
                !emailMsg.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title="Send Email"
            >
              <Mail className="w-5 h-5" />
              Mail Me
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-l-4 border-accent pl-3">
            Connect
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4 text-accent" />
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-accent" />
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a
                href="mailto:taofeekabdussalam07@gmail.com"
                className="hover:text-accent transition"
              >
                taofeekabdussalam07@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-400 border-t pt-6">
        &copy; {new Date().getFullYear()} Taofeek Abdussalam. Crafting solutions
        with precision and purpose.
      </div>
    </footer>
  );
};

export default Footer;
