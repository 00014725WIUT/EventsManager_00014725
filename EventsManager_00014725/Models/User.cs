using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EventsManager_00014725.Models
{
    public class User
    {
        // WIUT STUDENT ID: 00014725

        [ForeignKey("userId")]
        [Required]
        public int UserId { get; set; }

        
        private string _UserName;

        [Required(ErrorMessage = "User name is required")]
        public string UserName {
            get => _UserName;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                {
                    //throw new ArgumentException("Name can not be null or empty.");
                }
                _UserName = value;
            }

        }

        


        [Required(ErrorMessage = " Email is required")]
        public string Email { get; set; }


        [Required(ErrorMessage = "Phone number is required")]
        public string Phone { get; set; }
    }
}

