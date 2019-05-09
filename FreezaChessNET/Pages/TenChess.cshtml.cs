using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace FreezaChessNET.Pages
{
    public class TenChessModel : PageModel
    {
        static HttpClient client = new HttpClient();

        public void OnGet()
        {

        }


    }
}