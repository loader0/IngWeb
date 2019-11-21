<template>
  <div class="home container">
    <h3>Libros</h3>
    <table class="table">
      <thead><tr><th>Id</th>
      <th>Titulo</th>
      <th>Genero</th>
      <th>Precio</th>
      </tr></thead>
      <tbody>
        <tr v-for="t in libros" v-bind:key="t.id" >
          <td>{{t.id}}</td>
          <td>{{t.titulo}}</td>
          <td>{{t.genero}}</td>
          <td>{{t.precio}}</td>
          <td><button class="btn btn-success" v-on:click="editar(t)">Editar</button>|
          <button class="btn btn-success" v-on:click="borrar(t)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div><button class="btn btn-success" v-on:click="mostrarNueva()" >Nueva</button></div>
    <div>&nbsp;</div>
    <editar-tarea v-if="libroSeleccionada" ></editar-tarea>
    <crear-tarea v-else></crear-tarea>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import CrearLibro from "../components/CrearLibro";
import EditarLibro from "../components/EditarLibro";

export default {
  name: "Libros",
  components: {
    CrearLibro, EditarLibro
  },
  
  methods: {
    editar(libro){
         this.seleccionarLibro(libro);
    },
    borrar(libro){
      this.borrarLibro(libro);
    },
    mostrarNueva(){
      this.seleccionarLibro(null);
    },
    ...mapActions(["leerLibro", "borrarLibro", "seleccionarLibro"])
  },
  computed: {
    ...mapGetters(["libros", "libroSeleccionada"])
  },
  created() {
    this.leerLibro();
  }
};
</script>
