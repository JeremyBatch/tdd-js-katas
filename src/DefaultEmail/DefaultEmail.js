class DefaultEmail {
    constructor(){}
    get(emails) {
        if(emails.length === 0)
            return ""

        const primaryEmails= emails.filter(email => email.isPrimary)
        if(primaryEmails.length > 0)
            return primaryEmails[0].email
        
        return emails[0].email
    }
}

module.exports = DefaultEmail;