namespace DerivcoUserModel.Logic
{
    public static class ExtensionMethods
    {
        public static int? TryParseToInt(this string s) =>
            s != null && int.TryParse(s, out int i)
                ? (int?) i
                : null;
    }
}
