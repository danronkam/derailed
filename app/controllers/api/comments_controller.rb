class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def create 
        @comment = Comment.new(comment_params)

        if @comment.save 
            render :show 
        else 
            render json: @comment.errors.full_messages,  status: :unprocessable_entity
        end
    end

    def index 
        @comments = Comment.where(listing_id: params[:listing_id])
        # @listing = Listing.find_by(id: params[:listing_id])
        # @comments = @listing.comments
        render :index
    end

    def show 
        @comment = Comment.find(params[:id])
        render :show
    end

    def update
        if @comment.update(comment_params)
          render :show
        else
          render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
      end



    def destroy 
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.destroy 
            render :show 
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def comment_params
      params.require(:comment).permit(:body, :author_id, :listing_id)
    end
  
end
