using Microsoft.AspNetCore.Mvc;
using BackendAPI.Models;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private static List<Product> products = new List<Product>()
        {
            new Product
            {
                Id = 1,
                Name = "Laptop",
                Price = 1000,
                Quantity = 5
            }
        };

        // GET
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(products);
        }

        // GET BY ID
        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = products.FirstOrDefault(p => p.Id == id);

            if (product == null)
                return NotFound();

            return Ok(product);
        }

        // POST
        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            products.Add(product);

            return Ok(product);
        }

        // PUT
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product updatedProduct)
        {
            var product = products.FirstOrDefault(p => p.Id == id);

            if (product == null)
                return NotFound();

            product.Name = updatedProduct.Name;
            product.Price = updatedProduct.Price;
            product.Quantity = updatedProduct.Quantity;

            return Ok(product);
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = products.FirstOrDefault(p => p.Id == id);

            if (product == null)
                return NotFound();

            products.Remove(product);

            return Ok();
        }
    }
}