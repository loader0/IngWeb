<template>
<form class="form-inline">
<div class="form-group">
   <label>Titulo:</label>&nbsp;<input class="form-control" type="text" v-model="titulo" />
   <label>Genero:</label>&nbsp;<input class="form-control" type="text" v-model="genero" />
   <label>Precio:</label>&nbsp;<input class="form-control" type="text" v-model="precio" />
   &nbsp;<input class="btn btn-info " type="button" v-on:click="guardarClick" value="crear" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CrearLibro",
  data: function() {
    return {
      titulo: "",
      genero: "",
      precio: 0.0
    };
  },
  methods: {
    async guardarClick() {
      await this.agregarLibro({
        genero: this.genero,
        precio: this.precio,
        titulo: this.titulo
      });
    },

    ...mapActions(["agregarLibro"])
  }
};
</script>