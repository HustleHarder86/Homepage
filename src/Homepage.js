import React from "https://cdn.skypack.dev/react";
import { motion } from "https://cdn.skypack.dev/framer-motion";

export default function Homepage() {
  return (
    <div>
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-green-700">InvestorProps</div>
        <nav className="space-x-4 text-gray-700 text-sm">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#pricing" className="hover:text-green-600">Pricing</a>
          <a href="#why" className="hover:text-green-600">Why Us</a>
          <a href="#app" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Launch App</a>
        </nav>
      </header>

      <section
        id="hero"
        className="relative flex items-center justify-center text-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Real estate investing{' '}
            <span className="text-green-300 underline decoration-green-300">made simple</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100">
            Discover cash-flow positive properties in seconds. Empower your clients with investment-ready listings, instantly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#app"
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Get Started Free
            </a>
            <button className="text-green-200 font-medium underline hover:text-white">Watch Demo</button>
          </div>
        </motion.div>
      </section>

      <section id="pricing" className="py-20 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Simple Pricing</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <h3 className="text-2xl font-bold text-green-700">Starter</h3>
              <p className="mt-2 text-gray-600">$49/month</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✓ 100 reports/month</li>
                <li>✓ Basic property filters</li>
                <li>✓ Email support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border-2 border-green-600 text-left">
              <h3 className="text-2xl font-bold text-green-700">Pro</h3>
              <p className="mt-2 text-gray-600">$99/month</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✓ 250 reports/month</li>
                <li>✓ Advanced filters & analytics</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-left">
              <h3 className="text-2xl font-bold text-green-700">Enterprise</h3>
              <p className="mt-2 text-gray-600">Custom</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>✓ Unlimited reports</li>
                <li>✓ White-labeling</li>
                <li>✓ Dedicated success manager</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="why" className="py-20 bg-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Realtors Love Us</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-700">Saves Time</h3>
              <p className="mt-2 text-gray-600">Instantly identify investment-ready listings without sifting through hundreds of properties.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-700">Client-Ready Reports</h3>
              <p className="mt-2 text-gray-600">Generate beautiful, branded reports that investors love and trust.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-700">Boosts Credibility</h3>
              <p className="mt-2 text-gray-600">Stand out with data-backed insights and attract more investor clients.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-green-700">Easy to Use</h3>
              <p className="mt-2 text-gray-600">No training needed. Just input your criteria and get results in seconds.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 bg-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} InvestorProps. All rights reserved.
      </footer>
    </div>
  );
}

