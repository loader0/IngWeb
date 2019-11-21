<template>
<form class="form">
<div class="form-group">
    <label>Id: </label>&nbsp; <input class="form-control" type="text" v-model="libroSeleccionada.id" disabled=disabled />
   <label>Titulo:</label>&nbsp;<input class="form-control" type="text" v-model="libroSeleccionada.titulo" />
   <label>Genero:</label>&nbsp;<input class="form-control" type="text" v-model="libroSeleccionada.genero" />
    <label>Precio:</label>&nbsp;<input class="form-control" type="text" v-model="libroSeleccionada.precio" />
   &nbsp;<input class="btn btn-info " type="button" v-on:click="actualizarClick" value="Actualizar" />
</div>
</form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditarLibro",
  //props: ["id","titulo", "descripcion"],
  data: function() {
    return {
      id: 0,
      titulo: "",
      genero: "",
      precio: 0.0
    };
  },
   computed: {
    ...mapGetters([ "libroSeleccionada"])
  },
  methods: {
    async actualizarClick() {
      await this.actualizarLibro({
        id : this.libroSeleccionada.id,
        genero: this.libroSeleccionada.genero,
        titulo: this.libroSeleccionada.titulo,
        precio: this.libroSeleccionada.precio,
      });
    },

    ...mapActions(["actualizarLibro"])
  }
};
</script>