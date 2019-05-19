using DerivcoUserModel.Data;
using DerivcoUserModel.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace DerivcoUserModel.Logic
{
    public class UserService
    {
        readonly Context context;

        public UserService(Context context)
        {
            this.context = context;
        }

        public IEnumerable<User> ListAllUsers()
        {
            return context.User.Include(u => u.Address);
        }

        public User AddOrUpdate(User user)
        {
            //context.Address.AddOrUpdate(user.Address);
            try
            {
                var contextUser = context.User.Include(u => u.Address).Where(u => u.Id == user.Id).SingleOrDefault();

                if (contextUser == null)
                {
                    context.Add(user);                
                }
                else
                {
                    AutoMapper.Mapper.Map<User,User>(user, contextUser);
                    context.Update(contextUser);
                }

                //context.AddOrUpdate(user);
                context.SaveChanges();

                return contextUser ?? user;
            }
            catch
            {
                return null;
            }
        }

        public void DeleteUser(int userId)
        {
            var contextUser = context.User.Include(u => u.Address).Where(u => u.Id == userId).SingleOrDefault();
            context.Remove(contextUser);
            context.SaveChanges();
        }
    }
}
