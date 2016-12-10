function chatbot(message) {
    if (typeof message === 'undefined') {
        return 'Hello.'
    }


       if (message.toLowerCase() === "hi") {
           return "How are you?"
       }


    if (/thank/i.test(message)) {
            return "You're welcome."
        }

        var lowerMessage=message.toLowerCase()
        if(lowerMessage=="how old are you?"){
          return "no age"
        }

        var lowerMessage=message.toLowerCase()
        if(lowerMessage=="do you understand 0 and 1"){
          return "yes"
        }

    return "Sorry, I don't understand."
}

module.exports = chatbot
