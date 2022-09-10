class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.bigint :user_id, null: false, foreign_key: true
      t.float :price, null: false
      t.float :shipping_price, null: false
      t.float :country, null: false
      t.string :designer_brand, null: false
      t.string :title, null: false
      t.string :size, null: false
      t.string :category, null: false
      t.string :sub_category, null: false
      t.string :condition, null: false
      t.string :color, null: false
      t.boolean :sold, default: false
      t.string :tags
      t.string :description, null: false

      t.timestamps
    end
    add_index :listings, :user_id
    add_index :listings, :price
    add_index :listings, :color
    add_index :listings, :shipping_price
    add_index :listings, :designer_brand
    add_index :listings, :title
    add_index :listings, :size
    add_index :listings, :category
    add_index :listings, :sub_category
    add_index :listings, :condition
  end
end
