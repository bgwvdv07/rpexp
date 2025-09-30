"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"

interface Review {
  id: number
  author: string
  rating: number
  text: string
  source: "google" | "yelp"
  date: string
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated API call - replace with actual Yelp/Google API integration
    const fetchReviews = async () => {
      // Mock data for demonstration
      const mockReviews: Review[] = [
        {
          id: 1,
          author: "Rachael Smith",
          rating: 5,
          text: "We had an amazing experience working with John and his team. They completely transformed our backyard over the last several weeks and we could not be more thrilled with the results. We are still pinching ourselves that this is our yard and feel like we gained a new room in our house! John and his foreman, Juan, had great recommendations throughout the project to ensure that the end result was exactly what we wanted. The quality of their work is top notch and far exceeded our expectations. We are so glad that we chose to work with them. He built strong trust with us from the initial design stage, in which he patiently popped over three times to answer questions and make adjustments. This is our first house and this was the biggest project we've taken on - John and his team made it a fantastic experience and helped put our minds at ease throughout the project. We can't recommend them highly enough!",
          source: "google",
          date: "27 Jul 2020",
        },
        {
          id: 2,
          author: "Sheila Donnelly",
          rating: 5,
          text: "John Reppards Landscaping transformed a chaotic yard with a crumbling hardscape into a dream garden straight out of “Sunset” magazine. I had a landscape designer draw plans based on my rough sketches and budget and emailed them out for bids to landscaping firms that either blew me off or bid more than twice my budget. I was disappointed to realize the design as drawn was not possible to build within my budget. When I emailed John he got back to me right away then stopped by to look at the drawings and the yard. I hired John’s friendly helper Carlos to do weeding in my front and side yard while John and I went over the plans and brainstormed on how to modify them to fit the budget. John gave me some pavers catalogs to look at which opened up a whole world of paver styles, textures and colors I had no idea were available. I was so happy to find out there is such a thing as a paver circle kit which was much more reasonable cost and less labor to install than flagstone. John followed the drawings with modifications we agreed on, and did great work building the arbors and raised beds. I wanted to reduce reuse and recycle as much as possible and was delighted with the gate John built by modifying an old security door with wood inserts he custom cut. John’s helper Carlos built a gorgeous 16” raised rock garden bed out of existing stones I had around the old pond and broken up concrete chunks from the old walkway. This was a big complex project in a tiny yard that required lots of puzzling out how to move or work around existing garden features I wanted to save to make room to accommodate entirely new hardscape construction. Adding complexity was the need to move two large pet koi from the in ground pond they’d been living in for the past 2 decades to a new bigger above ground ( Kim’s Ponds) pond. John was so patient with the challenges and always gave me good ideas when I asked. Some of my favorite elements of the new landscape were John’s ideas. For example he suggested I use the gray decomposed granite instead of the gold I had in mind for the pathways. He said his past clients always ended up happier with the gray and, that it would compliment the house and pavers colors I chose and he was right, I love the pathway look now! Another great idea John came up with while we were brainstorming a solution to integrate the existing deck with the paver walkway and patio. He suggested a wide shallow step along the length that transformed the deck into a more useable space better integrated with the garden. John is very easy to work with, responsive and prioritizes clients satisfaction. If you can hire him for your gardening project you are in luck.",
          source: "google",
          date: "27 May 2020",
        },
        {
          id: 3,
          author: "Dianne M.",
          rating: 5,
          text: "John, Juan and the rest of the crew have turned our yard into a barren pile of weeds into a beautiful landscape. They are fast, fairly-priced, and work clean. Couldn't ask for more.",
          source: "yelp",
          date: "Oct 14, 2020",
        },
      ]

      setTimeout(() => {
        setReviews(mockReviews)
        setLoading(false)
      }, 500)
    }

    fetchReviews()
  }, [])

  return (
    <section id="reviews" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Here's What People Are Saying
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Join our community of satisfied clients</p>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-muted rounded w-full mb-2"></div>
                <div className="h-3 bg-muted rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-yellow text-yellow" : "text-muted"}`}
                      
                    />
                  ))}
                </div>

                <p className="text-card-foreground mb-4 leading-relaxed">"{review.text}"</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-card-foreground">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
