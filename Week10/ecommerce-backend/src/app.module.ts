import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { User } from './auth/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { CartItem } from './cart/entities/cart.entity';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
import { AdminModule } from './admin/admin.module';
import { ProductFilterModule } from './product-filter/product-filter.module';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/entities/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ecommerce',
      entities: [User, Product, CartItem, Order,Payment],
      synchronize: true, //automatically create and update
    }),
    AuthModule,
    ProductModule,
    CartModule,
    OrdersModule,
    AdminModule,
    ProductFilterModule,
    PaymentModule,
  ],
})
export class AppModule {}
