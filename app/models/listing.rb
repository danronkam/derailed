class Listing < ApplicationRecord
    validates :title, :user_id, :price, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, :sold, presence: true

    has_one_attached :photo

end
