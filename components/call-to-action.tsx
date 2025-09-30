"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { SignupForm } from "./signup-form"

export function CallToAction() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {!showForm ? (
          <div className="text-center animate-in slide-in-from-bottom duration-700">
            <div className="inline-block mb-8 animate-bounce">
              <div className="bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-lg">
                <p className="font-sans text-xl md:text-2xl font-bold flex items-center gap-3">
                  Build Your Dream Garden Today
                  <ArrowRight className="w-6 h-6" />
                </p>
              </div>
            </div>

            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Ready to Transform Your Outdoor Space?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Let's create something beautiful together. Schedule a consultation and bring your vision to life.
            </p>

            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        ) : (
          <SignupForm onBack={() => setShowForm(false)} />
        )}
      </div>
    </section>
  )
}
