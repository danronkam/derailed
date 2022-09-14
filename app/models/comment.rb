class Comment < ApplicationRecord
    validates :listing_id, :body, :author_id, presence: true

    belongs_to :author,
      foreign_key: :author_id,
      class_name: :User
  
    belongs_to :listing,
      foreign_key: :listing_id,
      class_name: :Listing

end
