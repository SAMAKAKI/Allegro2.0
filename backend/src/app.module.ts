import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { StateModule } from './state/state.module';
import { ReviewModule } from './review/review.module';
import { FavoriteModule } from './favorite/favorite.module';
import { CartItemModule } from './cart-item/cart-item.module';

@Module({
  imports: [UserModule, ProductModule, AddressModule, CategoryModule, StateModule, ReviewModule, FavoriteModule, CartItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
