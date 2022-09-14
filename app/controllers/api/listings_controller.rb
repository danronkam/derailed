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
        debugger
        @listing = Listing.create!(listing_params)
        # console.log(listing_params)
        if @listing.save
            render :show
          else
            render json: @listing.errors.full_messages, status: :unprocessable_entity
            console.log('COULD NOT MAKE')
        end
    end

    private
    def listing_params 
        params.require(:listing).permit(:title, :price, :photo, :shipping_price, :designer_brand, :size, :category, :sub_category, :condition, :sold, :country, :color, :description)
    end

end