<script setup>
import { ref, onMounted, inject } from "vue";

const log = inject("logService");
</script>

<template>
  <div class="flex contact_form">
    <Form
      v-slot="$form"
      :resolver="resolver"
      :initialValues="initialValues"
      @submit="onFormSubmit"
      class="flex justify-center flex-col gap-4"
    >
      <div class="flex flex-col gap-1">
        <InputText name="email" type="text" placeholder="Email" />
        <Message
          v-if="$form.email?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.email.error?.message }}</Message
        >
      </div>
      <div class="flex flex-col gap-1">
        <IftaLabel>
          <Textarea
            id="description"
            v-model="value"
            rows="5"
            cols="30"
            style="resize: none"
          />
          <label for="description">Message</label>
        </IftaLabel>
        <Message
          v-if="$form.address?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.address.error?.message }}</Message
        >
      </div>

      <Button type="submit" severity="secondary" label="Submit" />
    </Form>
  </div>
</template>

<style scoped>
.contact_form {
  display: flex;
  justify-content: center;
}
</style>
