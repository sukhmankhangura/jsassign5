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

    return "Sorry, I don't understand."
}

module.exports = chatbot
