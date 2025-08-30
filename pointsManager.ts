import { checkAntiSpam } from "./antiSpam";

// ...existing code...

function awardPointsForNewContent(newContent: string, lastActivityTime: number, currentTime: number) {
    const result = checkAntiSpam(newContent, lastActivityTime, currentTime);
    const wordCount = newContent.trim().split(/\s+/).length;
    let points = 0;
    let activityDesc = "";

    if (result.legitimate) {
        points = wordCount; // or your points logic
        activityDesc = `Added ${wordCount} words`;
    } else {
        activityDesc = `Added ${wordCount} words (no points - ${result.reason})`;
    }

    // Log activity
    logActivity(activityDesc, points);

    // ...existing code...
    return points;
}

// ...existing code...