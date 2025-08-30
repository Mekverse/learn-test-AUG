export interface AntiSpamResult {
    legitimate: boolean;
    reason: string;
}

export function checkAntiSpam(
    newContent: string,
    lastActivityTime: number,
    currentTime: number
): AntiSpamResult {
    const words = newContent.trim().split(/\s+/);
    const wordCount = words.length;

    // Rate Limiting
    if (wordCount > 50) {
        return { legitimate: false, reason: "Rate limit exceeded (max 50 words per refresh)" };
    }

    // Time-Based Analysis
    const minTime = Math.max(30000, wordCount * 500); // 30s for 20+ words, 500ms/word
    if (currentTime - lastActivityTime < minTime) {
        return { legitimate: false, reason: "Typing speed too fast for word count" };
    }

    // Content Pattern Detection
    // Repeated 3-word phrases
    const phrases: Record<string, number> = {};
    for (let i = 0; i < words.length - 2; i++) {
        const phrase = words.slice(i, i + 3).join(" ").toLowerCase();
        phrases[phrase] = (phrases[phrase] || 0) + 1;
        if (phrases[phrase] > 2) {
            return { legitimate: false, reason: "Repeated phrase detected" };
        }
    }

    // Excessive word repetition
    const freq: Record<string, number> = {};
    words.forEach(w => {
        freq[w.toLowerCase()] = (freq[w.toLowerCase()] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(freq));
    if (maxFreq / wordCount > 0.3) {
        return { legitimate: false, reason: "Excessive word repetition" };
    }

    // Placeholder text / Lorem Ipsum
    if (/lorem ipsum|placeholder|asdf|qwerty|keyboard mashing/i.test(newContent)) {
        return { legitimate: false, reason: "Placeholder or spam text detected" };
    }

    return { legitimate: true, reason: "Legitimate writing" };
}
