# json.listing do
#   json.partial! 'api/listings/listing', listing: @listing
# end

# json.photo_url model_name.photo.url

json.extract! @listing, :id, :title, :user_id, :price, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, :sold, :country, :description

json.photo_url @listing.photo.url