import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';

Vue.use(Vuex)

const apiURLLibros = 'api/Libros';


export default new Vuex.Store({
  state: {
    libros: [],
    libroSeleccionada: null,
    otracosa: []
  },
  getters: {
    libros: state => state.libros,
    libroSeleccionada : state => state.libroSeleccionada
  },
  mutations: {
    setLibros(state, data) {
      state.libros = data;
    },
    setSeleccionarLibro(state, libro){
      state.libroSeleccionada = libro;
    }
  },
  actions: {
    seleccionarTarea(context, libro){
      context.commit("setSeleccionarLibro", libro);
    },
    async leerLibro(context) {
      console.log("leyendo libros");
      let tareasData = (await Axios.get(apiURLLibros)).data;
      console.log("se leyeron libros", librosData);
      context.commit("setLibros", librosData);
    },
    async agregarLibro(context, nuevaLibro) {
      let grabar = (await Axios.post(apiURLLibros, nuevaLibro));
      await context.dispatch('leerLibro');
      
    },
    async actualizarLibro(context, libroEditar){
      let grabar = (await Axios.put(apiURLLibros+"/"+libroEditar.id, libroEditar));
      await context.dispatch('leerLibro');
    },
    async borrarLibro(context, libroABorrar){
      let grabar = (await Axios.delete(apiURLLibros+"/"+libroABorrar.id));
      await context.dispatch('leerLibro');
    }
  },
  modules: {
  }
})
