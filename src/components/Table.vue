<script setup>
/******************************************************
  https://primevue.org/datatable/
******************************************************/
import { onMounted, ref, inject } from "vue";
import Papa from "papaparse";
const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

const message = ref("");
const data = ref([]);
const data2 = ref([]);
const category = ref("test");

const dt = ref();

const name = ref("");
const code = ref("");
const qty = ref("");

const selected_field1 = ref("");
const selected_field2 = ref("");
const selected_field3 = ref("");
const fields = ref([
  { name: "", code: "" },
  { name: "Name", code: "name" },
  { name: "Code", code: "code" },
  { name: "Qty", code: "qty" },
]);

const fields1 = ref([...fields.value]);
const fields2 = ref([...fields.value]);
const fields3 = ref([...fields.value]);

const selecting_field1 = () => {
  let a = [];
  message.value = "";
  if (selected_field2.value !== "") {
    a.push(selected_field2.value.code);
  }
  if (selected_field3.value !== "") {
    a.push(selected_field3.value.code);
  }
  a = a.filter(function (element) {
    return element !== "";
  });
  fields1.value = fields.value.filter((item) => !a.includes(item.code));
};

const selecting_field2 = () => {
  let a = [];
  message.value = "";
  if (selected_field1.value !== "") {
    a.push(selected_field1.value.code);
  }
  if (selected_field3.value !== "") {
    a.push(selected_field3.value.code);
  }
  a = a.filter(function (element) {
    return element !== "";
  });
  fields2.value = fields.value.filter((item) => !a.includes(item.code));
};

const selecting_field3 = () => {
  let a = [];
  message.value = "";
  if (selected_field1.value !== "") {
    a.push(selected_field1.value.code);
  }
  if (selected_field2.value !== "") {
    a.push(selected_field2.value.code);
  }
  a = a.filter(function (element) {
    return element !== "";
  });
  fields3.value = fields.value.filter((item) => !a.includes(item.code));
};

const insert_csv_rows = async () => {
  if (
    selected_field1.value !== "" &&
    selected_field2.value !== "" &&
    selected_field3.value !== ""
  ) {
    let data3 = [];
    for (let i in data2.value) {
      let r = [];
      r[selected_field1.value.code] = data2.value[i].c1;
      r[selected_field2.value.code] = data2.value[i].c2;
      r[selected_field3.value.code] = data2.value[i].c3;
      if (detect_number_format(r["qty"]) == "german") {
        r["qty"] = r["qty"].replace(/\./g, "");
        r["qty"] = r["qty"].replace(/,/g, ".");
        //console.log(r["qty"]);
      }
      const num = parseFloat(r["qty"]);
      r["qty"] = !isNaN(num) ? num : 0.0;
      data3.push(r);
    }

    let msg = await Workers.post_message(worker, "insert_rows", data3);
    data.value = await Workers.post_message(worker, "get_rows");
    //console.log(msg);
    select_table_dialog.value = false;
  } else {
    message.value = "Please define all columns names";
  }
};

function detect_number_format(number_string) {
  number_string = number_string.trim();
  const german_format = /^(\d{1,3}(\.\d{3})*|\d+),\d+$/;
  const american_format = /^(\d{1,3}(,\d{3})*|\d+)\.\d+$/;
  if (german_format.test(number_string)) {
    return "german";
  } else if (american_format.test(number_string)) {
    return "american";
  } else {
    return "unknown";
  }
}

const selected_securities = ref();
const metaKey = ref(true);

const exportCSV = () => {
  dt.value.exportCSV();
};
const new_security_dialog = ref(false);
const delete_security_dialog = ref(false);
const select_table_dialog = ref(false);

onMounted(async () => {
  let msg = await Workers.post_message(worker, "init", "my message");
  data.value = await Workers.post_message(worker, "get_rows");
});

const confirm_delete_selected = () => {
  delete_security_dialog.value = true;
};

const delete_selected_securities = async () => {
  let x = selected_securities.value;
  let ids = [];
  for (let i in x) {
    ids.push(x[i].id);
  }
  let msg = await Workers.post_message(worker, "delete_by_ids", {
    table: "securities",
    ids: ids,
  });

  //log.info(msg);
  data.value = await Workers.post_message(worker, "get_rows");
  delete_security_dialog.value = false;
};

const open_new_security_dialog = () => {
  new_security_dialog.value = true;
};

const close_new_security_dialog = () => {
  new_security_dialog.value = false;
};

const save_new_security_dialog = async () => {
  if (name.value != "" && code.value != "" && parseFloat(qty.value)) {
    let msg = await Workers.post_message(worker, "insert_row", {
      name: name.value,
      code: code.value,
      qty: parseFloat(qty.value),
    });
    code.value = "";
    name.value = "";
    qty.value = "";
    data.value = await Workers.post_message(worker, "get_rows");
    new_security_dialog.value = false;
  }
};

const file_import = (event) => {
  const file = event.files[0];
  const file_name = event.files[0].name;
  const reader = new FileReader();
  reader.onload = async (e) => {
    let rows = [];
    const file_content = e.target.result;
    const d = Papa.parse(file_content).data;
    for (let i in d) {
      if (d[i].length === 3) {
        const c1 = d[i][0];
        const c2 = d[i][1];
        const c3 = d[i][2];
        const row = { c1: c1, c2: c2, c3: c3 };
        rows.push(row);
      }
    }
    //console.log(rows);

    data2.value = rows;
    select_table_dialog.value = true;

    //console.log(rows);
    //await insert_rows(rows);
    //router.push("/securities");
    //console.log(data);
  };
  reader.onerror = (error) => {
    console.log("...error");
    console.log(error);
  };

  reader.readAsText(file);
};
</script>
<template>
  <Toolbar class="mb-6">
    <template #start>
      <Button
        label="New"
        icon="pi pi-plus"
        class="mr-2"
        @click="open_new_security_dialog"
      />
      <Button
        label="Delete All"
        icon="pi pi-trash"
        severity="danger"
        variant="outlined"
        @click="confirm_delete_selected"
        :disabled="!selected_securities || !selected_securities.length"
      />
    </template>

    <template #end>
      <FileUpload
        mode="basic"
        accept="text/csv"
        :maxFileSize="1000000"
        label="Import"
        customUpload
        chooseLabel="Import"
        class="mr-2"
        auto
        :chooseButtonProps="{ severity: 'secondary' }"
        @select="file_import"
      />
      <Button
        label="Export"
        icon="pi pi-upload"
        severity="secondary"
        @click="exportCSV($event)"
      />
    </template>
  </Toolbar>

  <DataTable
    :value="data"
    ref="dt"
    v-model:selection="selected_securities"
    size="small"
    tableStyle="min-width: 50rem"
    class="p-datatable-sm p-datatable-gridlines p-datatable-striped"
    responsiveLayout="scroll"
    resizableColumns
  >
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="id" sortable header="ID" style="width: 5%"></Column>
    <Column field="code" sortable header="Code" style="width: 15%"></Column>
    <Column field="name" sortable header="Name" style="width: 60%"></Column>
    <Column field="qty" sortable header="Qty" style="width: 10%"></Column>
    <Column field="div" sortable header="Div" style="width: 10%"></Column>
  </DataTable>

  <Dialog
    v-model:visible="new_security_dialog"
    modal
    header="Insert new Security"
    :style="{ width: '25rem' }"
  >
    <div class="flex items-center gap-4 mb-4">
      <label for="name" class="font-semibold w-24">Name</label>
      <InputText
        id="name"
        class="flex-auto"
        autocomplete="off"
        v-model="name"
      />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="code" class="font-semibold w-24">Code</label>
      <InputText
        id="code"
        class="flex-auto"
        autocomplete="off"
        v-model="code"
      />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="qty" class="font-semibold w-24">Qty</label>
      <InputText id="code" class="flex-auto" autocomplete="off" v-model="qty" />
    </div>

    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="close_new_security_dialog"
      ></Button>
      <Button
        type="button"
        label="Save"
        @click="save_new_security_dialog"
      ></Button>
    </div>
  </Dialog>

  <Dialog
    v-model:visible="delete_security_dialog"
    :style="{ width: '450px' }"
    header="Confirm"
    :modal="true"
  >
    <div class="flex items-center gap-4">
      <i class="pi pi-exclamation-triangle !text-3xl" />
      <span v-if="data"
        >Are you sure you want to delete the selected securites?</span
      >
    </div>
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        text
        @click="delete_security_dialog = false"
        severity="secondary"
        variant="text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        text
        @click="delete_selected_securities"
        severity="danger"
      />
    </template>
  </Dialog>

  <Dialog
    v-model:visible="select_table_dialog"
    header="Select Rows"
    :style="{ width: '75vw' }"
    maximizable
    modal
    :contentStyle="{ height: '300px' }"
  >
    <DataTable
      :value="data2"
      scrollable
      scrollHeight="flex"
      tableStyle="min-width: 50rem"
    >
      <Column field="c1">
        <template #header>
          <Select
            v-model="selected_field1"
            :invalid="!selected_field1"
            :options="fields1"
            optionLabel="name"
            class="w-full md:w-56"
            @before-show="selecting_field1"
          />
        </template>
      </Column>
      <Column field="c2">
        <template #header>
          <Select
            v-model="selected_field2"
            :options="fields2"
            :invalid="!selected_field2"
            optionLabel="name"
            class="w-full md:w-56"
            @before-show="selecting_field2"
          />
        </template>
      </Column>
      <Column field="c3">
        <template #header>
          <Select
            v-model="selected_field3"
            :invalid="!selected_field3"
            :options="fields3"
            optionLabel="name"
            class="w-full md:w-56"
            @before-show="selecting_field3"
          />
        </template>
      </Column>
    </DataTable>
    <template #footer>
      <Message severity="error" v-if="message"> {{ message }}</Message>
      <Button label="Ok" icon="pi pi-check" @click="insert_csv_rows" />
    </template>
  </Dialog>
</template>

<style scoped>
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}

.mb-4 {
  margin-bottom: 0.4rem;
}

.font-semibold {
  font-weight: 600;
}

.w-24 {
  width: 6rem;
}

.flex-auto {
  flex: 1 1 auto;
}
</style>
