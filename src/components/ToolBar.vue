<template>
  <va-button-group>
    <va-button icon="add" @click="create">Crear Tarea</va-button>
    <va-button icon="create" :disabled="!edited" @click="edit"
      >Editar Tarea</va-button
    >
    <va-button icon="done" :disabled="!completed" @click="complete"
      >Completar Tarea(s)</va-button
    >
    <va-button icon="delete" :disabled="!deleted" @click="remove"
      >Eliminar Tarea(s)</va-button
    >
  </va-button-group>
</template>

<script>
export default {
  props: {
    edited: { type: Boolean, required: true },
    completed: { type: Boolean, required: true },
    deleted: { type: Boolean, required: true },
  },
  emits: ["create", "edit", "complete", "remove"],
  methods: {
    create() {
      this.$emit("create");
    },
    edit() {
      this.$emit("edit");
    },
    complete() {
      this.$emit("complete");
    },
    remove() {
      this.$emit("remove");
    },
  },
};
</script>
