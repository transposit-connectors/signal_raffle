({ http_event }) => {
  let body = http_event.parsed_body;
  let content = api.run('this.html')[0];
  let email = body.Body.trim().toLowerCase();

  // Check for unique phone number
  let phones = [];
  if (stash.get("phones") != null) {
    phones = stash.get("phones");
  } 
  if (!phones.includes(body.From)) {
    phones.push(body.From);
    stash.put("phones", phones);
    api.run('this.create_record', {email: email, baseid: env.get("baseid")});
  }

  api.run('this.send_mail', {content: content, email: email});
  return { status_code: 200, headers: { "Content-Type": "application/xml" } };
}
