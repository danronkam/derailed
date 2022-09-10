class Listing < ApplicationRecord
    validates :title, :user_id, :price, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, presence: true

    has_one_attached :photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
