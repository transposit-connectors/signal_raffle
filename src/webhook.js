({ http_event }) => {
  let body = http_event.parsed_body;
  let content = api.run('this.html')[0];
  let email = body.Body.trim().toLowerCase();
  
  //Code to ignore duplicate entries
  let phones = stash.get("phones");
  if (phones == null) {
    stash.put("phones", [body.From]);
    api.run('this.create_record', {email: email, baseid: env.get("baseid")});
  } else {
    if (!phones.includes(body.From)) {
      stash.put("phones", phones.push(body.From));
      api.run('this.create_record', {email: email, baseid: env.get("baseid")});
    }
  }
  
  api.run('this.send_mail', {content: content, email: email});
  return { status_code: 200 };
}
