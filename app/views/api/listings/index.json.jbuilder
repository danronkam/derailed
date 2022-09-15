json.listings({})

json.listings do
  @listings.each do |listing|
    json.set! listing.id do
        json.extract! listing, :id, :title, :user_id, :price, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, :sold, :country, :description, :created_at       
        json.photo_url listing.photo.url
    end
  end
end


