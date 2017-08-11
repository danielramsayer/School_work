from twilio import rest

account_sid = "AC40324a58ab7145df87556aed2837bd71" # Your Account SID from www.twilio.com/console
auth_token  = "c0104058749594063c31718ce041750e"  # Your Auth Token from www.twilio.com/console

client = rest.TwilioRestClient(account_sid, auth_token)

message = client.messages.create(body="Hello from Python",
    to="+19713038191",    # Replace with your phone number
    from_="+15032726319") # Replace with your Twilio number

print(message.sid)
