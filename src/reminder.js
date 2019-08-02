(params) => {
  let phones = stash.get("phones");
  for (let i = 0; i < phones.length; i++) {
    api.run('this.send_message', {sid: env.get("sid"),
                                  recipient: phones[i],
                                  phonenum: env.get("phonenum")});
  }
  return 0;
}
