export const questions = [
  {
    id: 1,
    category: "Childhood Behavior",
    text: "As a child, how did you typically respond to discipline?",
    options: [
      { text: "Rebelled openly against authority", score: { antisocial: 3, narcissistic: 2 } },
      { text: "Appeared withdrawn but plotted revenge internally", score: { psychopathic: 3, narcissistic: 1 } },
      { text: "Became extremely compliant and people-pleasing", score: { histrionic: 2, dependent: 3 } },
      { text: "Showed no emotional response whatsoever", score: { psychopathic: 3, antisocial: 2 } }
    ]
  },
  {
    id: 2,
    category: "Interpersonal Relationships",
    text: "How would you describe your approach to relationships?",
    options: [
      { text: "I use people for what they can provide me", score: { narcissistic: 3, psychopathic: 2 } },
      { text: "I become obsessed and cannot let go", score: { borderline: 3, obsessive: 3 } },
      { text: "I maintain many shallow connections", score: { antisocial: 2, narcissistic: 2 } },
      { text: "I manipulate through emotional manipulation", score: { histrionic: 3, psychopathic: 2 } }
    ]
  },
  {
    id: 3,
    category: "Emotional Response",
    text: "When you experience anger, what happens?",
    options: [
      { text: "Cold, calculated planning of retaliation", score: { psychopathic: 3, narcissistic: 2 } },
      { text: "Explosive outbursts followed by guilt", score: { borderline: 3, antisocial: 2 } },
      { text: "I suppress it until it manifests as physical symptoms", score: { dependent: 2, histrionic: 1 } },
      { text: "I become charming to get what I want", score: { narcissistic: 3, histrionic: 2 } }
    ]
  },
  {
    id: 4,
    category: "Self-Perception",
    text: "How do you view yourself compared to others?",
    options: [
      { text: "Superior to everyone else", score: { narcissistic: 3 } },
      { text: "Empty and worthless inside", score: { borderline: 2, dependent: 3 } },
      { text: "I am who I am - rules don't apply to me", score: { psychopathic: 3, antisocial: 3 } },
      { text: "I am a victim of circumstances", score: { dependent: 2, histrionic: 2 } }
    ]
  },
  {
    id: 5,
    category: "Risk Behavior",
    text: "How do you handle rules and consequences?",
    options: [
      { text: "I enjoy breaking rules - the thrill is everything", score: { antisocial: 3, psychopathic: 2 } },
      { text: "I follow rules only when being watched", score: { narcissistic: 2, psychopathic: 2 } },
      { text: "I need structure and fear chaos", score: { dependent: 3, obsessive: 2 } },
      { text: "I create my own rules based on my needs", score: { narcissistic: 3, psychopathic: 2 } }
    ]
  },
  {
    id: 6,
    category: "Empathy",
    text: "When you see someone in distress, you:",
    options: [
      { text: "Feel nothing - their emotions are not your concern", score: { psychopathic: 3, antisocial: 2 } },
      { text: "Feel deeply affected but cannot help", score: { borderline: 2, dependent: 2 } },
      { text: "Use their weakness to your advantage", score: { psychopathic: 3, narcissistic: 2 } },
      { text: "Become overly dramatic about helping", score: { histrionic: 3 } }
    ]
  },
  {
    id: 7,
    category: "Control",
    text: "In relationships, you prefer to be:",
    options: [
      { text: "In complete control at all times", score: { narcissistic: 3, obsessive: 2 } },
      { text: "Completely devoted to my partner", score: { dependent: 3, borderline: 2 } },
      { text: "The one who manipulates from behind the scenes", score: { psychopathic: 3, histrionic: 2 } },
      { text: "Dominant but allow some independence", score: { antisocial: 2, narcissistic: 2 } }
    ]
  },
  {
    id: 8,
    category: "Identity",
    text: "Your sense of identity could be described as:",
    options: [
      { text: "Fragmented - I don't know who I really am", score: { borderline: 3 } },
      { text: "Grandiose - I am exceptional and unique", score: { narcissistic: 3 } },
      { text: "Non-existent - I mimic others easily", score: { histrionic: 3, borderline: 2 } },
      { text: "Rigid and perfectionistic", score: { obsessive: 3, dependent: 1 } }
    ]
  },
  {
    id: 9,
    category: "Secrets",
    text: "How do you handle secrets?",
    options: [
      { text: "I keep many hidden identities and lives", score: { psychopathic: 3, histrionic: 2 } },
      { text: "I tell intimate secrets to gain trust quickly", score: { histrionic: 3, borderline: 2 } },
      { text: "I am obsessed with knowing others' secrets", score: { obsessive: 3, narcissistic: 1 } },
      { text: "I share my darkest secrets to manipulate", score: { psychopathic: 3, narcissistic: 2 } }
    ]
  },
  {
    id: 10,
    category: "Achievement",
    text: "Your drive for achievement is:",
    options: [
      { text: "Ruthless - ends justify the means", score: { psychopathic: 3, narcissistic: 2 } },
      { text: "Perfectionistic - nothing is ever good enough", score: { obsessive: 3, narcissistic: 2 } },
      { text: "Performative - I want recognition, not actual achievement", score: { histrionic: 3, narcissistic: 2 } },
      { text: "Minimal - I avoid effort and responsibility", score: { antisocial: 2, dependent: 2 } }
    ]
  }
];

export const personalityTypes = {
  psychopathic: {
    name: "The Psychopath",
    description: "Characterized by a lack of empathy, remorse, and genuine emotional connection. Calculations are cold and methodical. Charming on the surface but manipulative underneath.",
    traits: ["Superficial charm", "Grandiose sense of self", "Lack of remorse", "Manipulative", "Callous", "Impulsive"],
    famousExamples: ["Ted Bundy", "John Wayne Gacy", "Aileen Wuornos"],
    riskLevel: "Extreme"
  },
  narcissistic: {
    name: "The Narcissist",
    description: "Requires excessive admiration and lacks empathy. Has a sense of entitlement and exploits others for personal gain. Extremely sensitive to criticism.",
    traits: ["Grandiosity", "Need for admiration", "Lack of empathy", "Sense of entitlement", "Exploitative", "Arrogant"],
    famousExamples: ["Richard Ramirez", "Jeffrey Dahmer", "Diane Downs"],
    riskLevel: "High"
  },
  antisocial: {
    name: "The Antisocial",
    description: "Disregards social norms and the rights of others. Irresponsible, impulsive, and unable to conform to law or maintain consistent employment.",
    traits: ["Disregard for laws", "Deceitfulness", "Impulsivity", "Irresponsibility", "Lack of remorse", "Aggression"],
    famousExamples: ["Charles Manson", "Richard Speck", "James Earl Ray"],
    riskLevel: "High"
  },
  borderline: {
    name: "The Borderline",
    description: "Instable in self-image, relationships, and emotions. Fears abandonment intensely and engages in self-harm. Can be caring but also destructive.",
    traits: ["Emotional instability", "Fear of abandonment", "Impulsive", "Self-harm", "Intense relationships", "Chronic emptiness"],
    famousExamples: ["Aileen Wuornos", "Katherine Knight", "Lydia Chase"],
    riskLevel: "Moderate to High"
  },
  histrionic: {
    name: "The Histrionic",
    description: "Excessive emotionality and attention-seeking. Uses charm and manipulation to get needs met. Superficial relationships and dramatic behavior.",
    traits: ["Excessive emotion", "Attention-seeking", "Suggestibility", "Dramatic", "Shallow relationships", "Manipulative charm"],
    famousExamples: ["Bonnie Parker", "Belle Gunness", "Amy Fisher"],
    riskLevel: "Moderate"
  },
  dependent: {
    name: "The Dependent",
    description: "Excessively relies on others to meet emotional and physical needs. Submissive and fears abandonment. Often enables abusive behavior.",
    traits: ["Submissive", "Fear of abandonment", "Difficulty making decisions", "Low self-confidence", "Oversensitive to criticism", "Co-dependent"],
    famousExamples: ["Partners of serial killers", "Accomplices", "Enablers"],
    riskLevel: "Variable"
  },
  obsessive: {
    name: "The Obsessive",
    description: "Preoccupied with order, perfection, and control. Has rigid moral standards for themselves but may criticize others relentlessly. Detail-oriented to an extreme.",
    traits: ["Perfectionism", "Inflexible", "Detail-obsessed", "Workaholic", "Rigid morality", "Control-seeking"],
    famousExamples: ["Gary Ridgway", "Dennis Rader", "Robert Berdella"],
    riskLevel: "Moderate to High"
  }
};
