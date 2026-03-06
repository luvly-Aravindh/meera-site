import React, { useEffect } from "react";

export default function BookCallSection() {
  useEffect(() => {
    // Load TidyCal script only once
    if (!document.getElementById("tidycal-embed-script")) {
      const script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      script.id = "tidycal-embed-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section  id="lead-with-confidence"  className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">
          Book Your 1-on-1 Call with Meera
        </h2>
        <p className="text-neutral-600 mb-10 max-w-2xl mx-auto">
          Schedule your personalized leadership breakthrough session below.
          Choose a convenient time and let’s get started.
        </p>

        {/* TidyCal Embed */}
        <div
          className="tidycal-embed"
          data-path="meeragrover/book-your-1-on-1-call-with-meera-ws"
        ></div>
      </div>
    </section>
  );
}
