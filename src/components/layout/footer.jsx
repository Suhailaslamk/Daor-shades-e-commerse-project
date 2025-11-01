
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-4">
       


        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Daor</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Redefining luxury eyewear through innovation, design, and timeless craftsmanship.
          </p>
        </div>

       


        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/products" className="hover:text-white transition">Collection</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        



        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

       


        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <form className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
              →
            </button>
          </form>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © 2025 Daor. All rights reserved.
      </div>
    </footer>
  );
}
