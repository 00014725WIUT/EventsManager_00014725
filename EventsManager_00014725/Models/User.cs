using System.ComponentModel.DataAnnotations;

namespace EventsManager_00014725.Models
{
    public class User
    {
        // WIUT STUDENT ID: 00014725

        [Required]
        public int UserId { get; set; }
        
        [Required(ErrorMessage = "User name is required")]
        public string UserName { get; set; }


        [Required(ErrorMessage = " Email is required")]
        public string Email { get; set; }


        [Required(ErrorMessage = "Phone number is required")]
        public string Phone { get; set; }
    }
}

