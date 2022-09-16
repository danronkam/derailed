class Api::ListingsController < ApplicationController
    wrap_parameters include: Listing.attribute_names + [:photo], format: :multipart_form

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
        @listing = Listing.new(listing_params)
        # @listing.user_id = current_user.id
        # console.log(listing_params)
        if @listing.save
            render :show
          else
            render json: @listing.errors.full_messages, status: :unprocessable_entity
            console.log('COULD NOT MAKE')
        end
    end

    def update
        @listing = Listing.find(params[:id])
        # debugger

        if @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        @listing.destroy
        render :index
    end

    private
    def listing_params 
        params.require(:listing).permit(
            :user_id,
            :title, 
            :price, 
            :photo, 
            :shipping_price, 
            :designer_brand, 
            :size, 
            :category, 
            :sub_category, 
            :condition, 
            :sold, 
            :country, 
            :color, 
            :description)
    end

end