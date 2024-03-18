namespace EventsManager_00014725.Repositories
{
    public interface IRepository<T>
    {
        // WIUT STUDENT ID: 00014725
        
            Task<IEnumerable<T>> GetAllAsync();
            Task<T> GetByIDAsync(int id);
            Task AddAsync(T entity);
            Task UpdateAsync(T entity);
            Task DeleteAsync(int id);
        
    }
}
