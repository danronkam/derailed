json.user do
  json.extract! @user, :id, :email, :username, :created_at, :updated_at, :waist_size, :top_size
end

json.listings do
  @user.listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :title, :user_id, :price, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, :sold, :country, :description
      json.photo_url listing.photo.url
    end
  end
end
