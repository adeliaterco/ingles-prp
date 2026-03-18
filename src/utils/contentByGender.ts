import { QuizData } from '../types/quiz';

// 
// GENDER PERSONALIZATION FUNCTIONS
// 

export function getTitle(gender: string): string {
    return gender === 'HOMBRE' 
        ? 'Why She Left' 
        : 'Why He Left';
}

export function getLoadingMessage(gender: string): string {
    return gender === 'HOMBRE'
        ? 'Generating your specific protocol to win her back...'
        : 'Generating your specific protocol to win him back...';
}

/**
 * ALTERAÇÃO #6: Diagnóstico Ultra-Personalizado
 * Transforma os dados do quiz em una narrativa de autoridade e empatia.
 */
export function getCopy(quizData: QuizData): string {
    const pronoun = quizData.gender === 'HOMBRE' ? 'ella' : 'él';
    const exPronoun = quizData.gender === 'HOMBRE' ? 'Ella' : 'Él';
    
    const whoEnded = quizData.whoEnded || '';
    const timeSeparation = quizData.timeSeparation || '';
    const currentSituation = quizData.currentSituation || '';
    const reason = quizData.reason || '';

    // 
    // 1. INTRO LOGIC (WHO ENDED) - FIXED
    // 
    let intro = '';
    
    // Case 1: SHE/HE ENDED IT
    if (whoEnded.includes('ELLA TERMINÓ') || whoEnded.includes('ÉL TERMINÓ')) {
        intro = `Based on the fact that ${exPronoun} decided to end the relationship, we understand there was a deterioration in the "value switches" that ${pronoun} perceived in you. `;
    } 
    // Case 2: I ENDED IT
    else if (whoEnded.includes('YO TERMINÉ')) {
        intro = `Considering that you were the one who ended things, the challenge now is to reverse the feeling of rejection that ${pronoun} processed, turning it into a new opportunity. `;
    }
    // Case 3: MUTUAL DECISION
    else if (whoEnded.includes('DECISIÓN MUTUA')) {
        intro = `Considering the decision was mutual, the challenge now is to identify whether genuine interest still exists on both sides and rebuild attraction from scratch. `;
    }
    // Case 4: FALLBACK (unexpected or empty value)
    else {
        intro = `Considering the context of the breakup, the challenge now is to understand the emotional dynamics that led to this point and reverse them strategically. `;
    }

    // 
    // 2. URGENCY LOGIC (TIME SINCE SEPARATION) - IMPROVED
    // 
    let urgency = '';
    if (timeSeparation.includes('MENOS DE 1 SEMANA') || timeSeparation.includes('1-4 SEMANAS')) {
        urgency = `You're in the **IDEAL time window**. ${exPronoun}'s brain still has chemical traces of your presence, which makes reconnection easier if you act now. `;
    } else if (timeSeparation.includes('1-6 MESES')) {
        urgency = `Even though time has passed (${timeSeparation}), neuroscience explains that emotional memories can be reactivated through the right stimuli. `;
    } else if (timeSeparation.includes('MÁS DE 6 MESES')) {
        urgency = `Even though time has passed (${timeSeparation}), neuroscience explains that emotional memories can be reactivated through the right stimuli. `;
    }

    // 
    // 3. CONTACT LOGIC (CURRENT SITUATION) - IMPROVED
    // 
    let insight = '';
    if (currentSituation.includes('CONTACTO CERO') || currentSituation.includes('ME IGNORA') || currentSituation.includes('BLOQUEADO')) {
        insight = `The fact that there's no contact is, ironically, your greatest advantage. We're in the "cortisol peak cleansing" phase, preparing the ground for a powerful comeback. `;
    } else {
        insight = `The current contact indicates the emotional thread hasn't been cut, but we must be careful not to saturate their dopamine system with desperation. `;
    }

    // 4. Breakup Reason
    let reasonInsight = '';
    if (reason) {
        reasonInsight = `By analyzing that the main reason was "${reason}", the protocol will focus on neutralizing that specific objection in ${pronoun}'s subconscious. `;
    }

    return `It wasn't for lack of love.

${intro}

${urgency}

${insight}

${reasonInsight}

The key is not to beg, but to understand ${pronoun}'s psychology and act strategically. In the next step, I'm going to reveal EXACTLY the scientific step-by-step so that ${pronoun} feels that YES, you are the right person.`;
}

// ✅ INSTRUÇÃO #9: Sumário rápido + Instrução #6: Explicação da importância
export function getVentana72Copy(gender: string): string {
    const pronoun = gender === 'HOMBRE' ? 'ella' : 'él';
    
    return `It doesn't matter if you separated 3 days ago or 3 months ago.

Here's the truth that behavioral psychologists discovered:

The human brain operates in 72-hour cycles.

Every time you take a STRATEGIC ACTION, ${pronoun}'s brain enters a new 72-hour cycle where everything can change.

—

Here's what's crucial:

In each of these 3 phases, there are CORRECT and INCORRECT actions.

✅ If you act correctly in each phase, ${pronoun} comes looking for you.

❌ If you act incorrectly, their brain erases the attraction.

—

Your personalized plan reveals EXACTLY what to do in each phase.`;
}

// ✅ NOVO: Sumário rápido das 3 fases (Instrução #9)
export function getVentanaSummary(gender: string): string[] {
    return [
        '🎯 Phase 1: Activate curiosity and break expectations',
        '💡 Phase 2: Restore perceived value without pressure',
        '❤️ Phase 3: Create an opportunity for emotional reconnection'
    ];
}

// ✅ NOVO: Explicação da importância (Instrução #6)
export function getVentanaImportance(): string[] {
    return [
        '🔬 Backed by behavioral neuroscience',
        '⏰ Each 72h cycle rewrites emotional memories',
        '🎯 Acting correctly = renewed attraction',
        '⚠️ Acting incorrectly = permanent emotional shutdown'
    ];
}

export function getOfferTitle(gender: string): string {
    return gender === 'HOMBRE'
        ? 'Your Plan to Win Her Back'
        : 'Your Plan to Win Him Back';
}

export function getFeatures(gender: string): string[] {
    const pronoun = gender === 'HOMBRE' ? 'Her' : 'Him';
    const pronounLower = gender === 'HOMBRE' ? 'her' : 'him';
    const another = gender === 'HOMBRE' ? 'someone else' : 'someone else';
    
    return [
        `📱 MODULE 1: How to Talk to ${pronoun} (Days 1–7)`,
        `👥 MODULE 2: How to Meet Up With ${pronoun} (Days 8–14)`,
        `❤️ MODULE 3: How to Win ${pronoun} Back (Days 15–21)`,
        `🚨 MODULE 4: Emergency Protocol (If they're with ${another})`,
        '⚡ Special Guide: The 3 Phases of 72 Hours',
        '🎯 Bonuses: Conversation scripts + Action plans',
        '✅ Guarantee: 30 days or your money back'
    ];
}

export function getCTA(gender: string): string {
    return gender === 'HOMBRE'
        ? 'YES, I WANT MY PLAN TO WIN HER BACK'
        : 'YES, I WANT MY PLAN TO WIN HIM BACK';
}

export function getCompletionBadge(gender: string): { title: string; subtitle: string } {
    const pronoun = gender === 'HOMBRE' ? 'she' : 'he';
    
    return {
        title: 'YOUR ANALYSIS IS READY!',
        subtitle: `Discover exactly why ${pronoun} left and the scientific step-by-step to make ${pronoun} WANT to come back`
    };
}

// ✅ REFATORADO: Agora retorna objeto estruturado (Instruções #2, #3, #8)
export function getFaseText(gender: string, fase: number): { 
    title: string; 
    timeRange: string;
    summary: string; 
    bullets: string[];
    warning: string;
} {
    const pronoun = gender === 'HOMBRE' ? 'She' : 'He';
    const pronounLower = gender === 'HOMBRE' ? 'her' : 'him';
    const oppositeGender = gender === 'HOMBRE' ? 'him' : 'her';
    
    const fases: Record<number, { title: string; timeRange: string; summary: string; bullets: string[]; warning: string }> = {
        1: {
            title: 'Curiosity Activation',
            timeRange: '0–24 HOURS',
            summary: `${pronoun} receives the first signal that something changed in you and their brain activates "curiosity mode"`,
            bullets: [
                `✨ ${pronoun} leaves the post-breakup "relief mode"`,
                '🧠 Their brain detects changes in your behavior',
                `💭 They start wondering: "What's going on with ${oppositeGender}?"`,
                '🔄 The neurological curiosity circuit activates'
            ],
            warning: `⚠️ If you act incorrectly here, you confirm that ${pronounLower} made the right decision`
        },
        
        2: {
            title: 'Perceived Value Restoration',
            timeRange: '24–48 HOURS',
            summary: `${pronoun} begins to re-evaluate archived memories and oxytocin reactivates`,
            bullets: [
                '🧬 Oxytocin (the attachment hormone) activates again',
                `💫 The good moments ${pronounLower} had "forgotten" return to their mind`,
                '🎭 Their brain reconstructs your image in a more positive way',
                '🔓 Emotional defenses start to weaken'
            ],
            warning: `⚠️ If you push too hard, ${pronounLower} closes the cycle and blocks you for good`
        },
        
        3: {
            title: 'Strategic Reconnection',
            timeRange: '48–72 HOURS',
            summary: `${pronoun} feels the need to emotionally "close the loop" and here you reappear with the Protocol`,
            bullets: [
                `🎯 ${pronoun} seeks a definitive emotional resolution`,
                '💝 Latent attachment seeks conscious expression',
                '🚪 This is where you reappear strategically',
                '⚡ Critical moment to apply the Reconnection Protocol'
            ],
            warning: '⚠️ 87% of people lose their ex in this phase because they don\'t know what to do'
        }
    };
    
    return fases[fase] || {
        title: '',
        timeRange: '',
        summary: '',
        bullets: [],
        warning: ''
    };
}