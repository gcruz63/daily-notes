const workouts = [
    {
        id: 1,
        subject: "Arms",
        date: "04-20-2012",
        feeling: "hard",
        timeSpent: 30
    },
    {
        id: 2,
        subject: "Legs",
        date: "04-21-2012",
        feeling: "easy",
        timeSpent: 45
    },
    {
        id: 3,
        subject: "Running",
        date: "04-22-2012",
        feeling: "hard",
        timeSpent: 60
    }
]
const back = {
    id: 4,
    subject: "Back",
    date: "04-23-2012",
    feeling: "easy",
    timeSpent: 40
}
workouts.push(back)
//for (const workout of workouts) {
//  console.log(`Todays workout break down is ${workout.subject} 
//The difficulty is really workout.feeling} 
//The amount of time to spend on each work is ${workout.timeSpent} min.`)
//}

const searchTerm = "hard"
for (const workout of workouts) {
    if (workout.feeling === searchTerm) {
        console.log(`You got this keep pushing`)
    }
}

const createNote = (note) => {
    const lastIndex = workouts.length - 1
    const currentLastItem = workouts[lastIndex]
    const maxId = currentLastItem.id
    const newId = maxId + 1

    note.id = newId
    note.date = new Date()
    
    workouts.push(note)
}

// Create a new note object
const moreNewerNote = {
    subject: "shoulders",
    date: "04-23-2012",
    feeling: "easy",
    timeSpent: 40
}

// Specify object as argument for function
//         |
//         |
//         V
createNote(moreNewerNote)
console.log(workouts)
