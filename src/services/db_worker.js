import sqlite3InitModule from "@sqlite.org/sqlite-wasm";

const DB_NAME = "personas.sqlite";
let db;
const init = async () => {
  const sqlite3 = await sqlite3InitModule({
    print: console.log,
    printErr: console.error,
  });
  if ("opfs" in sqlite3) {
    db = new sqlite3.oo1.OpfsDb(DB_NAME);
    let msg =
      "OPFS is available, create a persisted database at " + db.filename;
    self.postMessage(["log_message", msg]);
  } else {
    db = new sqlite3.oo1.DB(NOMBRE_BASE_DE_DATOS, "ct");
    const msg =
      "OPFS is NOT available,create a transient database" + db.filename;
    self.postMessage(["log_message", msg]);
  }
  await db.exec(`CREATE TABLE IF NOT EXISTS securities(
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL DEFAULT '',
				code TEXT NOT NULL DEFAULT '',
				qty  REAL NOT NULL DEFAULT 0)`);
};

const insert_row = async (name, code, qty) => {
  console.log(name);
  console.log(code);
  console.log(qty);

  const f = await db.exec({
    sql: "INSERT INTO securities(name, code, qty) VALUES (?, ?,?) RETURNING *",
    bind: [name, code, qty],
    returnValue: "resultRows",
    rowMode: "object",
  });
  console.log(f);
  return f[0];
};
const get_securities = async () => {
  return await db.exec({
    sql: "SELECT id, name, code, qty FROM securities",
    returnValue: "resultRows",
    rowMode: "object",
  });
};

self.onmessage = async (evento) => {
  const id = evento.data[0];
  const message = evento.data[1];
  switch (id) {
    case "test":
      await init();
      self.postMessage(["test", "your message was:" + message]);
      break;
    case "init":
      await init();
      //self.postMessage(["log_message", "init db"]);
      //self.postMessage(["init"]);
      break;
    case "insert_row":
      //      console.log(message.code);

      const data = await insert_row(message.name, message.code, message.qty);

      //self.postMessage(["insert_security", data]);
      break;
    case "get_securities":
      const securities = await get_securities();
      self.postMessage(["get_securities", securities]);
      break;
  }
};
