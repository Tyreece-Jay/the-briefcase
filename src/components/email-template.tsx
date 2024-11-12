import * as React from "react"

interface EmailTemplateProps { name: string, message: string, email: string }

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({name, message, email}) => (
  <div>
    <h1>New messae from {name}!</h1>
    <h3>reply using {email}</h3>
    <p>{message}</p>
  </div>
)