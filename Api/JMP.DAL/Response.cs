namespace JMP.DAL
{
    public class Response<T>
    {
        public T data;

        public string message;

        public int statusCode;
    }
}
