using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DerivcoUserModel.Data.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Age { get; set; }
        public string Email { get; set; }
        public string DateOfBirth { get; set; }
        public string IdentityNumber { get; set; }
        public Address Address { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
