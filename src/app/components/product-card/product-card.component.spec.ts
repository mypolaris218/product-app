import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../../models/product.model';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProduct: Product = {
    id: 1,
    name: 'Test Product',
    price: 199.99,
    description: 'Mock product description',
    imageUrl: 'test.jpg'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should emit selected event when button is clicked', () => {
    spyOn(component.selected, 'emit');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(component.selected.emit).toHaveBeenCalledWith(mockProduct.id);
  });
});
