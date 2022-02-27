package org.bng.product;

import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import org.bng.data.Product;

import io.quarkus.panache.common.Sort;

import java.util.List;

@Path("/products")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ProductResource {
    @GET
    @Path("/list")
    public List<Product> getProducts() {
        // super simplified registration, no checks of uniqueness

        return Product.listAll(Sort.ascending("title"));
    }

    @POST
    @Path("/add")
    @Transactional
    public void addProduct(Product product) {
        Product.persist(product);
    }

    @GET
    @Path("/get/{id}")
    public Product getProduct(int id) {
        // super simplified registration, no checks of uniqueness

        return Product.findById(id);
    }
}
