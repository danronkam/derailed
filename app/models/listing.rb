class Listing < ApplicationRecord
    validates :title, :color, :user_id, :price, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, :description, :country, presence: true
    
    
    has_one_attached :photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :comments,
        foreign_key: :listing_id,
        class_name: :Comment

end
