import sqlite3InitModule from "@sqlite.org/sqlite-wasm";

const DB_NAME = "securities.sqlite";
let db;

/*************************************************************************************
 Init Sqlite3 DB
**************************************************************************************/
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
    db = new sqlite3.oo1.DB(DB_NAME, "ct");
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

/*************************************************************************************
 Insert Row Security
**************************************************************************************/
const insert_row = async (name, code, qty) => {
  const f = await db.exec({
    sql: "INSERT INTO securities(name, code, qty) VALUES (?, ?,?) RETURNING *",
    bind: [name, code, qty],
    returnValue: "resultRows",
    rowMode: "object",
  });
  return f[0];
};

/*************************************************************************************
 Insert Row Security
**************************************************************************************/
const insert_rows = async (rows) => {
  await db.exec("BEGIN TRANSACTION");
  const stmt = db.prepare(
    "INSERT INTO securities(name, code, qty) VALUES (?, ?, ?)",
  );
  for (const i of rows) {
    stmt.bind([i.name, i.code, i.qty]);
    stmt.step();
    stmt.reset();
  }
  const r = await db.exec("COMMIT");
  return r.filename;
  //stmt.free();
};

/*************************************************************************************
 Get Rows Securities
**************************************************************************************/
const get_rows = async () => {
  return await db.exec({
    sql: "SELECT id, name, code, qty FROM securities ORDER BY id desc",
    returnValue: "resultRows",
    rowMode: "object",
  });
};

/*************************************************************************************
 Get Names
**************************************************************************************/
const get_names = async () => {
  let data = [];
  const d = await db.exec({
    sql: "SELECT id, name, code, qty FROM securities ORDER BY id desc",
    returnValue: "resultRows",
    rowMode: "array",
  });
  for (let i in d) {
    data.push(d[i][1]);
    data.push(d[i][2]);
  }
  return data;
};

/*************************************************************************************
 Delete by ides
**************************************************************************************/
const delete_by_ids = async (payload) => {
  const table = payload["table"];
  const ids = payload["ids"];
  const sql = "DELETE FROM " + table + " WHERE id IN (" + ids.join(",") + ")";
  const f = await db.exec({
    sql: sql,
    returnValue: "resultRows",
    rowMode: "object",
  });

  const f2 = await db.exec({
    sql: "DELETE FROM sqlite_sequence WHERE name = '" + table + "'",
    returnValue: "resultRows",
    rowMode: "object",
  });

  return "rows deleted";
};

/*************************************************************************************
 Delete all rows
**************************************************************************************/
const delete_rows = async (table) => {
  const f = await db.exec({
    sql: "DELETE FROM " + table,
    returnValue: "resultRows",
    rowMode: "object",
  });

  // Vacum the table
  const f2 = await db.exec({
    sql: "DELETE FROM sqlite_sequence WHERE name = '" + table + "'",
    returnValue: "resultRows",
    rowMode: "object",
  });

  //console.log(f);
  return "rows_deleted";
};

self.onmessage = async (evento) => {
  const id = evento.data[0];
  const payload = evento.data[1];
  switch (id) {
    case "test":
      await init();
      self.postMessage([id, "your message was:" + payload]);
      break;
    case "init":
      await init();
      self.postMessage([id, "init db"]);
      break;
    case "get_rows":
      const rows = await get_rows();
      self.postMessage([id, rows]);
      break;

    case "get_names":
      await init();
      const names = await get_names();
      self.postMessage([id, names]);
      break;

    case "insert_row":
      const msg = await insert_row(payload.name, payload.code, payload.qty);
      self.postMessage([id, msg]);
      break;

    case "insert_rows":
      const msg3 = await insert_rows(payload);
      self.postMessage([id, msg3]);
      break;

    case "delete_rows":
      const msg2 = await delete_rows(payload);
      self.postMessage([id, msg2]);
      break;
    case "delete_by_ids":
      const msg4 = await delete_by_ids(payload);
      self.postMessage([id, msg4]);
      break;
  }
};
