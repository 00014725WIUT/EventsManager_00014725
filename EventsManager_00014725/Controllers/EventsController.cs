using EventsManager_00014725.Repositories;
using Microsoft.AspNetCore.Mvc;
using EventsManager_00014725.Models;
using EventsManager_00014725.Repositories;

namespace EventsManager_00014725.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    // WIUT STUDENT ID: 00014725
    public class EventsController : ControllerBase
    {
        private readonly IRepository<Events> _repository;
        public EventsController(IRepository<Events> repository)
        {
            _repository = repository;
        }

        //GET
        [HttpGet("GetAll")]
        public async Task<IEnumerable<Events>> GetAll() => await _repository.GetAllAsync();


        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Events), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]

        public async Task<IActionResult> GetByID(int id)
        {
            var rEvent = await _repository.GetByIDAsync(id);
            return rEvent == null ? NotFound() : Ok(rEvent);
        }

        //HTTP POST
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]

        public async Task<IActionResult> Create(Events eventModel)
        {
            await _repository.AddAsync(eventModel);
            return CreatedAtAction(nameof(GetByID), new { id = eventModel.EventId }, eventModel);
        }


        //HTTP PUT
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<IActionResult> Update(Events eventsModel)
        {
            await _repository.UpdateAsync(eventsModel);
            return NoContent();
        }

        //HTTP DELETE
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteAsync(id);
            return NoContent();
        }
    }
}
