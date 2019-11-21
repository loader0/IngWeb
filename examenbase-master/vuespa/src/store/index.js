import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios';

Vue.use(Vuex)

const apiURLTareas = 'api/Tareas';


export default new Vuex.Store({
  state: {
    tareas: [],
    tareaSeleccionada: null,
    otracosa: []
  },
  getters: {
    tareas: state => state.tareas,
    tareaSeleccionada : state => state.tareaSeleccionada
  },
  mutations: {
    setTareas(state, data) {
      state.tareas = data;
    },
    setSeleccionarTarea(state, tarea){
      state.tareaSeleccionada = tarea;
    }
  },
  actions: {
    seleccionarTarea(context, tarea){
      context.commit("setSeleccionarTarea", tarea);
    },
    async leerTareas(context) {
      console.log("leyendo tareas");
      let tareasData = (await Axios.get(apiURLTareas)).data;
      console.log("se leyeron tareas", tareasData);
      context.commit("setTareas", tareasData);
    },
    async agregarTarea(context, nuevaTarea) {
      let grabar = (await Axios.post(apiURLTareas, nuevaTarea));
      await context.dispatch('leerTareas');
      
    },
    async actualizarTarea(context, tareaEditar){
      let grabar = (await Axios.put(apiURLTareas+"/"+tareaEditar.id, tareaEditar));
      await context.dispatch('leerTareas');
    },
    async borrarTarea(context, tareaABorrar){
      let grabar = (await Axios.delete(apiURLTareas+"/"+tareaABorrar.id));
      await context.dispatch('leerTareas');
    }
  },
  modules: {
  }
})
