using EventsManager_00014725.Models;
using EventsManager_00014725.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace EventsManager_00014725.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]

    // WIUT STUDENT ID: 00014725
    public class UserController : ControllerBase
    {
        private readonly IRepository<User> _repository;
        public UserController(IRepository<User> repository)
        {
            _repository = repository;
        }

        //HTTP GET
        [HttpGet]
        public async Task<IEnumerable<User>> GetAll() => await _repository.GetAllAsync();

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(User), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetByID(int id)
        {
            var individual = await _repository.GetByIDAsync(id);
            return individual == null ? NotFound() : Ok(individual);
        }

        //HTTP POST 
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(User individual)
        {
            await _repository.AddAsync(individual);
            return Ok(individual);
        }

        //HTTP PUT
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(User individual)
        {
            await _repository.UpdateAsync(individual);
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
