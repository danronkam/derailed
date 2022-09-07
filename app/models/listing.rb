class Listing < ApplicationRecord
    validates :title, :user_id, :price, :shipping_price, :designer_brand, :title, :size, :category, :sub_category, :condition, :sold, presence: true

    has_many_attached :photos

end
