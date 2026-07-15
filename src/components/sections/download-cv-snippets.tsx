
// ------------------------------------------------------------
// 2. ABOUT PAGE — clearer button, near the top (next to photo/intro)
// ------------------------------------------------------------

// Place this either right under the "About Muhammad Ahmad Faizan" heading,
// or next to/under the photo — wherever it doesn't crowd the "How I Think" text block.


// ------------------------------------------------------------
// 3. FOOTER — small persistent link alongside email/LinkedIn/GitHub icons
// ------------------------------------------------------------
import { Download } from "lucide-react";

// Add this into the same row/flex container as your existing footer social icons
// (GitHub, LinkedIn, Mail):

<a
  href="/muhammad-ahmad-faizan-cv.pdf"
  download
  aria-label="Download CV"
  className="text-[#A39C90] hover:text-[#E8734A] transition-colors duration-200"
>
  <Download size={20} strokeWidth={1.5} />
</a>

// If your footer icons currently have no visible label (icon-only, like GitHub/LinkedIn/Mail),
// keep this consistent — icon-only with aria-label for accessibility.
// If you'd rather it read as text there instead, use:
//
// <a href="/muhammad-ahmad-faizan-cv.pdf" download className="text-sm text-[#A39C90] hover:text-[#E8734A] transition-colors duration-200 flex items-center gap-1.5">
//   <Download size={14} strokeWidth={1.5} /> Resume
// </a>
