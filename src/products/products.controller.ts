import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Response,
} from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addNewProduct(
    @Body('name') name: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Response() res,
  ) {
    const product = this.productService.insertNewProduct(
      name,
      title,
      description,
      price,
    );
    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Product Added Successfully.',
      product,
    });
  }

  @Get()
  getProducts(@Response() res) {
    const products = this.productService.getAllProducts();
    return res.status(200).json({ success: true, statusCode: 200, products });
  }

  @Get(':id')
  getSingleProduct(@Param('id') id: string, @Response() res) {
    const product = this.productService.getProductById(id);
    res.status(200).json({ success: true, statusCode: 200, product });
  }

  @Patch(':id')
  updateSingleProduct(
    @Body('name') name: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Param('id') id: string,
    @Response() res,
  ) {
    const updatedProduct = this.productService.updateProductById(
      id,
      title,
      name,
      description,
      price,
    );
    res
      .status(200)
      .json({ success: true, statusCode: 200, updatedProduct: updatedProduct });
  }

  @Delete(':id')
  deleteSingleProduct(@Param('id') id: string, @Response() res) {
    const deletedProduct = this.productService.deleteProductById(id);
    res.status(200).json({
      success: true,
      statusCode: 204,
      message: 'Product deleted successfully',
      deletedProduct: deletedProduct,
    });
  }
}
