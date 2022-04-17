console.log("Welcome to the password validation tool!")

const readline = require("readline")

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please enter your password: ", function(answer) {
    if (answer.length > 10) {
        console.log(`
        ██╗   ██╗███████╗██████╗ ██████╗ ███████╗██████╗ ███████╗
        ╚██╗ ██╔╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝
         ╚████╔╝ █████╗  ██████╔╝██████╔╝█████╗  ██████╔╝███████╗
          ╚██╔╝  ██╔══╝  ██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██╗╚════██║
           ██║   ███████╗██║     ██║     ███████╗██║  ██║███████║
           ╚═╝   ╚══════╝╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝                                                    
            `);
    } else {
        console.log(`
        ███╗   ██╗ ██████╗ ██████╗ ███████╗
        ████╗  ██║██╔═══██╗██╔══██╗██╔════╝
        ██╔██╗ ██║██║   ██║██████╔╝█████╗  
        ██║╚██╗██║██║   ██║██╔═══╝ ██╔══╝  
        ██║ ╚████║╚██████╔╝██║     ███████╗
        ╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚══════╝
                                           
                                                `)
    }
})