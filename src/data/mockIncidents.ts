import { Incident } from "../types/incident";

// Mock data for AI safety incidents
// These incidents represent various AI safety concerns across different domains
export const mockIncidents: Incident[] = [
  // Bias in recommendation systems
  {
    id: "1",
    title: "Biased Recommendation Algorithm",
    description:
      "Algorithm consistently favored certain demographics in job recommendations, leading to potential discrimination in hiring processes. The bias was detected in the training data and model outputs.",
    severity: "Medium",
    reportedDate: "2025-03-15T10:00:00Z",
  },
  // Critical information hallucination
  {
    id: "2",
    title: "LLM Hallucination in Critical Info",
    description:
      "LLM provided incorrect safety procedure information in a medical context, potentially endangering patient care. The model generated plausible but false information about drug interactions.",
    severity: "High",
    reportedDate: "2025-04-01T14:30:00Z",
  },
  // Privacy concerns in conversational AI
  {
    id: "3",
    title: "Minor Data Leak via Chatbot",
    description:
      "Chatbot inadvertently exposed non-sensitive user metadata during a conversation. The leak was contained quickly but highlighted potential privacy concerns in conversational AI systems.",
    severity: "Low",
    reportedDate: "2025-03-20T09:15:00Z",
  },
  // Autonomous vehicle safety
  {
    id: "4",
    title: "Autonomous Vehicle Misclassification",
    description:
      "Self-driving system misclassified a construction zone barrier, leading to a near-miss incident. The system failed to properly identify temporary road markings and safety equipment.",
    severity: "High",
    reportedDate: "2025-04-05T08:45:00Z",
  },
  // Content generation and detection
  {
    id: "5",
    title: "AI-Generated Content Misuse",
    description:
      "Deepfake detection system failed to identify sophisticated AI-generated content, potentially enabling misinformation spread. The system needs improved training on latest generation techniques.",
    severity: "Medium",
    reportedDate: "2025-03-25T16:20:00Z",
  },
  // Bias in facial recognition
  {
    id: "6",
    title: "Facial Recognition Bias",
    description:
      "Facial recognition system showed significant accuracy disparities across different demographic groups. The model performed poorly on certain ethnicities and age groups.",
    severity: "High",
    reportedDate: "2025-04-10T11:30:00Z",
  },
  // Privacy in voice assistants
  {
    id: "7",
    title: "AI Assistant Privacy Breach",
    description:
      "Voice assistant accidentally recorded and processed private conversations. The incident occurred due to a false positive in wake word detection.",
    severity: "Medium",
    reportedDate: "2025-03-28T13:45:00Z",
  },
  // Financial AI safety
  {
    id: "8",
    title: "Algorithmic Trading Glitch",
    description:
      "Trading algorithm made unexpected decisions during market volatility, causing minor market disruption. The system failed to properly account for extreme market conditions.",
    severity: "Medium",
    reportedDate: "2025-04-12T09:00:00Z",
  },
  // Content moderation issues
  {
    id: "9",
    title: "Content Moderation Overreach",
    description:
      "AI content moderation system incorrectly flagged legitimate content as inappropriate. The false positives affected multiple content creators and required manual review.",
    severity: "Low",
    reportedDate: "2025-04-15T15:20:00Z",
  },
  // Medical AI safety
  {
    id: "10",
    title: "Medical Diagnosis System Error",
    description:
      "AI diagnostic tool provided incorrect probability assessments for certain conditions. The system needs recalibration and additional training data.",
    severity: "High",
    reportedDate: "2025-04-18T10:15:00Z",
  },
  // Language model safety
  {
    id: "11",
    title: "Language Model Toxicity",
    description:
      "Chat model generated inappropriate responses despite safety filters. The incident occurred in edge cases of ambiguous user inputs.",
    severity: "Medium",
    reportedDate: "2025-04-20T14:30:00Z",
  },
  // Hiring and employment bias
  {
    id: "12",
    title: "AI-Powered Hiring Bias",
    description:
      "Resume screening system showed preference for certain educational backgrounds. The bias was detected in the model's ranking algorithm.",
    severity: "High",
    reportedDate: "2025-04-22T11:45:00Z",
  },
];
