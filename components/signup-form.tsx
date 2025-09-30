"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

interface SignupFormProps {
  onBack: () => void
}

export function SignupForm({ onBack }: SignupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    // 1. Basic client-side validation to catch common spam patterns
    const nameHasUrl = /https?|www\.|[a-z]+\.[a-z]{2,}/.test(formData.name)
    if (nameHasUrl) {
      setError("Please enter a valid name without URLs.")
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mqkokbyd", {
        method: "POST",
        body: data, // Send form data directly, including the honeypot field
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        })
      } else {
        throw new Error("Form submission failed.")
      }
    } catch (err) {
      setError("Sorry, there was an error submitting your form. Please try again.")
      console.error(err)
    }
  }

  if (submitted) {
    return (
      <div className="text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-sans text-3xl font-bold mb-4 text-foreground">Thank You!</h3>
        <p className="text-muted-foreground mb-8">We'll be in touch within 24 hours to discuss your project.</p>
        <button onClick={onBack} className="text-primary hover:underline font-medium">
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="animate-in slide-in-from-right duration-500">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <h3 className="font-sans text-3xl md:text-4xl font-bold mb-2 text-foreground">Let's Get Started</h3>
      <p className="text-muted-foreground mb-8">Tell us about your project and we'll create a custom plan for you.</p>

      <form action="https://formspree.io/f/mqkokbyd" method="POST" onSubmit={handleSubmit} className="space-y-6">
        {/* 2. Honeypot field: Hidden from users, but visible to bots */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-foreground">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select a service</option>
              <option value="hardscape">Hardscape</option>
              <option value="softscape">Softscape</option>
              <option value="water-features">Water Features</option>
              <option value="outdoor-living">Outdoor Living</option>
              <option value="garden-design">Garden Design</option>
              <option value="lighting">Lighting</option>
              <option value="retaining-walls">Retaining Walls</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
            Tell Us About Your Project *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="Describe your vision, budget, timeline, and any specific requirements..."
          />
        </div>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <button
          type="submit"
          className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          Submit Consultation Request
        </button>
      </form>
    </div>
  )
}