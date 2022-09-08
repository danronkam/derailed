class Api::ListingsController < ApplicationController
    def show 
        @listing = Listing.find(params[:id])
        render :show
    end

    def index 
        @listings = Listing.all
        render :index
    end

end