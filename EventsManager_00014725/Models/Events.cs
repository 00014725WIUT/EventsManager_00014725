using System.ComponentModel.DataAnnotations;

namespace EventsManager_00014725.Models
{
    public class Events
    {
        // WIUT STUDENT ID: 00014725

        [Key]
        [Required]
        public int EventId { get; set; }

        [Required(ErrorMessage = "Event name is required !")]
        public string EventName { get; set; }

        [Required(ErrorMessage = "The date is required")]
        public DateTime EventDate { get; set; }

        [Required(ErrorMessage = "Location is required")]
        public string Location { get; set; }
        
        [Required(ErrorMessage = "Cost is required")]
        public decimal Cost { get; set; }
        public string Language { get; set; }
    }
}

