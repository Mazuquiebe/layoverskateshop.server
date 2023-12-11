import * as T from "typeorm";
import { Product, Seller, Category } from ".";

@T.Entity("photos")
export class Photo {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.Column({ length: 300 })
  url: string;

  @T.Column()
  public_id: string;

  @T.ManyToOne(() => Product, (product) => product.photos)
  product?: Product;

  // @T.ManyToOne(() => Category)
  // category?: Category;

  @T.ManyToOne(() => Seller, (seller) => seller.cover_photos)
  owner: Seller;

  @T.OneToOne(() => Seller, (profile) => profile.avatar)
  profile: Seller;
}
