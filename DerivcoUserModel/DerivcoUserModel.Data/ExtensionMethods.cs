using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;

namespace DerivcoUserModel.Data
{
    public static class ExtensionMethods
    {
        public static void AddOrUpdate<T>(this DbSet<T> dbSet, T data) where T : class
        {
            var t = typeof(T);
            PropertyInfo keyField = null;
            foreach (var propt in t.GetProperties())
            {
                var keyAttr = propt.GetCustomAttribute<KeyAttribute>();
                if (keyAttr != null)
                {
                    keyField = propt;
                    break; // assume no composite keys
                }
            }
            if (keyField == null)
            {
                throw new Exception($"{t.FullName} does not have a KeyAttribute field. Unable to exec AddOrUpdate call.");
            }
            var keyVal = keyField.GetValue(data);
            var dbVal = dbSet.Find(keyVal);

            if (dbVal != null)
            {
                dbSet.Update(data);
                return;
            }
            dbSet.Add(data);
        }

        public static string ToDNRMAddress(this string s) => s.Replace(",", "").Replace("  ", " ").ReplaceInsensitive(" blvd ", " Boulevarde ").ReplaceInsensitive(" boulevard ", " Boulevarde ").Trim();
        static public string ReplaceInsensitive(this string input, string pattern, string replacement) => Regex.Replace(input, pattern, replacement, RegexOptions.IgnoreCase);
        public static int? TryParseInt(this string s) => int.TryParse(s, out int i) ? (int?)i : null;
        public static string JustNumbers(this string s) => new String(s?.Where(Char.IsDigit)?.ToArray());
    }
}
