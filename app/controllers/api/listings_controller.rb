class Api::ListingsController < ApplicationController
    def show 
        @listing = Listing.find(params[:id])
        render :show
    end

    def index 
        @listings = Listing.all
        render :index
    end

    def create 
        @listing = Listing.create!(listing_params)
    end

    private
    def listing_params 
        params.require(listing).permit(:title, :price, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, :sold)
    end

end