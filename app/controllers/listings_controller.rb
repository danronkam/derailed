class ListingController < ActionController::API
    def show 
        @listing = Listing.find(params[:id])
        render :show
    end


end