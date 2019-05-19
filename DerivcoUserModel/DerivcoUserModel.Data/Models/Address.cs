using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace DerivcoUserModel.Data.Models
{
    public class Address
    {
        [Key]
        public int Id { get; set; }
        public string LineOne { get; set; }
        public string LineTwo { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int? PostalCode { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
