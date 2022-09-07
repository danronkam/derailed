class Api::SessionsController < ApplicationController
  def show
    # console.log('i am here')
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      render json: { user: nil }
      # console.log('i am heere')
    end
  end

  def create
    @user = User.find_by_credentials(params[:credential], params[:password])

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['The username or password are invalid.'] }, 
        status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'success' }
  end
end