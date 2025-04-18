import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 999,
      description: 'Apple’s latest smartphone with A17 chip and titanium body.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      price: 1199,
      description: '13-inch Apple laptop with M2 chip and retina display.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23 Ultra',
      price: 1199,
      description: 'Samsung’s flagship phone with high-end camera and display.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      name: 'Dell XPS 13 Plus',
      price: 1399,
      description: 'Compact laptop with 12th Gen Intel and edge-to-edge keyboard.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      price: 399,
      description: 'Industry-leading noise canceling headphones.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      name: 'Apple Watch Series 9',
      price: 429,
      description: 'Advanced health sensors and bright always-on display.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      name: 'Google Pixel 8 Pro',
      price: 999,
      description: 'Google’s AI-powered flagship with great cameras.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      name: 'Asus ROG Zephyrus G14',
      price: 1699,
      description: 'Gaming laptop with Ryzen 9 and RTX 4060.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 9,
      name: 'AirPods Pro 2nd Gen',
      price: 249,
      description: 'Apple’s premium earbuds with active noise cancellation.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 10,
      name: 'Lenovo ThinkPad X1 Carbon',
      price: 1499,
      description: 'Business-class ultrabook with military-grade durability.',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product).pipe(delay(300));
  }
}
