# json.listing do
#   json.partial! 'api/listings/listing', listing: @listing
# end

# json.photo_url model_name.photo.url

json.extract! @listing, :title, :user_id, :price, :shipping_price, :designer_brand, :title, :size, :category, :sub_category, :condition, :sold

json.photo_url @listing.photo.url