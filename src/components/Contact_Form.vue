<script setup>
import { ref, onMounted, inject, reactive } from "vue";

const log = inject("logService");

const resolver = ({ values }) => {
  const errors = {};
  if (!values.email) {
    errors.email = [{ message: "Email is requiredxxxx." }];
  }

  if (!values.msg) {
    errors.msg = [{ message: "A message is required." }];
  }

  return {
    values,
    errors,
  };
};

const on_form_submit = ({ valid, values }) => {
  if (valid) {
    console.log(values.email);
    console.log(values.msg);
    const mlink =
      "mailto:vuejs@myridia.com?subject=contact&body=email: " +
      values.email +
      "  " +
      " body: " +
      values.msg;
    window.location.href = mlink;
  }
};
</script>

<template>
  <Form
    v-slot="$form"
    :resolver="resolver"
    @submit="on_form_submit"
    class="contact_form flex flex-col gap-4 w-full sm:w-56"
  >
    <FormField v-slot="$field" name="email" class="flex flex-col gap-1">
      <InputText name="email" type="email" placeholder="Email" />
      <Message
        v-if="$form.email?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.email.error?.message }}</Message
      >
    </FormField>

    <FormField v-slot="$field" name="msg" class="flex flex-col gap-1">
      <IftaLabel>
        <Textarea name="msg" rows="5" style="resize: true; width: 100%" />
        <label for="mesg">Message</label>
      </IftaLabel>
      <Message
        v-if="$form.msg?.invalid"
        severity="error"
        size="small"
        variant="simple"
        >{{ $form.msg.error?.message }}</Message
      >
    </FormField>

    <Button type="submit" severity="secondary" label="Submit" />
  </Form>
</template>

<style scoped>
.contact_form input[type="email"] {
  margin-bottom: 10px;
}
</style>
