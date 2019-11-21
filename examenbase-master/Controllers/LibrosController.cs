using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibrosController : ControllerBase
    {
        private static List<Libro> db;
        static LibrosController()
        {
            db = new List<Libro>(){
                new Libro() { Id = 1, Titulo = "something", Genero= "some desc", Precio= "0.0"},
                new Libro() { Id = 2, Titulo = "something 2", Genero= "some desc 2", Precio= "0.0"},
            };
        }
        // GET: api/Tareas
        [HttpGet]
        public ActionResult<IEnumerable<Libro>> Get()
        {
            return db;
        }

        // GET: api/Tareas/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<Libro> Get(int id)
        {
            var t = db.FirstOrDefault(ta => ta.Id == id);
            if (t == null)
            {
                return NotFound();
            }

            return t;
        }

        // POST: api/Tareas
        [HttpPost]
        public void Post(Libro model)
        {
            var newId = 0;
            if (db.Count > 0)
            {
                newId = db.Max(a => a.Id) + 1;
            }
            model.Id = newId;

            db.Add(model);
        }

        // PUT: api/Tareas/5
        [HttpPut("{id}")]
        public ActionResult Put(Libro update)
        {
            var t = db.FirstOrDefault(ta => ta.Id == update.Id);
            if (t == null)
            {
                return NotFound();
            }

            t.Genero = update.Genero;
            t.Precio = update.Precio;
            t.Titulo = update.Titulo;
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var t = db.FirstOrDefault(ta => ta.Id == id);
            if (t == null)
            {
                return NotFound();
            }
            db.Remove(t);
            return Ok();
        }
    }
}
