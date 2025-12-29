import {
  Sparkles,
  Wand2,
  Zap,
  CheckCircle2,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">BlogAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </a>
            <a
              href="#examples"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Examples
            </a>
          </nav>
          <button className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">
                  Powered by GPT-4
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                Create blog content at the{" "}
                <span className="relative">
                  <span className="relative z-10">speed of thought</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-purple-200/50 -z-0"></span>
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
                Transform your ideas into engaging blog posts in seconds. Our AI
                understands your voice and creates content that resonates with
                your audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Start Writing Free
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white text-black border-2 border-gray-200 rounded-full font-semibold hover:border-gray-300 transition-all">
                  Watch Demo
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                No credit card required • 7-day free trial
              </p>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
                {/* AI Writing Animation */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Wand2 className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">AI Assistant</div>
                      <div className="text-xs text-gray-500">
                        Writing your blog post...
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded-full w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-5/6 animate-pulse delay-75"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-4/6 animate-pulse delay-150"></div>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                    <div className="text-sm font-semibold">10x Faster</div>
                    <div className="text-xs text-gray-500">
                      Than manual writing
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
                    <div className="text-sm font-semibold">SEO Ready</div>
                    <div className="text-xs text-gray-500">
                      Optimized content
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-60 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Everything you need to create amazing content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Powerful features to help you write, edit, and publish blog posts
              that your audience will love
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "AI-Powered Writing",
                description:
                  "Generate high-quality blog posts in seconds with advanced AI technology",
              },
              {
                icon: <Wand2 className="w-6 h-6" />,
                title: "Smart Editing",
                description:
                  "Refine and improve your content with intelligent suggestions and corrections",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "SEO Optimization",
                description:
                  "Automatically optimize your content for search engines and better rankings",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Multiple Formats",
                description:
                  "Create blog posts, articles, social media content, and more",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Custom Voice",
                description:
                  "Train the AI to match your unique writing style and brand voice",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Instant Publishing",
                description:
                  "Publish directly to your blog or export to your favorite platforms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10k+", label: "Blog Posts Created" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "5x", label: "Faster Content Creation" },
              { number: "50+", label: "Languages Supported" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your content creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 text-pretty">
            Join thousands of bloggers who are already creating amazing content
            with BlogAI
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
      {/* Examples Section */}
      <section id="examples" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              See what BlogAI can create
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              From tech tutorials to lifestyle content, our AI adapts to any
              niche and writing style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Example 1 - Tech Blog */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    Technology Blog
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-purple-600 font-semibold mb-2">
                  TECH
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  10 Essential VS Code Extensions for React Developers
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Boost your productivity with these carefully selected VS Code
                  extensions that every React developer should know about...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">5 min read</span>
                  <button className="text-sm font-semibold text-black hover:gap-3 flex items-center gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Example 2 - Business Blog */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    Business Blog
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-green-600 font-semibold mb-2">
                  BUSINESS
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  How AI is Transforming Modern Marketing Strategies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Discover how artificial intelligence is revolutionizing the
                  way businesses approach marketing and customer engagement...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">7 min read</span>
                  <button className="text-sm font-semibold text-black hover:gap-3 flex items-center gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Example 3 - Lifestyle Blog */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="aspect-video bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    Lifestyle Blog
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-pink-600 font-semibold mb-2">
                  LIFESTYLE
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  Morning Routines That Actually Work for Busy Professionals
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Start your day right with these practical and effective
                  morning routines designed for people with packed schedules...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">4 min read</span>
                  <button className="text-sm font-semibold text-black hover:gap-3 flex items-center gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Below Examples */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Try It Yourself
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              Choose the plan that fits your needs. All plans include a 7-day
              free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all border-2 border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 text-sm">
                  Perfect for getting started
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$9</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-white text-black border-2 border-gray-200 rounded-full font-semibold hover:border-gray-300 transition-all mb-8">
                Start Free Trial
              </button>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    10 blog posts per month
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Basic AI writing assistant
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    SEO optimization
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Email support</span>
                </div>
              </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="bg-black text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all relative border-2 border-black scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-300 text-sm">
                  For serious content creators
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-gray-300">/month</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all mb-8">
                Start Free Trial
              </button>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-200">
                    Unlimited blog posts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-200">
                    Advanced AI with GPT-4
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-200">
                    Custom voice training
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-200">
                    Advanced SEO analytics
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-200">
                    Priority support
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-200">
                    Team collaboration
                  </span>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all border-2 border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 text-sm">
                  For large teams and agencies
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-white text-black border-2 border-gray-200 rounded-full font-semibold hover:border-gray-300 transition-all mb-8">
                Contact Sales
              </button>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Everything in Pro
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Unlimited team members
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Custom AI model training
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">API access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    Dedicated account manager
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">SLA guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">BlogAI</span>
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 BlogAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
