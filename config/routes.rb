Rails.application.routes.draw do
  get 'users/show'
  get 'users/edit'
  devise_for :users
  root to: "home#index"
  # get 'home/top', to: 'home#top'
end