(params) => {
  let entries = api.run("this.get_records", { baseid: env.get("baseid") });
  return entries[Math.floor(Math.random() * entries.length)].email;
};
