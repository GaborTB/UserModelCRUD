using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DerivcoUserModel.App
{
    public static class ExtensionMethods
    {
        /// <summary>
        /// TransformException
        /// </summary>
        /// <param name="exception"></param>
        /// <returns></returns>
        public static dynamic TransformException(this Exception exception)
        {
            string innerMessage = null;
            var innerException = exception.InnerException;
            if (innerException != null)
            {
                innerMessage = $"Info: {innerException.Message}";
                if (innerException.InnerException != null)
                {
                    innerMessage = $"{innerMessage}, Detail: {innerException.InnerException.Message}";
                }
            }

            return new { error = exception.Message, detailedError = innerMessage };
        }
    }
}
