let capsuleDispo = true

let demandeCapsule = new Promise((resolve, reject) => {
    // ajout de 3 second de delais 
    setTimeout(() => {
        if(capsuleDispo) {
            resolve("Voici vos capsule !")
        } else {
            reject("Désole")
        }
    }, 5000) 
}).then(() => {
    console.log("je peux avoir une poche avec")
}).catch(() => {
    console.log("je vais me mettre au thé finalement")
}).finally(() => {
    console.log("What else ? ")
})
console.log(demandeCapsule)

// avant les 5 s
// undefined
// apres les 5 s
// "Voici vos capsule !"
// "je peux avoir une poche avec"
// "What else"