export const config = {
    "number": 22,
    "slug": "founder-story-interviewer",
    "title": "Founder Story Interviewer",
    "category": "Marketing & Content",
    "tagline": "Interview scripts and story extraction workflows for capturing a small business owner\u2019s voice.",
    "persona": "Students producing founder videos, website copy, and social content.",
    "gap": "Authentic brand stories are hard for students to elicit without a structured interview process.",
    "niche": "Founder-led local businesses and nonprofits.",
    "metric": "approved founder quotes captured per engagement",
    "modules": [
        "Interview scripts",
        "Quote bank",
        "Story arc templates",
        "Consent checklist"
    ],
    "theme": {
        "accent": "#db2777",
        "accent2": "#f9a8d4",
        "emoji": "\ud83d\udce3",
        "metricLabel": "Content readiness",
        "workflow": [
            "Capture owner voice",
            "Generate channel-ready assets",
            "Review for local fit",
            "Export approved content"
        ],
        "privacy": "Do not publish quotes, photos, or testimonials without explicit owner/client approval."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "interview-scripts",
            "label": "Interview scripts",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify interview scripts with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "quote-bank",
            "label": "Quote bank",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify quote bank with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "story-arc-templates",
            "label": "Story arc templates",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify story arc templates with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "consent-checklist",
            "label": "Consent checklist",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify consent checklist with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Founder Story Interviewer and capture baseline evidence.",
            "Complete the interview scripts workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Oak & Olive Cafe",
        "chapter": "Dallas",
        "studentLead": "Volta Student Lead",
        "notes": "Neighborhood marketing project with owner-approved content assets. Founder Story Interviewer sample.",
        "evidencePrefix": "Founder Story Interviewer",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map