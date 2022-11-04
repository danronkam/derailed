Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post 'api/test', to: 'application#test'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :listings, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy, :update, :show]
    get '*path', to: "static_pages#frontend_index"
    # get '/listings/search/:query' to: 'listings#search'

    

  end

end
