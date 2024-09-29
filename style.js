let grades = [85, 92, 78, 63, 95, 88, 72, 54];
console.log("Grades: ");
grades.forEach((grade) => {
    if (grade >= 90) {
        console.log(`${grade}: A`);
    } else if (grade >= 80) {
        console.log(`${grade}: B`);
    } else if (grade >= 70) {
        console.log(`${grade}: C`);
    } else if (grade >= 60) {
        console.log(`${grade}: D`);
    } else {
        console.log(`${grade}: F`);
    }
});

let totalGradePoints = 0;

// Korrekt for-loop til at beregne total grade points
for (let i = 0; i < grades.length; i++) {
    totalGradePoints += grades[i];
}

const averageGrade = totalGradePoints / grades.length;

if (averageGrade >= 90) {
    console.log("Overall Class Performance: Excellent");
} else if (averageGrade >= 80) {
    console.log("Overall Class Performance: Good");
} else if (averageGrade >= 70) {
    console.log("Overall Class Performance: Satisfactory");
} else {
    console.log("Overall Class Performance: Needs Improvement");
}




console.log(`Highest Grade: ${Math.max(...grades)} (A)`);
console.log(`Lowest Grade: ${Math.min(...grades)} (F)`);
console.log(`Average Grade: ${averageGrade}`);



const island = ['-', '-', '-', 'T', '-'];

console.log(`There are ${island.length} moves in the island`);

let treasureCount = 0

island.forEach((move, i) => {
    if (move === '-') {
        console.log("No treasure found :(");
    }
    else if (move === 'T') {
        console.log(`Treasure found at move ${i + 1} :)`)
        treasureCount++;
    }
})

console.log(`Total treasures found: ${treasureCount}`);



function getStartupName() {
    // Array med første ord
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    // Array med det næste ord
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    // Få et random index fra hver array
    const randomFirstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
    const randomSecondWord = secondWords[Math.floor(Math.random() * secondWords.length)];

    // Sætte de to ord sammen til et random startop navn.
    const startupName = `${randomFirstWord} ${randomSecondWord}`;

    return startupName;
}

const startupName = getStartupName();
console.log(`Your startup name could be: ${startupName}`);







