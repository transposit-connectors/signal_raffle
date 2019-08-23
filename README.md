# SIGNAL 2019 Raffle

An app that uses [Twilio](https://www.twilio.com/) and [SendGrid](https://sendgrid.com/) together to demo the [Transposit](https://transposit.com) platform and create a raffle.

By using webhooks, we can have Twilio call a function in Transposit with the text's metadata. Here, we ask the user to text their email address, which will then add that email to a raffle list hosted on [airtable](https://airtable.com), and send that email a html message thanking them for attending the event.

`create_record`: Adds a given email to our airtable database with an API call.

`get_records`: Uses an API call to return a list off all emails

`html`: A helper function that stores the html content of our email.

`raffle`: A simple JAvaScript function that returns a random entry of our list from `get_records`.

`reminder`: Sends a reminder text to everyone who entered into the raffle to come back to the booth.

`send_mail`: A API to SendGrid that sends an email to a given email.

`send_message`: A Twilio API call to send a text message.

`webhook`: The function that is called when Twilio receives a text, which passes in the content to the respective places.

## Expansion Ideas:

If you already have a SendGrid campaign, you can use Transposit to add recipients to that campaign instead. You could also add a Twilio connector to text the user back a confirmation. Additionally, adding other connectors such as Salesforce will let you turn this tool into a way to automate lead generations.

[Click here to find more examples using Transposit!](https://www.transposit.com/apps/)
