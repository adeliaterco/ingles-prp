import { QuizData } from '../types/quiz';

// ========================================
// EMOTIONAL VALIDATION BASED ON QUIZ ANSWERS
// ========================================

export function getEmotionalValidation(quizData: QuizData): string {
  let validation = '';
  const pronoun = quizData.gender === 'MALE' ? 'her' : 'him';
  
  // Validation by time since separation
  if (quizData.timeSeparation === 'LESS THAN 1 WEEK') {
    validation = `Your separation is recent. That means there's still a window of opportunity where ${pronoun} thinks about you constantly. `;
  } else if (quizData.timeSeparation === 'MORE THAN 6 MONTHS') {
    validation = `Time has passed, but that doesn't mean it's impossible. There are psychological patterns that work even after months. `;
  } else {
    validation = `The time that has passed is crucial. You're in a phase where ${pronoun} still has fresh memories, but the patterns are shifting. `;
  }
  
  // Validation by who ended it
  if (quizData.whoEnded === 'SHE ENDED IT' || quizData.whoEnded === 'HE ENDED IT') {
    validation += `And the fact that ${pronoun} ended things is actually an advantage, because it means ${pronoun} had to make a difficult decision — and that leaves an emotional mark.`;
  } else if (quizData.whoEnded === 'I ENDED IT') {
    validation += `And the fact that you were the one who ended things completely changes the dynamic. ${pronoun} may be waiting for you to make the first move.`;
  }
  
  return validation;
}

export function getSituationInsight(quizData: QuizData): string {
  const pronoun = quizData.gender === 'MALE' ? 'her' : 'him';
  
  const insights: Record<string, string> = {
    'ZERO CONTACT': `Zero contact can be strategic, but it can also be creating distance. You need to know WHEN to break it.`,
    'IGNORING ME': `If ${pronoun} is ignoring you, there's a specific psychological reason. It's not personal — it's a defense mechanism we can reverse.`,
    'BLOCKED': `Being blocked seems final, but it's an extreme emotional reaction that indicates there are still strong feelings.`,
    'NECESSARY TOPICS ONLY': `Minimal communication is a sign that ${pronoun} is building emotional barriers, but still keeping a channel open.`,
    'WE TALK SOMETIMES': `Occasional communication is a golden opportunity. You're in the perfect phase to apply the protocol.`,
    'WE ARE FRIENDS': `"Friendship" after a breakup is an emotional minefield. It can be your greatest advantage or your worst enemy.`,
    'INTIMATE ENCOUNTERS': `Intimate encounters indicate that physical attraction is still alive, but the deep emotional connection is missing.`
  };
  
  return insights[quizData.currentSituation || ''] || '';
}