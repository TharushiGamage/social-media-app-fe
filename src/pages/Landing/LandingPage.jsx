import React from 'react';
import { SignInButton } from '@clerk/clerk-react';

const LandingPage = () => {
	return (
		<div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-pink-500 selection:text-white">
			{/* Navbar */}
			<nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
				<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
					SocialVibe
				</div>
				<div className="hidden md:flex space-x-8">
					<a href="#features" className="hover:text-pink-400 transition-colors duration-300">Features</a>
					<a href="#community" className="hover:text-pink-400 transition-colors duration-300">Community</a>
					<a href="#premium" className="hover:text-pink-400 transition-colors duration-300">Premium</a>
				</div>
				<SignInButton mode="modal">
					<button className="bg-white text-slate-900 px-6 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer">
						Get Started
					</button>
				</SignInButton>
			</nav>

			{/* Hero Section */}
			<section className="relative container mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
				{/* Background Elements */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>
				<div className="absolute bottom-0 right-20 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px] -z-10"></div>

				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
					Connect Deeper. <br />
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse">
						Experience More.
					</span>
				</h1>
				<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
					The next generation social platform designed for authentic connections.
					Share your world in high fidelity and discover communities that matter.
				</p>

				<div className="flex flex-col sm:flex-row gap-4">
					<SignInButton mode="modal">
						<button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
							Join the Waitlist
						</button>
					</SignInButton>
					<button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
						View Design System
					</button>
				</div>
			</section>

			{/* Features Grid */}
			<section id="features" className="container mx-auto px-6 py-24">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
					Why <span className="text-pink-500">SocialVibe</span>?
				</h2>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Immersive Stories",
							desc: "Share moments with cinematic quality and interactive elements.",
							color: "from-orange-400 to-pink-500"
						},
						{
							title: "Privacy First",
							desc: "You own your data. End-to-end encryption for all messages.",
							color: "from-blue-400 to-indigo-500"
						},
						{
							title: "Creator Economy",
							desc: "Monetize your content directly with zero platform fees.",
							color: "from-green-400 to-emerald-500"
						}
					].map((feature, index) => (
						<div key={index} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
							<div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}></div>
							<h3 className="text-xl font-bold mb-3">{feature.title}</h3>
							<p className="text-slate-400">{feature.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Stats Section */}
			<section className="border-y border-white/5 bg-white/5 backdrop-blur-sm">
				<div className="container mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					{[
						{ label: "Active Users", value: "2M+" },
						{ label: "Communities", value: "50k+" },
						{ label: "Countries", value: "120+" },
						{ label: "Messages Sent", value: "1B+" }
					].map((stat, idx) => (
						<div key={idx}>
							<div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
							<div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA Footer */}
			<footer className="container mx-auto px-6 py-24 text-center">
				<div className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-violet-900/50 to-slate-900 border border-white/10 relative overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

					<h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to dive in?</h2>
					<p className="text-slate-300 mb-8 text-lg">Join millions of creators shaping the future of social.</p>
					<SignInButton mode="modal">
						<button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
							Get Started Now
						</button>
					</SignInButton>
				</div>

				<div className="mt-16 text-slate-600 text-sm">
					&copy; {new Date().getFullYear()} SocialVibe. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
